"use client";

import MatrixGridInput from "../../registry/math/matrix/MatrixGridInput";
import { useCallback, useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Note: If you don't use TypingTest/WordCounter globally, you can safely remove these imports
// import TypingTest from "../../registry/education/typing-test/TypingTest";
// import WordCounter from "../../registry/education/word-counter/WordCounter";

export default function CalculatorClient({ category, calculator, initialConfig, children }) {
  const [config, setConfig] = useState(initialConfig);
  const [calculateLogic, setCalculateLogic] = useState(() => null);
  
  const [inputs, setInputs] = useState(() => {
    const initialState = {};
    initialConfig.inputs.forEach((input) => {
      initialState[input.id] = input.defaultValue;
      if (input.unitOptions && input.defaultUnit) {
        initialState[`${input.id}Unit`] = input.defaultUnit;
      }
    });
    return initialState;
  });

  const [results, setResults] = useState(null);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      import(`@/registry/${category}/${calculator}/config.js`),
      import(`@/registry/${category}/${calculator}/logic.js`),
    ])
      .then(([configModule, logicModule]) => {
        if (!isMounted) return;
        setConfig(configModule.default || configModule.config);
        setCalculateLogic(() => logicModule.default || logicModule.calculateLogic);
      })
      .catch((err) => console.error("Error loading calculator:", err));

    return () => { isMounted = false; };
  }, [category, calculator]);

  useEffect(() => {
    if (!calculateLogic) return;

    setInputs((previousInputs) => {
      const nextInputs = { ...previousInputs };
      config.inputs.forEach((input) => {
        if (!(input.id in nextInputs)) {
          nextInputs[input.id] = input.defaultValue;
        }
        if (input.unitOptions && input.defaultUnit && !(`${input.id}Unit` in nextInputs)) {
          nextInputs[`${input.id}Unit`] = input.defaultUnit;
        }
      });
      return nextInputs;
    });
  }, [calculateLogic, config.inputs]);

  const isInputVisible = useCallback((input) => {
    if (input.hidden && input.hidden(inputs)) return false;
    if (input.showIf && !input.showIf(inputs)) return false;
    if (input.condition && !input.condition(inputs)) return false;
    return true;
  }, [inputs]);

  useEffect(() => {
    if (!calculateLogic) return;

    const allValid = config.inputs.every((baseInput) => {
      const input = baseInput.dynamicProps ? { ...baseInput, ...baseInput.dynamicProps(inputs) } : baseInput;
      if (!isInputVisible(input)) return true;
      const val = inputs[input.id];
      if (val === "" || val === undefined || val === null) return false;
      if (input.type === "text" || input.type === "matrix_grid") return true;
      if (input.type === "select" || input.type === "radio" || input.type === "date") return true;
      return !isNaN(val);
    });

    if (allValid) {
      const output = calculateLogic(inputs);
      setResults(output);
    } else {
      setResults(null);
    }
  }, [inputs, calculateLogic, config.inputs, isInputVisible]);

  const handleInputChange = (id, value) => {
    if (value === "") {
      setInputs((prev) => ({ ...prev, [id]: "" }));
      return;
    }
    const inputConfig = config.inputs.find((i) => i.id === id);
    let finalValue = value;
    const isUnitInput = id.endsWith('Unit');

    if (inputConfig && (inputConfig.type === "text" || inputConfig.type === "matrix_grid")) {
      finalValue = value; 
    } else if ((inputConfig && (inputConfig.type === "select" || inputConfig.type === "radio" || inputConfig.type === "date")) || isUnitInput) {
      finalValue = (inputConfig && inputConfig.type === "date") || isUnitInput ? value : isNaN(value) ? value : Number(value);
    } else {
      finalValue = Number(value);
    }

    setInputs((prev) => {
      const newInputs = { ...prev, [id]: finalValue };
      if (inputConfig && inputConfig.onChangeEffect) {
        return inputConfig.onChangeEffect(finalValue, prev, newInputs);
      }
      return newInputs;
    });
  };

  const handleInputBlur = (id, value, min, max, defaultValue) => {
    let val = Number(value);
    if (isNaN(val) || value === "") val = defaultValue;
    if (min !== undefined && val < min) val = min;
    if (max !== undefined && val > max) val = max;
    setInputs((prev) => ({ ...prev, [id]: val }));
  };

  const handleDownloadPDF = () => {
    if (!results || !results.schedule || results.schedule.length === 0) return;
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(`${config.name} - Repayment Schedule`, 14, 20);
    autoTable(doc, {
      startY: 30,
      head: [["Period", "Principal", "Interest", "Balance"]],
      body: results.schedule.map((row) => [
        row.month, row.principal.toLocaleString("en-IN"), row.interest.toLocaleString("en-IN"), row.balance.toLocaleString("en-IN"),
      ]),
      theme: "striped",
      headStyles: { fillColor: [16, 185, 129] },
    });
    doc.save(`${config.id}-schedule.pdf`);
  };

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(val);

  const COLORS = ["#D1D5DB", "#10B981", "#3B82F6", "#F59E0B"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="mb-10 border-b border-calc-lightGray pb-6">
        <h1 className="text-4xl font-bold text-calc-black mb-4">{config.name}</h1>
        <p className="text-lg text-calc-gray">{config.description}</p>
      </div>

      <div className="bg-calc-white rounded-2xl border border-calc-lightGray shadow-sm overflow-hidden mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* INPUTS SECTION */}
          <div className="p-8 border-b lg:border-b-0 lg:border-r border-calc-lightGray space-y-8">
            {config.inputs.map((baseInput) => {
              const input = baseInput.dynamicProps ? { ...baseInput, ...baseInput.dynamicProps(inputs) } : baseInput;
              if (!isInputVisible(input)) return null;

              if (input.type === "matrix_grid") {
                return <MatrixGridInput key={input.id} label={input.label} value={inputs[input.id]} onChange={(val) => handleInputChange(input.id, val)} />;
              }
              if (input.type === "select") {
                return (
                  <div key={input.id} className="relative mb-6">
                    <label className="font-semibold text-calc-black text-sm sm:text-base block mb-3">{input.label}</label>
                    <select value={inputs[input.id]} onChange={(e) => handleInputChange(input.id, e.target.value)} className="w-full bg-calc-green/10 border border-calc-green/20 rounded-lg px-4 py-3 text-calc-black font-bold focus:outline-none focus:ring-2 focus:ring-calc-green">
                      {input.options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                  </div>
                );
              }
              if (input.type === "radio") {
                return (
                  <div key={input.id} className="relative mb-6">
                    <label className="font-semibold text-calc-black text-sm sm:text-base block mb-3">{input.label}</label>
                    <div className="flex flex-wrap gap-4">
                      {input.options.map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2 cursor-pointer bg-calc-lightGray/20 px-4 py-2 rounded-lg border border-calc-lightGray hover:bg-calc-green/10">
                          <input type="radio" name={input.id} value={opt.value} checked={inputs[input.id] === opt.value} onChange={(e) => handleInputChange(input.id, e.target.value)} className="w-4 h-4 text-calc-green focus:ring-calc-green" />
                          <span className="text-calc-black font-medium">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              }
              // Number Input
              return (
                <div key={input.id} className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-semibold text-calc-black text-sm sm:text-base">{input.label}</label>
                    <div className="flex items-center bg-calc-green/10 rounded-lg px-3 py-1.5 border border-calc-green/20 focus-within:ring-2 focus-within:ring-calc-green">
                      {input.prefix && <span className="text-calc-green font-bold mr-1">{input.prefix}</span>}
                      <input type="number" value={inputs[input.id] !== undefined ? inputs[input.id] : ""} onChange={(e) => handleInputChange(input.id, e.target.value)} onBlur={(e) => handleInputBlur(input.id, e.target.value, input.min, input.max, input.defaultValue)} className="bg-transparent text-calc-green font-bold focus:outline-none w-20 text-right" />
                      {input.unitOptions ? (
                        <select value={inputs[`${input.id}Unit`] || input.defaultUnit} onChange={(e) => handleInputChange(`${input.id}Unit`, e.target.value)} className="bg-transparent text-calc-green font-bold focus:outline-none ml-2 cursor-pointer outline-none">
                          {input.unitOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                      ) : input.suffix && <span className="text-calc-green font-bold ml-1">{input.suffix}</span>}
                    </div>
                  </div>
                  <input type="range" min={input.min || 0} max={input.max || 100} step={input.step || 1} value={inputs[input.id] || 0} onChange={(e) => handleInputChange(input.id, e.target.value)} className="w-full h-2 bg-calc-lightGray rounded-lg appearance-none cursor-pointer accent-calc-green" />
                </div>
              );
            })}
          </div>

          {/* RESULTS SECTION */}
          <div className="p-8 bg-calc-beige/30 flex min-w-0 flex-col items-center">
            {!calculateLogic ? (
              <div className="text-calc-gray text-center font-medium my-auto min-h-[300px] flex items-center">Loading logic...</div>
            ) : !results ? (
              <div className="text-calc-gray text-center font-medium my-auto min-h-[300px] flex items-center">Fill in all fields for results.</div>
            ) : (
              <>
                {results.summary && (
                  <div className="w-full grid grid-cols-2 gap-4 mb-8">
                    {results.summary.map((item, idx) => (
                      <div key={idx} className={`${item.isHighlight ? "col-span-2 bg-calc-green text-calc-white shadow-md" : "bg-calc-white border-calc-lightGray text-calc-black"} p-4 rounded-xl border text-center flex flex-col justify-center`}>
                        <p className={`text-sm mb-1 ${item.isHighlight ? "opacity-90" : "text-calc-gray"}`}>{item.label}</p>
                        <p className={`font-bold break-words ${item.isHighlight ? "text-2xl sm:text-3xl" : "text-lg"}`}>{item.isCurrency ? formatCurrency(item.value) : item.value}</p>
                      </div>
                    ))}
                  </div>
                )}
                {results.chartData && results.chartData.length > 0 && (
                  <div className="w-full min-w-0 mb-8">
                    <ResponsiveContainer width="100%" height={256} minWidth={0}>
                      <PieChart>
                        <Pie data={results.chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
                          {results.chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                        <Tooltip formatter={(value) => config.category === "finance" ? formatCurrency(value) : value} />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {children && (
        <div className="prose max-w-none text-calc-darkGray bg-calc-white p-8 rounded-2xl border border-calc-lightGray mt-8">
          {children}
        </div>
      )}
    </div>
  );
}

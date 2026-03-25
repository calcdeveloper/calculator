import MatrixGridInput from "../../registry/math/matrix/MatrixGridInput";
import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Helmet } from "react-helmet-async";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


export default function CalculatorLayout({
  config,
  calculateLogic,
  ContentComponent,
}) {
  const [inputs, setInputs] = useState(() => {
    const initialState = {};
    config.inputs.forEach((input) => {
      initialState[input.id] = input.defaultValue;
    });
    return initialState;
  });

  const [results, setResults] = useState(null);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    // Upgraded Validation: Allows strings for select/radio, and ignores hidden inputs
    const allValid = config.inputs.every((baseInput) => {
      const input = baseInput.dynamicProps
        ? { ...baseInput, ...baseInput.dynamicProps(inputs) }
        : baseInput;

      if (input.hidden && input.hidden(inputs)) return true;

      const val = inputs[input.id];
      if (val === "" || val === undefined || val === null) return false;

      // Allow text and JSON strings for matrix_grid to pass validation
      if (input.type === "text" || input.type === "matrix_grid") return true;
      // Added "date" to the allowed string inputs list

      if (
        input.type === "select" ||
        input.type === "radio" ||
        input.type === "date"
      )
        return true;
      return !isNaN(val);
    });

    if (allValid) {
      const output = calculateLogic(inputs);
      setResults(output);
    } else {
      setResults(null);
    }
  }, [inputs, calculateLogic, config.inputs]);

  const handleInputChange = (id, value) => {
    if (value === "") {
      setInputs((prev) => ({ ...prev, [id]: "" }));
      return;
    }

    const inputConfig = config.inputs.find((i) => i.id === id);
    let finalValue = value;

    if (inputConfig && (inputConfig.type === "text" || inputConfig.type === "matrix_grid")) {
      finalValue = value; // Keep the string/JSON exactly as typed
    }


    // Do not force strings into Numbers if they are dropdowns or radio buttons!
    else if (
      inputConfig &&
      (inputConfig.type === "select" ||
        inputConfig.type === "radio" ||
        inputConfig.type === "date")
    ) {
      finalValue =
        inputConfig.type === "date"
          ? value
          : isNaN(value)
          ? value
          : Number(value);
    } else {
      finalValue = Number(value);
    }

    setInputs((prev) => {
      const newInputs = { ...prev, [id]: finalValue };
      // Trigger onChangeEffect for unit conversions (like cm to feet/inches)
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
        row.month,
        row.principal.toLocaleString("en-IN"),
        row.interest.toLocaleString("en-IN"),
        row.balance.toLocaleString("en-IN"),
      ]),
      theme: "striped",
      headStyles: { fillColor: [16, 185, 129] },
    });

    doc.save(`${config.id}-schedule.pdf`);
  };

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  const COLORS = ["#D1D5DB", "#10B981", "#3B82F6", "#F59E0B"];

  const currentUrl = `https://yourwebsite.com/calculator/${config.category}/${config.id}`;
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: config.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: config.seoDescription || config.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  };

  return (
    <>
      <Helmet>
        <title>{config.seoTitle || config.name}</title>
        <meta
          name="description"
          content={config.seoDescription || config.description}
        />
        {config.seoKeywords && (
          <meta name="keywords" content={config.seoKeywords} />
        )}
        <link rel="canonical" href={currentUrl} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        <div className="mb-10 border-b border-calc-lightGray pb-6">
          <h1 className="text-4xl font-bold text-calc-black mb-4">
            {config.name}
          </h1>
          <p className="text-lg text-calc-gray">{config.description}</p>
        </div>

        <div className="bg-calc-white rounded-2xl border border-calc-lightGray shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* --- INPUTS SECTION --- */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-calc-lightGray space-y-8">
              {config.inputs.map((baseInput) => {
                // Apply dynamic props (changes weight from kg to lbs)
                const input = baseInput.dynamicProps
                  ? { ...baseInput, ...baseInput.dynamicProps(inputs) }
                  : baseInput;

                // Hide input if it shouldn't be rendered (cm vs ft/in)
                if (input.hidden && input.hidden(inputs)) return null;

                // ADD THIS NEW LINE HERE (for our new calculators using 'condition'):
                if (input.condition && !input.condition(inputs)) return null;

                // 👇👇👇 EXACTLY HERE: ADD THIS NEW LINE FOR YOUR LOGARITHM CALCULATOR 👇👇👇
                if (input.showIf && !input.showIf(inputs)) return null;

                // 👇👇👇 ADD THE NEW MATRIX GRID BLOCK HERE 👇👇👇
                if (input.type === "matrix_grid") {
                  return (
                     <MatrixGridInput
                        key={input.id}
                        label={input.label}
                        value={inputs[input.id]}
                        onChange={(val) => handleInputChange(input.id, val)}
                     />
                  );
                }

                // 1. Handle Select Dropdowns
                if (input.type === "select") {
                  return (
                    <div key={input.id} className="relative">
                      <label className="font-semibold text-calc-black text-sm sm:text-base block mb-3">
                        {input.label}
                      </label>
                      <div className="relative">
                        <select
                          value={inputs[input.id]}
                          onChange={(e) =>
                            handleInputChange(input.id, e.target.value)
                          }
                          className="w-full bg-calc-green/10 border border-calc-green/20 rounded-lg px-4 py-3 text-calc-black font-bold focus:outline-none focus:ring-2 focus:ring-calc-green transition-all appearance-none cursor-pointer"
                        >
                          {input.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-calc-green">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                }

                // 2. Handle Radio Buttons (NEW for BMI)
                if (input.type === "radio") {
                  return (
                    <div key={input.id} className="relative">
                      <label className="font-semibold text-calc-black text-sm sm:text-base block mb-3">
                        {input.label}
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {input.options.map((opt) => (
                          <label
                            key={opt.value}
                            className="flex items-center gap-2 cursor-pointer bg-calc-lightGray/20 px-4 py-2 rounded-lg border border-calc-lightGray hover:bg-calc-green/10 transition-colors"
                          >
                            <input
                              type="radio"
                              name={input.id}
                              value={opt.value}
                              checked={inputs[input.id] === opt.value}
                              onChange={(e) =>
                                handleInputChange(input.id, e.target.value)
                              }
                              className="w-4 h-4 text-calc-green focus:ring-calc-green accent-calc-green cursor-pointer"
                            />
                            <span className="text-calc-black font-medium">
                              {opt.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                }

                // 3. Handle Date Inputs (NEW for Pregnancy Calculator)
                if (input.type === "date") {
                  return (
                    <div
                      key={input.id}
                      className="flex justify-between items-center mb-6"
                    >
                      <label className="font-semibold text-calc-black text-sm sm:text-base">
                        {input.label}
                      </label>
                      <div className="flex items-center bg-calc-green/10 rounded-lg px-3 py-2 border border-calc-green/20 focus-within:ring-2 focus-within:ring-calc-green transition-all w-40">
                        <input
                          type="date"
                          id={input.id}
                          value={inputs[input.id] || ""}
                          onChange={(e) =>
                            handleInputChange(input.id, e.target.value)
                          }
                          className="bg-transparent text-calc-black font-bold outline-none w-full cursor-pointer"
                        />
                      </div>
                    </div>
                  );
                }

                // Add this right before your default Number/Slider return
                if (input.type === "text") {
                  return (
                    <div key={input.id} className="mb-6">
                      <label className="font-semibold text-calc-black text-sm sm:text-base block mb-3">
                        {input.label}
                      </label>
                      <div className="flex items-center bg-calc-green/10 rounded-lg px-4 py-3 border border-calc-green/20 focus-within:ring-2 focus-within:ring-calc-green transition-all">
                        <input
                          type="text"
                          id={input.id}
                          value={inputs[input.id] || ""}
                          onChange={(e) =>
                            handleInputChange(input.id, e.target.value)
                          }
                          placeholder={input.placeholder || ""}
                          className="bg-transparent text-calc-black font-medium outline-none w-full"
                        />
                      </div>
                    </div>
                  );
                }

                // 4. Handle standard Number + Slider Inputs
                return (
                  <div key={input.id}>
                    <div className="flex justify-between items-center mb-3">
                      <label className="font-semibold text-calc-black text-sm sm:text-base">
                        {input.label}
                      </label>
                      <div className="flex items-center bg-calc-green/10 rounded-lg px-3 py-1.5 border border-calc-green/20 focus-within:ring-2 focus-within:ring-calc-green transition-all">
                        {input.prefix && (
                          <span className="text-calc-green font-bold mr-1">
                            {input.prefix}
                          </span>
                        )}
                        <input
                          type="number"
                          value={
                            inputs[input.id] !== undefined
                              ? inputs[input.id]
                              : ""
                          }
                          onChange={(e) =>
                            handleInputChange(input.id, e.target.value)
                          }
                          onBlur={(e) =>
                            handleInputBlur(
                              input.id,
                              e.target.value,
                              input.min,
                              input.max,
                              input.defaultValue
                            )
                          }
                          className="bg-transparent text-calc-green font-bold focus:outline-none w-20 text-right appearance-none"
                          style={{
                            WebkitAppearance: "none",
                            MozAppearance: "textfield",
                          }}
                        />
                        {input.suffix && (
                          <span className="text-calc-green font-bold ml-1">
                            {input.suffix}
                          </span>
                        )}
                      </div>
                    </div>
                    <input
                      type="range"
                      min={input.min || 0}
                      max={input.max || 100}
                      step={input.step || 1}
                      value={inputs[input.id] || 0}
                      onChange={(e) =>
                        handleInputChange(input.id, e.target.value)
                      }
                      className="w-full h-2 bg-calc-lightGray rounded-lg appearance-none cursor-pointer accent-calc-green"
                    />
                  </div>
                );
              })}
            </div>

            {/* --- RESULTS SECTION --- */}
            <div className="p-8 bg-calc-beige/30 flex flex-col items-center">
              {!results ? (
                <div className="text-calc-gray text-center font-medium my-auto h-full flex items-center justify-center min-h-[300px]">
                  Please fill in all fields to see your results.
                </div>
              ) : (
                <>
                  {/* Summary Tiles (Universal) */}
                  {results.summary && (
                    <div className="w-full grid grid-cols-2 gap-4 mb-8">
                      {results.summary.map((item, idx) => (
                        <div
                          key={idx}
                          className={`${
                            item.isHighlight
                              ? "col-span-2 bg-calc-green text-calc-white shadow-md"
                              : "bg-calc-white border-calc-lightGray text-calc-black"
                          } p-4 rounded-xl border text-center flex flex-col justify-center overflow-hidden`}
                        >
                          <p
                            className={`text-sm mb-1 ${
                              item.isHighlight ? "opacity-90" : "text-calc-gray"
                            }`}
                          >
                            {item.label}
                          </p>
                          <p
                            className={`font-bold break-words ${
                              item.isHighlight
                                ? "text-2xl sm:text-3xl lg:text-4xl"
                                : "text-lg sm:text-xl"
                            }`}
                          >
                            {item.isCurrency
                              ? formatCurrency(item.value)
                              : item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Finance: Schedule & PDF Export Buttons */}
                  {results.schedule && results.schedule.length > 0 && (
                    <div className="w-full flex flex-col gap-4 mb-8">
                      <div className="w-full flex flex-wrap justify-center gap-4">
                        <button
                          onClick={() => setShowTable(!showTable)}
                          className="flex items-center gap-2 bg-calc-green text-calc-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-colors shadow-sm"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            ></path>
                          </svg>
                          {showTable ? "Hide Schedule" : "View Schedule"}
                        </button>
                        <button
                          onClick={handleDownloadPDF}
                          className="flex items-center gap-2 bg-calc-black text-calc-white px-6 py-3 rounded-xl font-bold hover:bg-calc-gray transition-colors shadow-sm"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            ></path>
                          </svg>
                          Download PDF
                        </button>
                      </div>

                      {/* Online Amortization Schedule Table */}
                      {showTable && (
                        <div className="w-full border border-calc-lightGray rounded-xl overflow-hidden shadow-sm mt-4">
                          <div className="max-h-96 overflow-y-auto">
                            <table className="w-full text-sm text-left text-calc-darkGray">
                              <thead className="text-xs text-calc-white uppercase bg-calc-green sticky top-0 z-10 shadow-sm">
                                <tr>
                                  <th className="px-6 py-4">Period</th>
                                  <th className="px-6 py-4 text-right">
                                    Principal
                                  </th>
                                  <th className="px-6 py-4 text-right">
                                    Interest
                                  </th>
                                  <th className="px-6 py-4 text-right">
                                    Balance
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {results.schedule.map((row, i) => (
                                  <tr
                                    key={i}
                                    className="bg-calc-white border-b border-calc-lightGray hover:bg-calc-beige/30 transition-colors"
                                  >
                                    <td className="px-6 py-3 font-medium text-calc-black">
                                      {row.month}
                                    </td>
                                    <td className="px-6 py-3 text-right">
                                      {formatCurrency(row.principal)}
                                    </td>
                                    <td className="px-6 py-3 text-right">
                                      {formatCurrency(row.interest)}
                                    </td>
                                    <td className="px-6 py-3 text-right font-semibold">
                                      {formatCurrency(row.balance)}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Health: Reference Tables (UPDATED for dynamic columns) */}
                  {results.referenceTable && (
                    <div className="w-full mb-8 bg-calc-white rounded-xl border border-calc-lightGray overflow-x-auto shadow-sm">
                      <table className="w-full text-sm text-left text-calc-darkGray min-w-[400px]">
                        <thead className="text-xs text-calc-black uppercase bg-calc-lightGray/50">
                          <tr>
                            {results.referenceTable.headers.map((h) => (
                              <th key={h} className="px-6 py-3">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {results.referenceTable.rows.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className="border-b border-calc-lightGray last:border-0 hover:bg-calc-beige/30 transition-colors"
                            >
                              {row.map((cell, cellIndex) => {
                                let tdClass = "px-6 py-3 ";
                                if (cellIndex === 0)
                                  tdClass +=
                                    "font-semibold text-calc-black"; // 1st Column
                                else if (cellIndex === 1)
                                  tdClass +=
                                    "text-calc-green font-bold"; // 2nd Column
                                else tdClass += "text-gray-600 text-sm"; // 3rd Column and beyond

                                return (
                                  <td key={cellIndex} className={tdClass}>
                                    {cell}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Universal: Pie Chart */}
                  {results.chartData && results.chartData.length > 0 && (
                    <div className="h-64 w-full min-h-[256px]">
                      <ResponsiveContainer width="99%" height="100%">
                        <PieChart>
                          <Pie
                            data={results.chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {results.chartData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                          {/* Tooltip now checks if it's Finance before applying currency formatting! */}
                          <Tooltip
                            formatter={(value) =>
                              config.category === "finance"
                                ? formatCurrency(value)
                                : value
                            }
                          />
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

        {/* SEO Content Section */}
        {ContentComponent && (
          <div className="prose max-w-none text-calc-darkGray bg-calc-white p-8 rounded-2xl border border-calc-lightGray">
            <ContentComponent />
          </div>
        )}
      </main>
    </>
  );
}

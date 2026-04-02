import React, { useState } from "react";
import * as math from "mathjs";
import Content from "./content";

export default function BasicCalculator({ config }) {
  const [display, setDisplay] = useState("0");
  const [isDegree, setIsDegree] = useState(true);
  const [isInv, setIsInv] = useState(false);
  const [ans, setAns] = useState("0");

  // Appends numbers or basic symbols to the display
  const handlePress = (val) => {
    if (display === "0" || display === "Error") {
      setDisplay(val);
    } else {
      setDisplay(display + val);
    }
  };

  // Appends functions like sin(, cos(, ln(
  const handleFunction = (func) => {
    if (display === "0" || display === "Error") {
      setDisplay(func + "(");
    } else {
      setDisplay(display + func + "(");
    }
  };

  const handleClear = () => setDisplay("0");

  const handleEqual = () => {
    try {
      // 1. Format the display string into a mathjs-friendly format
      let expression = display
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/π/g, "pi")
        .replace(/Ans/g, ans)
        .replace(/EXP/g, "*10^");

      // 2. Define a custom mathematical scope to handle Degrees vs Radians dynamically
      const scope = {
        sin: (x) => isDegree ? math.sin((x * math.pi) / 180) : math.sin(x),
        cos: (x) => isDegree ? math.cos((x * math.pi) / 180) : math.cos(x),
        tan: (x) => isDegree ? math.tan((x * math.pi) / 180) : math.tan(x),
        asin: (x) => isDegree ? (math.asin(x) * 180) / math.pi : math.asin(x),
        acos: (x) => isDegree ? (math.acos(x) * 180) / math.pi : math.acos(x),
        atan: (x) => isDegree ? (math.atan(x) * 180) / math.pi : math.atan(x),
        log: math.log10, // Common log (base 10)
        ln: math.log,    // Natural log (base e)
      };

      // 3. Evaluate the expression safely using mathjs
      let result = math.evaluate(expression, scope);

      // 4. Fix floating point math errors (e.g. 0.1 + 0.2 = 0.30000000000000004)
      result = Number.isInteger(result) ? result : Number(result.toFixed(8));

      setDisplay(String(result));
      setAns(String(result));
    } catch (e) {
      setDisplay("Error");
    }
  };

  // Button styling definitions
  const btnBase = "h-12 flex items-center justify-center rounded-full font-medium text-lg cursor-pointer transition-colors";
  const btnLight = `${btnBase} bg-[#f0f4f9] text-[#1f1f1f] hover:bg-[#e1e5ea]`;
  const btnBlue = `${btnBase} bg-[#0b57d0] text-white hover:bg-[#0842a0]`;
  const btnActive = `${btnBase} bg-[#d3e3fd] text-[#0b57d0] font-bold`;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      {/* Header Block */}
      {config && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{config.name}</h1>
          <p className="text-gray-600">{config.description}</p>
        </div>
      )}

      {/* Calculator Interface */}
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl p-6 shadow-sm mb-12 select-none">
        
        {/* Display */}
        <div className="h-24 w-full border border-gray-300 rounded-xl mb-6 flex flex-col justify-between p-4 bg-white overflow-hidden">
          <div className="text-gray-500 text-sm flex justify-between w-full">
            <span className="font-semibold">{isDegree ? "Deg" : "Rad"}</span>
          </div>
          <div className="text-right text-5xl text-gray-800 font-normal tracking-wide whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar">
            {display}
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-7 gap-3">
          
          {/* Row 1 */}
          <div className={`${btnLight} col-span-2 flex justify-around px-2`}>
            <span 
              onClick={() => setIsDegree(true)} 
              className={`w-full text-center py-1 rounded-full cursor-pointer ${isDegree ? 'bg-white shadow-sm font-semibold' : 'text-gray-500'}`}
            >
              Deg
            </span>
            <span 
              onClick={() => setIsDegree(false)} 
              className={`w-full text-center py-1 rounded-full cursor-pointer ${!isDegree ? 'bg-white shadow-sm font-semibold' : 'text-gray-500'}`}
            >
              Rad
            </span>
          </div>
          <button onClick={() => handlePress("!")} className={btnLight}>x!</button>
          <button onClick={() => handlePress("(")} className={btnLight}>(</button>
          <button onClick={() => handlePress(")")} className={btnLight}>)</button>
          <button onClick={() => handlePress("%")} className={btnLight}>%</button>
          <button onClick={handleClear} className={btnLight}>AC</button>

          {/* Row 2 */}
          <button onClick={() => setIsInv(!isInv)} className={isInv ? btnActive : btnLight}>Inv</button>
          <button onClick={() => handleFunction(isInv ? "asin" : "sin")} className={btnLight}>{isInv ? "sin⁻¹" : "sin"}</button>
          <button onClick={() => handleFunction("ln")} className={btnLight}>ln</button>
          <button onClick={() => handlePress("7")} className={btnLight}>7</button>
          <button onClick={() => handlePress("8")} className={btnLight}>8</button>
          <button onClick={() => handlePress("9")} className={btnLight}>9</button>
          <button onClick={() => handlePress("÷")} className={btnLight}>÷</button>

          {/* Row 3 */}
          <button onClick={() => handlePress("π")} className={btnLight}>π</button>
          <button onClick={() => handleFunction(isInv ? "acos" : "cos")} className={btnLight}>{isInv ? "cos⁻¹" : "cos"}</button>
          <button onClick={() => handleFunction("log")} className={btnLight}>log</button>
          <button onClick={() => handlePress("4")} className={btnLight}>4</button>
          <button onClick={() => handlePress("5")} className={btnLight}>5</button>
          <button onClick={() => handlePress("6")} className={btnLight}>6</button>
          <button onClick={() => handlePress("×")} className={btnLight}>×</button>

          {/* Row 4 */}
          <button onClick={() => handlePress("e")} className={btnLight}>e</button>
          <button onClick={() => handleFunction(isInv ? "atan" : "tan")} className={btnLight}>{isInv ? "tan⁻¹" : "tan"}</button>
          <button onClick={() => handleFunction("sqrt")} className={btnLight}>√</button>
          <button onClick={() => handlePress("1")} className={btnLight}>1</button>
          <button onClick={() => handlePress("2")} className={btnLight}>2</button>
          <button onClick={() => handlePress("3")} className={btnLight}>3</button>
          <button onClick={() => handlePress("-")} className={btnLight}>−</button>

          {/* Row 5 */}
          <button onClick={() => handlePress("Ans")} className={btnLight}>Ans</button>
          <button onClick={() => handlePress("EXP")} className={btnLight}>EXP</button>
          <button onClick={() => handlePress("^")} className={btnLight}>xʸ</button>
          <button onClick={() => handlePress("0")} className={btnLight}>0</button>
          <button onClick={() => handlePress(".")} className={btnLight}>.</button>
          <button onClick={handleEqual} className={btnBlue}>=</button>
          <button onClick={() => handlePress("+")} className={btnLight}>+</button>
        </div>
      </div>

      {/* SEO Content */}
      <Content />
    </div>
  );
}
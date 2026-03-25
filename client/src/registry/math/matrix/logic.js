export const calculateLogic = (inputs) => {
    const operation = inputs.operation || 'add';
    const powerN = parseFloat(inputs.powerN) || 2;
    
    // Safely parse the JSON strings from our custom grids and convert to numbers
    let A = [];
    let B = [];
    try { 
      A = JSON.parse(inputs.matrixA || "[[0]]").map(row => row.map(val => parseFloat(val) || 0)); 
    } catch(e) {}
    try { 
      B = JSON.parse(inputs.matrixB || "[[0]]").map(row => row.map(val => parseFloat(val) || 0)); 
    } catch(e) {}
  
    // ---- HELPER MATH FUNCTIONS ----
    const formatNum = (num) => parseFloat(Number(num).toFixed(4));
    
    const add = (m1, m2) => m1.map((row, i) => row.map((val, j) => formatNum(val + m2[i][j])));
    const sub = (m1, m2) => m1.map((row, i) => row.map((val, j) => formatNum(val - m2[i][j])));
    
    const mult = (m1, m2) => {
      let result = Array(m1.length).fill(0).map(() => Array(m2[0].length).fill(0));
      for(let i=0; i<m1.length; i++) {
        for(let j=0; j<m2[0].length; j++) {
          for(let k=0; k<m1[0].length; k++) {
            result[i][j] += m1[i][k] * m2[k][j];
          }
          result[i][j] = formatNum(result[i][j]);
        }
      }
      return result;
    };
  
    const determinant = (m) => {
      if (m.length !== m[0].length) return null; // Must be square
      if (m.length === 1) return m[0][0];
      if (m.length === 2) return m[0][0]*m[1][1] - m[0][1]*m[1][0];
      let d = 0;
      for(let c=0; c<m.length; c++) {
        const subMatrix = m.slice(1).map(row => row.filter((_, j) => j !== c));
        d += m[0][c] * Math.pow(-1, c) * determinant(subMatrix);
      }
      return d;
    };
  
    const inverse = (m) => {
      const det = determinant(m);
      if (!det || det === 0) throw new Error("Matrix is singular (Determinant is 0). Inverse does not exist.");
      if (m.length === 1) return [[formatNum(1 / m[0][0])]];
      
      const adj = m.map((row, r) => row.map((_, c) => {
        const subMatrix = m.filter((_, i) => i !== r).map(subRow => subRow.filter((_, j) => j !== c));
        return formatNum((Math.pow(-1, r + c) * determinant(subMatrix)) / det);
      }));
      
      const inv = Array(m.length).fill(0).map(() => Array(m.length).fill(0));
      for(let i=0; i<m.length; i++) {
        for(let j=0; j<m.length; j++) { inv[i][j] = adj[j][i]; }
      }
      return inv;
    };
  
    const transpose = (m) => {
      const transposed = [];
      for (let c = 0; c < m[0].length; c++) {
        const newRow = [];
        for (let r = 0; r < m.length; r++) { newRow.push(m[r][c]); }
        transposed.push(newRow);
      }
      return transposed;
    };
  
    // ---- EXECUTE COMPUTATION ----
    let resultLabel = "Result";
    let resultValue = "Success";
    let finalMatrix = null;
    let errorMsg = null;
  
    try {
      if (operation === 'add') {
        if (A.length !== B.length || A[0].length !== B[0].length) throw new Error("Matrices must be the exact same dimensions to add.");
        finalMatrix = add(A, B);
        resultLabel = "A + B Matrix";
      } 
      else if (operation === 'subtract') {
        if (A.length !== B.length || A[0].length !== B[0].length) throw new Error("Matrices must be the exact same dimensions to subtract.");
        finalMatrix = sub(A, B);
        resultLabel = "A - B Matrix";
      }
      else if (operation === 'multiply') {
        if (A[0].length !== B.length) throw new Error(`Columns in A (${A[0].length}) must equal Rows in B (${B.length}).`);
        finalMatrix = mult(A, B);
        resultLabel = "A × B Matrix";
      }
      else if (operation === 'multiply_ba') {
        if (B[0].length !== A.length) throw new Error(`Columns in B (${B[0].length}) must equal Rows in A (${A.length}).`);
        finalMatrix = mult(B, A);
        resultLabel = "B × A Matrix";
      }
      else if (operation === 'swap') {
        // For a swap, we bypass the standard single-matrix output and build a custom table showing both
        const rows = [["Operation Performed", "Swap A ↔ B"]];
        
        rows.push(["---", "---"]);
        rows.push(["NEW MATRIX A (Was B)", `${B.length}×${B[0].length} Matrix`]);
        B.forEach((row, idx) => rows.push([`Row ${idx + 1}`, `[ ${row.join('  ,  ')} ]`]));
        
        rows.push(["---", "---"]);
        rows.push(["NEW MATRIX B (Was A)", `${A.length}×${A[0].length} Matrix`]);
        A.forEach((row, idx) => rows.push([`Row ${idx + 1}`, `[ ${row.join('  ,  ')} ]`]));
  
        return {
          summary: [{ label: "Result", value: "Matrices Swapped", isHighlight: true }],
          referenceTable: { headers: ["Property", "Value"], rows: rows }
        };
      }
      else if (operation === 'inverse') {
        if (A.length !== A[0].length) throw new Error("Only square matrices have an inverse.");
        finalMatrix = inverse(A);
        resultLabel = "Inverse A⁻¹";
      }
      else if (operation === 'determinant') {
        if (A.length !== A[0].length) throw new Error("Only square matrices have a determinant.");
        const det = formatNum(determinant(A));
        resultValue = det.toString();
        resultLabel = "Determinant |A|";
      }
      else if (operation === 'transpose') {
        finalMatrix = transpose(A);
        resultLabel = "Transposed Matrix Aᵀ";
      }
      else if (operation === 'power') {
        if (A.length !== A[0].length) throw new Error("Only square matrices can be raised to a power.");
        finalMatrix = A;
        for (let i = 1; i < powerN; i++) {
          finalMatrix = mult(finalMatrix, A);
        }
        resultLabel = `A to the power of ${powerN}`;
      }
    } catch (err) {
      errorMsg = err.message;
    }
  
    // Formatting output
    if (errorMsg) {
      return { summary: [{ label: 'Error', value: errorMsg, isHighlight: true }] };
    }
  
    const rows = [];
    rows.push(["Operation Performed", resultLabel]);
    
    if (finalMatrix) {
      resultValue = `${finalMatrix.length}×${finalMatrix[0].length} Matrix`;
      finalMatrix.forEach((row, idx) => {
        rows.push([`Result Row ${idx + 1}`, `[ ${row.join('  ,  ')} ]`]); 
      });
    }
  
    return {
      summary: [{ label: resultLabel, value: resultValue, isHighlight: true }],
      referenceTable: {
        headers: ["Property", "Value"],
        rows: rows
      }
    };
  };
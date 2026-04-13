export const calculateLogic = (inputs) => {
    const { calcMode, probA, probB, singleTarget, eventToTest, seriesProb, trials } = inputs;
  
    const formatPercent = (val) => `${(val * 100).toFixed(2).replace(/\.00$/, '')} %`;
  
    let summary = [];
    let rows = [];
  
    try {
      if (calcMode === 'single') {
        const pA = Number(probA) / 100;
        const pB = Number(probB) / 100;
  
        if (isNaN(pA) || pA < 0 || pA > 1 || isNaN(pB) || pB < 0 || pB > 1) {
          throw new Error("Probabilities must be between 0 and 100.");
        }
  
        const pNotA = 1 - pA;
        const pNotB = 1 - pB;
        const pAnd = pA * pB;
        const pOr = pA + pB - pAnd;
        const pXor = pA + pB - 2 * pAnd;
        const pNeither = pNotA * pNotB;
  
        const resultsMap = {
          and: { label: 'A ∩ B (Both)', value: formatPercent(pAnd) },
          or: { label: 'A ∪ B (At least one)', value: formatPercent(pOr) },
          xor: { label: 'A Δ B (Exactly one)', value: formatPercent(pXor) },
          neither: { label: 'Neither occurs', value: formatPercent(pNeither) },
          notA: { label: "A' (Not A)", value: formatPercent(pNotA) },
          notB: { label: "B' (Not B)", value: formatPercent(pNotB) }
        };
  
        if (singleTarget === 'all') {
          summary = Object.values(resultsMap).map(item => ({
            label: item.label, value: item.value, isHighlight: true
          }));
        } else {
          summary = [{
            label: resultsMap[singleTarget].label,
            value: resultsMap[singleTarget].value,
            isHighlight: true
          }];
        }
  
        rows = [
          ["A and B both occurring (A ∩ B)", formatPercent(pAnd)],
          ["At least one of the events occurs (A ∪ B)", formatPercent(pOr)],
          ["Exactly one of these events occurs (A Δ B)", formatPercent(pXor)],
          ["Neither A nor B occurs", formatPercent(pNeither)],
          ["A NOT occurring (A')", formatPercent(pNotA)],
          ["B NOT occurring (B')", formatPercent(pNotB)]
        ];
  
        return {
          summary,
          referenceTable: { headers: ["Event Condition", "Probability"], rows }
        };
  
      } else if (calcMode === 'series') {
        const p = Number(seriesProb) / 100;
        const n = Number(trials);
  
        if (isNaN(p) || p < 0 || p > 1) throw new Error("Probability must be between 0 and 100.");
        if (isNaN(n) || n < 1 || !Number.isInteger(n)) throw new Error("Trials must be a whole number greater than 0.");
  
        let resultProb = 0;
        let label = "";
  
        // Determine math based on selection (A or B are just label wrappers here)
        if (eventToTest === 'always' || eventToTest === 'alwaysB') {
          resultProb = Math.pow(p, n);
          label = "Always occurring";
        } else if (eventToTest === 'never' || eventToTest === 'neverB') {
          resultProb = Math.pow(1 - p, n);
          label = "Never occurring";
        } else if (eventToTest === 'atLeastOne' || eventToTest === 'atLeastOneB') {
          resultProb = 1 - Math.pow(1 - p, n);
          label = "Occurring at least once";
        }
  
        const letter = eventToTest.endsWith('B') ? 'B' : 'A';
  
        return {
          summary: [{ label: `${letter} ${label.toLowerCase()} in ${n} trials`, value: formatPercent(resultProb), isHighlight: true }],
          referenceTable: {
            headers: ["Series Property", "Value"],
            rows: [
              ["Base Probability of Event", formatPercent(p)],
              ["Number of Trials (n)", n.toString()],
              [`Result: ${letter} ${label.toLowerCase()}`, formatPercent(resultProb)]
            ]
          }
        };
      }
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };
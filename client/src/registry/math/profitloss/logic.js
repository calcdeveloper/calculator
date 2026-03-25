export const calculateLogic = (inputs) => {
    const { calcMode } = inputs;
  
    const formatCurrency = (val) => Number(val.toFixed(2)).toString();
    const formatPercent = (val) => `${Number(val.toFixed(2))}%`;
  
    let summary = [];
    let rows = [];
  
    try {
      if (calcMode === 'find_pl') {
        const cp = Number(inputs.cp1);
        const sp = Number(inputs.sp1);
        if (isNaN(cp) || isNaN(sp)) throw new Error("Please enter valid numbers.");
        if (cp === 0) throw new Error("Cost Price cannot be zero when finding percentage.");
  
        const diff = sp - cp;
        const isProfit = diff >= 0;
        const amount = Math.abs(diff);
        const percent = (amount / cp) * 100;
  
        summary = [
          { label: isProfit ? 'Profit Amount' : 'Loss Amount', value: formatCurrency(amount), isHighlight: true },
          { label: isProfit ? 'Profit %' : 'Loss %', value: formatPercent(percent), isHighlight: false }
        ];
        rows = [
          ["Cost Price (CP)", formatCurrency(cp)],
          ["Selling Price (SP)", formatCurrency(sp)],
          ["Result Type", isProfit ? "Profit" : "Loss"],
          ["Absolute Amount", formatCurrency(amount)],
          ["Percentage", formatPercent(percent)]
        ];
  
      } else if (calcMode === 'find_sp') {
        const cp = Number(inputs.cp2);
        const pct = Number(inputs.plPercent1);
        if (isNaN(cp) || isNaN(pct)) throw new Error("Please enter valid numbers.");
        
        const isProfit = inputs.plType1 === 'profit';
        const multiplier = isProfit ? (1 + pct / 100) : (1 - pct / 100);
        const sp = cp * multiplier;
        const amount = Math.abs(sp - cp);
  
        summary = [{ label: 'Selling Price (SP)', value: formatCurrency(sp), isHighlight: true }];
        rows = [
          ["Cost Price (CP)", formatCurrency(cp)],
          [isProfit ? "Profit %" : "Loss %", formatPercent(pct)],
          [isProfit ? "Profit Amount" : "Loss Amount", formatCurrency(amount)],
          ["Calculated SP", formatCurrency(sp)]
        ];
  
      } else if (calcMode === 'find_cp') {
        const sp = Number(inputs.sp2);
        const pct = Number(inputs.plPercent2);
        if (isNaN(sp) || isNaN(pct)) throw new Error("Please enter valid numbers.");
  
        const isProfit = inputs.plType2 === 'profit';
        if (!isProfit && pct >= 100) throw new Error("Loss percentage cannot be 100% or more when finding CP.");
  
        const divisor = isProfit ? (1 + pct / 100) : (1 - pct / 100);
        const cp = sp / divisor;
        const amount = Math.abs(sp - cp);
  
        summary = [{ label: 'Cost Price (CP)', value: formatCurrency(cp), isHighlight: true }];
        rows = [
          ["Selling Price (SP)", formatCurrency(sp)],
          [isProfit ? "Profit %" : "Loss %", formatPercent(pct)],
          [isProfit ? "Profit Amount" : "Loss Amount", formatCurrency(amount)],
          ["Calculated CP", formatCurrency(cp)]
        ];
  
      } else if (calcMode === 'find_discount') {
        const mp = Number(inputs.mp1);
        const sp = Number(inputs.sp3);
        if (isNaN(mp) || isNaN(sp)) throw new Error("Please enter valid numbers.");
        if (mp === 0) throw new Error("Marked Price cannot be zero.");
  
        const discount = mp - sp;
        const discountPercent = (discount / mp) * 100;
  
        summary = [
          { label: 'Discount %', value: formatPercent(discountPercent), isHighlight: true },
          { label: 'Discount Amount', value: formatCurrency(discount), isHighlight: false }
        ];
        rows = [
          ["Marked Price (MP)", formatCurrency(mp)],
          ["Selling Price (SP)", formatCurrency(sp)],
          ["Discount Amount", formatCurrency(discount)],
          ["Discount Percentage", formatPercent(discountPercent)]
        ];
  
      } else if (calcMode === 'find_sp_discount') {
        const mp = Number(inputs.mp2);
        const dPercent = Number(inputs.discountPercent);
        if (isNaN(mp) || isNaN(dPercent)) throw new Error("Please enter valid numbers.");
  
        const discountAmount = mp * (dPercent / 100);
        const sp = mp - discountAmount;
  
        summary = [{ label: 'Selling Price (SP)', value: formatCurrency(sp), isHighlight: true }];
        rows = [
          ["Marked Price (MP)", formatCurrency(mp)],
          ["Discount %", formatPercent(dPercent)],
          ["Discount Amount", formatCurrency(discountAmount)],
          ["Calculated SP", formatCurrency(sp)]
        ];
      }
  
      return {
        summary,
        referenceTable: { headers: ["Metric", "Value"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };
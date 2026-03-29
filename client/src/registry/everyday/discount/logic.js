export const calculateLogic = (inputs) => {
    const { originalPrice, discountPercent, taxPercent } = inputs;
    
    const price = Number(originalPrice);
    const discount = Number(discountPercent) || 0; // Default to 0 if left blank
    const tax = Number(taxPercent) || 0; // Default to 0 if left blank
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(price) || price < 0) {
        throw new Error("Please enter a valid original price.");
      }
      if (discount < 0 || discount > 100) {
        throw new Error("Discount percentage must be between 0 and 100.");
      }
      if (tax < 0) {
        throw new Error("Tax percentage cannot be negative.");
      }
  
      // Step 1: Calculate the Discount Amount
      const discountAmount = price * (discount / 100);
      
      // Step 2: Calculate Price After Discount
      const discountedPrice = price - discountAmount;
      
      // Step 3: Calculate Tax Amount on the Discounted Price
      const taxAmount = discountedPrice * (tax / 100);
      
      // Step 4: Calculate Final Price
      const finalPrice = discountedPrice + taxAmount;
      const totalSaved = price - finalPrice; // How much less they paid compared to original sticker price
  
      summary = [
        { label: 'Final Price to Pay', value: finalPrice.toFixed(2), isHighlight: true },
        { label: 'You Saved', value: discountAmount.toFixed(2) }
      ];
  
      rows = [
        ["Original Price", price.toFixed(2)],
        ["Discount Applied", `${discount}% (-${discountAmount.toFixed(2)})`],
        ["Price After Discount", discountedPrice.toFixed(2)],
        ["Tax Applied", `${tax}% (+${taxAmount.toFixed(2)})`],
        ["Final Price", finalPrice.toFixed(2)]
      ];
  
      return { summary, referenceTable: { headers: ["Details", "Amount"], rows } };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };
export const calculateLogic = (inputs) => {
    const { calcMode, distance, fuelPrice, mileage, fuelConsumed } = inputs;
    
    const dist = Number(distance);
    const price = Number(fuelPrice);
    const mil = Number(mileage);
    const fuel = Number(fuelConsumed);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(dist) || isNaN(price) || dist <= 0 || price <= 0) {
        throw new Error("Please enter valid positive numbers for distance and fuel price.");
      }
  
      if (calcMode === 'trip_cost') {
        // ---------------------------------------------------------
        // LOGIC: Calculate Trip Cost & Fuel Needed
        // ---------------------------------------------------------
        if (isNaN(mil) || mil <= 0) throw new Error("Please enter a valid vehicle mileage.");
  
        const fuelNeeded = dist / mil;
        const totalCost = fuelNeeded * price;
  
        summary = [
          { label: 'Total Trip Cost', value: `₹${Math.ceil(totalCost)}`, isHighlight: true },
          { label: 'Fuel Needed', value: `${fuelNeeded.toFixed(2)} Litres` }
        ];
  
        rows = [
          ["Total Distance", `${dist} km`],
          ["Vehicle Mileage", `${mil} km/l`],
          ["Fuel Price", `₹${price} / Litre`],
          ["Estimated Fuel Required", `${fuelNeeded.toFixed(2)} Litres`],
          ["Final Trip Cost", `₹${totalCost.toFixed(2)}`]
        ];
  
      } else if (calcMode === 'mileage') {
        // ---------------------------------------------------------
        // LOGIC: Calculate Vehicle Mileage (km/l)
        // ---------------------------------------------------------
        if (isNaN(fuel) || fuel <= 0) throw new Error("Please enter valid fuel consumed in litres.");
  
        const calculatedMileage = dist / fuel;
        const costPerKm = price / calculatedMileage;
  
        summary = [
          { label: 'Vehicle Mileage', value: `${calculatedMileage.toFixed(2)} km/l`, isHighlight: true },
          { label: 'Driving Cost Per Km', value: `₹${costPerKm.toFixed(2)} / km` }
        ];
  
        rows = [
          ["Total Distance Driven", `${dist} km`],
          ["Total Fuel Consumed", `${fuel} Litres`],
          ["Fuel Price", `₹${price} / Litre`],
          ["Calculated Mileage", `${calculatedMileage.toFixed(2)} km/l`],
          ["Cost per Kilometre", `₹${costPerKm.toFixed(2)} / km`]
        ];
      }
  
      return { summary, referenceTable: { headers: ["Calculation Details", "Value"], rows } };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };
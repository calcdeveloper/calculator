export const config = {
    id: "regional-land-converter",
    name: "Cent, Guntha & Bigha Land Converter",
    description: "Convert regional Indian land area units (Cent, Guntha, Bigha) to Square Feet, Square Meters, and Acres.",
    category: "real-estate",
    inputs: [
      {
        id: "area_value",
        label: "Total Land Area",
        type: "number",
        placeholder: "e.g., 5",
        defaultValue: "5"
      },
      {
        id: "input_unit",
        label: "Select Input Unit",
        type: "select",
        options: [
          { value: "cent", label: "Cent (South India)" },
          { value: "guntha", label: "Guntha / Gunta (West India)" },
          { value: "bigha_up", label: "Pucca Bigha (UP, Rajasthan, Bihar, Haryana)" },
          { value: "bigha_guj", label: "Bigha (Gujarat)" },
          { value: "bigha_wb", label: "Bigha (West Bengal)" },
          { value: "sqft", label: "Square Feet (Sq.ft)" },
          { value: "sqm", label: "Square Meters (Sq.m)" },
          { value: "acre", label: "Acres" }
        ],
        defaultValue: "cent"
      }
    ]
  };
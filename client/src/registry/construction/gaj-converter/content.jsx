import React from 'react';

export default function GajConverterContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Understand Gaj and Calculate Plot Area</h2>
      <p>
        If you are buying residential land in North India (especially in Delhi, Haryana, Punjab, Uttar Pradesh, or Rajasthan), the property rate is almost always quoted in "Gaj". However, architect floor plans and official bank loan documents usually require measurements in Square Feet (Sq.ft) or Square Meters (Sq.m). Our <strong>plot area calculator</strong> helps you bridge this gap instantly.
      </p>

      <h3>What exactly is a "Gaj"?</h3>
      <p>
        <strong>Gaj</strong> is the traditional Hindi word for a <strong>Square Yard</strong>. It is a unit of area, not a unit of linear length. A standard linear yard is 3 feet long. Therefore, a square yard (1 Gaj) is an area that is 3 feet long and 3 feet wide.
      </p>
      
      <hr className="my-6" />

      <h3>How to convert Gaj to Sq Ft</h3>
      <p>
        The conversion formula is very straightforward because the relationship between yards and feet is an exact whole number.
      </p>
      <ul>
        <li>1 Linear Yard = 3 Linear Feet.</li>
        <li>1 Square Yard (Gaj) = 3 ft × 3 ft = <strong>9 Square Feet</strong>.</li>
      </ul>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Formula: Area in Sq.ft = Area in Gaj × 9</strong><br /><br />
        <strong>Example: How much is 100 gaj in square feet?</strong><br />
        If you are buying a standard 100 Gaj plot, simply multiply by 9.<br />
        100 Gaj × 9 = <strong>900 Square Feet</strong>.
      </div>

      <hr className="my-6" />

      <h3>Using the Plot Area Calculator</h3>
      <p>
        If a property dealer tells you a plot's dimensions in feet, you must first find the total square footage before you can find out how many Gaj it is. You can use our tool's "Calculate Plot Area" mode, or follow this manual method:
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 1: Calculate Square Feet</strong><br />
        Area = Length (Depth) × Width (Frontage)<br />
        Example: A plot with a 20 ft front and 45 ft depth.<br />
        20 ft × 45 ft = <strong>900 Sq.ft</strong>.<br /><br />

        <strong>Step 2: Convert Sq Ft back to Gaj</strong><br />
        Since 1 Gaj = 9 Sq.ft, you must divide your total square feet by 9.<br />
        Formula: Area in Gaj = Area in Sq.ft ÷ 9<br />
        900 Sq.ft ÷ 9 = <strong>100 Gaj</strong>.
      </div>

      <hr className="my-6" />

      <h3>Quick Real Estate Conversion Guide</h3>
      <p>
        Here is a handy cheat sheet for the most common land measurements used in Indian real estate:
      </p>
      <ul>
        <li><strong>50 Gaj</strong> = 450 Sq.ft <em>(Common for small/EWS houses)</em></li>
        <li><strong>100 Gaj</strong> = 900 Sq.ft <em>(Standard residential plot)</em></li>
        <li><strong>250 Gaj</strong> = 2,250 Sq.ft <em>(Premium builder floor plot)</em></li>
        <li><strong>500 Gaj</strong> = 4,500 Sq.ft <em>(Luxury bungalow/Kothi plot)</em></li>
        <li><strong>1 Square Meter</strong> = 1.196 Gaj = 10.76 Sq.ft</li>
        <li><strong>1 Acre</strong> = 4,840 Gaj = 43,560 Sq.ft</li>
      </ul>
      
      <p className="mt-4 text-sm text-calc-darkGray">
        <strong>Important Note on Square Meters:</strong> Many government authorities (like DDA in Delhi or HUDA in Haryana) auction plots in Square Meters. To quickly convert Sq.m to Gaj, multiply the Sq.m value by <strong>1.196</strong>. For example, a 100 Sq.m DDA plot is approximately 119.6 Gaj.
      </p>
    </div>
  );
}
import React from 'react';

export default function TileCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>How to Calculate Floor and Wall Tiles Perfectly</h2>
      <p>
        Whether you are renovating a living room or fixing up a bathroom, buying the right amount of tiles is crucial. Buying too few delays your project and risks color batch mismatches. Buying too many wastes your budget, as dealers usually do not accept returns on loose tiles. Use our <strong>floor tiles calculator</strong> to get an accurate estimate including wastage and skirting.
      </p>

      <h3>Important Tile Measurement Terms</h3>
      <ul>
        <li><strong>Sq.ft (Square Feet):</strong> The most common unit for measuring room area in India. 1 Sq.m (Square Meter) equals 10.76 Sq.ft.</li>
        <li><strong>mm (Millimeters):</strong> The standard unit used globally and by Indian manufacturers to denote the physical size of the tile (e.g., 600x600 mm).</li>
        <li><strong>Skirting:</strong> The small 4-inch high tile border applied to the bottom of the wall in a room. It protects the wall paint when mopping the floor.</li>
      </ul>

      <hr className="my-6" />

      <h3>The Tile Calculation Formula</h3>
      <p>
        Calculating your requirement for a living room floor or acting as a <strong>bathroom wall tiles calculator</strong> follows the same basic geometrical rules: find the area, add the skirting, and add a safety margin for cuts and breakages.
      </p>

      <h4>1. Find the Room Area</h4>
      <p>
        <strong>Area = Length × Width</strong><br />
        Example: A room that is 12 feet long and 10 feet wide.<br />
        12 × 10 = <strong>120 Sq.ft</strong>.
      </p>

      <h4>2. Add Skirting Area (For Floors Only)</h4>
      <p>
        Skirting runs along the perimeter of the room. Standard skirting is 4 inches high (which is 0.33 feet).<br />
        <strong>Perimeter = 2 × (Length + Width)</strong><br />
        Perimeter = 2 × (12 + 10) = 44 running feet.<br />
        Skirting Area = 44 running feet × 0.33 feet = <strong>14.5 Sq.ft</strong>.
      </p>

      <h4>3. Apply the Wastage Factor</h4>
      <p>
        Tiles must be cut to fit the edges of a room or to go around bathroom pipes. Straight laying requires a <strong>5% wastage</strong> factor. Diagonal laying (diamond pattern) requires a <strong>10% wastage</strong> factor.<br />
        Total Net Area = 120 + 14.5 = 134.5 Sq.ft.<br />
        Add 5% Wastage = 134.5 × 1.05 = <strong>141.2 Sq.ft of total tiles to buy</strong>.
      </p>

      <hr className="my-6" />

      <h3>How Many Tiles in One Box? (Indian Standards)</h3>
      <p>
        Because tiles are heavy, manufacturers limit the weight of a single box. Therefore, larger tiles have fewer pieces per box. Here is a definitive guide to answer <strong>how many tiles in one box</strong> based on standard Indian manufacturing:
      </p>

      <div className="overflow-x-auto my-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-calc-darkGray text-calc-darkGray">
              <th className="p-2">Tile Size in mm</th>
              <th className="p-2">Size in Feet/Inches</th>
              <th className="p-2">Pieces per Box</th>
              <th className="p-2">Coverage Area per Box</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-calc-lightGray/50">
              <td className="p-2"><strong>600x600 mm</strong></td>
              <td className="p-2">2x2 Feet</td>
              <td className="p-2">4 Pieces</td>
              <td className="p-2">16.0 Sq.ft (1.44 Sq.m)</td>
            </tr>
            <tr className="border-b border-calc-lightGray/50 bg-calc-lightGray/10">
              <td className="p-2"><strong>600x1200 mm</strong></td>
              <td className="p-2">2x4 Feet</td>
              <td className="p-2">2 Pieces</td>
              <td className="p-2">16.0 Sq.ft (1.44 Sq.m)</td>
            </tr>
            <tr className="border-b border-calc-lightGray/50">
              <td className="p-2"><strong>800x800 mm</strong></td>
              <td className="p-2">32x32 Inches</td>
              <td className="p-2">3 Pieces</td>
              <td className="p-2">21.3 Sq.ft (1.92 Sq.m)</td>
            </tr>
            <tr className="border-b border-calc-lightGray/50">
              <td className="p-2"><strong>300x300 mm</strong></td>
              <td className="p-2">1x1 Feet</td>
              <td className="p-2">9 Pieces</td>
              <td className="p-2">9.0 Sq.ft (0.81 Sq.m)</td>
            </tr>
            <tr>
              <td className="p-2"><strong>300x450 mm</strong></td>
              <td className="p-2">12x18 Inches</td>
              <td className="p-2">6 Pieces</td>
              <td className="p-2">9.0 Sq.ft (0.81 Sq.m)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="text-sm italic mt-2 text-calc-darkGray">
        *Note: Bathroom floors strictly use anti-skid matte tiles (usually 300x300mm), while bathroom walls use glossy tiles (300x450mm or 300x600mm) to prevent water absorption and facilitate easy cleaning.
      </p>
    </div>
  );
}
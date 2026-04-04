import React from 'react';

export default function FramingCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>How to Calculate Materials for Partitions & Drywall in India</h2>
      <p>
        Whether you are erecting a Gypsum board partition for an office, creating a false wall, or doing interior plywood paneling, ordering the right amount of framing material is essential. Our <strong>Partition and Framing Calculator</strong> is designed specifically for Indian construction standards, helping you estimate vertical studs, floor tracks, and ceiling tracks instantly.
      </p>

      <h3>GI Metal Studs vs. Wooden Battens</h3>
      <p>
        In Indian interiors, there are two primary ways to frame a partition:
      </p>
      <ul>
        <li><strong>GI (Galvanized Iron) Channels:</strong> The standard for modern commercial and residential drywall. It consists of U-shaped "Floor & Ceiling Tracks" and C-shaped "Vertical Studs". It is termite-proof, fire-resistant, and lightweight.</li>
        <li><strong>Wooden Battens (Marandi, Pine, or Hardwood):</strong> Commonly used by local carpenters for plywood paneling, wardrobes, and residential custom partitions.</li>
      </ul>

      <hr className="my-6" />

      <h3>Understanding Center-to-Center Spacing</h3>
      <p>
        To ensure structural strength and to align perfectly with standard 8x4 feet (2438 x 1219 mm) sheets of Gypsum or Plywood, vertical studs must be spaced evenly:
      </p>
      <ul>
        <li><strong>610 mm (24 inches):</strong> The standard economical spacing for most interior non-load-bearing drywall partitions.</li>
        <li><strong>406 mm (16 inches):</strong> Used for walls that need higher impact resistance, heavy tile cladding, or when using thinner boards.</li>
      </ul>

      <h3>The Stud Calculation Formula (The "+1 Rule")</h3>
      <p>
        Calculating your vertical studs is simple math, but people often forget the "starter stud." You need one framing member at the absolute 0-inch mark to begin your wall.
      </p>
      
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        1. Convert Wall Length to millimeters (mm)<br />
        2. Divide by your chosen spacing (e.g., 610mm)<br />
        3. Round Up to the nearest whole number<br />
        4. Add +1 for the starting stud
      </div>

      <h3>Billing in Running Feet (Rft)</h3>
      <p>
        Contractors in India typically estimate and bill framing in <strong>Running Feet (Rft)</strong> or <strong>Running Meters (Rmt)</strong>. Our calculator automatically sums up the horizontal tracks (top and bottom) and converts them into Rft. Because metal channels generally come in 10-foot lengths in the local market, we also calculate exactly how many 10ft sections you need to buy.
      </p>

      <h3>Don't Forget the Waste Factor!</h3>
      <p>
        If your partition includes doors, windows, or intersecting walls, you will need extra material for framing around those openings. <strong>It is highly recommended to order 10% extra material</strong> to account for cutting waste and site modifications.
      </p>
    </div>
  );
}
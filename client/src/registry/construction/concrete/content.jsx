import React from 'react';

export default function ConcreteCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>How to Calculate Concrete for Your Next Project</h2>
      <p>
        Whether you are pouring a new patio, setting fence posts, pouring stairs, or building a custom structural shape, ordering the right amount of concrete is crucial. Ordering too much wastes money, while ordering too little creates a stressful, interrupted pour. Our <strong>Concrete Calculator</strong> is highly flexible, supporting multiple units (feet, inches, yards, meters, and centimeters) and complex shapes.
      </p>

      <h3>1. Calculating Concrete for Slabs and Rectangles</h3>
      <p>
        For standard rectangular structures like driveways, sidewalks, and slabs, you need to determine the volume of a rectangular prism. Simply enter your length, width, and depth.
      </p>
      <blockquote>
        Volume = Length × Width × Depth
      </blockquote>

      <h3>2. Calculating Concrete for Columns and Post Holes</h3>
      <p>
        When setting deck posts or pouring sonotube columns, you are calculating the volume of a cylinder. The calculator automatically finds the area of your circular base based on the diameter, and multiplies it by the depth of your hole.
      </p>
      <div className="my-4 text-center">
        {"$$ V = \\pi r^2 h $$"}
      </div>
      <p><em>Where <strong>V</strong> is Volume, <strong>r</strong> is the radius (half the diameter), and <strong>h</strong> is the height or depth.</em></p>

      <h3>3. Calculating Concrete for Stairs</h3>
      <p>
        Figuring out the concrete requirement for stairs can be tricky. Our calculator simplifies this by calculating the volume of each step as a rectangular prism. You will need:
      </p>
      <ul>
        <li><strong>Tread Depth:</strong> The horizontal part of the step you step on.</li>
        <li><strong>Riser Height:</strong> The vertical height of a single step.</li>
        <li><strong>Width:</strong> The side-to-side width of the staircase.</li>
        <li><strong>Number of Steps:</strong> The total amount of stairs to be poured.</li>
      </ul>

      <hr className="my-6" />

      <h3>4. Estimating Premixed Concrete Bags</h3>
      <p>
        For smaller projects, buying premixed bags (like Quikrete or Sakrete) is highly cost-effective. Premixed bags are sold by weight but yield standard volumes when mixed with water:
      </p>
      <ul>
        <li><strong>80 lb bag:</strong> Yields roughly 0.60 cubic feet of concrete.</li>
        <li><strong>60 lb bag:</strong> Yields roughly 0.45 cubic feet of concrete.</li>
        <li><strong>50 lb bag:</strong> Yields roughly 0.37 cubic feet of concrete.</li>
      </ul>
      <p>
        <em>Note: Our calculator automatically rounds up to the nearest whole bag so you are never left short!</em>
      </p>

      <h3>Pro Tip: The Rule of Waste</h3>
      <p>
        In construction, things rarely go perfectly. Ground isn't perfectly level, wooden forms bulge, and spillage is inevitable. It is an industry standard to <strong>order an extra 5% to 10%</strong> of your calculated concrete to account for waste. It is significantly cheaper to have half a yard leftover than to pay short-load fees for an extra truck delivery!
      </p>
    </div>
  );
}
import React from 'react';

export default function BeamDeflectionAdvancedContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Advanced Structural Analysis: Comprehensive Beam Deflection</h2>
      
      <p className="mt-4">
        In mechanical and civil engineering, <strong>Beam Deflection</strong> is the degree to which a structural element bends under a load. Predicting this deformation is crucial to ensure that bridges, building frameworks, and machinery axles do not fail or misalign under stress.
      </p>

      <p>
        Because different structures are mounted and loaded in unique ways, calculating deflection requires knowing the specific <strong>Beam Configuration</strong> and <strong>Load Type</strong>. Our calculator utilizes a unified multi-pass algorithm to automatically adapt its equations depending on your selected structure.
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Understanding Beam Types</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Cantilever Beam:</strong> A beam fixed securely at one end and completely free to float at the other end (like a diving board or a balcony). The maximum bending naturally occurs at the very tip of the free end.</li>
        

[Image of cantilever beam structure]

        <li><strong>Simply Supported Beam:</strong> A beam resting on supports at both ends, but not fixed tightly to them (like a wooden plank laid across two sawhorses or a bridge over a river). The maximum bending normally occurs dead in the center.</li>
        
      </ul>

      <h3 className="text-xl font-bold text-calc-black mb-3">Understanding Load Types</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Point Load (Concentrated):</strong> An external force applied heavily at a single, specific point on the beam.</li>
        <li><strong>Uniformly Distributed Load (UDL):</strong> A load spread equally across the entire length of the beam. <em>Note: Our calculator uses "Total Force" (F). If your UDL is 100 N/m over a 5m beam, your Total Force (F) input should be 500 N.</em></li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Formulas Behind The Calculator</h3>
      <p>
        While the base variables remain the same—<strong>Force (F)</strong>, <strong>Length (L)</strong>, <strong>Young's Modulus (E)</strong>, and <strong>Area Moment of Inertia (I)</strong>—the geometric relationship between them changes. Here are the 4 fundamental equations our calculator powers behind the scenes:
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <h4 className="font-bold mb-2">1. Cantilever + Point Load (at free end)</h4>
        <p className="mb-4 text-lg font-mono text-calc-blue">δ = (F × L³) / (3 × E × I)</p>
        
        <h4 className="font-bold mb-2">2. Cantilever + Uniformly Distributed Load (UDL)</h4>
        <p className="mb-4 text-lg font-mono text-calc-blue">δ = (F × L³) / (8 × E × I)</p>

        <h4 className="font-bold mb-2">3. Simply Supported + Point Load (at center)</h4>
        <p className="mb-4 text-lg font-mono text-calc-blue">δ = (F × L³) / (48 × E × I)</p>

        <h4 className="font-bold mb-2">4. Simply Supported + Uniformly Distributed Load (UDL)</h4>
        <p className="mb-2 text-lg font-mono text-calc-blue">δ = (5 × F × L³) / (384 × E × I)</p>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Example Walkthrough: Simply Supported vs. Cantilever</h3>
      <p>
        Imagine a 3-meter steel beam (E = 200 GPa, I = 0.0001 m⁴). You place a total load of 10,000 Newtons (F) on it. 
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2 mb-6">
        <li>If this beam is set up as a <strong>Cantilever</strong> with the load at the tip, the deflection is: <strong>4.5 mm</strong>.</li>
        <li>If this same beam is <strong>Simply Supported</strong> at both ends with the load placed directly in the center, the deflection is only: <strong>0.28 mm</strong>.</li>
      </ul>
      <p>
        This dramatic difference is exactly why structural engineers use different mounting methods. By utilizing our calculator, you can rapidly test various configurations and materials to ensure your design operates within perfectly safe deflection tolerances without doing the intensive algebra manually!
      </p>
    </div>
  );
}
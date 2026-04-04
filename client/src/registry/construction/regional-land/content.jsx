import React from 'react';

export default function RegionalLandContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Understand Indian Regional Land Measurements</h2>
      <p>
        While modern property documents use standard metrics like Square Feet, Square Meters, and Acres, agricultural land and ancestral properties in India are still transacted using traditional units. Understanding how to calculate <strong>cent to sq ft</strong>, convert <strong>guntha to square meter</strong>, or evaluate <strong>bigha to acre</strong> is essential for buying rural or semi-urban land in India.
      </p>

      <h3>1. What is a "Cent"? (South India)</h3>
      <p>
        The <strong>Cent</strong> is a land unit primarily used in Kerala, Tamil Nadu, and parts of Karnataka and Andhra Pradesh. 
      </p>
      <ul>
        <li><strong>Definition:</strong> 1 Cent is exactly 1/100th of an Acre.</li>
        <li><strong>Cent to Sq Ft:</strong> Since 1 Acre is 43,560 Sq.ft, 1 Cent equals <strong>435.6 Square Feet</strong>.</li>
      </ul>
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Example Calculation:</strong><br />
        To convert 5 Cents to Square Feet:<br />
        5 Cents × 435.6 = <strong>2,178 Sq.ft</strong>.
      </div>

      <hr className="my-6" />

      <h3>2. What is a "Guntha"? (West India)</h3>
      <p>
        The <strong>Guntha</strong> (also spelled Gunta) is the standard regional unit in Maharashtra, Gujarat, and parts of Karnataka. 
      </p>
      <ul>
        <li><strong>Definition:</strong> 1 Guntha is exactly 1/40th of an Acre.</li>
        <li><strong>Guntha to Sq Ft:</strong> 1 Guntha equals <strong>1,089 Square Feet</strong>.</li>
        <li><strong>Guntha to Square Meter:</strong> Since 1 Sq.m is 10.76 Sq.ft, 1 Guntha is approximately <strong>101.17 Square Meters</strong>.</li>
      </ul>
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Example Calculation:</strong><br />
        How many Square Meters in 2 Gunthas?<br />
        Step 1: 2 Gunthas × 1089 = 2,178 Sq.ft.<br />
        Step 2: 2,178 Sq.ft ÷ 10.7639 = <strong>202.34 Sq.m</strong>.
      </div>

      <hr className="my-6" />

      <h3>3. What is a "Bigha"? (North & East India)</h3>
      <p>
        The <strong>Bigha</strong> is the most widely used unit in North and East India, but it is also the most confusing because its size changes wildly from state to state! It does not have one uniform national value.
      </p>

      <h4>Common Regional Bigha Sizes:</h4>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-calc-darkGray text-calc-darkGray">
              <th className="p-2">Region</th>
              <th className="p-2">Bigha Type</th>
              <th className="p-2">Square Feet Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-calc-lightGray/50">
              <td className="p-2"><strong>UP, Rajasthan, Bihar</strong></td>
              <td className="p-2">Pucca Bigha (Standard)</td>
              <td className="p-2">27,225 Sq.ft</td>
            </tr>
            <tr className="border-b border-calc-lightGray/50 bg-calc-lightGray/10">
              <td className="p-2"><strong>Gujarat</strong></td>
              <td className="p-2">Gujarat Bigha</td>
              <td className="p-2">17,424 Sq.ft</td>
            </tr>
            <tr>
              <td className="p-2"><strong>West Bengal</strong></td>
              <td className="p-2">Bengal Bigha</td>
              <td className="p-2">14,400 Sq.ft</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>How to convert Bigha to Acre</h4>
      <p>
        To convert any regional Bigha to Acres, simply take the Square Feet value of that Bigha and divide it by 43,560 (the total Sq.ft in 1 Acre).
      </p>
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Example: Standard Pucca Bigha (UP) to Acre</strong><br />
        27,225 Sq.ft ÷ 43,560 = <strong>0.625 Acres</strong>.<br />
        <em>(This means there are roughly 1.6 Pucca Bighas in a single Acre).</em>
      </div>

      <p className="mt-4 text-sm text-calc-darkGray italic">
        *Legal Disclaimer: Always verify regional measurements with local Patwaris (village accountants) or in official Tehsil property records (Jamabandi/Khatauni), as local "Kachha" (informal) measurements can sometimes vary even between neighboring districts!
      </p>
    </div>
  );
}
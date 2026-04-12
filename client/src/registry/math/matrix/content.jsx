import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MatrixCalculatorContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Matrix Calculator | Add, Subtract, Multiply & Inverse Matrices
  // META DESCRIPTION: Free online Matrix Calculator for Indian students and professionals. Easily add, subtract, multiply, and find the determinant or inverse of matrices step-by-step.
  // URL SLUG: /calculator/math/matrix
  // PRIMARY KEYWORD: Matrix Calculator
  // SECONDARY KEYWORDS: matrix multiplication calculator, online matrix solver, matrix addition tool, 3x3 matrix calculator, inverse of a matrix calculator, matrix determinant solver, matrix transpose, linear algebra calculator, matrix math online, calculate matrix power
  // LONG-TAIL KEYWORDS: how to multiply two 3x3 matrices online, find the determinant of a square matrix, free tool to calculate matrix inverse step by step, matrix addition and subtraction rules, solve linear equations using matrices

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I add or subtract matrices with different dimensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, matrix addition and subtraction strictly require both matrices to have the exact same dimensions. For example, you can add a 2x3 matrix to another 2x3 matrix, but you cannot add a 2x3 matrix to a 3x2 matrix."
        }
      },
      {
        "@type": "Question",
        name: "What is the rule for matrix multiplication?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To multiply two matrices (Matrix A × Matrix B), the number of columns in the first matrix (A) must equal the number of rows in the second matrix (B). The resulting matrix will have the same number of rows as Matrix A and the same number of columns as Matrix B."
        }
      },
      {
        "@type": "Question",
        name: "What does it mean if a matrix determinant is zero?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the determinant of a square matrix is exactly zero, the matrix is called a 'singular matrix.' A singular matrix does not have an inverse. This means you cannot divide by this matrix when solving linear equations."
        }
      },
      {
        "@type": "Question",
        name: "Is matrix multiplication commutative?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, matrix multiplication is not commutative. In almost all cases, A × B does not equal B × A. The order in which you multiply matrices completely changes the calculation and the final result."
        }
      },
      {
        "@type": "Question",
        name: "What is the Identity Matrix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Identity Matrix is a square matrix filled with 1s on the main diagonal (top-left to bottom-right) and 0s everywhere else. It acts like the number '1' in standard math: multiplying any matrix by an Identity Matrix leaves the original matrix unchanged."
        }
      },
      {
        "@type": "Question",
        name: "How do I find the transpose of a matrix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To find the transpose of a matrix, you simply swap its rows and columns. The first row becomes the first column, the second row becomes the second column, and so on."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Matrix Calculator | Add, Subtract, Multiply & Inverse Matrices</title>
        <meta
          name="description"
          content="Free online Matrix Calculator for Indian students and professionals. Easily add, subtract, multiply, and find the determinant or inverse of matrices step-by-step."
        />
        <meta
          name="keywords"
          content="Matrix Calculator, matrix multiplication calculator, online matrix solver, matrix addition tool, 3x3 matrix calculator, inverse of a matrix calculator"
        />
        <meta property="og:title" content="Matrix Calculator | Add, Subtract, Multiply & Inverse Matrices" />
        <meta property="og:description" content="Free online Matrix Calculator. Easily add, subtract, multiply, and find the determinant or inverse of matrices step-by-step." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Matrix Calculator: Solve Linear Algebra Instantly
        </h1>
        <p className="mb-4">
          Whether you are a college student studying linear algebra, a software engineer coding 3D graphics, or a data scientist working with machine learning arrays, matrix calculations are an unavoidable and essential part of your work.
        </p>
        <p className="mb-4">
          Our free online <strong>Matrix Calculator</strong> is designed to visually simplify complex array operations. Instead of manually writing out tedious rows and columns and risking a small arithmetic mistake that ruins the entire problem, our tool does the heavy lifting for you instantly.
        </p>
        <p>
          You can easily add, subtract, multiply, and find the inverse, determinant, transpose, or power of matrices. The intuitive visual grid allows you to input data smoothly and see your calculated results structured perfectly row-by-row.
        </p>
      </section>

      {/* HOW TO USE FROM SCREENSHOT */}
      <section className="bg-gray-50 p-6 rounded-xl border border-green-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Matrix Calculator</h2>
        <p className="mb-4 text-gray-700">
          Our calculator features a highly visual interface that mimics how you write matrices on paper. Here is a step-by-step guide to using it:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Select Your Operation:</strong> Start by using the top dropdown menu labeled "Operation". Choose what you want to do (e.g., <em>A + B (Addition)</em>, Subtraction, Multiplication, Inverse, or Determinant).
          </li>
          <li>
            <strong>Set Matrix Dimensions:</strong> For Matrix A and Matrix B, adjust the number of <strong>Rows</strong> and <strong>Cols</strong> (columns). By default, the tool is set to a standard 3x3 matrix layout. Ensure your dimensions follow the mathematical rules for your chosen operation.
          </li>
          <li>
            <strong>Input Your Values:</strong> Click into the individual grid boxes to type in your numbers. To speed up testing, you can use the helpful quick-fill buttons located below each matrix:
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
              <li><strong>Clear (0):</strong> Instantly resets the entire matrix to zeros.</li>
              <li><strong>All 1s:</strong> Fills every slot with the number 1.</li>
              <li><strong>Random:</strong> Generates random integers to help you test formulas quickly.</li>
            </ul>
          </li>
          <li>
            <strong>View the Result:</strong> Look at the right-hand panel. The large green box will confirm the operation (e.g., "A + B Matrix") and the resulting dimension (e.g., "3x3 Matrix").
          </li>
          <li>
            <strong>Analyze the Output Table:</strong> Below the main result, a clear property table breaks down the final matrix line by line. You will see <strong>Result Row 1</strong>, <strong>Result Row 2</strong>, etc., neatly formatted in brackets like <code>[0, 0, 0]</code>.
          </li>
        </ol>
      </section>

      {/* EXISTING CONTENT: UNDERSTANDING MATRIX OPERATIONS */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Matrix Operations</h2>
        <p className="mb-4 text-gray-700">
          A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns. Matrices are fundamental in linear algebra, physics, computer graphics, and machine learning. They act as organized data sets that allow computers to process complex transformations simultaneously.
        </p>
      </section>

      {/* EXISTING CONTENT: CORE RULES */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Core Matrix Math Rules</h3>
        <p className="text-gray-700 mb-4">
          Before relying entirely on a calculator, it is crucial to understand the rules governing matrix mathematics:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border-t-4 border-green-600 border-l border-r border-b shadow-sm transition-shadow hover:shadow-md">
            <h4 className="font-bold text-gray-900 mb-2">Addition & Subtraction</h4>
            <p className="text-sm text-gray-600">
              You can only add or subtract matrices if they have the exact same dimensions (e.g., you can add a 2x2 matrix to another 2x2 matrix). You simply add or subtract the corresponding elements in identical positions.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border-t-4 border-blue-600 border-l border-r border-b shadow-sm transition-shadow hover:shadow-md">
            <h4 className="font-bold text-gray-900 mb-2">Multiplication (A × B)</h4>
            <p className="text-sm text-gray-600">
              To multiply matrices, the number of columns in Matrix A must equal the number of rows in Matrix B. The result is calculated using the "dot product" of the rows from the first matrix and the columns from the second matrix.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border-t-4 border-purple-600 border-l border-r border-b shadow-sm transition-shadow hover:shadow-md">
            <h4 className="font-bold text-gray-900 mb-2">Determinant |A|</h4>
            <p className="text-sm text-gray-600">
              The determinant is a special scalar (single number) value calculated only from a square matrix (like 2x2 or 3x3). If the determinant is zero, the matrix is considered "singular" and does not have an inverse.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border-t-4 border-orange-600 border-l border-r border-b shadow-sm transition-shadow hover:shadow-md">
            <h4 className="font-bold text-gray-900 mb-2">Inverse (A⁻¹)</h4>
            <p className="text-sm text-gray-600">
              The inverse of a matrix is analogous to taking the reciprocal of a regular number. When you multiply a square matrix by its inverse, you get the Identity Matrix (a diagonal line of 1s).
            </p>
          </div>
        </div>
      </section>

      {/* FORMULA SECTION */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Matrix Formulas Explained</h2>
        <p className="text-gray-700 mb-4">
          To perform these operations manually, you need to understand the underlying algebraic formulas. Let's look at the notation and methods for a standard 2x2 matrix.
        </p>
        <p className="text-gray-700 mb-2">Let Matrix A and Matrix B be 2x2 matrices defined as:</p>
        <div className="bg-white p-4 rounded border border-gray-200 font-mono text-sm mb-4 inline-block text-gray-800">
          A = [a b] <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;[c d] <br/><br/>
          B = [e f] <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;[g h]
        </div>

        <div className="space-y-4 text-gray-800">
          <div>
            <strong className="text-gray-900 block mb-1">1. Matrix Addition Formula (A + B)</strong>
            <p className="text-sm mb-2">Simply add the numbers in matching positions:</p>
            <p className="font-mono text-sm bg-white p-3 rounded border border-gray-200 inline-block">
              [a+e &nbsp; b+f]<br/>
              [c+g &nbsp; d+h]
            </p>
          </div>

          <div>
            <strong className="text-gray-900 block mb-1">2. Matrix Determinant Formula (|A|)</strong>
            <p className="text-sm mb-2">Cross-multiply the diagonals and subtract them:</p>
            <p className="font-mono text-sm bg-white p-3 rounded border border-gray-200 inline-block">
              Determinant = (a × d) - (b × c)
            </p>
          </div>

          <div>
            <strong className="text-gray-900 block mb-1">3. Matrix Multiplication Formula (A × B)</strong>
            <p className="text-sm mb-2">Multiply rows of the first by columns of the second:</p>
            <p className="font-mono text-sm bg-white p-3 rounded border border-gray-200 inline-block">
              [(a×e + b×g) &nbsp; (a×f + b×h)]<br/>
              [(c×e + d×g) &nbsp; (c×f + d×h)]
            </p>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Worked Examples</h2>
        <p className="mb-6 text-gray-700">
          Let's apply these formulas to real numbers so you can see exactly how the calculations are performed step-by-step.
        </p>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: Adding 2x2 Matrices</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm">
              <p className="mb-3"><strong>Problem:</strong> Add Matrix A and Matrix B.</p>
              <p className="font-mono mb-2">A = [2 &nbsp; 4]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[1 &nbsp; 5]</p>
              <p className="font-mono mb-4">B = [3 &nbsp; 2]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[6 &nbsp; 1]</p>
              
              <p className="font-bold mb-2">Step-by-step Solution:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Top Left: 2 + 3 = 5</li>
                <li>Top Right: 4 + 2 = 6</li>
                <li>Bottom Left: 1 + 6 = 7</li>
                <li>Bottom Right: 5 + 1 = 6</li>
              </ul>
              
              <p className="font-bold text-green-700 bg-green-50 inline-block p-3 rounded border border-green-200 font-mono">
                Result = [5 &nbsp; 6]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[7 &nbsp; 6]
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Finding a 2x2 Determinant</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm">
              <p className="mb-3"><strong>Problem:</strong> Find the determinant of Matrix C.</p>
              <p className="font-mono mb-4">C = [4 &nbsp; 3]<br/>&nbsp;&nbsp;&nbsp;&nbsp;[2 &nbsp; 5]</p>
              
              <p className="font-bold mb-2">Step-by-step Solution:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Multiply the main diagonal (a × d): 4 × 5 = 20</li>
                <li>Multiply the secondary diagonal (b × c): 3 × 2 = 6</li>
                <li>Subtract the secondary from the main: 20 - 6 = 14</li>
              </ul>
              
              <p className="font-bold text-blue-700 bg-blue-50 inline-block p-3 rounded border border-blue-200 font-mono">
                Result: Determinant |C| = 14
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, index) => (
            <details key={index} className="group border border-gray-200 rounded-lg bg-white open:shadow-md transition-all duration-200">
              <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 list-none flex justify-between items-center">
                {faq.name}
                <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Math Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">
          Expand your mathematical toolkit by trying out our other free educational calculators designed to simplify complex formulas:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/math/algebra" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Algebra Solver</a>
          <a href="/calculator/math/area-perimeter" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area & Perimeter</a>
          <a href="/calculator/math/average" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Average Calculator</a>
          <a href="/calculator/math/mean-median-mode" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Mean, Median, Mode</a>
          <a href="/calculator/math/exponent" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Exponent Calculator</a>
          <a href="/calculator/math/fraction" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction Calculator</a>
          <a href="/calculator/math/lcm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">LCM & GCF</a>
          <a href="/calculator/math/logarithm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Logarithm Calculator</a>
          <a href="/calculator/math/percentage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Calculator</a>
          <a href="/calculator/math/percentage-inc-dec" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Inc/Dec</a>
          <a href="/calculator/math/permutation-combination" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Permutation & Combination</a>
          <a href="/calculator/math/probability" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Probability Calculator</a>
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Profit & Loss</a>
          <a href="/calculator/math/proportion" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Proportion Calculator</a>
          <a href="/calculator/math/pythagorean" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pythagorean Theorem</a>
          <a href="/calculator/math/quadratic" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Quadratic Equation</a>
          <a href="/calculator/math/ratio" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Ratio Calculator</a>
          <a href="/calculator/math/scientific" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Scientific Calculator</a>
          <a href="/calculator/math/standard-deviation" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Standard Deviation</a>
          <a href="/calculator/math/volume-surface-area" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Volume & Surface Area</a>
        </div>
      </section>
    </div>
  );
}
import ScrollToTop from "./ScrollToTop"; // Adjust path if you put it in a components folder!
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import About from "./pages/About"; // <--- New Import
import Privacy from "./pages/Privacy"; // <--- New Import
import CalculatorLayout from "./components/calculator/CalculatorLayout";
import TermsAndConditions from "./pages/TermsAndConditions";

//Finance Calculators

import { config as sipConfig } from "./registry/finance/sip/config";
import { calculateLogic as sipLogic } from "./registry/finance/sip/logic";
import SIPContent from "./registry/finance/sip/content";

import { config as emiConfig } from "./registry/finance/emi/config";
import { calculateLogic as emiLogic } from "./registry/finance/emi/logic";
import EMIContent from "./registry/finance/emi/content";

import { config as homeLoanConfig } from "./registry/finance/home-loan/config";
import { calculateLogic as homeLoanLogic } from "./registry/finance/home-loan/logic";
import HomeLoanContent from "./registry/finance/home-loan/content";

import { config as fdConfig } from "./registry/finance/fd/config";
import { calculateLogic as fdLogic } from "./registry/finance/fd/logic";
import FDContent from "./registry/finance/fd/content";

import { config as personalLoanConfig } from "./registry/finance/personal-loan/config";
import { calculateLogic as personalLoanLogic } from "./registry/finance/personal-loan/logic";
import PersonalLoanContent from "./registry/finance/personal-loan/content";

import { config as rdConfig } from "./registry/finance/rd/config";
import { calculateLogic as rdLogic } from "./registry/finance/rd/logic";
import RDContent from "./registry/finance/rd/content";

import { config as lumpsumConfig } from "./registry/finance/lumpsum/config";
import { calculateLogic as lumpsumLogic } from "./registry/finance/lumpsum/logic";
import LumpsumContent from "./registry/finance/lumpsum/content";

import { config as ppfConfig } from "./registry/finance/ppf/config";
import { calculateLogic as ppfLogic } from "./registry/finance/ppf/logic";
import PpfContent from "./registry/finance/ppf/content";

import { config as gstConfig } from "./registry/finance/gst/config";
import { calculateLogic as gstLogic } from "./registry/finance/gst/logic";
import GSTContent from "./registry/finance/gst/content";

import { config as simpleInterestConfig } from "./registry/finance/simple-interest/config";
import { calculateLogic as simpleInterestLogic } from "./registry/finance/simple-interest/logic";
import SimpleInterestContent from "./registry/finance/simple-interest/content";

import { config as compoundInterestConfig } from "./registry/finance/compound-interest/config";
import { calculateLogic as compoundInterestLogic } from "./registry/finance/compound-interest/logic";
import CompoundInterestContent from "./registry/finance/compound-interest/content";

import { config as retirementConfig } from "./registry/finance/retirement/config";
import { calculateLogic as retirementLogic } from "./registry/finance/retirement/logic";
import RetirementContent from "./registry/finance/retirement/content";

import { config as gratuityConfig } from "./registry/finance/gratuity/config";
import { calculateLogic as gratuityLogic } from "./registry/finance/gratuity/logic";
import GratuityContent from "./registry/finance/gratuity/content";

import { config as carLoanConfig } from "./registry/finance/car-loan/config";
import { calculateLogic as carLoanLogic } from "./registry/finance/car-loan/logic";
import CarLoanContent from "./registry/finance/car-loan/content";

//HEALTH Calculators

import { config as bmiConfig } from "./registry/health/bmi/config";
import { calculateLogic as bmiLogic } from "./registry/health/bmi/logic";
import BmiContent from "./registry/health/bmi/content";

import { config as bmrConfig } from "./registry/health/bmr/config";
import { calculateLogic as bmrLogic } from "./registry/health/bmr/logic";
import BmrContent from "./registry/health/bmr/content";

import { config as bodyFatConfig } from "./registry/health/body-fat/config";
import { calculateLogic as bodyFatLogic } from "./registry/health/body-fat/logic";
import BodyFatContent from "./registry/health/body-fat/content";

import { config as calorieConfig } from "./registry/health/calorie/config";
import { calculateLogic as calorieLogic } from "./registry/health/calorie/logic";
import CalorieContent from "./registry/health/calorie/content";

import { config as pregnancyConfig } from "./registry/health/pregnancy/config";
import { calculateLogic as pregnancyLogic } from "./registry/health/pregnancy/logic";
import PregnancyContent from "./registry/health/pregnancy/content";

import { config as caloriesBurnedConfig } from "./registry/health/calories-burned/config";
import { calculateLogic as caloriesBurnedLogic } from "./registry/health/calories-burned/logic";
import caloriesBurnedContent from "./registry/health/calories-burned/content";

import { config as macrosConfig } from "./registry/health/macros/config";
import { calculateLogic as macrosLogic } from "./registry/health/macros/logic";
import macrosContent from "./registry/health/macros/content";

import { config as waterIntakeConfig } from "./registry/health/water-intake/config";
import { calculateLogic as waterIntakeLogic } from "./registry/health/water-intake/logic";
import waterIntakeContent from "./registry/health/water-intake/content";

import { config as idealWeightConfig } from "./registry/health/ideal-weight/config";
import { calculateLogic as idealWeightLogic } from "./registry/health/ideal-weight/logic";
import idealWeightContent from "./registry/health/ideal-weight/content";

//Math Calculators

import { config as percentageConfig } from "./registry/math/percentage/config";
import { calculateLogic as percentageLogic } from "./registry/math/percentage/logic";
import percentageContent from "./registry/math/percentage/content";

import { config as fractionConfig } from "./registry/math/fraction/config";
import { calculateLogic as fractionLogic } from "./registry/math/fraction/logic";
import fractionContent from "./registry/math/fraction/content";

import { config as scientificConfig } from "./registry/math/scientific/config";
import { calculateLogic as scientificLogic } from "./registry/math/scientific/logic";
import scientificContent from "./registry/math/scientific/content";

import { config as lcmConfig } from "./registry/math/lcm/config";
import { calculateLogic as lcmLogic } from "./registry/math/lcm/logic";
import lcmContent from "./registry/math/lcm/content";

import { config as standardDeviationConfig } from "./registry/math/standard-deviation/config";
import { calculateLogic as standardDeviationLogic } from "./registry/math/standard-deviation/logic";
import standardDeviationContent from "./registry/math/standard-deviation/content";

import { config as quadraticConfig } from "./registry/math/quadratic/config";
import { calculateLogic as quadraticLogic } from "./registry/math/quadratic/logic";
import quadraticContent from "./registry/math/quadratic/content";

import { config as meanMedianModeConfig } from "./registry/math/mean-median-mode/config";
import { calculateLogic as meanMedianModeLogic } from "./registry/math/mean-median-mode/logic";
import meanMedianModeContent from "./registry/math/mean-median-mode/content";

import { config as areaPerimeterConfig } from "./registry/math/area-perimeter/config";
import { calculateLogic as areaPerimeterLogic } from "./registry/math/area-perimeter/logic";
import areaPerimeterContent from "./registry/math/area-perimeter/content";

import { config as volumeSurfaceAreaConfig } from "./registry/math/volume-surface-area/config";
import { calculateLogic as volumeSurfaceAreaLogic } from "./registry/math/volume-surface-area/logic";
import volumeSurfaceAreaContent from "./registry/math/volume-surface-area/content"; 

import { config as pythagoreanConfig } from "./registry/math/pythagorean/config";
import { calculateLogic as pythagoreanLogic } from "./registry/math/pythagorean/logic";
import pythagoreanContent from "./registry/math/pythagorean/content";

import { config as logarithmConfig } from "./registry/math/logarithm/config";
import { calculateLogic as logarithmLogic } from "./registry/math/logarithm/logic";
import logarithmContent from "./registry/math/logarithm/content";

import { config as exponentConfig } from "./registry/math/exponent/config";
import { calculateLogic as exponentLogic } from "./registry/math/exponent/logic";
import exponentContent from "./registry/math/exponent/content";

import { config as matrixConfig } from "./registry/math/matrix/config";
import { calculateLogic as matrixLogic } from "./registry/math/matrix/logic"; 
import matrixContent from "./registry/math/matrix/content";

import { config as probabilityConfig } from "./registry/math/probability/config";
import { calculateLogic as probabilityLogic } from "./registry/math/probability/logic";
import probabilityContent from "./registry/math/probability/content";

import { config as percentageIncDecConfig } from "./registry/math/percentage-inc-dec/config";
import { calculateLogic as percentageIncDecLogic } from "./registry/math/percentage-inc-dec/logic";
import percentageIncDecContent from "./registry/math/percentage-inc-dec/content";

import { config as ratioConfig } from "./registry/math/ratio/config";
import { calculateLogic as ratioLogic } from "./registry/math/ratio/logic";
import ratioContent from "./registry/math/ratio/content";

import { config as proportionConfig } from "./registry/math/proportion/config";
import { calculateLogic as proportionLogic } from "./registry/math/proportion/logic";
import proportionContent from "./registry/math/proportion/content";

import { config as profitLossConfig } from "./registry/math/profitloss/config";
import { calculateLogic as profitLossLogic } from "./registry/math/profitloss/logic";
import profitLossContent from "./registry/math/profitloss/content";

import { config as algebraConfig } from "./registry/math/algebra/config";
import { calculateLogic as algebraLogic } from "./registry/math/algebra/logic";
import algebraContent from "./registry/math/algebra/content";

import { config as permutationCombinationConfig } from "./registry/math/permutation-combination/config";
import { calculateLogic as permutationCombinationLogic } from "./registry/math/permutation-combination/logic";
import permutationCombinationContent from "./registry/math/permutation-combination/content";

import { config as averageConfig } from "./registry/math/average/config";
import { calculateLogic as averageLogic } from "./registry/math/average/logic";
import averageContent from "./registry/math/average/content";




function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-calc-beige font-sans text-calc-black flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              //Finance Routes
              <Route
                path="/calculator/finance/sip"
                element={
                  <CalculatorLayout
                    config={sipConfig}
                    calculateLogic={sipLogic}
                    ContentComponent={SIPContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/emi"
                element={
                  <CalculatorLayout
                    config={emiConfig}
                    calculateLogic={emiLogic}
                    ContentComponent={EMIContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/home-loan"
                element={
                  <CalculatorLayout
                    config={homeLoanConfig}
                    calculateLogic={homeLoanLogic}
                    ContentComponent={HomeLoanContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/fd"
                element={
                  <CalculatorLayout
                    config={fdConfig}
                    calculateLogic={fdLogic}
                    ContentComponent={FDContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/personal-loan"
                element={
                  <CalculatorLayout
                    config={personalLoanConfig}
                    calculateLogic={personalLoanLogic}
                    ContentComponent={PersonalLoanContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/rd"
                element={
                  <CalculatorLayout
                    config={rdConfig}
                    calculateLogic={rdLogic}
                    ContentComponent={RDContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/lumpsum"
                element={
                  <CalculatorLayout
                    config={lumpsumConfig}
                    calculateLogic={lumpsumLogic}
                    ContentComponent={LumpsumContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/ppf"
                element={
                  <CalculatorLayout
                    config={ppfConfig}
                    calculateLogic={ppfLogic}
                    ContentComponent={PpfContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/gst"
                element={
                  <CalculatorLayout
                    config={gstConfig}
                    calculateLogic={gstLogic}
                    ContentComponent={GSTContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/simple-interest"
                element={
                  <CalculatorLayout
                    config={simpleInterestConfig}
                    calculateLogic={simpleInterestLogic}
                    ContentComponent={SimpleInterestContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/compound-interest"
                element={
                  <CalculatorLayout
                    config={compoundInterestConfig}
                    calculateLogic={compoundInterestLogic}
                    ContentComponent={CompoundInterestContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/retirement"
                element={
                  <CalculatorLayout
                    config={retirementConfig}
                    calculateLogic={retirementLogic}
                    ContentComponent={RetirementContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/gratuity"
                element={
                  <CalculatorLayout
                    config={gratuityConfig}
                    calculateLogic={gratuityLogic}
                    ContentComponent={GratuityContent}
                  />
                }
              />
              <Route
                path="/calculator/finance/car-loan"
                element={
                  <CalculatorLayout
                    config={carLoanConfig}
                    calculateLogic={carLoanLogic}
                    ContentComponent={CarLoanContent}
                  />
                }
              />
              //HEALTH Routes
              <Route
                path="/calculator/health/bmi"
                element={
                  <CalculatorLayout
                    config={bmiConfig}
                    calculateLogic={bmiLogic}
                    ContentComponent={BmiContent}
                  />
                }
              />
              <Route
                path="/calculator/health/bmr"
                element={
                  <CalculatorLayout
                    config={bmrConfig}
                    calculateLogic={bmrLogic}
                    ContentComponent={BmrContent}
                  />
                }
              />
              <Route
                path="/calculator/health/body-fat"
                element={
                  <CalculatorLayout
                    config={bodyFatConfig}
                    calculateLogic={bodyFatLogic}
                    ContentComponent={BodyFatContent}
                  />
                }
              />
              <Route
                path="/calculator/health/calorie"
                element={
                  <CalculatorLayout
                    config={calorieConfig}
                    calculateLogic={calorieLogic}
                    ContentComponent={CalorieContent}
                  />
                }
              />
              <Route
                path="/calculator/health/pregnancy"
                element={
                  <CalculatorLayout
                    config={pregnancyConfig}
                    calculateLogic={pregnancyLogic}
                    ContentComponent={PregnancyContent}
                  />
                }
              />
              <Route
                path="/calculator/health/calories-burned"
                element={
                  <CalculatorLayout
                    config={caloriesBurnedConfig}
                    calculateLogic={caloriesBurnedLogic}
                    ContentComponent={caloriesBurnedContent}
                  />
                }
              />
              <Route
                path="/calculator/health/macros"
                element={
                  <CalculatorLayout
                    config={macrosConfig}
                    calculateLogic={macrosLogic}
                    ContentComponent={macrosContent}
                  />
                }
              />
              <Route
                path="/calculator/health/water-intake"
                element={
                  <CalculatorLayout
                    config={waterIntakeConfig}
                    calculateLogic={waterIntakeLogic}
                    ContentComponent={waterIntakeContent}
                  />
                }
              />
              <Route
                path="/calculator/health/ideal-weight"
                element={
                  <CalculatorLayout
                    config={idealWeightConfig}
                    calculateLogic={idealWeightLogic}
                    ContentComponent={idealWeightContent}
                  />
                }
              />
              <Route
                path="/calculator/math/percentage"
                element={
                  <CalculatorLayout
                    config={percentageConfig}
                    calculateLogic={percentageLogic}
                    ContentComponent={percentageContent}
                  />
                }
              />
              <Route
                path="/calculator/math/fraction"
                element={
                  <CalculatorLayout
                    config={fractionConfig}
                    calculateLogic={fractionLogic}
                    ContentComponent={fractionContent}
                  />
                }
              />
              <Route
                path="/calculator/math/scientific"
                element={
                  <CalculatorLayout
                    config={scientificConfig}
                    calculateLogic={scientificLogic}
                    ContentComponent={scientificContent}
                  />
                }
              />
              <Route
                path="/calculator/math/lcm"
                element={
                  <CalculatorLayout
                    config={lcmConfig}
                    calculateLogic={lcmLogic}
                    ContentComponent={lcmContent}
                  />
                }
              />
              <Route
                path="/calculator/math/standard-deviation"
                element={
                  <CalculatorLayout
                    config={standardDeviationConfig}
                    calculateLogic={standardDeviationLogic}
                    ContentComponent={standardDeviationContent}
                  />
                }
              />
              <Route
                path="/calculator/math/mean-median-mode"
                element={
                  <CalculatorLayout
                    config={meanMedianModeConfig}
                    calculateLogic={meanMedianModeLogic}
                    ContentComponent={meanMedianModeContent}
                  />
                }
              />
              <Route
                path="/calculator/math/quadratic"
                element={
                  <CalculatorLayout
                    config={quadraticConfig}
                    calculateLogic={quadraticLogic}
                    ContentComponent={quadraticContent}
                  />
                }
              />
              <Route
                path="/calculator/math/area-perimeter"
                element={
                  <CalculatorLayout
                    config={areaPerimeterConfig}
                    calculateLogic={areaPerimeterLogic}
                    ContentComponent={areaPerimeterContent} 
                  />
                }
              />
              <Route
                path="/calculator/math/volume-surface-area"
                element={
                  <CalculatorLayout
                    config={volumeSurfaceAreaConfig}
                    calculateLogic={volumeSurfaceAreaLogic}
                    ContentComponent={volumeSurfaceAreaContent}
                  />
                }
              />
              <Route
                path="/calculator/math/pythagorean"
                element={
                  <CalculatorLayout
                    config={pythagoreanConfig}
                    calculateLogic={pythagoreanLogic}
                    ContentComponent={pythagoreanContent}
                  />
                }
              />
              <Route
                path="/calculator/math/logarithm"
                element={
                  <CalculatorLayout
                    config={logarithmConfig}
                    calculateLogic={logarithmLogic}
                    ContentComponent={logarithmContent}
                  />
                }
              />
               <Route
                path="/calculator/math/exponent"
                element={
                  <CalculatorLayout
                    config={exponentConfig}
                    calculateLogic={exponentLogic}
                    ContentComponent={exponentContent}
                  />
                }
              />
              <Route
                path="/calculator/math/matrix"
                element={
                  <CalculatorLayout
                    config={matrixConfig}
                    calculateLogic={matrixLogic}
                    ContentComponent={matrixContent}
                  />
                }
              />
              <Route
                path="/calculator/math/probability"
                element={
                  <CalculatorLayout
                    config={probabilityConfig}
                    calculateLogic={probabilityLogic}
                    ContentComponent={probabilityContent}
                  />
                }
              />
              <Route
                path="/calculator/math/percentage-inc-dec"
                element={
                  <CalculatorLayout
                    config={percentageIncDecConfig}
                    calculateLogic={percentageIncDecLogic}
                    ContentComponent={percentageIncDecContent}
                  />
                }
              />
              <Route
                path="/calculator/math/ratio"
                element={
                  <CalculatorLayout
                    config={ratioConfig}
                    calculateLogic={ratioLogic}
                    ContentComponent={ratioContent}
                  />
                }
              />
              <Route
                path="/calculator/math/proportion"
                element={
                  <CalculatorLayout
                    config={proportionConfig}
                    calculateLogic={proportionLogic}
                    ContentComponent={proportionContent}
                  />
                }
              />
              <Route
                path="/calculator/math/profitloss"
                element={
                  <CalculatorLayout
                    config={profitLossConfig}
                    calculateLogic={profitLossLogic}
                    ContentComponent={profitLossContent}
                  />
                }
              />
              <Route
                path="/calculator/math/algebra"
                element={
                  <CalculatorLayout
                    config={algebraConfig}
                    calculateLogic={algebraLogic}
                    ContentComponent={algebraContent}
                  />
                }
              />
              <Route
                path="/calculator/math/permutation-combination"
                element={
                  <CalculatorLayout
                    config={permutationCombinationConfig}
                    calculateLogic={permutationCombinationLogic}
                    ContentComponent={permutationCombinationContent}
                  />
                }
              />
              <Route
                path="/calculator/math/average"
                element={
                  <CalculatorLayout
                    config={averageConfig}
                    calculateLogic={averageLogic}
                    ContentComponent={averageContent}
                  />
                }
              />
            </Routes>
          </div>
          <Footer />
          <Analytics />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

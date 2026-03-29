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


// Conversion Calculators

import { config as unitConfig } from "./registry/conversion/unit/config";
import { calculateLogic as unitLogic } from "./registry/conversion/unit/logic";
import unitContent from "./registry/conversion/unit/content";

import { config as weightConfig } from "./registry/conversion/weight/config";
import { calculateLogic as weightLogic } from "./registry/conversion/weight/logic";
import weightContent from "./registry/conversion/weight/content";

import { config as temperatureConfig } from "./registry/conversion/temperature/config";
import { calculateLogic as temperatureLogic } from "./registry/conversion/temperature/logic";
import temperatureContent from "./registry/conversion/temperature/content";

import { config as volumeConfig } from "./registry/conversion/volume/config";
import { calculateLogic as volumeLogic } from "./registry/conversion/volume/logic";
import volumeContent from "./registry/conversion/volume/content";

import { config as areaConfig } from "./registry/conversion/area/config";
import { calculateLogic as areaLogic } from "./registry/conversion/area/logic";
import areaContent from "./registry/conversion/area/content";

import { config as timeConfig } from "./registry/conversion/time/config";
import { calculateLogic as timeLogic } from "./registry/conversion/time/logic";
import timeContent from "./registry/conversion/time/content";

import { config as cookingConfig } from "./registry/conversion/cooking/config";
import { calculateLogic as cookingLogic } from "./registry/conversion/cooking/logic";
import cookingContent from "./registry/conversion/cooking/content";

import { config as speedConfig } from "./registry/conversion/speed/config";
import { calculateLogic as speedLogic } from "./registry/conversion/speed/logic";
import speedContent from "./registry/conversion/speed/content";

import { config as digitalStorageConfig } from "./registry/conversion/digital-storage/config";
import { calculateLogic as digitalStorageLogic } from "./registry/conversion/digital-storage/logic";
import digitalStorageContent from "./registry/conversion/digital-storage/content";

import { config as dataTransferConfig } from "./registry/conversion/data-transfer/config";
import { calculateLogic as dataTransferLogic } from "./registry/conversion/data-transfer/logic";
import dataTransferContent from "./registry/conversion/data-transfer/content";

import { config as fractionDecimalConfig } from "./registry/conversion/fraction-decimal/config";
import { calculateLogic as fractionDecimalLogic } from "./registry/conversion/fraction-decimal/logic";
import fractionDecimalContent from "./registry/conversion/fraction-decimal/content";

import { config as numberBaseConfig } from "./registry/conversion/number-base/config";
import { calculateLogic as numberBaseLogic } from "./registry/conversion/number-base/logic";
import numberBaseContent from "./registry/conversion/number-base/content";

import { config as romanConfig } from "./registry/conversion/roman/config";
import { calculateLogic as romanLogic } from "./registry/conversion/roman/logic";
import romanContent from "./registry/conversion/roman/content";

import { config as pressureConfig } from "./registry/conversion/pressure/config";
import { calculateLogic as pressureLogic } from "./registry/conversion/pressure/logic";
import pressureContent from "./registry/conversion/pressure/content";

import { config as powerConfig } from "./registry/conversion/power/config";
import { calculateLogic as powerLogic } from "./registry/conversion/power/logic";
import powerContent from "./registry/conversion/power/content";

import { config as energyConfig } from "./registry/conversion/energy/config";
import { calculateLogic as energyLogic } from "./registry/conversion/energy/logic";
import energyContent from "./registry/conversion/energy/content";

import { config as angleConfig } from "./registry/conversion/angle/config";
import { calculateLogic as angleLogic } from "./registry/conversion/angle/logic";
import angleContent from "./registry/conversion/angle/content";

import { config as torqueConfig } from "./registry/conversion/torque/config";
import { calculateLogic as torqueLogic } from "./registry/conversion/torque/logic";
import torqueContent from "./registry/conversion/torque/content";

// Everyday Utility Calculators

import { config as ageConfig } from "./registry/everyday/age/config";
import { calculateLogic as ageLogic } from "./registry/everyday/age/logic";
import ageContent from "./registry/everyday/age/content";

import { config as groceryPriceConfig } from "./registry/everyday/grocery-price/config";
import { calculateLogic as groceryPriceLogic } from "./registry/everyday/grocery-price/logic";
import groceryPriceContent from "./registry/everyday/grocery-price/content";

import { config as mileageConfig } from "./registry/everyday/mileage/config";
import { calculateLogic as mileageLogic } from "./registry/everyday/mileage/logic";
import mileageContent from "./registry/everyday/mileage/content";

import { config as electricityConfig } from "./registry/everyday/electricity/config";
import { calculateLogic as electricityLogic } from "./registry/everyday/electricity/logic";
import electricityContent from "./registry/everyday/electricity/content";

import { config as discountConfig } from "./registry/everyday/discount/config";
import { calculateLogic as discountLogic } from "./registry/everyday/discount/logic";
import discountContent from "./registry/everyday/discount/content";

import { config as dateConfig } from "./registry/everyday/date/config";
import { calculateLogic as dateLogic } from "./registry/everyday/date/logic";
import dateContent from "./registry/everyday/date/content";

import { config as timeDurationConfig } from "./registry/everyday/time-duration/config";
import { calculateLogic as timeDurationLogic } from "./registry/everyday/time-duration/logic";
import timeDurationContent from "./registry/everyday/time-duration/content";

//Education Calculators

import { config as cgpaConfig } from "./registry/education/cgpa/config";
import { calculateLogic as cgpaLogic } from "./registry/education/cgpa/logic";
import cgpaContent from "./registry/education/cgpa/content";

import { config as cgpaSgpaConfig } from "./registry/education/cgpa-sgpa/config";
import { calculateLogic as cgpaSgpaLogic } from "./registry/education/cgpa-sgpa/logic";
import cgpaSgpaContent from "./registry/education/cgpa-sgpa/content";

import { config as attendanceConfig } from "./registry/education/attendance/config";
import { calculateLogic as attendanceLogic } from "./registry/education/attendance/logic";
import attendanceContent from "./registry/education/attendance/content";

import { config as educationLoanConfig } from "./registry/education/education-loan/config";
import { calculateLogic as educationLoanLogic } from "./registry/education/education-loan/logic";
import educationLoanContent from "./registry/education/education-loan/content";

import { config as typingConfig } from "./registry/education/typing/config";
import { calculateLogic as typingLogic } from "./registry/education/typing/logic";
import typingContent from "./registry/education/typing/content";

import { config as typingTestConfig } from "./registry/education/typing-test/config";
import { calculateLogic as typingTestLogic } from "./registry/education/typing-test/logic";
import typingTestContent from "./registry/education/typing-test/content";

import { config as wordCounterConfig } from "./registry/education/word-counter/config";
import { calculateLogic as wordCounterLogic } from "./registry/education/word-counter/logic";
import wordCounterContent from "./registry/education/word-counter/content";

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
              <Route
                path="/calculator/conversion/unit"
                element={
                  <CalculatorLayout
                    config={unitConfig}
                    calculateLogic={unitLogic}
                    ContentComponent={unitContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/weight"
                element={
                  <CalculatorLayout
                    config={weightConfig}
                    calculateLogic={weightLogic}
                    ContentComponent={weightContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/temperature"
                element={
                  <CalculatorLayout
                    config={temperatureConfig}
                    calculateLogic={temperatureLogic}
                    ContentComponent={temperatureContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/volume"
                element={
                  <CalculatorLayout
                    config={volumeConfig}
                    calculateLogic={volumeLogic}
                    ContentComponent={volumeContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/area"
                element={
                  <CalculatorLayout
                    config={areaConfig}
                    calculateLogic={areaLogic}
                    ContentComponent={areaContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/time"
                element={
                  <CalculatorLayout
                    config={timeConfig}
                    calculateLogic={timeLogic}
                    ContentComponent={timeContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/cooking"
                element={
                  <CalculatorLayout
                    config={cookingConfig}
                    calculateLogic={cookingLogic}
                    ContentComponent={cookingContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/speed"
                element={
                  <CalculatorLayout
                    config={speedConfig}
                    calculateLogic={speedLogic}
                    ContentComponent={speedContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/digital-storage"
                element={
                  <CalculatorLayout
                    config={digitalStorageConfig}
                    calculateLogic={digitalStorageLogic}
                    ContentComponent={digitalStorageContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/data-transfer"
                element={
                  <CalculatorLayout
                    config={dataTransferConfig}
                    calculateLogic={dataTransferLogic}
                    ContentComponent={dataTransferContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/fraction-decimal"
                element={
                  <CalculatorLayout
                    config={fractionDecimalConfig}
                    calculateLogic={fractionDecimalLogic}
                    ContentComponent={fractionDecimalContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/number-base"
                element={
                  <CalculatorLayout
                    config={numberBaseConfig}
                    calculateLogic={numberBaseLogic}
                    ContentComponent={numberBaseContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/roman"
                element={
                  <CalculatorLayout
                    config={romanConfig}
                    calculateLogic={romanLogic}
                    ContentComponent={romanContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/pressure"
                element={
                  <CalculatorLayout
                    config={pressureConfig}
                    calculateLogic={pressureLogic}
                    ContentComponent={pressureContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/power"
                element={
                  <CalculatorLayout
                    config={powerConfig}
                    calculateLogic={powerLogic}
                    ContentComponent={powerContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/energy"
                element={
                  <CalculatorLayout
                    config={energyConfig}
                    calculateLogic={energyLogic}
                    ContentComponent={energyContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/angle"
                element={
                  <CalculatorLayout
                    config={angleConfig}
                    calculateLogic={angleLogic}
                    ContentComponent={angleContent}
                  />
                }
              />
              <Route
                path="/calculator/conversion/torque"
                element={
                  <CalculatorLayout
                    config={torqueConfig}
                    calculateLogic={torqueLogic}
                    ContentComponent={torqueContent}
                  />
                }
              />
              <Route
                path="/calculator/everyday/age"
                element={
                  <CalculatorLayout
                    config={ageConfig}
                    calculateLogic={ageLogic}
                    ContentComponent={ageContent}
                  />
                }
              />
              <Route
                path="/calculator/everyday/grocery-price"
                element={
                  <CalculatorLayout
                    config={groceryPriceConfig}
                    calculateLogic={groceryPriceLogic}
                    ContentComponent={groceryPriceContent}
                  />
                }
              />
              <Route
                path="/calculator/everyday/mileage"
                element={
                  <CalculatorLayout
                    config={mileageConfig}
                    calculateLogic={mileageLogic}
                    ContentComponent={mileageContent}
                  />
                }
              />
              <Route
                path="/calculator/everyday/electricity"
                element={
                  <CalculatorLayout
                    config={electricityConfig}
                    calculateLogic={electricityLogic}
                    ContentComponent={electricityContent}
                  />
                }
              />
              <Route
                path="/calculator/everyday/discount"
                element={
                  <CalculatorLayout
                    config={discountConfig}
                    calculateLogic={discountLogic}
                    ContentComponent={discountContent}
                  />
                }
              />
              <Route
                path="/calculator/everyday/date"
                element={
                  <CalculatorLayout
                    config={dateConfig}
                    calculateLogic={dateLogic}
                    ContentComponent={dateContent}
                  />
                }
              />
              <Route
                path="/calculator/everyday/time-duration"
                element={
                  <CalculatorLayout
                    config={timeDurationConfig}
                    calculateLogic={timeDurationLogic}
                    ContentComponent={timeDurationContent}
                  />
                }
              />
              <Route
                path="/calculator/education/cgpa"
                element={
                  <CalculatorLayout
                    config={cgpaConfig}
                    calculateLogic={cgpaLogic}
                    ContentComponent={cgpaContent}
                  />
                }
              />
              <Route
                path="/calculator/education/cgpa-sgpa"
                element={
                  <CalculatorLayout
                    config={cgpaSgpaConfig}
                    calculateLogic={cgpaSgpaLogic}
                    ContentComponent={cgpaSgpaContent}
                  />
                }
              />
              <Route
                path="/calculator/education/attendance"
                element={
                  <CalculatorLayout
                    config={attendanceConfig}
                    calculateLogic={attendanceLogic}
                    ContentComponent={attendanceContent}
                  />
                }
              />
              <Route
                path="/calculator/education/education-loan"
                element={
                  <CalculatorLayout
                    config={educationLoanConfig}
                    calculateLogic={educationLoanLogic}
                    ContentComponent={educationLoanContent}
                  />
                }
              />
              <Route
                path="/calculator/education/typing"
                element={
                  <CalculatorLayout
                    config={typingConfig}
                    calculateLogic={typingLogic}
                    ContentComponent={typingContent}
                  />
                }
              />
              <Route
                path="/calculator/education/typing-test"
                element={
                  <CalculatorLayout
                    config={typingTestConfig}
                    calculateLogic={typingTestLogic}
                    ContentComponent={typingTestContent}
                  />
                }
              />
              <Route
                path="/calculator/education/word-counter"
                element={
                  <CalculatorLayout
                    config={wordCounterConfig}
                    calculateLogic={wordCounterLogic}
                    ContentComponent={wordCounterContent}
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

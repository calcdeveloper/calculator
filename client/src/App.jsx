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

function App() {
  return (
    <Router>
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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

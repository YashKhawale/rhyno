import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Compare from "./components/Compare";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import SE03Lite from "./components/products/SE03Lite";
import SE03 from "./components/products/SE03";
import SE03Max from "./components/products/SE03Max";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Usp from "./components/Usp";
import LfpBattery from "./components/UspPages/LfpBattery";
import WiderTyres from "./components/UspPages/WiderTyres";
import RangePrediction from "./components/UspPages/RangePrediction";
import Experience from "./components/UspPages/Experience";
import Design from "./components/UspPages/Design";
import Payment from "./components/Payment";

function App() {
  // Dark Mode Feature Start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // Dark Mode Feature End

  return (
    <Router>
      <div className="bg-n-2 dark:bg-n-9 w-full h-screen">
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductList />
                <Compare />
                <Usp theme={theme} />
                <About theme={theme} />
                <Contact />
              </>
            }
          />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/se03lite" element={<SE03Lite theme={theme} />} />
          <Route path="/se03" element={<SE03 theme={theme} />} />
          <Route path="/se03max" element={<SE03Max theme={theme} />} />
          <Route path="/lfp-battery" element={<LfpBattery />} />
          <Route path="/wider-tyres" element={<WiderTyres />} />
          <Route path="/range-prediction" element={<RangePrediction />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/design" element={<Design />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>

        <div className="">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

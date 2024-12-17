import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import MensFashionPage from "./pages/MensFashionPage";
import WomensFashionPage from "./pages/WomensFashionPage";
import KidsFashionPage from "./pages/KidsFashionPage";
import ElectronicsPage from "./pages/ElectronicsPage";
import AboutPage from "./pages/AboutPage";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mens-fashion" element={<MensFashionPage />} />
        <Route path="/womens-fashion" element={<WomensFashionPage/>} />
        <Route path="/kids-fashion" element={<KidsFashionPage/>} />
        <Route path="/electronics" element={<ElectronicsPage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

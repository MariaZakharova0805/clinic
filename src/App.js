import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";


//разделы
import Servesies from "./components/Servecies/Servesies.jsx";
import Doctors from "./components/Doctors/Doctors.jsx";
import SpecialOffersers from "./components/SpecialOffers/SpecialOffers.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="app_wrapper_content">
        <Routes>
          <Route path="/servesies" element={<Servesies/>} />
          <Route path="/specialists" element={<Doctors/>} />
          <Route path="/specialOffers" element={<SpecialOffersers/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageContainer from "../Containers/Home";
import AboutPageContainer from "../Containers/About";
import ContactPageContainer from "../Containers/Contact";
import CartPageContainer from "../Containers/Cart";
import HeaderComponents from "../Components/Header";
import LoginPageContainer from "../Containers/Login";

const RouteConfigPageComponents = () => {
  return (
    <BrowserRouter>
      <HeaderComponents />
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/about" element={<AboutPageContainer />} />
        <Route path="/contact" element={<ContactPageContainer />} />
        <Route path="/cart" element={<CartPageContainer />} />
        <Route path="/login" element={<LoginPageContainer   />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfigPageComponents;

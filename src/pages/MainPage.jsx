import React from "react";
import Navbar from "../components/mainPage/Navbar";
import Home from "../components/mainPage/Home";
import Individual from "../components/mainPage/Individual";
import HowItWorks from "../components/mainPage/HowItWorks";
import FreeForever from "../components/mainPage/FreeForever";
import Demo from "../components/mainPage/Demo";
import Footer from "../components/mainPage/Footer";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Individual />
      <HowItWorks />
      <FreeForever />
      <Demo />
      <Footer />
    </>
  );
};

export default MainPage;

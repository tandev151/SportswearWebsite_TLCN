import React from "react";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import AboutContainer from "../components/layout/about/AboutContainer";
import Policy from "../components/layout/content/policy/Policy";
import Footer from "../components/layout/footer/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutContainer />
      <Policy />
      <Footer />
    </div>
  );
};

export default About;

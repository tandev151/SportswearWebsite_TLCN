import React from "react";
import { Redirect } from "react-router";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import Slides from "../components/layout/slides/Slides";
import Content from "../components/layout/content/Content";
import Footer from "../components/layout/footer/Footer";
const Home = () => {
  return (
    //   If user don't login , system will redirect to login page
    // <Redirect to="/login" />
    <div>
      <Navbar />
      <Header />
      <Slides />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;

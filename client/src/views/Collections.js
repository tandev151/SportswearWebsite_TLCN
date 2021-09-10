import React from "react";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import ProductCollection from "../components/pages/ProductCollection";
import Policy from "../components/layout/content/policy/Policy";
import Footer from "../components/layout/footer/Footer";
const Collections = () => {
  return (
    //   If user don't login , system will redirect to login page
    // <Redirect to="/login" />
    <div>
      <Navbar />
      <Header />

      <ProductCollection />
      <Policy />
      <Footer />
    </div>
  );
};

export default Collections;

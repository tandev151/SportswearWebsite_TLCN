import React from "react";
import Detail from "../components/layout/details/Detail";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import Policy from "../components/layout/content/policy/Policy";
import Footer from "../components/layout/footer/Footer";

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Detail />
      <Policy />
      <Footer />
    </div>
  );
};

export default ProductDetails;

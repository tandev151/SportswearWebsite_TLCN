import React from "react";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import CartContainer from "../components/layout/cart/CartContainer";
import Policy from "../components/layout/content/policy/Policy";
import Footer from "../components/layout/footer/Footer";
const Cart = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CartContainer />
      <Policy />
      <Footer />
    </div>
  );
};

export default Cart;

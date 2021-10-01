import React from "react";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import ContactContainer from "../components/layout/contact/ContactContainer";
import Policy from "../components/layout/content/policy/Policy";
import Footer from "../components/layout/footer/Footer";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ContactContainer />
      <Policy />
      <Footer />
    </div>
  );
};

export default Contact;

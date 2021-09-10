import React from "react";
import Header from "../../components/layout/header/Header";
import Navbar from "../../components/layout/navbar/Navbar";
import RegisterForm from "../../components/layout/form/RegisterForm";
import Policy from "../../components/layout/content/policy/Policy";
import Footer from "../../components/layout/footer/Footer";
const Register = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <RegisterForm />
      <Policy />
      <Footer />
    </div>
  );
};

export default Register;

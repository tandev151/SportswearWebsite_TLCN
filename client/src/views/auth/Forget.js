import React from "react";
import Header from "../../components/layout/header/Header";
import Navbar from "../../components/layout/navbar/Navbar";
import ForgetForm from "../../components/layout/form/ForgetForm";
import Policy from "../../components/layout/content/policy/Policy";
import Footer from "../../components/layout/footer/Footer";
const Login = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ForgetForm />
      <Policy />
      <Footer />
    </div>
  );
};

export default Login;

import React from "react";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import LoginForm from "../components/layout/form/LoginForm";
import Policy from "../components/layout/content/policy/Policy";
import Footer from "../components/layout/footer/Footer";
const Login = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <LoginForm />
      <Policy />
      <Footer />
    </div>
  );
};

export default Login;

import React from "react";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import AccountContainer from "../components/layout/account/AccountContainer";
import Policy from "../components/layout/content/policy/Policy";
import Footer from "../components/layout/footer/Footer";
const Account = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AccountContainer />
      <Policy />
      <Footer />
    </div>
  );
};

export default Account;

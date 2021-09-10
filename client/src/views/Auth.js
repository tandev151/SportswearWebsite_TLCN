import React from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Forget from "./auth/Forget";
const Auth = ({ authRoute }) => {
  return (
    <>
      {authRoute === "login" && <Login />}
      {authRoute === "register" && <Register />}
      {authRoute === "forget" && <Forget />}
    </>
  );
};

export default Auth;

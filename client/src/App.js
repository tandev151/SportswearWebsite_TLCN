import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./components/HOC/PrivateRoute";
import AuthRoute from "./components/HOC/AuthRoute";
import Home from "./views/Home";
import Collections from "./views/Collections";
import "./scss/app.scss";
import ProductDetails from "./views/ProductDetails";
import Cart from "./views/Cart";
import Account from "./views/Account";
import Checkout from "./views/Checkout";
import Contact from "./views/Contact";
import About from "./views/About";
import Login from "./views/Login";
import Register from "./views/Register";
import Forget from "./views/Forget";
import { isUserLoggedIn } from "./features/auth/authSlice";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/collections" component={Collections} />
        <Route exact path="/product" component={ProductDetails} />
        <PrivateRoute exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/account" component={Account} />
        <PrivateRoute exact path="/checkout" component={Checkout} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <AuthRoute exact path="/forget" component={Forget} />
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./views/Auth";
import Home from "./views/Home";
import Collections from "./views/Collections";
import "./scss/app.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/collections" component={Collections} />
        <Route
          exact
          path="/login"
          render={(props) => <Auth {...props} authRoute="login" />}
        />
        <Route
          exact
          path="/register"
          render={(props) => <Auth {...props} authRoute="register" />}
        />
        <Route
          exact
          path="/forget"
          render={(props) => <Auth {...props} authRoute="forget" />}
        />
      </Switch>
    </Router>
  );
}

export default App;

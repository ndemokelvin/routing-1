import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import ListingsPage from "./pages/listings";

// Browser Router -> Used for handling dynamic routing
// Hashrouter -> Used for handling static routing/static requests.

// Switch -> Used for handling multiple routes

// /about, /home, /products -> get and endpoint from your browser, match to the specific route.

//3. Route

// -> Declare a route, together with the appropriate component.
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/listings" component={ListingsPage} exact />
      </Switch>
    </Router>
  );
};

export default App;

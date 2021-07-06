import React from "react";
import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div>
        <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

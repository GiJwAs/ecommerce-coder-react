import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Page404 from "../pages/Page404";
import CartPage from "../pages/CartPage";

const AppRouter = () => {
  return (
    <Router>
        <NavBar background={'transparent'} />
        <Switch>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/detail/:id">
            <DetailPage />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
    </Router>
  );
};

export default AppRouter;

import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";

const Router = () => {
  return (
    <BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Redirect from="*" to="/" />
			</Switch>
    </BrowserRouter>
  );
}

export default Router;
import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login";
import Logout from "./pages/Logout";
import { PrivateRoute, UnPrivateRoute } from "./services/PrivateRoute";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/logout" element={<Logout />} />
        </Route>

        <Route path="/" element={<UnPrivateRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

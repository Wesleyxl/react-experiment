import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute: React.FC = () => {
  const token = localStorage.getItem("token");

  if (!token || token === "") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export const UnPrivateRoute: React.FC = () => {
  const token = localStorage.getItem("token");

  if (!token || token === "") {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const PrivateRoute = ({ element: Element, ...rest }) => {
  console.log("privit rout ******* ",AuthService.getCurrentUser);
  const currentUser = AuthService.getCurrentUser();
  return currentUser ? <Element /> : <Navigate to="/signin" />;
};

export default PrivateRoute;

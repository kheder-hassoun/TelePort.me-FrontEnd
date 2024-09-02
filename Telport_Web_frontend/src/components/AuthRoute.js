// src/components/AuthRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const AuthRoute = ({ element: Element, ...rest }) => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <Route
      {...rest}
      element={currentUser ? <Element /> : <Navigate to="/signin" />}
    />
  );
};

export default AuthRoute;

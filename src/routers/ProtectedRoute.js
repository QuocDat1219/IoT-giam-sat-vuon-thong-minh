import React from "react";
import useAuth from "../custom-hooks/useAuth";
import { Navigate, Outlet, Route } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const currentUser = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

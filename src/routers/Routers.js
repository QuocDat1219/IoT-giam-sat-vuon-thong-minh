import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/Home/Home";
// import ProtectedRoute from "./ProtectedRoute";
import useAuth from "../custom-hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { async } from "@firebase/util";

const Routers = () => {
  const ProtectedRoute = ({ children }) => {
    const currentUser = useAuth();
    const Navigate = useNavigate();

    const [islogin, useusLogin] = useState(false);

    useEffect(() => {
      const check = () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            useusLogin(true);
          } else {
            useusLogin(false);
          }
        });
      };
      check();
    });

    if (islogin !== true) {
      return Navigate("/login");
    } else return children;
  };
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;

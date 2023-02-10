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
import LineChart from "../components/BieuDo/LineCharts";
import SensorManager from "../components/SensorManager/SensorManager";
import UserDetails from "../components/Auth/userDetails";
import UserPro from "../components/User/User";
const Routers = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Routes>
         <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route
            exact
            path="/userDetails"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route
            path="/login"
            element={<Login/>}
          />
          <Route
            path="/Register"
            element={<Register/>}
          />
      <Route 
        path="/bieudo"
        element={isLoggedIn == "true" ? <LineChart /> : <Login />}
      />
      <Route 
        path="/sensor"
        element={isLoggedIn == "true" ? <SensorManager /> : <Login />}
      />
      <Route 
        path="/user"
        element={isLoggedIn == "true" ? <UserPro /> : <Login />}
      />
    </Routes>
  );
};

export default Routers;

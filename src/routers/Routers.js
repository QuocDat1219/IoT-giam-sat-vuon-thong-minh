import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/Home/Home";
import LineChart from "../components/BieuDo/LineCharts";
import SensorManager from "../components/SensorManager/dataTable";
import UserPro from "../components/User/User";
import AdminHome from "../components/Auth/AdminHome";
import LandingPage from "../components/LandingPage/LandingPage";
import BangDuLieu from "../components/BangData/DataTable";
import ControlDevice from "../components/ControlDevice/ControlDevice";
import Notfound from "../components/404/NotFound";
import axios from "axios"
import React, { useContext, useEffect, useState, useReducer } from "react";
const Routers = () => {
  const [tokencheck, setTokenCheck] = useState(false);
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const isAdminIn = window.localStorage.getItem("isadmin");

  useEffect(() => {
    axios.post('https://api-vuon-thong-minh.onrender.com/users/user-data', {
      token: window.localStorage.getItem("token"),
    })
      .then((data) => {
  
       if(data.data.data == "token expired"){
        window.localStorage.clear();
        window.localStorage.setItem("loggedIn", "false");
        window.localStorage.getItem("loggedIn");
 
       }
      })
  },[])
  


  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      
      <Route
        exact
        path="/adminhome"
        element={
          isLoggedIn == "true" && isAdminIn == "true" ? <AdminHome /> : <Home />
        }
      />
      <Route
        exact
        path="/home"
        element={
          isLoggedIn == "true" && isAdminIn == "false" && tokencheck == false? <Home /> : <Login />
        }
      />
      <Route
        path="/login"
        element={
          isLoggedIn == "false" ? (
            <Login />
          ) : isAdminIn == "true" ? (
            <AdminHome />
          ) : (
            <Home />
          )
        }
      />
      <Route
        path="/Register"
        element={
          isLoggedIn == "false" ? (
            <Register />
          ) : isAdminIn == "true" ? (
            <AdminHome />
          ) : (
            <Home />
          )
        }
      />

      <Route
        path="/bieudo"
        element={
          isLoggedIn == "true" && isAdminIn == "false" ? (
            <LineChart />
          ) : (
            <Login />
          )
        }
      />
      <Route
        path="/sensor"
        element={
          isLoggedIn == "true" && isAdminIn == "false" ? (
            <SensorManager />
          ) : (
            <Login />
          )
        }
      />
      <Route
        path="/user"
        element={
          isLoggedIn == "true" && isAdminIn == "false" ? <UserPro /> : <Login />
        }
      />

      <Route
        path="/bangdulieu"
        element={
          isLoggedIn == "true" && isAdminIn == "false" ? (
            <BangDuLieu />
          ) : (
            <Login />
          )
        }
      />

      <Route
        path="/control"
        element={
          isLoggedIn == "true" && isAdminIn == "false" ? (
            <ControlDevice />
          ) : (
            <Login />
          )
        }
      />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Routers;

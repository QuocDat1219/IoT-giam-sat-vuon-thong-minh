import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/Home/Home";
import LineChart from "../components/BieuDo/LineCharts";
import SensorManager from "../components/SensorManager/dataTable";
import UserPro from "../components/User/User";
import AdminHome from "../components/Auth/AdminHome";
import LandingPage from "../components/LandingPage/LandingPage";
const Routers = () => {

  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const isAdminIn = window.localStorage.getItem("isadmin");

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <LandingPage/>
         }
      />
      <Route
        exact
        path="/adminhome"
        element={
          isLoggedIn == "true" && isAdminIn == "true" ?
            <AdminHome /> :
            <Home />
        }
      />
      <Route
        exact
        path="/home"
        element={
          isLoggedIn == "true" && isAdminIn == "false" ?
            <Home /> :
            <Login />
        }
      />

      <Route
        path="login"
        element={<Login />}
      />
      <Route
        path="/Register"
        element={<Register />}
      />
      <Route
        path="/bieudo"
        element={
          isLoggedIn == "true" && isAdminIn == "false" ?
            <LineChart /> :
            <Login />
        }

      />
      <Route
        path="/sensor"
        element={
          isLoggedIn == "true" && isAdminIn == "false" ?
            <SensorManager /> :
            <Login />
        }

      />
      <Route
        path="/user"
        element={
          isLoggedIn == "true" && isAdminIn == "false" ?
            <UserPro /> :
            <Login />
        }
      />
    </Routes>
  );
};

export default Routers;

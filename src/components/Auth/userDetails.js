import React, { Component, useEffect, useState } from "react";
import Home from "../Home/Home"
import AdminHome from "./AdminHome";
export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  
  useEffect(() => {
    fetch("https://api-vuon-thong-minh.onrender.com/users/user-data", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.userType == "Admin") {
          setAdmin(true);
          console.log(admin);
        }
        window.localStorage.setItem('Emaildetails',data.data.email);
        setUserData(data.data);
    
        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "/login";
        }
      });
  }, []);

  return admin ? <AdminHome /> : <Home userData={userData} />;
}

import React, { useEffect, useState } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Background from "../images/login.jpg";
import icon from "../images/IOT.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    if (email == "" || password == "") {
      toast.warning("Vui lòng nhập đủ thông tin");
    } else {
      toast("Đang xử lý");

      document.getElementById("submit").disabled = true;

      fetch("https://api-vuon-thong-minh.onrender.com/users/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            toast.success("Đăng nhập thành công");
            window.localStorage.setItem("token", data.data);

            loginRequest();
          } else {
            toast.error("Sai email hoặc mật khẩu! ");
            document.getElementById("submit").disabled = false;
          }
          
        });
      const loginRequest = async () => {
        await fetch(
          "https://api-vuon-thong-minh.onrender.com/users/user-data",
          {
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
          }
        )
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);

            window.localStorage.setItem("loggedIn", "true");
            window.localStorage.setItem("Emaildetails", data.data.email);
            window.localStorage.setItem(
              "Namedateils",
              data.data.fname + " " + data.data.lname
            );
            window.localStorage.setItem("dtUser", JSON.stringify(data.data));

            if (data.data.userType == "Admin") {
              window.localStorage.setItem("isadmin", "true");
              window.location.href = "/adminhome";
            } else {
              window.localStorage.setItem("isadmin", "false");
              window.location.href = "/home";
            }

            if (data.data == "token expired") {
              alert("Token expired login again");
              window.localStorage.clear();
              window.location.href = "/login";
              
            }
          });
      };
    }
  }

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-white-900 bg-cover bg-no-repeat"
      style={{
        //
        background: "linear-gradient(90deg,rgb(36, 192, 60) 10%,rgb(63, 240, 78) 85%)"
      }}
    >
      <ToastContainer />
      <div
        // className="rounded-xl bg-white bg-opacity-50 px-16 py-7 shadow-lg backdrop-blur-md max-sm:px-8"
        className="bg-white rounded-xl bg-white-700 bg-opacity-100 px-16 py-7"
        style={{ backdropFilter: " blur(0px)", boxShadow:"2px 4px 10px 1px rgb(201 201 201 / 70%)" }}
      >
        <div className="text-black">
          <div className="mb-4 flex flex-col items-center">
            <img src={icon} width="100" alt="" srcset="" />
            <h1
              className="mb-2 text-2xl"
              style={{ fontSize: "30px", fontFamily: "S'aira', sans-serif" }}
            >
              GREEN HOUSE
            </h1>
            <span className="text-black-500">Enter Login Details</span>
          </div>
          <form>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-amber-300 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-gray-900 shadow-lg outline-none backdrop-blur-md"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-amber-300 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-gray-900 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="name"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8 mb-4 flex justify-center text-lg text-black">
              <button
                onClick={handleSubmit}
                id="submit"
                className="rounded-3xl bg-amber-300 bg-opacity-70 px-10 py-2 text-black shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </button>
            </div>
            <Link to={"/Register"}>
              {" "}
              <span className="flex justify-center items-center mt-3 mb-4">
                Đăng ký tài khoản ?
              </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

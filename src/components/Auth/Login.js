import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "../images/IOT.png";
import PuffLoader from "react-spinners/PuffLoader";
import axios from "axios"
import "./login.css";
import "./button.scss";
import Header from "../LandingPage/Header/Headers";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
  

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    if (email == "" || password == "") {
      toast.warning("Vui lòng nhập đủ thông tin");
      setIsLoading(false);
    } else {
      // toast("Đang xử lý");
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
            setIsLoading(false);
            toast.error("Sai email hoặc mật khẩu! ");
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
              setIsLoading(false);
              window.localStorage.setItem("isadmin", "true");
              window.location.href = "/adminhome";
            } else {
              setIsLoading(false);
              window.localStorage.setItem("isadmin", "false");
              window.location.href = "/home";
            }

            if (data.data == "token expired") {
              setIsLoading(false);
              alert("Token expired login again");
              window.localStorage.clear();
              window.location.href = "/login";
            }
          });
      };
    }
  }

  return (
    <div>
      <div className="parent clearfix">
        <div className="bg-illustration">
          <div class="burger-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ToastContainer pauseOnHover={false} draggable={false} />
        <div class="login">
          <div class="container">
            <Link to={"/"}>
              <img
                src={icon}
                alt="logo"
                width="100px"
                height="100px"
                style={{
                  position: "absolute",
                  marginLeft: "500px",
                  marginTop: "-100px",
                }}
              ></img>
            </Link>
            <h1>
              Đăng nhập
              <br />
              IoT -<span style={{ color: "#07bc0c" }}> Green House</span>
            </h1>

            <div class="login-form">
              <form action="">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div
                  class="forget-pass"
                  style={{
                    textAlign: "right",
                  }}
                >
                  <Link to={"/Register"}>
                    <a href="#">
                      Chưa có tài khoản? <b>Đăng kí tại đây!</b>
                    </a>
                  </Link>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  id="submit"
                  className="btn-dn"
                >
                  {isLoading ? (
                    <div className="flex justify-center items-center">
                      <PuffLoader color="#eaeae8" size={40} />
                    </div>
                  ) : (
                    "Đăng nhập"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

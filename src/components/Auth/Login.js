import React, { useEffect, useState } from "react";
import { Link, useNavigate,Routes,Route } from "react-router-dom";  

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
      console.log(email,password);
      fetch("https://api-vuon-thong-minh.onrender.com/users/login-user",{
        method: "POST",
        headers:{
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
        alert("Đăng nhập thành công");
        window.localStorage.setItem("token", data.data);
        window.localStorage.setItem("loggedIn", true);

        window.location.href = "./userDetails";
      }else{
        alert("Sai tên thông tin tài khoản !");
      }
    });
  }
  return (
    
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
      }}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img
              src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg"
              width="150"
              alt=""
              srcset=""
            />
            <h1 className="mb-2 text-2xl">Instagram</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="name"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                onClick={handleSubmit}
                className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </button>
            </div>
            <Link to={"/register"}>
              {" "}
              <span className="flex justify-center items-center mt-3">
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

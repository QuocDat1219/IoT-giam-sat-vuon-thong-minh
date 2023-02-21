import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../images/login.jpg";
import icon from "../images/IOT.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");

  //Biểu thức chính quy
  var checkMail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var checkPassword =
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserType("");

    //Kiểm tra dữ liệu nhập của người dùng
    if (fname == "" || lname == "" || email == "" || password == "") {
      toast("Vui lòng nhập đầy đủ thông tin đăng ký!");
      return;
    } else if (!checkPassword.test(password) || password.length == "") {
      toast.error("Mật khẩu không hợp lệ!");
      return;
    } else if (!checkMail.test(email) || email.length == "") {
      toast.error("Email không hợp lệ!");
      return;
    } else if (password != confirmPassword) {
      toast.error("Mật khẩu và nhập lại mật khẩu không trùng khớp...");
      return;
    }
    //Xử lý đăng ký
    toast("Đang xử lý...");
    fetch("https://api-vuon-thong-minh.onrender.com/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
        userType,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error == "User Exists") {
          toast.warning("Email already registered");
        } else if (data.status == "ok") {
          createData();
        } else {
          toast.error("Đăng ký không thành công");
        }
      });
  };
  const createData = async () => {
    await axios
      .post("https://api-vuon-thong-minh.onrender.com/datas/createdata", {
        email: window.localStorage.getItem("Emaildetails"),
        nhietdo: 0,
        doam: 0,
        mhsensor: 0,
        ultrasonic: 0,
        connect: "disconnect",
        control: {},
        sensor: [
          {
            name: "DHT",
            status: "0",
            timeword: "15:00",
            timeout: "2:00",
            nofi: "Email",
          },
          {
            name: "Ultrasonic",
            status: "0",
            timeword: "15:00",
            timeout: "2:00",
            nofi: "Email",
          },
          {
            name: "MH",
            status: "0",
            timeword: "15:00",
            timeout: "2:00",
            nofi: "Email",
          },
        ],
      })
      .then((data) => {
        console.log(data);
        toast.success("Đăng ký thành công");
      });
  };
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{
        background: "linear-gradient(90deg,rgb(36, 192, 60) 10%,rgb(63, 240, 78) 85%)"
      }}
    >
      <ToastContainer />
      {/* rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 */}
      <div
        className="bg-white rounded-xl bg-white-700 bg-opacity-100 px-16 "
        style={{ backdropFilter: " blur(0px)", boxShadow:"2px 4px 10px 1px rgb(201 201 201 / 70%)" }}
      >
        <div className="text-black">
          <div className="mb-4 flex flex-col items-center">
            <img src={icon} width="100" alt="" />
            <h1
              className="mb-2 text-2xl"
              style={{ fontSize: "30px", fontFamily: "'Saira', sans-serif" }}
            >
              GREEN HOUSE
            </h1>
            <span className="text-black-500">Enter Register Details</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-lg">
              <input
                  className="rounded-3xl border-none bg-amber-300 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-gray-900 shadow-lg outline-none backdrop-blur-md"
                type="text"
                placeholder="Nhập First Name "
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                 className="rounded-3xl border-none bg-amber-300 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-gray-900 shadow-lg outline-none backdrop-blur-md"
                type="text"
                placeholder="Nhập Last Name "
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="mb-4 text-lg">
              <input
               className="rounded-3xl border-none bg-amber-300 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-gray-900 shadow-lg outline-none backdrop-blur-md"
                type="email"
                placeholder="Nhập email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 text-lg">
              <input
               className="rounded-3xl border-none bg-amber-300 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-gray-900 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                placeholder="Nhập password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                 className="rounded-3xl border-none bg-amber-300 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-gray-900 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                placeholder="Nhập lại password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mt-2 mb-4 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl border-none bg-amber-300 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-gray-900 shadow-lg outline-none backdrop-blur-md"
              >
                Đăng ký
              </button>
            </div>
          </form>
          <Link to={"/login"}>
            {" "}
            <span className="flex justify-center items-center mt-2 mb-4 ">
              Có tài khoản ? Đăng nhập
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
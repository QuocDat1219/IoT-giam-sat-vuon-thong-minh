import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../images/login.jpg";
import icon from "../images/IOT.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    fetch("https://api-vuonthongminh.vercel.app/users/register", {
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
      .post("https://api-vuonthongminh.vercel.app/datas/createdata", {
        email: email,
        nhietdo: 0,
        doam: 0,
        mhsensor: 0,
        ultrasonic: 0,
        connect: "disconnect",
        reset: "0",
        control: [
          {
            name: "Control 1",
            status: 0,
            digital: "D4"
          },
          {
            name: "Control 2",
            status: 0,
            digital: "D7"
          },
          {
            name: "Control 3",
            status: 0,
            digital: "D8"
          }
        ],
        sensor: [
          {
            name: "DHT",
            status: "0",
            timeword: "6:00",
            timeout: "15:00",
            nofi: "Email",
            limit: 0,
          },
          {
            name: "Ultrasonic",
            status: "0",
            timeword: "6:00",
            timeout: "15:00",
            nofi: "Email",
            limit: 0,
          },
          {
            name: "MH",
            status: "0",
            timeword: "6:00",
            timeout: "15:00",
            nofi: "Email",
            limit: 0,
          },
        ],
      })
      .then((data) => {
        console.log(data);
        toast.success("Đăng ký thành công");
        window.location.href("/login");
      });
  };
  return (
    
    <div>
      <div>
        <div className="parent clearfix">
          <div className="bg-illustration">
            <div class="burger-btn">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ToastContainer />
          <div class="login">
            <div class="container">
            <img src={icon} alt="logo" width="100px" height="100px" style={{position:"absolute", marginLeft:"500px", marginTop:"-100px"}}></img>
              <h1>
                Đăng kí tài khoản
                <br />
                IoT -<span style={{ color: "#07bc0c" }}> Green House</span>
              </h1>

              <div class="login-form">
                <form action="" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Nhập First name "
                    onChange={(e) => setFname(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Nhập Last name"
                    onChange={(e) => setLname(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="E-mail "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <div
                    class="btn_DK"
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      color: "#918F8F",
                      textAlign: "right",
                    }}
                  >
                    <Link to={"/login"}>
                      <a href="#">
                        Đã có tài khoản? <b>Đăng nhập tại đây!</b>
                      </a>
                    </Link>
                  </div>

                  <button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <div className="flex justify-center items-center">
                        <PuffLoader color="#4cd137" size={30} />
                      </div>
                    ) : (
                      "Đăng kí"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;

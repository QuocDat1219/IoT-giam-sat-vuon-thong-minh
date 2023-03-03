import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../images/login.jpg";
import icon from "../images/IOT.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
// import "./button.scss";
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setUserType("");
    //Kiểm tra dữ liệu nhập của người dùng
    if (fname == "" || lname == "" || email == "" || password == "") {
      toast.warning("Vui lòng nhập đầy đủ thông tin đăng ký!");
      setIsLoading(false);
      return;
    } else if (!checkPassword.test(password) || password.length == "") {
      toast.warning("Mật khẩu không hợp lệ!");
      setIsLoading(false);
      return;
    } else if (!checkMail.test(email) || email.length == "") {
      toast.warning("Email không hợp lệ!");
      setIsLoading(false);
      return;
    } else if (password != confirmPassword) {
      toast.warning("Mật khẩu và nhập lại mật khẩu không trùng khớp...");
      setIsLoading(false);
      return;
    }
    //Xử lý đăng ký
    // toast("Đang xử lý...");
    await axios.post("https://api-vuon-thong-minh.onrender.com/users/register", {
      fname: fname,
      email: email,
      lname: lname,
      password: password,
      userType: userType,
    }).then((data) => {
      if (data.data.error == "User Exists") {
        toast.warning("Email already registered");
      } else if (data.data.status == "ok") {
        createData();
      } else {
        toast.error("Đăng ký không thành công");
      }
    });
  };
  const createData = async () => {
    await axios
      .post("https://api-vuon-thong-minh.onrender.com/datas/createdata", {
        email: email,
        nhietdo: 0,
        doam: 0,
        mhsensor: 0,
        ultrasonic: 0,
        connect: "disconnect",
        reset: "0",
        idtelegram: "",
        control: [
          {
            name: "Control 1",
            status: 0,
            digital: "2",
          },
          {
            name: "Control 2",
            status: 0,
            digital: "13",
          },
          {
            name: "Control 3",
            status: 0,
            digital: "15",
          },
        ],
        sensor: [
          {
            name: "Nhiệt độ",
            status: "0",
            timeword: "6:00",
            timeout: "15:00",
            nofi: "Email",
            limit: 0,
          },
          {
            name: "Độ ẩm",
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
        setIsLoading(false);
        toast.success("Đăng ký thành công");
        setTimeout((window.location.href = "/login"), 2000);
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
                    class="forget-pass"
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

                  <button type="submit" disabled={isLoading} className="btn-dn">
                    {isLoading ? (
                      <div className="flex justify-center items-center">
                        <PuffLoader color="#eaeae8" size={40} />
                      </div>
                    ) : (
                      "Đăng ký"
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

import Sidebar from "../Sidebar";
import Navb from "../navbar/Navb";
import React, { useContext, useEffect, useState } from "react";
import "./ProfileCard.css";
import avatar from "../images/profile.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { async } from "@firebase/util";
import { IconButton } from "@material-tailwind/react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserPro = (props) => {
  useEffect(() => {
    const getDt = async () => {
      const dataUSer = window.localStorage.getItem("dtUser");
      const tokenid = window.localStorage.getItem("token");
      await setDt(JSON.parse(dataUSer));
      await setToken(tokenid);
    };
    getDt();
  }, []);

  const [dt, setDt] = useState([]);
  const [token, setToken] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordPL, setNewPasswordPL] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword != newPasswordPL) {
      toast.error("Nhập lại mật khẩu không trùng khớp");
    } else {
      toast("Đang xử lý...");
      await axios
        .post("https://test-api-j6u0.onrender.com/users/changepassword", {
          tokenold: token,
          newpassword: newPassword,
          oldpassword: oldPassword
        })
        .then(function (response) {
          console.log(response);
          toast.success("Đổi mật khẩu thành công");
        })
        .catch(function (error) {
          console.log(error);
          toast.warning("Đổi mật khẩu không thành công");
        });
    }
  };

  return (
    <div className="home">
      <Sidebar>
        <div className="homeContainer">
          <Navb />
          <div>
            <h1
              className="name"
              style={{
                paddingLeft: "30px",
                fontSize: "40px",
                paddingTop: "20px",
                fontFamily: "Roboto",
                color: "#a0c279",
                paddingBottom: "20px",
                fontFamily: "Florence, cursive",
              }}
            >
              {" "}
              Thông tin cá nhân
            </h1>
            <div className="card-container" style={{ textAlign: "center" }}>
              <header>
                <img
                  className="imgavt"
                  src={avatar}
                  alt={props.name}
                  style={{
                    height: "300px",
                    width: "300px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                />
              </header>
              <div className="social-container">
                <div className="followers">
                  <h1 className="smaller-text">Email</h1>
                  <h2 className="bold-text" style={{ paddingBottom: "20px" }}>
                    {dt ? dt.email : "Loading..."}
                  </h2>
                </div>
                <div className="likes">
                  <h1 className="smaller-text">Họ và tên</h1>
                  <h2 className="bold-text" style={{ paddingBottom: "20px" }}>
                    {dt ? dt.fname : "Loading..."}{" "}
                    {dt.lname ? dt.lname : "Loading"}
                  </h2>
                </div>
                <div className="likes">
                  <h1 className="smaller-text">Đổi mật khẩu</h1>
                  <h2 className="bold-text" style={{ paddingBottom: "20px" }}>
                    <button
                      className=""
                      style={{ backgroundColor: "yellow !" }}
                      onClick={() => setShowModal(true)}
                    >
                      <ModeEditIcon />
                    </button>
                  </h2>
                </div>
              </div>
            </div>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Đổi mật khẩu</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <form onSubmit={handleChangePassword}>
                        <div className="relative p-6 flex-auto m-4">
                          <input
                            className="text-center"
                            value={dt.email}
                            placeholder={"Email..."}
                            disabled="true"
                            style={{
                              border: "1px solid #d9d6d6",
                              borderRadius: "15px",
                              height: "45px",
                              width: "400px",

                              boxShadow: "rgb(187 203 205) 0px 2px 18px",
                            }}
                          />
                          <br></br>
                          <br></br>
                          <input
                            className="text-center"
                            placeholder={"Nhập mật khẩu cũ..."}
                            type="password"
                            style={{
                              border: "1px solid #d9d6d6",
                              borderRadius: "15px",
                              height: "45px",
                              width: "400px",
                              boxShadow: "rgb(187 203 205) 0px 2px 18px",
                            }}
                            onChange={(e) => setOldPassword(e.target.value)}
                          />
                          <br></br>
                          <br></br>
                          <input
                            className="text-center"
                            type="password"
                            placeholder={"Nhập mật khẩu mới..."}
                            style={{
                              border: "1px solid #d9d6d6",
                              borderRadius: "15px",
                              height: "45px",
                              width: "400px",
                              boxShadow: "rgb(187 203 205) 0px 2px 18px",
                            }}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                          <br></br>
                          <br></br>
                          <input
                            className="text-center"
                            type="password"
                            placeholder={"Nhập lại mật khẩu..."}
                            style={{
                              border: "1px solid #d9d6d6",
                              borderRadius: "15px",
                              height: "45px",
                              width: "400px",
                              boxShadow: "rgb(187 203 205) 0px 2px 18px",
                            }}
                            onChange={(e) => setNewPasswordPL(e.target.value)}
                          />
                        </div>

                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Đóng
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                          >
                            Đổi mật khẩu
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
export default UserPro;

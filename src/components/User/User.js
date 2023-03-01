import Sidebar from "../Sidebar";
import "./User.scss";
import Navb from "../navbar/Navb";
import React, { useContext, useEffect, useState, useReducer } from "react";
import "./ProfileCard.css";
import avatar from "../images/profile.png";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../LandingPage/UI/Footer";
import PuffLoader from "react-spinners/PuffLoader";
var checkPassword =
  /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const UserPro = (props) => {
  const [data, setData] = useState("");
  const [dataidtelegram, setDataIDtelegram] = useState("");
  const [fnamees, setFNames] = useState("");
  const [lnamees, setLNames] = useState("");
  const [idtelegrams, setIDtelegram] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordPL, setNewPasswordPL] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const userEmail = window.localStorage.getItem("Emaildetails");
  let urls =
    "https://api-vuon-thong-minh.onrender.com/datas/datadetail/" + userEmail;
  useEffect(() => {
    axios
      .post("https://api-vuon-thong-minh.onrender.com/users/user-data", {
        token: window.localStorage.getItem("token"),
      })
      .then((data) => {
        console.log(data.data.data);
        if (data.data.data === "token expired") {
          window.localStorage.clear();
          window.localStorage.setItem("loggedIn", "false");
          window.localStorage.getItem("loggedIn");
          window.location.href = "/login";
        }
        setData(data.data.data);
      });

    axios.get(urls).then((data) => {
      // console.log(data.data.data.idtelegram);
      setDataIDtelegram(data.data.data.idtelegram);
    });
  }, []);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword === "" || oldPassword === "" || newPasswordPL === "") {
      toast.warning("Vui lòng nhập đầy đủ thông tin!");
    } else if (!checkPassword.test(newPassword) || newPassword.length === "") {
      toast.error("Mật khẩu phải có chữ hoa, số và kí tự đặc biệt!");
    } else if (newPassword != newPasswordPL) {
      toast.error("Nhập lại mật khẩu không trùng khớp");
    } else {
      await axios
        .post("https://api-vuon-thong-minh.onrender.com/users/changepassword", {
          tokenold: window.localStorage.getItem("token"),
          newpassword: newPassword,
          oldpassword: oldPassword,
        })
        .then(function (response) {
          // console.log(response);
          if (response.data.error === "Passwords don't match") {
            toast.error("Mật khẩu cũ không đúng");
          } else if (response.data.status === "verified") {
            toast.success("Đổi mật khẩu thành công");
          }
        })
        .catch(function (error) {
          console.log(error);
          toast.warning("Đổi mật khẩu không thành công");
        });
    }
  };

  const editidtelegram = async () => {
    await axios
      .post("https://api-vuon-thong-minh.onrender.com/datas/updatedht", {
        email: window.localStorage.getItem("Emaildetails"),
        idtelegram: idtelegrams,
      })
      .then(function (data) {
        setIsLoading(false);
        toast.promise(
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          }),
          {
            pending: "Đang xử lí....",
            success: "Đổi thông tin thành công",
          },
          {
            autoClose: 2000,
          }
        );
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Lỗi");
      });
  };

  const handleClickSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      fnamees === data.fname &&
      lnamees === data.lname &&
      idtelegrams == dataidtelegram
    ) {
      setIsLoading(false);
      toast.warning("Thông tin không thay đổi");
    } else if (fnamees === "" || lnamees === "") {
      setIsLoading(false);
      toast.warning("Vui lòng nhập đủ thông tin");
    } else {
      // toast("Đang xử lý...");
      await axios
        .post("https://api-vuon-thong-minh.onrender.com/users/edituser", {
          token: window.localStorage.getItem("token"),
          lname: lnamees,
          fname: fnamees,
        })
        .then(function (data) {
          // console.log(data);

          setData(data.data.data);
          editidtelegram();
        })
        .catch(function (error) {
          console.log(error);
          toast.error("Lỗi");
        });
    }
  };

  return (
    <div className="home">
      <Sidebar>
        <div className="homeContainer">
          <Navb />
          <div>
            <div className="card-container" style={{ textAlign: "center" }}>
              <div className="headerUser">
                <img
                  className="imgavt"
                  src={avatar}
                  alt={data.lname}
                  style={{
                    height: "200px",
                    width: "200px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                />
              </div>
              <div className="social-container">
                <div className="followers">
                  <h1 className="smaller-text">Email</h1>
                  <h2 className="bold-text" style={{ paddingBottom: "20px" }}>
                    {data ? data.email : "Loading..."}
                  </h2>
                </div>
                <div className="likes">
                  <h1 className="smaller-text">Họ và tên</h1>
                  <h2 className="bold-text" style={{ paddingBottom: "20px" }}>
                    {data ? data.fname + " " + data.lname : "Loading..."}
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
            <form onSubmit={handleClickSave}>
              <div
                style={{ width: "100%", display: "flex", paddingTop: "30px" }}
              >
                <div
                  style={{
                    border: "0px black solid",
                    height: "auto",
                    width: "500px",
                    borderRadius: "10px",
                    marginTop: "30px",
                    boxShadow: "0px 0px 15px rgba(134, 131, 131, 0.7)",
                    margin: "auto",
                    paddingBottom: "30px",
                  }}
                >
                  <label
                    className="text-center"
                    style={{
                      textAlign: "center",
                      fontSize: "30px",
                      paddingLeft: "150px",
                      paddingTop: "10px",
                      color: "#368f23",
                    }}
                  >
                    Sửa thông tin
                  </label>
                  <br></br>
                  <br></br>
                  <label
                    className="text-center"
                    style={{
                      textAlign: "left",
                      fontSize: "16px",
                      paddingLeft: "50px",
                      paddingTop: "10px",
                      color: "#368f23",
                    }}
                  >
                    Họ :
                  </label>
                  <br></br>
                  <br></br>
                  <input
                    className="text-center"
                    // value={data.fname}
                    placeholder={data.fname}
                    style={{
                      border: "1px solid #d9d6d6",
                      borderRadius: "15px",
                      height: "45px",
                      width: "400px",
                      marginLeft: "45px",
                      boxShadow: "rgb(187 203 205) 0px 2px 18px",
                    }}
                    onChange={(e) => setFNames(e.target.value)}
                  />
                  <br></br>
                  <br></br>
                  <label
                    className="text-center"
                    style={{
                      textAlign: "left",
                      fontSize: "16px",
                      paddingLeft: "50px",
                      paddingTop: "10px",
                      color: "#368f23",
                    }}
                  >
                    Tên :
                  </label>
                  <br></br>
                  <br></br>
                  <input
                    className="text-center"
                    // value={data.lname}
                    placeholder={data.lname}
                    style={{
                      border: "1px solid #d9d6d6",
                      borderRadius: "15px",
                      height: "45px",
                      width: "400px",
                      marginLeft: "45px",
                      boxShadow: "rgb(187 203 205) 0px 2px 18px",
                    }}
                    onChange={(e) => setLNames(e.target.value)}
                  />
                  <br></br>
                  <br></br>
                  <label
                    className="text-center"
                    style={{
                      textAlign: "left",
                      fontSize: "16px",
                      paddingLeft: "50px",
                      paddingTop: "10px",
                      color: "#368f23",
                    }}
                  >
                    ID Telegram :
                  </label>
                  <br></br>
                  <br></br>
                  <input
                    className="text-center"
                    // value={data.lname}
                    placeholder={dataidtelegram}
                    style={{
                      border: "1px solid #d9d6d6",
                      borderRadius: "15px",
                      height: "45px",
                      width: "400px",
                      marginLeft: "45px",
                      boxShadow: "rgb(187 203 205) 0px 2px 18px",
                    }}
                    onChange={(e) => setIDtelegram(e.target.value)}
                  />
                  <br></br>
                  <br></br>
                  <button
                    //  onClick={handleClickSave}
                    style={{
                      marginLeft: "202px",
                      marginTop: " 20px",
                      fontSize: "20px",
                      height: "45px",
                      marginLeft: "45px",
                    }}
                    className="btn_luu"
                  >
                    {isLoading ? (
                      <div className="flex justify-center items-center">
                        <PuffLoader color="#eaeae8" size={25} />
                      </div>
                    ) : (
                      "Lưu"
                    )}
                  </button>
                </div>
              </div>
            </form>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-2xl font-semibold">Đổi mật khẩu</h3>
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
                          <label
                            className="text-center"
                            style={{
                              textAlign: "left",
                              fontSize: "16px",
                              paddingTop: "10px",
                              color: "#368f23",
                            }}
                          >
                            Email :
                          </label>
                          <br></br>
                          <br></br>
                          <input
                            className="text-center"
                            value={data.email}
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
                          <label
                            className="text-center"
                            style={{
                              textAlign: "left",
                              fontSize: "16px",
                              paddingTop: "10px",
                              color: "#368f23",
                            }}
                          >
                            Mật khẩu cũ :
                          </label>
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
                          <label
                            className="text-center"
                            style={{
                              textAlign: "left",
                              fontSize: "16px",
                              paddingTop: "10px",
                              color: "#368f23",
                            }}
                          >
                            Mật khẩu mới :
                          </label>
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
                          <label
                            className="text-center"
                            style={{
                              textAlign: "left",
                              fontSize: "16px",
                              paddingTop: "10px",
                              color: "#368f23",
                            }}
                          >
                            Nhập lại mật khẩu :
                          </label>
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
                            className="btn_us_thoat"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Đóng
                          </button>

                          <button className="btn_us_luu" type="submit">
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
          <div style={{ paddingTop: "15px" }}>
            <Footer />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
export default UserPro;

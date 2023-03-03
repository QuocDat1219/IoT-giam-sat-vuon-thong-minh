import React from "react";
import Form from "react-bootstrap/Form";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { useEffect, useState } from "react";
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { ToastContainer, toast } from "react-toastify";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { set } from "lodash";
var checkPassword =
  /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const HeaderDropdown = () => {
  const [showModelAccountInfo, setshowModelAccountInfo] = useState(false);
  const [showModalChangePAss, setshowModalChangePAss] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordPL, setNewPasswordPL] = useState("");
  const [data, setData] = useState("");
  const [dataidtelegram, setDataIDtelegram] = useState("");
  const [fnamees, setFNames] = useState("");
  const [lnamees, setLNames] = useState("");
  const Logout = async () => {
    {
      toast.success("Đăng xuất thành công ");
      const logtime = () => {
        window.localStorage.clear();
        window.localStorage.setItem("loggedIn", "false");
        window.localStorage.getItem("loggedIn");
        window.location.href = "/login";
      };
      const logoutTime = setTimeout(async () => {
        await logtime();
        clearTimeout(logoutTime);
      }, 1000);
    }
    // An error happened.
  };

  const userEmail = window.localStorage.getItem("Emaildetails");
  let urls =
    "https://api-vuon-thong-minh.onrender.com/datas/datadetail/" + userEmail;
  useEffect(() => {
    axios
      .post("https://api-vuon-thong-minh.onrender.com/users/user-data", {
        token: window.localStorage.getItem("token"),
      })
      .then((data) => {
        // console.log(data.data.data);
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
      toast("Vui lòng nhập đầy đủ thông tin!");
    } else if (!checkPassword.test(newPassword) || newPassword.length === "") {
      toast.error("Mật khẩu phải có chữ hoa, số và kí tự đặc biệt!");
    } else if (newPassword != newPasswordPL) {
      toast.error("Nhập lại mật khẩu không trùng khớp");
    } else {
      // toast("Đang xử lý...");
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
            toast.promise(
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve();
                }, 2000);
              }),
              {
                pending: "Đang xử lí....",
                success: "Đổi mật khẩu thành công",
              },
              {
                autoClose: 2000,
              }
            );
            setshowModalChangePAss(false);
          }
        })
        .catch(function (error) {
          console.log(error);
          toast.warning("Đổi mật khẩu không thành công");
        });
    }
  };
  const handleClickSave = async (e) => {
    e.preventDefault();
    if (fnamees === data.fname && lnamees === data.lname) {
      toast.warning("Thông tin không thay đổi");
    } else if (fnamees === "" || lnamees === "") {
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
          setData(data.data.data);
          setshowModelAccountInfo(false);
        })
        .catch(function (error) {
          console.log(error);
          toast.error("Lỗi");
        });
    }
  };
  return (
    <>
      <div>
        <CDropdown variant="nav-item" style={{ listStyle: "none" }}>
          <ToastContainer />
          <CDropdownToggle lacement="bottom-end" className="py-0" caret={false}>
            <CAvatar
              src="https://www.iriset.in/tms/uploads/profile/profile.png"
              size="5px"
            />
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownHeader className="bg-gray-200 fw-semibold py-2">
              Setting
            </CDropdownHeader>
            <CDropdownItem onClick={() => setshowModelAccountInfo(true)}>
              <AccountCircleIcon /> Thông tin cá nhân
            </CDropdownItem>
            <CDropdownItem onClick={() => setshowModalChangePAss(true)}>
              <KeyIcon /> Đổi mật khẩu
            </CDropdownItem>
            <CDropdownItem onClick={Logout}>
              <LogoutIcon /> Đăng xuất
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      {showModelAccountInfo ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center m-2 w-100">
                    Chỉnh sửa thông tin
                  </h3>
                </div>
                <Form
                  style={{ width: "500px", padding: "20px" }}
                  onSubmit={handleClickSave}
                >
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Email: <Form.Label className="titleUser"></Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="Email"
                      placeholder={data.email}
                      disabled
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      First Name:{" "}
                      <Form.Label className="titleUser"></Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={fnamees}
                      placeholder={data.fname}
                      onChange={(e) => setFNames(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Last Name: <Form.Label className="titleUser"></Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={lnamees}
                      placeholder={data.lname}
                      onChange={(e) => setLNames(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="btn_thoat"
                      type="button"
                      onClick={() => setshowModelAccountInfo(false)}
                    >
                      Thoát
                    </button>
                    <button
                      className="btn_cn"
                      type="submit"
                    >
                      Cập nhật
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
      {showModalChangePAss ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center m-2 w-100">
                    Chỉnh sửa thông tin
                  </h3>
                </div>
                <Form
                  style={{ width: "500px", padding: "20px" }}
                  onSubmit={handleChangePassword}
                >
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Email: <Form.Label></Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={data.email}
                      disabled
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Mật khẩu cũ: <Form.Label> </Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(e) => setOldPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Mật khẩu mới: <Form.Label> </Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(e) => setNewPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Nhập lại mật khẩu: <Form.Label> </Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(e) => setNewPasswordPL(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="btn_thoat"
                      type="button"
                      onClick={() => setshowModalChangePAss(false)}
                    >
                      Thoát
                    </button>
                    <button
                      className="btn_cn"
                      type="submit"
                    >
                      Cập nhật
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </>
  );
};
export default HeaderDropdown;

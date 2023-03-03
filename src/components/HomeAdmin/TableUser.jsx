import "./Css/TableUser.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { Button, Select } from "@mui/material";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import KeyIcon from "@mui/icons-material/Key";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RingLoader from "react-spinners/RingLoader";
let useData = null;
const TableUser = () => {
  const [showModel, setshowModel] = useState(false);
  const [showThem, setshowThem] = useState(false);
  const [changepassword, setChangePassword] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);
  const [email, setEmail] = useState([]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [emailadd, setEmailAdd] = useState("");

  // Add user
  var checkMail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var checkPassword =
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserType("");

    //Kiểm tra dữ liệu nhập của người dùng
    if (fname == "" || lname == "" || emailadd == "" || password == "") {
      toast.warning("Vui lòng nhập đầy đủ thông tin đăng ký!");
      return;
    } else if (!checkPassword.test(password) || password.length == "") {
      toast.warning("Mật khẩu không hợp lệ!");
      return;
    } else if (!checkMail.test(emailadd) || emailadd.length == "") {
      toast.warning("Email không hợp lệ!");
      return;
    } else if (password != confirmPassword) {
      toast.warning("Mật khẩu và nhập lại mật khẩu không trùng khớp...");
      return;
    }

    await axios
      .post("https://api-vuon-thong-minh.onrender.com/users/register", {
        fname: fname,
        email: emailadd,
        lname: lname,
        password: password,
        userType: userType,
      })
      .then((data) => {
        if (data.data.error == "User Exists") {
          toast.warning("Email already registered");
        } else if (data.data.status == "ok") {
          createData();
        } else {
          toast.error("Thêm người dùng không thành công");
        }
      });
  };
  const createData = async () => {
    await axios
      .post("https://api-vuon-thong-minh.onrender.com/datas/createdata", {
        email: emailadd,
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
            digital: "D4",
          },
          {
            name: "Control 2",
            status: 0,
            digital: "D7",
          },
          {
            name: "Control 3",
            status: 0,
            digital: "D8",
          },
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
        toast.success("Thêm người dùng thành công");
        setshowThem(false);
      });
  };

  useEffect(() => {
    const gedataTable = async () => {
      await axios
        .get("https://api-vuon-thong-minh.onrender.com/users/getalluser")
        .then((result) => {
          const newdata = JSON.stringify(result.data.data);
          // setEmail(result.data.data.data.data.email);
          setEmail(JSON.parse(newdata));
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    gedataTable();
    const intervalId = setInterval(gedataTable, 5000);
    return () => clearInterval(intervalId);
  }, []);
  const handleClickShowModal = (item) => {
    useData = item;
    setFname("");
    setLname("");
    setshowModel(true);
  };
  const handleClickShowDelete = (item) => {
    useData = item;
    setShowDeleted(true);
  };
  const handleShowCreateUser = () => {
    setFname("");
    setLname("");
    setshowThem(true);
  };
  //delete user
  const handleDeleteUser = async () => {
    // toast("Dang xu li....");
    await axios
      .post("https://api-vuon-thong-minh.onrender.com/users/deleteuser", {
        email: useData.email,
      })
      .then(function (response) {
        if (response.data.status === "ok") {
          setShowDeleted(false);
          toast.success("Xóa người dùng thành công");
        } else {
          toast.error("Xóa người dùng không thành công");
        }
      })
      .catch(function (error) {
        toast.error("Xóa không thành công");
      });
  };

  const handelUpdateUserClient = async () => {
    if (fname == "" || lname == "") {
      toast.warning("Vui lòng nhập đầy đủ thông tin đăng ký!");
      return;
    } else {
    }
    await axios
      .post("https://api-vuon-thong-minh.onrender.com/users/edituseradmin", {
        email: useData.email,
        lname: lname,
        fname: fname,
      })
      .then((response) => {
        if (response.data.status === "Success") {
          toast.success("Cập nhật thành công");
          setFname("");
          setLname("");
          setshowModel(false);
        } else {
          toast.error("Cập nhật không thành công");
        }
        console.log(response);
      })
      .catch((error) => {
        toast.error("Cập nhật không thành công");
      });
  };

  const handleClickShowChangePass = (item) => {
    useData = item;
    setChangePassword(true);
  };

  const handleResetPassword = async () => {
    await axios
      .post("https://api-vuon-thong-minh.onrender.com/users/resetpassword", {
        email: useData.email,
      })
      .then((response) => {
        if (response.data.status === "Success") {
          toast.success("Đặt lại mật khẩu thành công");
          setChangePassword(false);
        } else {
          toast.error("Đặt lại mật khẩu không thành công");
        }
      })
      .catch((err) => {
        toast.error("Đặt lại mật khẩu không thành công");
      });
  };
  return (
    <div>
      <ToastContainer pauseOnHover={false} draggable={false} autoClose={2500} />
      <div>
        <button
          style={{ fontSize: "15px", marginBottom: "20px" }}
          type="submit"
          className="btn_them"
          onClick={() => handleShowCreateUser()}
        >
          Thêm
        </button>
      </div>

      <div>
        {email.length != 0 ? (
          <TableContainer component={Paper} className="table container mx-auto">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">STT</TableCell>
                  <TableCell
                    className="tableCell"
                    style={{ textAlign: "center" }}
                  >
                    User
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    style={{ textAlign: "center" }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    style={{ textAlign: "center" }}
                  >
                    Hành động
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {email.map((item, index) =>
                  item.userType == "" ? (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {item.fname + " " + item.lname}
                      </TableCell>

                      <TableCell style={{ textAlign: "center" }}>
                        {item.email}
                      </TableCell>

                      <TableCell
                        className="table_btn"
                        style={{ textAlign: "center" }}
                      >
                        <Button
                          ariant="contained"
                          color="primary"
                          onClick={() => handleClickShowModal(item)}
                        >
                          <ModeEditIcon />
                        </Button>
                        <Button
                          ariant="contained"
                          color="primary"
                          type="submit"
                          onClick={() => handleClickShowDelete(item)}
                        >
                          <DeleteForeverIcon />
                        </Button>
                        <Button
                          ariant="contained"
                          color="primary"
                          type="submit"
                          onClick={() => handleClickShowChangePass(item)}
                        >
                          <KeyIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )
                )}
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div className="ND flex justify-center items-center">
            <RingLoader color="#4cd137" size={100} />
          </div>
        )}
      </div>
      {showDeleted ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center m-2 w-100">
                    THÔNG BÁO
                  </h3>
                </div>
                <div style={{ width: "500px", padding: "20px" }}>
                  <p style={{ fontSize: "20px" }}>
                    Bạn có muốn xóa thành viên không ?
                  </p>
                  <br></br>
                  <br></br>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="btn_thoat"
                      type="button"
                      onClick={() => setShowDeleted(false)}
                    >
                      Thoát
                    </button>
                    <button
                      className="btn_cn"
                      type="submit"
                      onClick={() => handleDeleteUser()}
                    >
                      Xác nhận
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}

      {showThem ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center m-2 w-100">
                    Thêm Thành Viên
                  </h3>
                </div>
                <Form
                  style={{ width: "500px", padding: "20px" }}
                  onSubmit={handleSubmit}
                >
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Email: <Form.Label className="labelUser"></Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="email"
                      onChange={(e) => setEmailAdd(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      First Name:{" "}
                      <Form.Label className="labelUser"></Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(e) => setFname(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Last Name: <Form.Label className="labelUser"></Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(e) => setLname(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Password: <Form.Label type="Password"> </Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="password"
                      onChange={(e) => setpassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Nhập lại Password:{" "}
                      <Form.Label type="Password"> </Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="btn_thoat"
                      type="button"
                      onClick={() => setshowThem(false)}
                    >
                      Thoát
                    </button>
                    <button className="btn_cn" type="submit">
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

      {showModel ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center m-2 w-100">
                    Chỉnh sửa thông tin
                  </h3>
                </div>
                <Form style={{ width: "500px", padding: "20px" }}>
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Email:{" "}
                      <Form.Label className="titleUser">
                        {useData.email}
                      </Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      disabled
                      value={useData.email}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      First Name:{" "}
                      <Form.Label className="titleUser">
                        {useData.fname}
                      </Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Last Name:{" "}
                      <Form.Label className="titleUser">
                        {useData.lname}
                      </Form.Label>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="btn_thoat"
                      type="button"
                      onClick={() => setshowModel(false)}
                    >
                      Thoát
                    </button>
                    <button
                      className="btn_cn"
                      onClick={handelUpdateUserClient}
                      type="button"
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
      {changepassword ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center m-2 w-100">
                    Đặt lại mật khẩu
                  </h3>
                </div>
                <Form.Group className="mb-3" controlId="formBasicAction">
                  <Form.Label
                    style={{
                      fontSize: "20px",
                      width: "600px",
                      padding: "20px",
                    }}
                  >
                    <p style={{ justifyContent: "center", marginTop: "20px" }}>
                      Đặt lại mật khẩu mới cho tài khoản:{" "}
                      <Form.Label className="labelUser">
                        {useData.email}
                      </Form.Label>
                      ?{" "}
                    </p>
                  </Form.Label>
                </Form.Group>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="btn_thoat"
                    type="button"
                    onClick={() => setChangePassword(false)}
                  >
                    Thoát
                  </button>
                  <button
                    className="btn_cn"
                    type="submit"
                    onClick={handleResetPassword}
                  >
                    Đặt lại
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
};

export default TableUser;

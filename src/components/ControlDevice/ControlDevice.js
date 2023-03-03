import { Sidebar } from "..";
import "./table.scss";
import Navb from "../navbar/Navb";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ControlDevice.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../LandingPage/UI/Footer";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { SetMealSharp } from "@mui/icons-material";
import Form from "react-bootstrap/Form";
import RingLoader from "react-spinners/RingLoader";
import unidecode from "unidecode";

let dataDevice = null;
const ControlDevice = () => {
  const [showModel, setshowModel] = useState(false);
  const [dieukhien, setDieukhien] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deviceName, setDeviceName] = useState("");

  const userEmail = window.localStorage.getItem("Emaildetails");
  let urls =
    "https://api-vuon-thong-minh.onrender.com/datas/datadetail/" + userEmail;
  const updateOn = async (key, status, name) => {
    if (status === 0) {
      status += 1;
    } else {
      status -= 1;
    }
    await axios
      .post("https://api-vuon-thong-minh.onrender.com/datas/updatecontrol", {
        email: userEmail,
        status: status,
        name: name,
      })
      .then((result) => {
        if (status == "1") {
          toast.success("Đã bật");
        } else toast.success("Đã tắt");
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  const handleClickShowModel = (data) => {
    dataDevice = data;
    setshowModel(true);
  };
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(urls)
        .then(async (result) => {
          await setDieukhien(result.data.data.control);
          setLoading(true);
        })
        .catch((err) => {
          toast("Lỗi gọi API");
        });
    };
    getData();
    const intervalId = setInterval(getData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handelUpdateDeviceName = async (e) => {
    e.preventDefault();
    await axios
      .post("https://api-vuon-thong-minh.onrender.com/datas/updatecontrol", {
        name: dataDevice.name,
        namenew: unidecode(deviceName),
        email: userEmail,
      })
      .then(function (res) {
        if (res.data.status == "update success") {
          toast.success("Thay đổi thành công");
          setshowModel(false);
        }
      })
      .catch(function (error) {
        toast.warning("Thay đổi không thành công");
      });
  };
  return (
    <div className="home">
      <Sidebar>
        <div className="homeContainer">
          <Navb />

          {dieukhien.length != 0 ? (
            <div>
              <TableContainer
                component={Paper}
                className="table container mx-auto"
              >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell">Stt</TableCell>
                      <TableCell className="tableCell">Thiết bị</TableCell>
                      <TableCell className="tableCell">Trạng thái</TableCell>
                      <TableCell className="tableCell">Hành động</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dieukhien
                      ? dieukhien.map((data, key) => (
                          <TableRow key={key}>
                            <TableCell className="tablleBody">
                              <div className="cellWrapper">{key}</div>
                            </TableCell>
                            <TableCell className="tablleBody">
                              <div className="cellWrapper">
                                {/* {data.data.name ? data.data.name : "Loading..."} */}
                                {data.name}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                  ariant="contained"
                                  color="primary"
                                  onClick={() => handleClickShowModel(data)}
                                >
                                  <ModeEditIcon />
                                </button>
                              </div>
                            </TableCell>
                            <TableCell className="tablleBody">
                              <span
                                className={`status ${data ? data.status : ""}`}
                              >
                                {data.status === 1 ? "Tắt" : "Bật"}
                              </span>
                            </TableCell>
                            <TableCell>
                              <Button
                                className={
                                  data.status === 1 ? "status on" : "status off"
                                }
                                onClick={() => {
                                  updateOn(key, data.status, data.name);
                                }}
                              >
                                {data.status === 1 ? "Bật" : "Tắt"}
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      : ""}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          ) : (
            <div className="ND flex justify-center items-center">
              <RingLoader color="blue" size={100} />
            </div>
          )}

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
                    <Form
                      style={{ width: "500px", padding: "20px" }}
                      onSubmit={handelUpdateDeviceName}
                    >
                      <Form.Group className="mb-3" controlId="formBasicAction">
                        <Form.Label style={{ fontSize: "20px" }}>
                          Tên thiết bị:{" "}
                          <Form.Label>{dataDevice.name}</Form.Label>
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder={dataDevice.name}
                          onChange={(e) => setDeviceName(e.target.value)}
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
          ) : (
            ""
          )}
          <div style={{ paddingTop: "15px" }}>
            <Footer />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
export default ControlDevice;

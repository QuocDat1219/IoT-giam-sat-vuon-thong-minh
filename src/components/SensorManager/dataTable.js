import "./dataTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { Button, Select } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from "..";
import Navb from "../navbar/Navb";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TimePicker from "react-time-picker";
let dataItem = null;
const List = () => {
  const [showModal, setShowModal] = useState(false);
  const [dtTable, setdtTable] = useState([]);
  const [dt, setDt] = useState([]);
  const [noitify, setNoitify] = useState("");
  const urls =
    "https://api-vuon-thong-minh.onrender.com/datas/datadetail/" +
    window.localStorage.getItem("Emaildetails");
  useEffect(() => {
    setInterval(() => {
      const gedataTable = async () => {
        await axios
          .get(urls)
          .then((result) => {
            // console.log(result.data.data.sensor);
            setdtTable(result.data.data.sensor);
          })
          .catch((err) => {
            throw new Error(err);
          });
      };
      gedataTable();
    }, 1000);
  }, []);

  const handelSaveClick = (item) => {
    console.log(item);
    dataItem = item;
    setShowModal(true);
    setNoitify(item.nofi);
    console.log(noitify); //lần đầu = ""
  };

  return (
    <div className="home">
      <Sidebar>
        <div className="homeContainer">
          <Navb />
          <div>
            {dtTable ? (
              <TableContainer
                component={Paper}
                className="table container mx-auto"
              >
                <ToastContainer />
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell">Stt</TableCell>
                      <TableCell className="tableCell">Thiết bi</TableCell>
                      <TableCell className="tableCell">Trạng thái</TableCell>
                      <TableCell className="tableCell">Hành động</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dtTable.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="tableCell">{index + 1}</TableCell>
                        <TableCell className="tableCell">{item.name}</TableCell>
                        <TableCell className="tableCell">
                          {item.status == "1" ? (
                            <strong
                              className="active"
                              style={{ color: "#2ecc71" }}
                            >
                              Đang hoạt động
                            </strong>
                          ) : (
                            <strong className="active" style={{ color: "red" }}>
                              Không hoạt động
                            </strong>
                          )}
                        </TableCell>
                        <TableCell className="tableCell">
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handelSaveClick(item)}
                          >
                            <ModeEditIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              "loading"
            )}
          </div>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-2xl font-semibold">
                        Quản lí thiết bị
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    <form>
                      <div className="relative p-3 flex-auto m-1">
                        <h4 className="bd-1">Cảm biến</h4>
                        <p className="title-1">
                          Trạng thái hoạt động :{" "}
                          <span style={{ color: "red" }}>
                            {dataItem.status == "1"
                              ? "Đang hoạt động"
                              : "Không hoạt động"}
                          </span>
                        </p>
                        <p className="title-2">
                          Thời gian hoạt động:{" "}
                          <TimePicker
                            value={dataItem.timeword}
                            hourPlaceholder="HH"
                            minutePlaceholder="mm"
                            format="HH:mm"
                            clearIcon={null}
                          />
                        </p>
                        <p className="title-2-1">
                          Thời gian dừng:{" "}
                          <TimePicker
                            value={dataItem.timeout}
                            hourPlaceholder="HH"
                            minutePlaceholder="mm"
                            format="HH:mm"
                            clearIcon={null}
                          />
                        </p>
                        <p className="title-3">
                          Thông báo :
                          <select class="sl-1" defaultValue={dataItem.nofi}>
                            <option value="Email">Email</option>
                            <option value="Telegram">Telegram</option>
                          </select>
                        </p>
                        <p className="title-4">
                          Cài đặt ngưỡng tự động :
                          <input type="number" className="ip-1" />
                        </p>
                      </div>
                      ;{/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Thoát
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Cập nhật
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
      </Sidebar>
    </div>
  );
};

export default List;

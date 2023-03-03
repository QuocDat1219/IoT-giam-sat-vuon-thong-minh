import "../navbar/Navb.scss";
import ChatIcon from "@mui/icons-material/Chat";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react"; //react hooks
import { FaUsb } from "react-icons/fa";
import HeaderDropdown from "./HeaderDropdown";
import Form from "react-bootstrap/Form";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Css/Header.css";
// import "./Css/Header.css";
import FilePresentIcon from "@mui/icons-material/FilePresent";
const HeaDer = () => {
  const [showModel, setshowModel] = useState(false);
  const [showModel1, setShowModel1] = useState(false);
  const [feedback, setfeedback] = useState(false);
  const [rows, setrows] = useState(-5);
  const [dataFb, setdataFb] = useState([]);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const gedataTable = async () => {
      await axios
        .get("https://api-vuon-thong-minh.onrender.com/feedback/sendfeedback")
        .then((result) => {
          setdataFb(result.data.data);
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    gedataTable();
    const intervalId = setInterval(gedataTable, 5000);
    return () => clearInterval(intervalId);
  }, []);
  const modelFeedback = (item) => {
    setfeedback(item);

    setShowModel1(true);
  };
  const Feedback5row = () => {
    setrows(-5);
    setShowButton(true);
  };
  const fullFeedback = () => {
    setrows(0);
    setShowButton(false);
  };

  return (
    <div className="nb">
      <div className="wrapper">
        <div className="connect">
          <div className="waviy">
            <p className="tilte-ad">Chào Mừng: Admin</p>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <button onClick={() => setshowModel(true)}>
              <ChatIcon />
            </button>
            <HeaderDropdown />
          </div>
        </div>
      </div>
      {showModel ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center m-2 w-100">
                    FeedBack
                  </h3>
                </div>
                <TableContainer
                  component={Paper}
                  className="table container mx-auto"
                >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="tableCell">STT</TableCell>
                        <TableCell
                          className="tableCell"
                          style={{ textAlign: "center" }}
                        >
                          Tên
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
                          Feedback
                        </TableCell>
                        <TableCell
                          className="tableCell"
                          style={{ textAlign: "center" }}
                        >
                          Đánh Giá
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dataFb
                        .map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="tableCell">
                              {index + 1}
                            </TableCell>
                            <TableCell
                              className="tableCell"
                              style={{ textAlign: "center" }}
                            >
                              {item.name}
                            </TableCell>
                            <TableCell
                              className="tableCell"
                              style={{ textAlign: "center" }}
                            >
                              {item.email}
                            </TableCell>

                            <TableCell
                              className="tableCell"
                              style={{ textAlign: "center" }}
                            >
                              <button onClick={() => modelFeedback(item.note)}>
                                <FilePresentIcon />
                              </button>
                            </TableCell>

                            <TableCell
                              className="tableCell"
                              style={{ textAlign: "center" }}
                            >
                              {item.gate}
                            </TableCell>
                          </TableRow>
                        ))
                        .slice(rows)}
                      {/* ))} */}
                    </TableBody>
                    <div style={{ padding: "10px 10px" }}>
                      {showButton ? (
                        <button onClick={() => fullFeedback()}>...</button>
                      ) : (
                        <button onClick={() => Feedback5row()}>Thu gọn</button>
                      )}
                    </div>
                  </Table>
                </TableContainer>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="btn_thoat"
                    type="button"
                    onClick={() => setshowModel(false)}
                  >
                    Thoát
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
      {showModel1 ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center m-2 w-100">
                    Feedback
                  </h3>
                </div>
                <div style={{ padding: "10px 10px 10px 10px" }}>
                  <textarea cols="100" rows="30">
                    {feedback}
                  </textarea>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModel1(false)}
                  >
                    Thoát
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

export default HeaDer;

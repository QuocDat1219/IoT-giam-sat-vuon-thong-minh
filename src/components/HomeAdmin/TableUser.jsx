import "./TableUser.css";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from "..";
import Navb from "../navbar/Navb";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Footer from "../LandingPage/UI/Footer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const TableUser = () => {
  const [showModel, setshowModel] = useState(false);
  const [dtTable, setdtTable] = useState([]);
  //   const handelSubmit = (item) => {
  //     dataItem = item;
  //     // setshowModel(true);
  //   };

  return (
    <div>
      <div>
        {dtTable ? (
          <TableContainer component={Paper} className="table container mx-auto">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">STT</TableCell>
                  <TableCell className="tableCell"style={{textAlign:"center"}}>User</TableCell>
                  <TableCell className="title-e" style={{textAlign:"center"}}>Email</TableCell>
                  <TableCell className="" style={{ textAlign: "center" }}>
                    Hành động
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {dtTable.map((item, index) => ( */}
                <TableRow>
                  <TableCell className="tableCell">1</TableCell>
                  <TableCell className="tableCell" style={{textAlign:"center"}}>Lap Thuan</TableCell>
                  <TableCell className="tableCell" style={{textAlign:"center"}}>
                    Lapthuan44@gmail.com
                  </TableCell>
                  <TableCell
                    className="table_btn"
                    style={{ textAlign: "center" }}
                  >
                    <Button
                      ariant="contained"
                      color="primary"
                      onClick={() => setshowModel(true)}
                    >
                      <ModeEditIcon />
                    </Button>
                    <Button>
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          "loading"
        )}
      </div>

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
                      Email: <Form.Label> </Form.Label>
                    </Form.Label>
                    <Form.Control required type="Email"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      First Name: <Form.Label> </Form.Label>
                    </Form.Label>
                    <Form.Control required type="text"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Last Name: <Form.Label> </Form.Label>
                    </Form.Label>
                    <Form.Control required type="text"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAction">
                    <Form.Label style={{ fontSize: "20px" }}>
                      Password: <Form.Label> </Form.Label>
                    </Form.Label>
                    <Form.Control required type="text"></Form.Control>
                  </Form.Group>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setshowModel(false)}
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
                </Form>
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

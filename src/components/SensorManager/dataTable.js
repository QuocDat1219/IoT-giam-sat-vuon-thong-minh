import "./dataTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from "..";
import Navb from "../navbar/Navb";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Footer from "../LandingPage/UI/Footer";
import moment from 'moment';
let dataItem = null;
const List = () => {
  const [showModal, setShowModal] = useState(false);
  const [dtTable, setdtTable] = useState([]);
  const [workTime, setWorkTime] = useState("");
  const [endTimeOut, setEndTimeOut] = useState("");
  const [limits, setLimit] = useState("");
  const options = [
    { value: 'Email', text: 'Email' },
    { value: 'Telegram', text: 'Telegram' }
  ];
  const [selected, setSelected] = useState(options[0].value);

  const urls =
    "https://api-vuonthongminh.vercel.app/datas/datadetail/" +
    window.localStorage.getItem("Emaildetails");
  useEffect(() => {
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
    const intervalId = setInterval(gedataTable, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  const handelSaveClick = (item) => {
    console.log(item);
    dataItem = item;
    setShowModal(true);
    console.log(dataItem); //lần đầu = ""
    setWorkTime("");
    setEndTimeOut("");
    setLimit("");
  };
  //sự kiện chọn select
  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  //sự kiện submit
  const handleEditSensor = async (e) => {
    e.preventDefault();
    const format = 'HH:mm';
    const gioBatDau = moment(workTime, format);
    const gioKetThuc = moment(endTimeOut, format);
    if(gioBatDau.isBefore(gioKetThuc)){
      await axios.post(
        "https://api-vuonthongminh.vercel.app/datas/updatesensor",{
          name: dataItem.name,
          timeword: workTime,
          timeout: endTimeOut,
          nofi: selected,
          email: window.localStorage.getItem("Emaildetails"),
          limit: limits
        })
      .then(function(response) {
        if(response.data.status == "update success"){
          toast.success("Thay đổi thành công");
          setShowModal(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.warning("Thay đổi không thành công");
      });
      console.log(gioBatDau);
      console.log(gioKetThuc);
    }else {
      toast.warning("Thời gian bắt đầu phải lớn hơn thời gian kết thúc");
    }
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
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell">STT</TableCell>
                      <TableCell className="tableCell">Thiết bi</TableCell>
                      <TableCell className="tableCell">Trạng thái</TableCell>
                      <TableCell className="tableCell">Hành động</TableCell>
                    </TableRow>           
                  </TableHead>
                  <TableBody>
                    {dtTable.map((item, index) => (
                      <TableRow TableRowkey={index}>
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
            <div>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">

                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-2xl font-semibold">
                        Cài đặt thiết bị: <strong>{dataItem.name}</strong>
                      </h3>
                      <button
                        style={{ color: 'red' }}
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >X
                      </button>
                    </div>
                    <Form style={{ width: "500px", padding: "20px" }}
                    onSubmit={handleEditSensor}>
                      <Form.Group className="mb-3" controlId="formBasicAction">
                        <Form.Label>Trạng thái thiết bị: <Form.Label> </Form.Label></Form.Label>
                        <Form.Text className="text-muted">
                          {dataItem.status == "1" ? (<strong style={{ color: "#2ecc71" }}>Đang hoạt động</strong>) : (<strong style={{ color: "red" }}>Không hoạt động</strong>)}
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicTimeWork">
                        <Form.Label>Thời gian hoạt động: <strong>{dataItem.timeword}</strong>
                        </Form.Label>
                        <Form.Control
                          type="time"
                          name="worktime"
                          value={workTime}
                          onChange={(e) => setWorkTime(e.target.value)} 
                          required/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicTimeEnd">
                        <Form.Label>Thời gian hoạt dừng: <strong>{dataItem.timeout}</strong>
                        </Form.Label>
                        <Form.Control
                          type="time"
                          name="endtime"
                          value={endTimeOut}
                          onChange={(e) => setEndTimeOut(e.target.value)} 
                          required/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicNotification">
                        <Form.Label>Thông báo:
                        </Form.Label>
                        <Form.Select id="disabledSelect" value={selected} onChange={handleChange}>
                        {options.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.text}
                          </option>
                        ))}
                        </Form.Select>
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formBasicLimit">
                        <Form.Label>Ngưỡng thông số cảm biến:
                        </Form.Label>
                        <Form.Control
                         required
                          type="number"
                          placeholder={dataItem.limit}
                          value={limits}
                          onChange={(e) => setLimit(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
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
          <div style={{paddingTop:"10px"}}>
            <Footer />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default List;

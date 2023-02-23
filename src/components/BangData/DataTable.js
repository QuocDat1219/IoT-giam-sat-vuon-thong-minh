import { Sidebar } from "..";
import Navb from "../navbar/Navb";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Select } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "../BangData/Datatable.css";

import Footer from "../LandingPage/UI/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
let num = 1;
const BangDuLieu = () => {
  const [dataDHTLog, setDataDHTLog] = useState([]);
  const [dataMHLog, setDataMHLog] = useState([]);
  const [dataUltraLog, setDataUltraLog] = useState([]);
  const data = [
    {
      times: "12:00:00",
      nhietdo: "30℃",
      doamkk: "80%",
      doamdat: "90%",
      llnuoc: "100%",
    },
    {
      times: "12:00:00",
      nhietdo: "30℃",
      doamkk: "80%",
      doamdat: "90%",
      llnuoc: "100%",
    },
    {
      times: "12:00:00",
      nhietdo: "30℃",
      doamkk: "80%",
      doamdat: "90%",
      llnuoc: "100%",
    },
    {
      times: "12:00:00",
      nhietdo: "30℃",
      doamkk: "80%",
      doamdat: "90%",
      llnuoc: "100%",
    },
    {
      times: "12:00:00",
      nhietdo: "30℃",
      doamkk: "80%",
      doamdat: "90%",
      llnuoc: "100%",
    },
  ];

  const urls =
    "https://api-vuonthongminh.vercel.app/datas/datadetail/" +
    window.localStorage.getItem("Emaildetails");
  useEffect(() => {
    const gedataTable = async () => {
      await axios
        .get(urls)
        .then((result) => {
          console.log(result);
          // console.log(result.data.data.sensor);
          setDataDHTLog(result.data.data.dhtlog);
          setDataMHLog(result.data.data.mhlog);
          setDataUltraLog(result.data.data.ultralog);
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    gedataTable();
    const intervalId = setInterval(gedataTable, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home">
      <Sidebar>
        <div className="homeContainer">
          <Navb />
          <div style={{ paddingTop: "30px" }}>
            {data ? (
              <TableContainer
                component={Paper}
                className="table container mx-auto"
              >
                <h2>Nhiệt độ và độ ẩm</h2>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell" align="center">
                        Nhiệt độ
                      </TableCell>
                      <TableCell className="tableCell" align="center">
                        Độ ẩm không khí
                      </TableCell>
                      <TableCell className="tableCell" align="center">
                        Thời gian
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataDHTLog
                      .map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="tableCell" align="center">
                            {item.nhietdo}
                          </TableCell>
                          <TableCell className="tableCell" align="center">
                            {item.doam}
                          </TableCell>
                          <TableCell className="tableCell" align="center">
                            {item.createAt}
                          </TableCell>
                        </TableRow>
                      ))
                      .slice(-5)}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              "loading"
            )}
          </div>
          <div style={{ paddingTop: "30px" }}>
            {data ? (
              <TableContainer
                component={Paper}
                className="table container mx-auto"
              >
                <ToastContainer />
                <h2>Độ ẩm đất</h2>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell"  align="center">Độ ẩm đất</TableCell>
                      <TableCell className="tableCell"  align="center">Thời gian</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataMHLog
                      .map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="tableCell" align="center">{item.mh}</TableCell>
                          <TableCell className="tableCell" align="center">
                            {item.createAt}
                          </TableCell>
                        </TableRow>
                      ))
                      .slice(-5)}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              "loading"
            )}
          </div>
          <div style={{ paddingTop: "30px" }}>
            {data ? (
              <TableContainer
                component={Paper}
                className="table container mx-auto"
              >
                <ToastContainer />
                <h2>Lưu lượng nước bình chứa</h2>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell"  align="center">
                        Lưu lượng nước
                      </TableCell>
                      <TableCell className="tableCell"  align="center">Thời gian</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataUltraLog
                      .map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="tableCell"  align="center">
                            {item.ultra}
                          </TableCell>
                          <TableCell className="tableCell" align="center">
                            {item.createAt}
                          </TableCell>
                        </TableRow>
                      ))
                      .slice(-5)}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              "loading"
            )}
          </div>
          <div style={{ paddingTop: "10px" }}>
            <Footer />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
export default BangDuLieu;

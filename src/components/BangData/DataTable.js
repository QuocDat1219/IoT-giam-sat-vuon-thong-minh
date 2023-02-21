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
const BangDuLieu = () => {
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

  return (
    <div className="home">
      <Sidebar>
        <div className="homeContainer">
          <Navb />
          <div>
            {data ? (
              <TableContainer
                component={Paper}
                className="table container mx-auto"
              >
                <ToastContainer />
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell">STT</TableCell>
                      <TableCell className="tableCell">Thời gian</TableCell>
                      <TableCell className="tableCell">Nhiệt độ</TableCell>
                      <TableCell className="tableCell">
                        Độ ẩm không khí
                      </TableCell>
                      <TableCell className="tableCell">Độ ẩm đất</TableCell>
                      <TableCell className="tableCell">
                        Lưu lượng nước
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="tableCell">{index + 1}</TableCell>
                        <TableCell className="tableCell">
                          {item.times}
                        </TableCell>
                        <TableCell className="tableCell">
                          {item.nhietdo}
                        </TableCell>
                        <TableCell className="tableCell">
                          {item.doamkk}
                        </TableCell>
                        <TableCell className="tableCell">
                          {item.doamdat}
                        </TableCell>
                        <TableCell className="tableCell">
                          {item.llnuoc}
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
          <div style={{paddingTop:"10px"}}>
          <Footer />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
export default BangDuLieu;

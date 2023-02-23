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

const ControlDevice = () => {
  const [dieukhien, setDieukhien] = useState([]);
  const [loading, setLoading] = useState(false);
  const userEmail = window.localStorage.getItem("Emaildetails");
  let urls =
    "https://api-vuonthongminh.vercel.app/datas/datadetail/" + userEmail;
  const updateOn = async (key, status, name) => {
    console.log(status); 
    console.log(name);
    if(status === 0){
      status += 1;
    }else{
      status -= 1;
    }
    await axios
      .post(
        "https://api-vuonthongminh.vercel.app/datas/updatecontrol",{
          email: userEmail,
          status: status,
          name: name,
        }        
      )
      .then((result) => {
        console.log(result);
        if (status == "1") {
          toast("Đã bật");
        } else toast("Đã tắt");
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  useEffect(() => {
    setInterval(() => {
      const getData = async () => {
        await axios
          .get(
            urls
          )
          .then(async (result) => {
            await setDieukhien(result.data.data.control);
            console.log(dieukhien);
            setLoading(true);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getData();
    }, 1000);
  }, []);
  return (
    <div className="home">
      <Sidebar>
        <div className="homeContainer">
          <Navb />
          <TableContainer component={Paper} className="table container mx-auto">
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
                            {data ? data.name : "Loading..."}
                          </div>
                        </TableCell>
                        <TableCell className="tablleBody">
                          <span className={`status ${data ? data.status : ""}`}>
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
                  : "Loading..."}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ paddingTop: "15px" }}>
            <Footer />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
export default ControlDevice;

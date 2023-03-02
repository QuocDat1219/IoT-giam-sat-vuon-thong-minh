import { Sidebar } from "..";
import Navb from "../navbar/Navb";
import "../BangData/Datatable.css";
import Footer from "../LandingPage/UI/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Tablendda from "./tablendda";
import TableMH from "./tablemh";
import TableUltra from "./tableultra";
import "./select.scss";
import Form from "react-bootstrap/Form";
let num = 1;
const BangDuLieu = () => {
  const [dataDHTLog, setDataDHTLog] = useState([]);
  const [dataMHLog, setDataMHLog] = useState([]);
  const [dataUltraLog, setDataUltraLog] = useState([]);
  const [selectedTable, setSelectedTable] = useState("tablendda");

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  let currentTable;
  if (selectedTable === "tablendda") {
    currentTable = <Tablendda data={dataDHTLog} />;
  } else if (selectedTable === "tablemh") {
    currentTable = <TableMH data={dataMHLog} />;
  } else if (selectedTable === "tableultra") {
    currentTable = <TableUltra data={dataUltraLog} />;
  }

  const urls =
    "https://api-vuon-thong-minh.onrender.com/datas/datadetail/" +
    window.localStorage.getItem("Emaildetails");
  useEffect(() => {
    const gedataTable = async () => {
      await axios
        .get(urls)
        .then((result) => {
          //console.log(result);
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
          {/* <div style={{ paddingTop: "30px" }}>
            <select value={selectedTable} onChange={handleTableChange}>
              <option value="tablendda">Bảng nhiệt độ và độ ẩm</option>
              <option value="tablemh">Bảng độ ẩm đất</option>
              <option value="tableultra">Bảng lượng nước</option>
            </select>
          </div> */}
          <Form.Group
            className="mb-3 w-1/4 max-w-1/4 "
            controlId="formBasicNotification"
          >
            <label style={{float: "left",fontSize: "24px",padding: "10px 10px 10px 10px"}}>Chọn bảng: </label>
            <Form.Select
              value={selectedTable}
              onChange={handleTableChange}
              className="sl"
  
            >
              <option value="tablendda">Bảng nhiệt độ và độ ẩm</option>
              <option value="tablemh">Bảng độ ẩm đất</option>
              <option value="tableultra">Bảng lượng nước</option>
            </Form.Select>
          </Form.Group>

          <div style={{ paddingTop: "30px" }}>{currentTable}</div>

          <div style={{ paddingTop: "10px" }}>
            <Footer />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default BangDuLieu;

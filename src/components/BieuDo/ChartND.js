import "./ChartND.scss";
import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCol, CCardHeader, CRow } from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";
const ChartND = () => {
  const [chartArrayNhietdo, setChartArrayNhietdo] = useState();
  const [chartArrayDoAm, setChartArrayDoAm] = useState([]);
  const [chartArrayThoiGian, setChartArrayThoiGian] = useState([]);
  const userEmail = window.localStorage.getItem("Emaildetails");

  let urls =
    "https://api-vuon-thong-minh.onrender.com/datas/datadetail/" + userEmail;
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(urls)
        .then(async (result) => {
          await setChartArrayNhietdo(
            result.data.data.dhtlog.map((item) => item.nhietdo).slice(-7)
          );
          console.log(chartArrayNhietdo);
          await setChartArrayDoAm(
            result.data.data.dhtlog.map((item) => item.doam).slice(-7)
          );
          await setChartArrayThoiGian(
            result.data.data.dhtlog.map((item) => item.createAt).slice(-7)
          );
        })
        .catch((err) => {});
    };
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return chartArrayNhietdo ?(
    <CCol xs={6}>
      <CCard className="mb-4">
        <CCardHeader style={{fontSize:"16px"}}>Biểu đồ nhiệt độ</CCardHeader>
        <CCardBody>
          <CChartLine
            data={{
              labels: chartArrayThoiGian,
              datasets: [
                {
                  label: "Nhiệt độ",
                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                  borderColor: "rgba( 255, 0, 0, 1 )",
                  pointBackgroundColor: "rgba( 255, 0, 0, 1 )",
                  pointBorderColor: "#fff",
                  data: chartArrayNhietdo,
                },
                {
                  label: "Độ ẩm không khí",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "rgba(151, 187, 205, 1)",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "#fff",
                  data: chartArrayDoAm,
                },
              ],
            }}
          />
        </CCardBody>
      </CCard>
    </CCol>
  ): (
    <div className="ND flex justify-center items-center">
      <RingLoader color="rgba(151, 187, 205, 1)" size={100} />
    </div>
  );
};
export default ChartND;

import './ChartWT.scss'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {CChartBar} from '@coreui/react-chartjs'
import axios from 'axios';
import React, { useState, useEffect } from "react";
const ChartWT = () => {
  const [chartArrayUltra, setChartArrayUltra] = useState([]);
  const [chartArrayThoiGian, setChartArrayThoiGian] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://api-vuonthongminh.vercel.app/datas/datadetail/lapthuan44@gmail.com"
        )
        .then(async (result) => {
          await setChartArrayUltra(
            result.data.data.ultralog
            .map((item) => item.ultra).slice(-7)
          );
          await setChartArrayThoiGian(
            result.data.data.ultralog
            .map((item) => item.createAt).slice(-7)
          );
        })
        .catch((err) => {});
    };
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <CCol xs={10}>
    <CCard className="mb-5">
      <CCardHeader>Biểu đồ lượng nước trong bồn </CCardHeader>
      <CCardBody>
        <CChartBar
          data={{
            labels: chartArrayThoiGian,
            datasets: [
              {
                label: 'Lượng nước',
                backgroundColor: 'RGBA( 65, 105, 225, 1 )',
                data: chartArrayUltra,
              },
            ],
          }}
          labels="months"
        />
      </CCardBody>
    </CCard>
  </CCol>
  )
}

export default ChartWT;
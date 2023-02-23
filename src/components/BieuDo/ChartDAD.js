import './ChartDAD.scss'
import React, { useEffect, useState } from "react"; //react hooks
import {AreaChart, Area,LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer} from "recharts";
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import axios from "axios";

const ChartDAD = () => {
  const [chartArrayDoAmDat,setChartArrayDoAmDat] = useState();
  const [chartArrayThoiGian, setChartArrayThoiGian] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://api-vuonthongminh.vercel.app/datas/datadetail/lapthuan44@gmail.com"
        )
        .then(async (result) => {
          await setChartArrayDoAmDat(
            result.data.data.mhlog
            .map((item) => item.mh).slice(-7)
          );
          await setChartArrayThoiGian(
            result.data.data.mhlog
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
    <CCol xs={6}>
    <CCard className="mb-4">
      <CCardHeader>Biểu đồ Độ ẩm đất</CCardHeader>
      <CCardBody>
        <CChartLine
          data={{
            labels: chartArrayThoiGian,
            datasets: [
              {
                label: 'Độ ẩm đất',
                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                borderColor: 'RGBA( 139, 0, 0, 1 )',
                pointBackgroundColor: 'RGBA( 139, 0, 0, 1 )',
                pointBorderColor: '#fff',
                data: chartArrayDoAmDat,
              },
            ],
          }}
        />
      </CCardBody>
    </CCard>
  </CCol> 

  );
};
export default ChartDAD;

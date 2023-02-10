import './ChartDAD.scss'
import React, { useEffect, useState } from "react"; //react hooks

import { getDatabase, ref, child, get } from "firebase/database";

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
// const data = [
//   {
//     name: "5 minute",
//     DoAmDat: 40,
//     amt: 2400,
//   },
//   {
//     name: "10 minute",
//     DoAmDat: 60,
//     amt: 2210,
//   },
//   {
//     name: "15 minute",
//     DoAmDat: 30,
//     amt: 2290,
//   },
//   {
//     name: "20 minute",
//     DoAmDat: 10,
//     amt: 2290,
//   },
 
// ];

const ChartDAD = (props) => {
  return (
    <CCol xs={6}>
    <CCard className="mb-4">
      <CCardHeader>Biểu đồ Độ ẩm đất</CCardHeader>
      <CCardBody>
        <CChartLine
          data={{
            labels: ['5 minute', '10 minute', '15 minute', '20 minute', '25 minute', '30 minute', '35 minute'],
            datasets: [
              {
                label: 'Độ ẩm đất',
                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                borderColor: 'RGBA( 139, 0, 0, 1 )',
                pointBackgroundColor: 'RGBA( 139, 0, 0, 1 )',
                pointBorderColor: '#fff',
                data: [0, 5, 30, 25.9, 36.7, 80, 60],
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

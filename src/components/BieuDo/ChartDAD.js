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

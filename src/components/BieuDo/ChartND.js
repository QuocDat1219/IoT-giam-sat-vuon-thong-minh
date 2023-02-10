import './ChartND.scss'
import React, { useEffect, useState , useCallback } from "react"; //react hooks
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'

const ChartND = () => {
  return (
        <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Biểu đồ nhiệt độ</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['5 minute', '10 minute', '15 minute', '20 minute', '25 minute', '30 minute', '35 minute'],
                datasets: [
                  {
                    label: 'Nhiệt độ',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba( 255, 0, 0, 1 )',
                    pointBackgroundColor: 'rgba( 255, 0, 0, 1 )',
                    pointBorderColor: '#fff',
                    data: [25, 10, 15, 45, 40, 75, 80],
                  },
                  {
                    label: 'Độ ẩm không khí',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [5, 10, 15, 24, 30, 15, 60],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
  );
};
export default ChartND;

import './ChartWT.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'


const ChartWT = () => {
  return (
    <CCol xs={10}>
    <CCard className="mb-5">
      <CCardHeader>Biểu đồ lượng nước trong bồn </CCardHeader>
      <CCardBody>
        <CChartBar
          data={{
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
              {
                label: 'Lượng nước',
                backgroundColor: 'RGBA( 65, 105, 225, 1 )',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
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
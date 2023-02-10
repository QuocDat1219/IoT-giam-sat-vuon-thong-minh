import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Sidebar } from ".."
import Table from "../../components/ta"
import Navb from "../navbar/Navb"
const SensorManager = () => {
    const data = [
        {
          sensorName : "Cảm biến nhiệt độ",
          times : "12:00:00",
          sensorStatus : "Hoạt động",
          manager : "...",
        },
        {
          sensorName : "Cảm biến độ ẩm đất",
          times : "12:00:00",
          sensorStatus : "Không hoạt động",
          manager : "...",
        },
        {
          sensorName : "Cảm biến siêu âm",
          times : "12:00:00",
          sensorStatus : "Hoạt động",
          manager : "...",
        },
    
      ]
      return(
            <div className="home">
                <Sidebar>
                    <div className="homeContainer">
                        <Navb/>
                        <h1>Các thiết bị sử dụng</h1>
                        <DataTable value={data}>
                            <Column field="sensorName" header="Tên thiết bị"/>
                        </DataTable>
                    </div>
                </Sidebar>
            </div>
      )
}
export default SensorManager;
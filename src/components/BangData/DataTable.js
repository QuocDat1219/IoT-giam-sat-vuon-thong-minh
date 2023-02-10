import { Sidebar } from "..";
import Navb from "../navbar/Navb";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
const BangDuLieu = () => {
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
        <h1>data table</h1>
        
    )
}
export default BangDuLieu;
import Table from "./Table"
import { Sidebar } from ".."
import { useState, useEffect } from "react"
import Navb from "../navbar/Navb"
import axios from "axios"
const SensorManager = () => {
  const [sensor, setSensor] = useState([]);
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setSensor(res.data))

    .catch(err => console.log(err))
  },[])
  const column = [
  { heading: 'Tên thiết bị', value:'name'},
  {
    heading: 'Thời gian', value:'email'
  },
  {
    heading: 'Trạng thái', value:'phone'
  },
  {
    heading: 'Quản lý', value:'...'
  }
]
      return(
            <div className="home">
                <Sidebar>
                    <div className="homeContainer">
                        <Navb/>
                        <h1 style={{textAlign:"center", fontSize:"26px", fontWeight:"bold"}}>Các thiết bị sử dụng</h1>
                        <Table newdata={sensor} column={column}/>
                    </div>
                </Sidebar>
            </div>
      )
}
export default SensorManager;
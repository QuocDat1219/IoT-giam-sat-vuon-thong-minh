import './water.scss';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { color} from '@mui/system';
import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
const WT = () => {
    const dbRef = ref(getDatabase());
    const [ultrasonic, setUltrasonic] = useState([]);
    setInterval(() => {
      get(child(dbRef, `Sensor`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUltrasonic(snapshot.val().Ultra);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
  
    
    return(
        <div className='WT'>
            <div className='top'>
                <h1 className='title'>Lượng nước</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className='waterChart'>
                <CircularProgressbar styles={({path: {stroke: `rgba(186,85,211)`},text: {fill: '#BA55D3'}})} value={ultrasonic} maxValue={100} text={ultrasonic+'%'} strokeWidth={10}/>
                </div>

            </div>
        </div>
    )
}

export default WT;
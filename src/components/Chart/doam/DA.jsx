import './doam.scss'
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { color} from '@mui/system';
import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
const DOAM = (props) => {
    const dbRef = ref(getDatabase());
    const [doam, setDoam] = useState([]);
    setInterval(() => {
        get(child(dbRef, `DHT`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              setDoam(snapshot.val().doam);
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }, 1000);
    
    return(
        <div className='DOAM'>
            <div className='top'>
                <h1 className='title'>Độ ẩm không khí: <span style={{fontWeight:"bold", color:"#4cd137"}}>{props.doam} %</span></h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className='doamChart'>
                <CircularProgressbar styles={({path: {stroke: `rgba(46, 198, 138, 1)`},text: {fill: '#4cd137'}})} value={props.doam} maxValue={100} text={props.doam+'%'} strokeWidth={10}/>
                </div>

            </div>
        </div>
    )
}

export default DOAM;

import './nhietdo.scss';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { color} from '@mui/system';
import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
const ND = () => {
    const dbRef = ref(getDatabase());
    const [nhietdo, setNhietdo] = useState([]);
    setInterval(() => {
        get(child(dbRef, `DHT`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              setNhietdo(snapshot.val().nhietdo);
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }, 1000);
    
    return(
        <div className='ND'>
            <div className='top'>
                <h1 className='title'>Nhiệt độ không khí</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className='nhietdoChart'>
                <CircularProgressbar  styles={({path: {stroke: `rgba(255,69,0)`},text: {fill: '#FF4500'}})} value={nhietdo} maxValue={100} text={nhietdo+'%'} strokeWidth={10}/>
                </div>

            </div>
        </div>
    )
}

export default ND;
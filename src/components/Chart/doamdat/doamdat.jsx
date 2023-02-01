import './doamdat.scss'
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { color} from '@mui/system';
import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

const doamdat = () => {
    // const dbRef = ref(getDatabase());
    // const [mhsensor, setMhsensor] = useState([]);
    // setInterval(() => {
    //   get(child(dbRef, `Sensor`))
    //     .then((snapshot) => {
    //       if (snapshot.exists()) {
    //         setMhsensor(snapshot.val().MHsensor);
    //       } else {
    //         console.log("No data available");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, 1000);
    
    return(
        <div className='doamdat'>
            <div className='top'>
                <h1 className='title'>Độ ẩm đất</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className='doamdChart'>
                <CircularProgressbar value={60}  text={'60%'} strokeWidth={10}/>
                </div>

            </div>
        </div>
    )
}

export default doamdat;
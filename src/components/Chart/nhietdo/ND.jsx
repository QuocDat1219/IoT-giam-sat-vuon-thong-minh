import './nhietdo.scss';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { color} from '@mui/system';
import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
const ND = (props) => {  
    return(
        <div className='ND'>
            <div className='top'>
                <h1 className='title'>Nhiệt độ không khí: <span style={{fontWeight:"bold", color:"#eb2f06"}}>{props.nhietdo}<sup>o</sup>C</span></h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className='nhietdoChart'>
                <CircularProgressbar  styles={({path: {stroke: `#eb2f06`},text: {fill: '#eb2f06'}})} value={props.nhietdo} maxValue={100} text={props.nhietdo+'%'} strokeWidth={10}/>
                </div>

            </div>
        </div>
    )
}

export default ND;
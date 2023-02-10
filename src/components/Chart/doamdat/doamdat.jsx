import './doamdat.scss'
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { color} from '@mui/system';
import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

const doamdat = (props) => {
    return(
        <div className='doamdat'>
            <div className='top'>
                <h1 className='title'>Độ ẩm đất:<span style={{fontWeight:"bold", color:"#732817"}}> {props.mhsensor} %</span></h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className='doamdChart'>
                <CircularProgressbar  styles={({path: {stroke: `#732817`},text: {fill: '#732817'}})} value={props.mhsensor}  text={props.mhsensor+'%'} strokeWidth={10}/>
                </div>

            </div>
        </div>
    )
}

export default doamdat;
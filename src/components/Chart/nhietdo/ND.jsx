import './nhietdo.scss';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { color} from '@mui/system';
import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import Temp from "./temp";
import ReactDOM from "react-dom";

let incoming = {
    date: 1597107474849,
    data: {
      templ: "66",
    },
    type: "toy",
    drone_id: "drone1"
  };
  
  class ND extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        templ: props.nhietdo,
      };
    }
    render() {
      return (
        <div className='ND'>
            <div className='top'>
              <h1 className='title'>Nhiệt độ không khí: <span style={{fontWeight:"bold", color:"#eb2f06"}}>{this.props.nhietdo}<sup>o</sup>C</span></h1>
                <MoreVertIcon fontSize='small' />
             </div>
             <div className="bottom">
                <div className="dials">
                    <Temp className="tm" value={this.props.nhietdo}  />
                </div>
            </div>

        </div>
      );
    }
  }
  
  export default ND;
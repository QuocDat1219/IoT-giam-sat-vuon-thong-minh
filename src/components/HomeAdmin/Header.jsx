import "../navbar/Navb.scss"
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react"; //react hooks
import { FaUsb } from "react-icons/fa";
import HeaderDropdown from "./HeaderDropdown";
const HeaDer = () => {
  return (
    <div className="nb">
      <div className="wrapper">
        <div className="connect">
        </div>
        <div className="items">
          <div className="item">
            <NotificationsActiveIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <HeaderDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaDer;

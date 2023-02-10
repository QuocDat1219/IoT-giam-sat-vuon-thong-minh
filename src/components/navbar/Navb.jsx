import "./Navb.scss";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate,Link } from "react-router-dom";
import React, { useEffect, useState } from "react"; //react hooks
const Navb = (prob) => {
  const [name, setname ] = useState([]);
  
  return (
    <div className="nb">
      <div className="wrapper">
        <div className="items">
            <div className="item">
            <NotificationsActiveIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <Link to="/user">
          <div className="item">
              <span className="username">{prob.userName}</span>
              <img src='https://www.iriset.in/tms/uploads/profile/profile.png' alt="user" className='avatar' />
            </div> 
          </Link>
        </div>
    </div>  
    </div>
  );
};
export default Navb;

import "./Navb.scss";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navb = () => {

  
  return (
    <div className="nb">
      <div className="wrapper">
        <div className="item">
          <NotificationsActiveIcon className="icon" />
        </div>
      </div>
    </div>
  );
};
export default Navb;

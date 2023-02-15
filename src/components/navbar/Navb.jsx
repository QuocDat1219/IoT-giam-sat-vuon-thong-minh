import "./Navb.scss";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react"; //react hooks
import { FaUsb } from "react-icons/fa";
import AppHeaderDropdown from "../header/AppHeaderDropdown";
const Navb = () => {
  const userName = window.localStorage.getItem("Namedateils");
  const [conn, setConn] = useState("");
  const userEmail = window.localStorage.getItem("Emaildetails");

  let urls =
    "https://api-vuon-thong-minh.onrender.com/datas/datadetail/" + userEmail;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(urls)
        .then((data) => {
          setConn(data.data.data.connect);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchData();
    const timeoutf = setTimeout(fetchData, 5000);
    return () => clearTimeout(timeoutf);
  }, []);

  useEffect(() => {
    const updatedata = async () => {
      await axios
        .post("https://api-vuon-thong-minh.onrender.com/datas/updatedht", {
          email: userEmail,
          connect: "disconect",
        })
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    updatedata();
    const intervalId = setTimeout(updatedata, 10000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="nb">
      <div className="wrapper">
        <div className="connect">
          <div
            style={{ display: "flex", paddingLeft: "9px", textAlign: "left" }}
          >
            <FaUsb style={{ fontSize: "25px" }} />
            {conn == "connect" ? (
              <p
                style={{ fontSize: "16px", color: "green", paddingLeft: "5px" }}
              >
                {" "}
                Connected{" "}
              </p>
            ) : (
              <p style={{ fontSize: "16px", color: "red", paddingLeft: "5px" }}>
                {" "}
                Disconnect{" "}
              </p>
            )}
          </div>
        </div>
        <div className="items">
          <div className="item">
            <NotificationsActiveIcon className="icon" />
            <div className="counter">1</div>
          </div>
          {/* <Link to="/user">
            <div className="item">
              <span className="username">{userName}</span>
              <img
                src="https://www.iriset.in/tms/uploads/profile/profile.png"
                alt="user"
                className="avatar"
              />
            </div>
          </Link> */}
          <div className="item">
            <AppHeaderDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navb;

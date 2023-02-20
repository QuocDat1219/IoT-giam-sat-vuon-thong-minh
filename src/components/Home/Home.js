import "./home.scss";
import React, { useEffect, useState, useCallback } from "react"; //react hooks
import DOAM from "../Chart/doam/DA";
import Doamdat from "../Chart/doamdat/doamdat";
import LiquidTank from "../Bottelwater/LiquidTank";
import ND from "../Chart/nhietdo/ND";
import Sidebar from "../Sidebar";
import Navb from "../navbar/Navb";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [doam, setDoam] = useState("");
  const [nhietdo, setNhietdo] = useState("");
  const [mhsensor, setMhsensor] = useState("");
  const [ultrasonic, setUltrasonic] = useState("");
  const userEmail = window.localStorage.getItem("Emaildetails");

  let urls =
    "https://api-vuon-thong-minh.onrender.com/datas/datadetail/" + userEmail;
    
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(urls)
        .then((data) => {
          setNhietdo(data.data.data.nhietdo);
          setDoam(data.data.data.doam);
          setMhsensor(data.data.data.mhsensor);
          setUltrasonic(data.data.data.ultrasonic);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="home">
      
        <Sidebar>
          <div className="homeContainer">
            <Navb />
            <div className="bangnhiet">
              <ND nhietdo={nhietdo} />

              <DOAM doam={doam} />
              <Doamdat mhsensor={mhsensor} />
            </div>
            <div className="wt">
              <LiquidTank water={ultrasonic} />
            </div>
            <div style={{ marginTop: "50px" }}>
              <footer
                className="ft"
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bolder",
                }}
              >
                © Copyright 2023
              </footer>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default Home;

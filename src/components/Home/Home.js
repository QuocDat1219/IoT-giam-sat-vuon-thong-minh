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
import Footer from "../LandingPage/UI/Footer";
const Home = () => {
  const [doam, setDoam] = useState(null);
  const [nhietdo, setNhietdo] = useState(null);
  const [mhsensor, setMhsensor] = useState(null);
  const [ultrasonic, setUltrasonic] = useState(null);
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

  useEffect(() => {
    axios.post('https://api-vuon-thong-minh.onrender.com/users/user-data', {
      token: window.localStorage.getItem("token"),
    })
      .then((data) => {
 
       if(data.data.data == "token expired"){
        window.localStorage.clear();
        window.localStorage.setItem("loggedIn", "false");
 
       }
      })
  },[])

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
            <div
              style={{
                paddingLeft: "20px",
                paddingRight: "15px",
                paddingTop: "15px",
              }}
            >
              <Footer />
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default Home;

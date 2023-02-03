import './home.scss'
import React, { useEffect, useState } from "react"; //react hooks
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../../firebase.config";
import { useNavigate,Routes, Route } from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";
import BieuDoPage from "../Chart/BieuDo";
import nhietdo from "../Chart/nhietdo/ND";
import DOAM from "../Chart/doam/DA";
import Doamdat from "../Chart/doamdat/doamdat";
import UserPage from "../User/User";
import DataTablePage from "../BangData/DataTable";
import Navb from '../navbar/Navb';
import LiquidTank from '../Bottelwater/LiquidTank';
import ND from "../Chart/nhietdo/ND";
import { Navbar } from 'react-bootstrap';
import Sidebar from '../Sidebar';
const Home = () => {
  const dbRef = ref(getDatabase());
  const [doam, setDoam] = useState([]);
  const [nhietdo, setNhietdo] = useState([]);
  const [mhsensor, setMhsensor] = useState([]);
  const [ultrasonic, setUltrasonic] = useState([]);
  setInterval(() => {
    get(child(dbRef, `DHT`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setDoam(snapshot.val().doam);
          setNhietdo(snapshot.val().nhietdo);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    get(child(dbRef, `Sensor`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setMhsensor(snapshot.val().MHsensor);
          setUltrasonic(snapshot.val().Ultra);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, 1000);

  const Navigate = useNavigate();
  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("logout successful");
        Navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const rootElement = document.getElementById("bottlewater");
  return (
    
    <div>
      <div className='home'>
        <Sidebar>
          <div className='homeContainer'>
            <Navb/>
            <div className="bangnhiet">
              <ND  nhietdo = {nhietdo}/>
              <DOAM doam = {doam}/>
              <Doamdat mhsensor = {mhsensor}/>
            </div>
            <div className='wt'>
              <LiquidTank water = {ultrasonic}/>
            </div>
          </div>
          </Sidebar>
      </div>
      
      {/* <div className="flex text-center container mx-auto">
        <button onClick={Logout} className="btn btn-primary m-2">
          Logout
        </button>
      </div>
      <h1>Độ ẩm {doam}</h1>
      <h1>Nhiệt độ {nhietdo}</h1>
      <h1>Độ ẩm đất {mhsensor}</h1>
      <h1>Bình chứa {ultrasonic}</h1>

      <Routes>
        <Route path="/home" element={<BieuDoPage/>}></Route>
        <Route path="/home" element={<BieuDoPage/>}></Route>
        <Route path="/home" element={<UserPage/>}></Route>
      </Routes> */}
    </div>
    
  );
};

export default Home;
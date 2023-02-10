import React, {useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../../firebase.config";
import { useNavigate,Routes, Route } from "react-router-dom";
import axios from "axios";
import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from "./SidebarStyles";
import BrandLogo from "./logoicon.ico";

import {SidebarItems} from "..";

const MOBILE_VIEW = window.innerWidth < 468;

export default function Sidebar({ children }) {
  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);

  const [conn, setConn] = useState("");
  const userEmail = window.localStorage.getItem('Emaildetails');

  let urls = "https://api-vuon-thong-minh.onrender.com/datas/datadetail/"+userEmail;

  const fectchdata = () =>{
    axios.get(urls) 
    .then((data) => {
      setConn(data.data.data.connect);
    }).catch((e) => {
      console.log(e);
    });
  } 
  fectchdata();
  useEffect(() =>{
    setInterval(() => {
     fectchdata();
    }, 4000);
  })

  useEffect(() => {
    const fetchData = async () => {
    await axios.post("https://api-vuon-thong-minh.onrender.com/datas/updatedht", {
        email: userEmail,
        connect: "disconect",
      })
        .then(function (response) {
          console.log(response);
         
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleSidebarDisplay = (e) => {
    e.preventDefault();
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };
  const Navigate = useNavigate();
  return (
    <React.Fragment>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            { <SidebarLogo href="#">
              <span className="app-brand-logo demo">
                <img src={BrandLogo} width="50px" height="50px" alt="Brand logo" />
              </span>
              <SidebarBrand
              style = {{fontSize: "-webkit-xxx-large", color:"#a0c279"}}
                displaySidebar={displaySidebar}
                className="app__brand__text"
              >
              
                <label htmlFor=""> </label> <b>IoT</b>
              </SidebarBrand>
            </SidebarLogo>}
            <SidebarToggler
              style = {{fontSize: "15px", color:"black"}}
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >Ghim
              <div className="outer__circle">
                <div className="inner__circle" />
              </div>
            </SidebarToggler>
          </SidebarLogoWrapper>
          <div style={{display:"flex",paddingLeft:"7"}}>
            <h3 style={{fontSize:"18px"}}>Thiết bị: </h3>
            {
              conn == "connect" ? <p style={{fontSize:"16px",color:"green",}}>  Đang hoạt động </p> : <p style={{fontSize:"16px",color:"red"}}> Mất kết nối </p>
            }
          </div>
          
          <SidebarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  );
}

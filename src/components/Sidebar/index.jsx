import React, { useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../../firebase.config";
import { useNavigate,Routes, Route } from "react-router-dom";

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
          <SidebarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  );
}

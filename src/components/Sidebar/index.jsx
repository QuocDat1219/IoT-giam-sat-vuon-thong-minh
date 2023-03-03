import React, { useEffect, useState } from "react";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import PushPinIcon from "@mui/icons-material/PushPin";
import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from "./SidebarStyles";
import BrandLogo from "../images/LOGOCHU.png";

import { SidebarItems } from "..";

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
        <SidebarWrapper>'
          
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            {
              <Link to="/home" >
              <SidebarLogo href="#">
                <span className="app-brand-logo demo">
                  <img
                    src={BrandLogo}
                    width="150px"
                    height="150px"
                    alt="Brand logo"
                  />
                </span>
              </SidebarLogo>
              </Link>
            }
            <SidebarToggler
              style={{ fontSize: "15px", color: "black" }}
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >
              <PushPinIcon />
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

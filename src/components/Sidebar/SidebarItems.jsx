import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, Routes, Route } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from "./SidebarStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { dummyData } from "..";

const SidebarItems = ({ displaySidebar }) => {
  const [activeItem, setActiveItem] = useState(0);


  return (
    <ItemsList>
      {dummyData.map((itemData, index) => ( 
        <ItemContainer
          key={index}
          className={itemData.id === activeItem ? "active" : ""}
        >
          <ToastContainer />
          <Link to={itemData.path}>
            <ItemWrapper>
              {itemData.icon}
              <ItemName displaySidebar={displaySidebar}>
                {itemData.name}
              </ItemName>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      ))}
    </ItemsList>
  );
};

export default SidebarItems;

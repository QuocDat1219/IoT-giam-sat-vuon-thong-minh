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

import { dummyData } from "..";

const SidebarItems = ({ displaySidebar }) => {
  const [activeItem, setActiveItem] = useState(0);


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
  return (
    <ItemsList>
      {dummyData.map((itemData, index) => (
        <ItemContainer
          key={index}
          onClick={() => itemData.id == 6 ? Logout(): setActiveItem(itemData.id) }
          className={itemData.id === activeItem ? "active" : ""}
        >
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

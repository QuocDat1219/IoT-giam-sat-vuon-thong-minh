import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../../firebase.config";
import { useNavigate } from "react-router-dom";
import { db } from "./../../firebase.config";
import { getDatabase, onValue, ref, set } from "firebase/database";

const Home = () => {

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
    <div>
      <h1>Home</h1>

      <div className="flex text-center container mx-auto">
        <button onClick={Logout} className="btn btn-primary m-2">
          Logout
        </button>
        
        <button className="btn btn-primary m-2">Logout</button>
      </div>
    </div>
  );
};

export default Home;

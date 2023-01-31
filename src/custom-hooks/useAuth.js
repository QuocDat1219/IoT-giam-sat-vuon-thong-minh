import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
const useAuth = () => {
  const [currenUser, setCurrenUser] = useState({});
  const [islogin, useusLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrenUser(user);
      } else {
        setCurrenUser(null);
      }
    });
  });

  return {
    currenUser,
  };
};

export default useAuth;

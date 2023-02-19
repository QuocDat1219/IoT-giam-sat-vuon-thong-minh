import React, { useEffect, useRef } from "react";
import "../Style/header.css";
import logo from "../../images/IOT.png";
import { Link } from "react-router-dom";
const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#schedule",
    display: "Giới thiệu",
  },
  {
    path: "#classes",
    display: "Hoạt động",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 60,
    });
  };

  return (
    <header className="headerLandingPage" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* ======= LOGO ======= */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>Green House </h2>
          </div>

          {/* ======= navigation menu ======= */}

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item">
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
    

          <div className="nav__right">
         <Link to={"/login"} >
         <button className="register__btn">Đăng nhập nè nhe</button>
         </Link>
         <Link to={"/register"} >
         <button className="register__btn">Đăng ký nè nhe</button>
         </Link>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
  
    </header>
    
  );
};

export default Header;

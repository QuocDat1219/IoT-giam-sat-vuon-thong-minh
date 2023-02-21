import React from "react";
import "../Style/footer.css";
import logo from "../../images/IOT.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="" />
              </div>
              <h2 style={{ color: "var(--primary-color)", paddingTop: "10px" }}>
                Green House
              </h2>
            </div>
            <p style={{ marginLeft: "30px" }}>
              Chăm sóc theo dõi khu vườn của bạn
            </p>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Liên hệ</h4>

            <ul className="footer__links">
              <li>
                <a href="#">Vĩnh Long</a>
              </li>
              <li>
                <a href="#">19004025@gmail.com</a> 
              </li>
              <li>
                <a href="#">19004204@gmail.com</a>
              </li>
              <li>
                <a href="#">19004007@gmail.com</a>
              </li>
              <li>
                <a href="#">19004012@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <h4 className="footer__title">Quick links</h4>

            <ul className="footer__links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support us</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">Copyright - {year}. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

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
              <h2
                style={{
                  color: "var(--primary-color)",
                  paddingTop: "10px",
                  fontSize: "22px",
                }}
              >
                Green House
              </h2>
            </div>
            <p style={{ marginLeft: "30px", fontSize: "15px" }}>
              Chăm sóc và theo dõi khu vườn của bạn
            </p>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Liên Hệ</h4>

            <ul className="footer__links">
              <li>
                <a>Vĩnh Long</a>
              </li>
              <li>
                <a>greenhousedatb@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <h4 className="footer__title">Giúp Đỡ </h4>
            <ul className="footer__links">
              <li>
                <a href="#home">Giới thiệu</a>
              </li>
              <li>
                <a href="#classes">Hoạt động</a>
              </li>
              <li>
                <a href="#About">Nhà sáng tạo</a>
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

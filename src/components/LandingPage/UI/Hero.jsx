import React from "react";
import heroImg from "../../images/iothead.jpg";
import dumbleIcon from "../../images/IOT.png";
import "../Style/hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">
          {/* ============= HERO CONTENT ================= */}
          <div className="hero__content">
            <h2
              className="section__title"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1800"
            >
              IoT -<span className="highlights"> Green House</span>
            </h2>
            <p data-aos="fade-up" data-aos-duration="1500">
              Giải pháp giúp bạn giải quyết việc trồng trọt trở nên dễ dàng hơn.
              <br />
              Cùng với sự phát triển vượt bật của công nghệ. <br />
              <strong>
                <h1>Bắt đầu ngay!!</h1>
              </strong>
            </p>
            <div
              className="hero__btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <Link to={"/login"}>
              <button className="register__btn">Get Started</button></Link>
            </div>
          </div>
          {/* ============= HERO IMG ================= */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img
                        src={heroImg}
                        alt=""
                        style={{
                          marginTop: "85px",
                          borderRadius: "30px",
                          boxShadow: "#07bc0c",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="heart__rate"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h5>Theo dõi</h5>
                <span>
                  <i class="ri-eye-fill"></i>
                </span>
                <h6>24/24</h6>
              </div>

              <div
                className="gym__location"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <span>
                  <i class="ri-settings-5-fill"></i>
                </span>
                <h5>
                  Điều khiển thiết bị
                  <br /> từ xa
                </h5>
              </div>

              <div
                className="dumble__icon"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <img src={dumbleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import heroImg from "../../images/iothead.jpg";
import dumbleIcon from "../../images/IOT.png";
import "../Style/hero.css";
import "../Style/button.scss";
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
              <Link to={"/Register"}>
                <div class="buttons">
                  <button class="blob-btn">
                    trải nghiệm ngay
                    <span class="blob-btn__inner">
                      <span class="blob-btn__blobs">
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                      </span>
                    </span>
                  </button>
                  <br />

                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <filter id="goo">
                        <feGaussianBlur
                          in="SourceGraphic"
                          result="blur"
                          stdDeviation="10"
                        ></feGaussianBlur>
                        <feColorMatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                          result="goo"
                        ></feColorMatrix>
                        <feBlend
                          in2="goo"
                          in="SourceGraphic"
                          result="mix"
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                </div>
              </Link>
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

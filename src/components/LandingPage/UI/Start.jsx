import React from "react";
import "../Style/start.css";
import "../Style/button.scss";
import startImg from "../../images/vcl.png";
import { Link } from "react-router-dom";
function Start() {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={startImg}
              alt=""
              srcset=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section__title">
              <span className="highlights">
                <h1>HOẠT ĐỘNG</h1>
              </span>
            </h2>
            <p>
              Hệ thống được kiểm soát và điều khiển bằng website
              <br />
              Đồng thời dữ liệu được lưu trữ hoàn toàn bằng các dịch vụ đám mây
            </p>
            <Link to={"/Register"}>
              <div class="buttons">
                <button class="blob-btn">
                  Trải nghiệm ngay
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
      </div>
    </section>
  );
}

export default Start;

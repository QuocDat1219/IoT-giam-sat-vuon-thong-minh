import React from "react";
import "../Style/testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

import quocdat from "../../images/datpe.jpg";
import lapthuan from "../../images/lapthuan.jpg";
import giabao from "../../images/giabao.jpg";
import tuananh from "../../images/tuananh.jpg";
export default function Testimonials() {
  return (
    <>
      <section id="About">
        <div className="container sliders" style={{ marginLeft: "40%" }}>
          <h2 className="section__title" style={{marginLeft:"40px", color:"#07bc0c"}}>NHÀ SÁNG TẠO</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img className="memberavt" src={quocdat} alt="" srcset="" />
                </div>
                <div className="introduce">
                <h4>Tên: Lê Nguyễn Quốc Đạt</h4>
                <p>Công việc: Team lead + Frontend developer</p>
                <p>Email: 1900025@gmail.com</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide__item">
                <div className="slide__img-02">
                  <img className="memberavt" src={lapthuan} alt="" srcset="" />
                </div>
                <div className="introduce">
                <h4>Tên: Đỗ Đoàn Lập Thuận</h4>
                <p>Công việc: Backend developer</p>
                <p>Email: 19004204@gmail.com</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide__item">
                <div className="slide__img-01">
                  <img className="memberavt" src={giabao} alt="" srcset="" />
                </div>
                <div className="introduce">
                <h4>Tên: Trần Gia Bảo</h4>
                <p>Công việc: Tester + Backend developer</p>
                <p>Email: 19004012@gmail.com</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide__item">
                <div className="slide__img-01">
                  <img className="memberavt" src={tuananh} alt="" srcset="" />
                </div>
                <div className="introduce">
                <h4>Tên: Nguyễn Hoàng Tuấn Anh</h4>
                <p>Công việc: Frontend developer</p>
                <p>Email: 19004007@gmail.com</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

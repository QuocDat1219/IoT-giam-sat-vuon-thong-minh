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
      <section>
        <div className="container sliders">
          <h2 className="section__title">About Us</h2>
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
                <h4>Lê Nguyễn Quốc Đạt</h4>
                <p>
                   Công việc: Team lead + Fontend developer
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide__item">
                <div className="slide__img-02">
                  <img className="memberavt" src={lapthuan} alt="" srcset="" />
                </div>
                <h4>Đỗ Đoàn Lập Thuận</h4>
                <p>
                  Công việc: Backend developer
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide__item">
                <div className="slide__img-01">
                  <img className="memberavt" src={giabao} alt="" srcset=""  />
                </div>
                <h4>Trần Gia Bảo</h4>
                <p>
                  Công việc: Tester
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide__item">
                <div className="slide__img-01">
                  <img className="memberavt" src={tuananh} alt="" srcset="" />
                </div>
                <h4>Nguyễn Hoàng Tuấn Anh</h4>
                <p>
                  Công việc: Fontend developer
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

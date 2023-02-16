import React from "react";
import "../Style/start.css";
import startImg from "../../images/mohinh.jpg";
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
            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Start;

import React from "react";
import "../Style/exercises.css";
import lunges from "../../images/newIoT.png";
import house from "../../images/IOT.png";
import setting from "../../images/setting.png";
const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Ý tưởng  <span className="highlights">IoT Green House</span>
          </h2>
          <p>
            Green House là hệ thống trồng trọt hiện đại trong nhà kính ứng dụng công nghệ Internet Of Things.
          </p>
        </div>
        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Internet of Things</h4>
              <p>
                Internet of Things, mạng lưới tập hợp các thiết bị thông minh và công nghệ.<br />
                Tạo điều kiện thuận lợi cho giao tiếp giữa thiết bị và đám mây 
                cũng như giữa các thiết bị với nhau.
              </p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={house} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Green House</h4>
              <p>
                Nhà kính, một mô hình trồng trọt kiểu mới theo phương pháp hiện đại hóa.<br />
                Giúp tối ưu năng suất cây trồng thời hạn chế tối thiểu ảnh hưởng từ môi trường bên ngoài.
              </p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={setting} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Chức năng</h4>
              <p>
                Theo dõi, giám sát nhà kính theo thời gian thực. <br />
                Điều khiển, cập nhật thông số của các thiết bị từ xa.<br />
                Nhận các thông báo về Email và Telegram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;

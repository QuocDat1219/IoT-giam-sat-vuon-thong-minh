import React from "react";
import Marquee from "react-fast-marquee";
import "../Style/feedback.css";
const Feedback = () => {
  return (
    <div
      style={{
        border: "1px black solid",
        borderRightColor: "#07bc0c",
        borderRightWidth: "5px",
        borderLeftWidth: "5px",
        borderLeftColor: "#07bc0c",
        borderTopWidth: "none",
        borderTopStyle: "none",
      }}
    >
      <Marquee speed={90} style={{ width: "100%", height: "50px" }}>
        <div className="title-fb" style={{display:"flex"}}>
          <div>
            <span className="title-ht">
              <span style={{ color: "#07bc0c" }}> &nbsp;Họ tên:</span> Gà Bông
            </span>{" "}
            &nbsp; &nbsp; &nbsp;
            <span className="title-nd">
              <span style={{ color: "#07bc0c" }}>Nội Dung:</span> Web xịn
            </span>{" "}
            &nbsp; &nbsp; &nbsp;
            <span className="title-dd">
              <span style={{ color: "#07bc0c" }}>Đánh giá:</span> 5 sao &nbsp;|
            </span>
          </div>
          &nbsp; &nbsp; &nbsp;
          <div>
            <span className="title-ht">
              <span style={{ color: "#07bc0c" }}>Họ tên:</span> Chuột Cống
            </span>{" "}
            &nbsp; &nbsp; &nbsp;
            <span className="title-nd">
              <span style={{ color: "#07bc0c" }}>Nội Dung:</span> Trải nghiệm rất tốt
            </span>{" "}
            &nbsp; &nbsp; &nbsp;
            <span className="title-dd">
              <span style={{ color: "#07bc0c" }}>Đánh giá:</span> 5 sao &nbsp;|
            </span>
          </div>
          &nbsp; &nbsp; &nbsp;
          <div>
            <span className="title-ht">
              <span style={{ color: "#07bc0c" }}>Họ tên:</span> Heo Rừng
            </span>{" "}
            &nbsp; &nbsp; &nbsp;
            <span className="title-nd">
              <span style={{ color: "#07bc0c" }}>Nội Dung:</span> Công nghệ tốt đấy
            </span>{" "}
            &nbsp; &nbsp; &nbsp;
            <span className="title-dd">
              <span style={{ color: "#07bc0c" }}>Đánh giá:</span> 5 sao &nbsp;|
            </span>
            &nbsp;&nbsp;
          </div>
        </div>
      </Marquee>
    </div>
  );
};
export default Feedback;

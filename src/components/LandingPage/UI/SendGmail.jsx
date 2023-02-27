import "../Style/Sendgmail.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRating from "./StarFeedback";
export const SendEmail = () => {
  const form = useRef();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [noidung, setnoidung] = useState("");
  var checkMail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    if (name == "" || email == "" || noidung == "") {
      toast.warning("Vui lòng không để trống thông tin");
      return;
    } else if (!checkMail.test(email) || email.length == "") {
      toast.warning("Email không hợp lệ");
      return;
    }

    // toast("Đang xử lý...");

    emailjs
      .sendForm(
        "service_isfrjm3",
        "template_udqroyo",
        form.current,
        "I-4tCdeia5owjqIoO"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.promise(
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
              }, 2000);
            }),
            {
              pending: "Đang xử lí....",
              success: "Gửi thành công",
            },
            {
              autoClose: 2000,
            }
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="send">
      <StyledContactForm style={{ marginRight: "400px" }}>
        <div className="formfb">
          <form ref={form} onSubmit={sendEmail}>
            <p
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bolder",
                color: "#07bc0c",
                paddingBottom: "50px",
              }}
            >
              PHẢN HỒI
            </p>
            <label
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                paddingBottom: "10px",
              }}
            >
              Họ tên
            </label>
            <input
              className="title_ip"
              type="text"
              name="user_name"
              placeholder="Vui lòng nhập họ tên"
              onChange={(e) => setname(e.target.value)}
            />
            <label
              className="title_lb"
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                paddingBottom: "10px",
              }}
            >
              Email
            </label>

            <input
              className="title_ip"
              type="email"
              name="user_email"
              placeholder="Vui lòng nhập email"
              onChange={(e) => setemail(e.target.value)}
            />
            <label
              className="title_lb"
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                paddingBottom: "10px",
              }}
            >
              Nội dung phản hồi
            </label>

            <textarea
              className="textt"
              name="message"
              placeholder="Vui lòng nhập thông tin phản hồi"
              onChange={(e) => setnoidung(e.target.value)}
            />

            <div>
            <label
              className="title_lb"
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                paddingBottom: "10px",
              }}
            >
              Đánh giá:
            </label>
            <br />
              <StarRating totalStars={5} />
            </div>
            <button className="btn" type="submit">
              <span>Gửi</span>
            </button>
          </form>
        </div>
      </StyledContactForm>
      <ToastContainer pauseOnHover={false} draggable={false} autoClose={2500} />
    </div>
  );
};
export default SendEmail;

const StyledContactForm = styled.div`
  width: 400px;
`;

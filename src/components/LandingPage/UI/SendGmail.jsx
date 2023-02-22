import "../Style/Sendgmail.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      toast("Vui lòng không để trống thông tin để có thể gửi phản hồi");
      return;
    } else if (!checkMail.test(email) || email.length == "") {
      toast("Email không hợp lệ");
      return;
    }

    toast("Đang xử lý...");

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
          toast.success("Gửi thành công");
        },
        (error) => {
          console.log(error.text);
          toast.success("Gửi không thành công");
        }
      );
  };

  return (
    <div>
      <StyledContactForm style={{ marginRight: "400px" }}>
        <div className="formfb">
          <form ref={form} onSubmit={sendEmail}>
            <p
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bolder",
                color: "#21344d",
                paddingBottom: "50px",
              }}
            >
              Feed Back
            </p>
            <label style={{ fontWeight: "bolder", fontSize: "18px", paddingBottom:"10px" }}>
              Name

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
              style={{ fontWeight: "bolder", fontSize: "18px",paddingBottom:"10px" }}
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
              style={{ fontWeight: "bolder", fontSize: "18px",paddingBottom:"10px" }}
            >
              Message
            </label>

            <textarea
              className="textt"
              name="message"
              placeholder="Vui lòng nhập thông tin phản hồi"
              onChange={(e) => setnoidung(e.target.value)}
            />
            <button className="btn" type="submit">
              <span>Click me</span>
            </button>
          </form>
        </div>
      </StyledContactForm>
      <ToastContainer />
    </div>
  );
};
export default SendEmail;

const StyledContactForm = styled.div`
  width: 400px;
`;

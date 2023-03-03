import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import chibay from "../../images/1.jpg";
import anhba from "../../images/3.jpg";
import anhnam from "../../images/2.jpg";
import Marquee from "react-fast-marquee";
export default function CustomFeedback() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3
            className="mb-4"
            style={{ fontSize: "25px", color: "#07bc0c", fontWeight: "bolder" }}
          >
            PHẢN HỒI TỪ KHÁCH HÀNG
          </h3>
        </MDBCol>
      </MDBRow>
      <Marquee speed={100} pauseOnClick>
        <MDBRow className="text-center">
          <MDBCol md="4" className="">
            <div className="d-flex justify-content-center mb-4">
              <img
                src={chibay}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3" style={{ fontSize: "18px" }}>
              bayca@gmai.com
            </h5>
            <h6
              className=" mb-3"
              style={{ fontSize: "20px", color: "#07bc0c" }}
            >
              Chị Bảy
            </h6>
            <p className="px-xl-3" style={{ fontSize: "15px" }}>
              <MDBIcon fas icon="quote-left" className="pe-2" />
              Ứng dụng ổn định, giúp tôi dễ dàng canh tác và xem số liệu từ môi
              trường.
            </p>
            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0 mt-2 text-xl"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="">
            <div className="d-flex justify-content-center mb-4">
              <img
                src={anhba}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3" style={{ fontSize: "18px" }}>
              Namrau@gmail.com
            </h5>
            <h6
              className=" mb-3"
              style={{ fontSize: "20px", color: "#07bc0c" }}
            >
              Anh Năm
            </h6>
            <p className="px-xl-3" style={{ fontSize: "15px" }}>
              <MDBIcon fas icon="quote-left" className="pe-2" />
              Nhờ có ứng dụng này rau của tôi phát triển hơn, tôi có thể bán
              được nhiều hơn.
            </p>
            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0 mt-2 text-xl"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="">
            <div className="d-flex justify-content-center mb-4">
              <img
                src={anhnam}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="200"
              />
            </div>
            <h5 className="mb-3" style={{ fontSize: "18px" }}>
              banongtrai@gmail.com
            </h5>
            <h6 className="mb-3" style={{ fontSize: "20px", color: "#07bc0c" }}>
              Anh Ba Thuận
            </h6>
            <p className="px-xl-3" style={{ fontSize: "15px" }}>
              <MDBIcon fas icon="quote-left" className="pe-2" />
              Khu vườn của tôi trở nên hiện đại hơn, ứng dụng rất tốt
            </p>
            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0 mt-2 text-xl"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      </Marquee>
    </MDBContainer>
  );
}

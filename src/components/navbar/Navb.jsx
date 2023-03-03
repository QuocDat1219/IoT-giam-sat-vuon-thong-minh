import "./Navb.scss";
import axios from "axios";
import React, { useEffect, useState } from "react"; //react hooks
import { FaUsb } from "react-icons/fa";
import AppHeaderDropdown from "../header/AppHeaderDropdown";
import { toast } from "react-toastify";
import PuffLoader from "react-spinners/PuffLoader";
import "./btnRs.scss";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
const Navb = () => {
  const [conn, setConn] = useState("");

  const [showModel, setshowModel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userEmail = window.localStorage.getItem("Emaildetails");
  let urls =
    "https://api-vuon-thong-minh.onrender.com/datas/datadetail/" + userEmail;

  useEffect(() => {
    axios
      .post("https://api-vuon-thong-minh.onrender.com/users/user-data", {
        token: window.localStorage.getItem("token"),
      })
      .then((data) => {
        //console.log(data.data.data);
        if (data.data.data === "token expired") {
          window.localStorage.clear();
          window.localStorage.setItem("loggedIn", "false");
          window.localStorage.getItem("loggedIn");
          window.location.href = "/login";
        }
      });


    const fetchData = async () => {
      await axios
        .get(urls)
        .then((data) => {
          if (data.data.data.connect == "connect") {
            setConn("Connection");
          } else {
            setConn("Disconnect");
          }

        })
        .catch((e) => {
          // toast("Lỗi gọi API");
        });
    };

    const updatedata = async () => {
      await axios
        .post("https://api-vuon-thong-minh.onrender.com/datas/updatedht", {
          email: userEmail,
          connect: "disconnect",
        })
        .then(function (response) {
          //console.log(response);
          return;
        })
        .catch(function (error) {
          //toast("Lỗi gọi API");
        });
    };
    fetchData();
    const intervalId1 = setTimeout(fetchData, 4000);
    const intervalId = setTimeout(updatedata, 600000);
    clearTimeout(intervalId1);
    clearTimeout(intervalId);
  }, []);

  //Handle reset device in web
  const handleResetBtn = async () => {
    setIsLoading(true);
    await axios
      .post("https://api-vuon-thong-minh.onrender.com/datas/reset", {
        reset: "1",
        email: userEmail,
      })
      .then(function (response) {
        if (response.data.acknowledged == true) {
          toast.success("Reset thành công");
          setIsLoading(false);
        }
      })
      .catch(function (error) {
        toast.error("Reset không thành công");
      });
  };
  return (
    <div className="nb">
      <div className="wrapper">
        <div className="connect" style={{ display: "flex" }}>
          <div
            style={{ display: "flex", paddingLeft: "9px", textAlign: "left" }}
          >
            <FaUsb style={{ fontSize: "30px", paddingTop: "12px" }} />

            <strong
              style={{
                fontSize: "16px",
                paddingLeft: "5px",
                paddingTop: "12px",
              }}
              className={conn == "Connection" ? 'connected' : 'disconnected'}
            >
              {" "}
              {conn}{" "}
            </strong>

          </div>
          <div className="btnRS" style={{ marginLeft: "30px" }}>
            <button
              style={{ fontSize: "15px" }}
              type="submit"
              className="btn-85"
              onClick={() => setshowModel(true)}
            >
              <RotateLeftIcon />
              Cài đặt lại thiết bị
            </button>
          </div>
        </div>

        <div className="items">
          {/* <div className="item">
            <NotificationsActiveIcon className="icon" />
            <div className="counter">1</div>
          </div> */}
          <div className="item">
            <AppHeaderDropdown />
          </div>
        </div>
      </div>
      {showModel ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center m-2 w-100">
                    THÔNG BÁO
                  </h3>
                </div>
                <div style={{ width: "500px", padding: "20px" }}>
                  <p style={{ fontSize: "20px" }}>
                    Bạn có muốn reset thiết bị không ?
                  </p>
                  <br></br>
                  <br></br>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="btn_rst"
                      type="button"
                      onClick={() => setshowModel(false)}
                    >
                      Thoát
                    </button>
                    <button
                      className="btn_rs_dn"
                      type="submit"
                      onClick={handleResetBtn}
                    >
                      {isLoading ? (
                        <div className="flex justify-center items-center">
                          <PuffLoader color="#f1c40f" size={30} />
                        </div>
                      ) : (
                        "Reset"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
};
export default Navb;

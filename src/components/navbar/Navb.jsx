import "./Navb.scss";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import axios from "axios";
import React, { useEffect, useState } from "react"; //react hooks
import { FaUsb } from "react-icons/fa";
import AppHeaderDropdown from "../header/AppHeaderDropdown";
import Form from "react-bootstrap/Form";
import {  toast } from "react-toastify";
import "./Button.css";
const Navb = () => {
  const [conn, setConn] = useState("");
  const userEmail = window.localStorage.getItem("Emaildetails");
  const [showModel, setshowModel] = useState(false);
  let urls =
    "https://api-vuon-thong-minh.onrender.com/datas/datadetail/" + userEmail;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(urls)
        .then((data) => {
          setConn(data.data.data.connect);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchData();
    const timeoutf = setTimeout(fetchData, 5000);
    return () => clearTimeout(timeoutf);
  }, []);

  useEffect(() => {
    const updatedata = async () => {
      await axios
        .post("https://api-vuon-thong-minh.onrender.com/datas/updatedht", {
          email: userEmail,
          connect: "disconect",
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    updatedata();
    const intervalId = setTimeout(updatedata, 10000);
    return () => clearTimeout(intervalId);
  }, []);

  //Handle reset device in web
  const handleResetBtn = async () => {
      await axios
      .post("https://api-vuonthongminh.vercel.app/datas/reset",{
          reset: "1",
          email: userEmail
      })
      .then(function (response) {
        console.log(response);
        if(response.data.acknowledged == true) {
          toast.success("Reset thành công");
        }
      })
      .catch(function (error) {
        toast.success("Reset không thành công");
      })
    }
  return (
    <div className="nb">
      <div className="wrapper">
        <div className="connect" style={{ display: "flex" }}>
          <div
            style={{ display: "flex", paddingLeft: "9px", textAlign: "left" }}
          >
            <FaUsb style={{ fontSize: "25px" }} />
            {conn == "connect" ? (
              <strong
                style={{
                  fontSize: "16px",
                  color: "green",
                  paddingLeft: "5px",
                  paddingTop: "3px",
                }}
              >
                {" "}
                Connected{" "}
              </strong>
            ) : (
              <strong
                style={{
                  fontSize: "16px",
                  color: "red",
                  paddingLeft: "5px",
                  paddingTop: "3px",
                }}
              >
                {" "}
                Disconnect{" "}
              </strong>
            )}
          </div>
          <div
            className="btnRS"
            style={{ marginLeft: "30px", paddingTop: "5px" }}
          >
            <button
              style={{ fontSize: "15px" }}
              type="submit"
              className="button"
              onClick={() => setshowModel(true)}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="items">
          <div className="item">
            <NotificationsActiveIcon className="icon" />
            <div className="counter">1</div>
          </div>
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
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setshowModel(false)}
                    >
                      Thoát
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      onClick={handleResetBtn}
                    >
                      Reset
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

import "./doam.scss";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import React, { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const DOAM = (props) => {
console.log(props.doam);
  return props.doam == null ? (
    <>
      <div className="ND flex justify-center items-center">
              <PacmanLoader color="#4cd137" />
      </div>
    </>
  ) :  (
    <>
       <div className="DOAM">
        <div className="top">
          <h1 className="title">
            Độ ẩm không khí:{" "}
            <span style={{ fontWeight: "bold", color: "#4cd137" }}>
              {props.doam} %
            </span>
          </h1>
          <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
          <div className="doamChart">
            <CircularProgressbar
              styles={{
                path: { stroke: `rgba(46, 198, 138, 1)` },
                text: { fill: "#4cd137" },
              }}
              value={props.doam}
              maxValue={100}
              text={props.doam + "%"}
              strokeWidth={10}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DOAM;

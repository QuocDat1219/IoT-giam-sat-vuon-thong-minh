import "./nhietdo.scss";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useState } from "react";
import Temp from "./temp";
import PacmanLoader from "react-spinners/PacmanLoader";

class ND extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      templ: props.nhietdo,
    };
  }
  render() {
    return this.props.nhietdo ? (
      <>
        <div className="ND">
          <div className="top">
            <h1 className="title">
              Nhiệt độ không khí:{" "}
              <span style={{ fontWeight: "bold", color: "#eb2f06" }}>
                {this.props.nhietdo}
                <sup>o</sup>C
              </span>
            </h1>
            <MoreVertIcon fontSize="small" />
          </div>
          <div className="bottom">
            <div className="dials">
              <Temp className="tm" value={this.props.nhietdo} />
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="ND flex justify-center items-center">
          <PacmanLoader color="#f44336" />
        </div>
      </>
    );
  }
}

export default ND;

import * as React from "react";
import { color } from "d3-color";
import LiquidFillGauge from "react-liquid-gauge";
import "./BottleWater.css";
import RingLoader from "react-spinners/RingLoader";

const LiquidTank = (props) => {
  const radius = 140;
  const fillColor = "#1e3799";
  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor).darker(0.5).toString(),
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: props.water,
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: props.water,
    },
    {
      key: "100%",
      stopColor: color(fillColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];

  return props.water == null ? (
    <>
      <div className="ND flex justify-center items-center">
        <RingLoader color="#1e3799" size={200} />
      </div>
    </>
  ) : (
    <>
      <div className="Bottlewater">
        <div className="top">
          <h1 className="title">
            Lượng nước trong thùng chứa:{" "}
            <span style={{ fontWeight: "bold", color: "#1e3799" }}>
              {props.water} %
            </span>{" "}
          </h1>
        </div>
        <div className="position-relative">
          <LiquidFillGauge
            style={{ margin: "0 auto" }}
            width={radius * 2}
            height={radius * 2}
            value={props.water}
            percent="%"
            textSize={1}
            textOffsetX={12}
            textOffsetY={15}
            textRenderer={(props) => {
              const value = Math.round(props.value);
              const radius = Math.min(props.height / 2, props.width / 2);
              const textPixels = (props.textSize * radius) / 2;
              const valueStyle = {
                fontSize: textPixels,
              };
              const percentStyle = {
                fontSize: textPixels * 0.6,
              };

              return (
                <tspan>
                  <tspan className="value" style={valueStyle}>
                    {value}
                  </tspan>
                  <tspan style={percentStyle}>{props.percent}</tspan>
                </tspan>
              );
            }}
            riseAnimation
            waveAnimation
            waveFrequency={2}
            waveAmplitude={1}
            gradient
            gradientStops={gradientStops}
            circleStyle={{
              fill: fillColor,
            }}
            waveStyle={{
              fill: fillColor,
            }}
            textStyle={{
              fill: color("#444").toString(),
              fontFamily: "Arial",
            }}
            waveTextStyle={{
              fill: color("#fff").toString(),
              fontFamily: "Arial",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LiquidTank;

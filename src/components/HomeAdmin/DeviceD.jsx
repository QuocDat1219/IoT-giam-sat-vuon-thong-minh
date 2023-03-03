import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import UsbOffIcon from "@mui/icons-material/UsbOff";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Css/DeviceD.css";
import RingLoader from "react-spinners/RingLoader";

export const DeviceD = (props) => {
  const [checkdisconnect, setDisconnect] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api-vuon-thong-minh.onrender.com/datas/getalldata")
        .then((result) => {
          // const newdata = JSON.parse(result.data);
          const count = result.data.data.reduce((total, item) => {
            if (item.connect === "disconnect") {
              return total + 1;
            }
            return total;
          }, 0);
          setDisconnect(count);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return checkdisconnect != "" ? (
    <div style={{ width: "100%" }} className="DeviceD">
      <Card {...props}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                <p style={{ fontWeight: "bolder" }}>Thiết bị ngắt kết nối</p>
              </Typography>
              <Typography color="textPrimary" variant="h4">
                {checkdisconnect}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "#e55039",
                  height: 56,
                  width: 56,
                }}
              >
                <UsbOffIcon />
              </Avatar>
            </Grid>
          </Grid>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              pt: 2,
            }}
          ></Box>
        </CardContent>
      </Card>
    </div>
  ) : (
    <div style={{ width: "100%" }} className="DeviceD">
      <Card {...props}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                Thiết bị ngắt kết nối
              </Typography>
              <Typography color="textPrimary" variant="h4">
                <RingLoader size="42px" color="#e55039" />
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "#e55039",
                  height: 56,
                  width: 56,
                }}
              >
                <UsbOffIcon />
              </Avatar>
            </Grid>
          </Grid>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              pt: 2,
            }}
          ></Box>
        </CardContent>
      </Card>
    </div>
  );
};
export default DeviceD;

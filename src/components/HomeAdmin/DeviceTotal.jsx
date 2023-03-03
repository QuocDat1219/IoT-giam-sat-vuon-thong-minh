import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Css/DeviceTotal.css";
import RingLoader from "react-spinners/RingLoader";

export const DeviceTotal = (props) => {
  const [totalDevice, setTotalDevice] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api-vuon-thong-minh.onrender.com/datas/getalldata")
        .then((result) => {
          const numOfDevice = result.data.data.filter(
            (obj) => obj.connect !== undefined
          ).length;
          setTotalDevice(numOfDevice);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return totalDevice != "" ? (
    <div style={{ width: "135%" }} className="deviceToTotal">
      <Card {...props}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
              <p style={{ fontWeight: "bolder" }}>Tổng thiết bị</p>
              </Typography>
              <Typography color="textPrimary" variant="h4">
                {totalDevice}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "#4834d4",
                  height: 56,
                  width: 56,
                }}
              >
                <ImportantDevicesIcon />
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
    <div style={{ width: "135%" }} className="deviceToTotal">
      <Card {...props}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                Tổng thiết bị
              </Typography>
              <Typography color="textPrimary" variant="h4">
                <RingLoader size="42px" color="#4834d4" />
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "#4834d4",
                  height: 56,
                  width: 56,
                }}
              >
                <ImportantDevicesIcon />
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
export default DeviceTotal;

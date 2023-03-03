import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import UsbIcon from "@mui/icons-material/Usb";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Css/DeviceC.css";
import RingLoader from "react-spinners/RingLoader"
export const DeviceC = (props) => {
  const [checkConnect, setCheckConnect] = useState(null);
  console.log(checkConnect);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api-vuon-thong-minh.onrender.com/datas/getalldata")
        .then((result) => {
          // const newdata = JSON.parse(result.data);
          const count = result.data.data.reduce((total, item) => {
            if (item.connect === "connect") {
              return total + 1;
            }
            return total;
          }, 0);
          setCheckConnect(count);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return checkConnect != null  ?(
    <div style={{ width: "100%" }} className="DeviceC">
      <Card {...props}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
              <p style={{ fontWeight: "bolder" }}> Thiết bị đang kết nối</p>
              </Typography>
              <Typography color="textPrimary" variant="h4">
                {checkConnect}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "#32ff7e",
                  height: 56,
                  width: 56,
                }}
              >
                <UsbIcon />
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
  ):(
    <div style={{ width: "100%" }} className="DeviceC">
      <Card {...props}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                Thiết bị đang kết nối
              </Typography>
              <Typography color="textPrimary" variant="h4">
              <RingLoader size="42px" color="#32ff7e"/>
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "#32ff7e",
                  height: 56,
                  width: 56,
                }}
              >
                <UsbIcon />
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
export default DeviceC;

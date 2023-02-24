import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import UsbOffIcon from "@mui/icons-material/UsbOff";
import { useState,useEffect } from "react";
import axios from "axios";

export const DeviceD = (props) => {
  const [checkdisconnect, setDisconnect] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api-vuonthongminh.vercel.app/datas/getalldata")
        .then((result) => {
          // const newdata = JSON.parse(result.data);
          const count = result.data.data.reduce((total, item) => {
            if (item.connect === 'disconnect') {
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

  return (<div style={{ width: "100%" }}>
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Thiết bị ngắt kết nối
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
</div>)};
export default DeviceD;

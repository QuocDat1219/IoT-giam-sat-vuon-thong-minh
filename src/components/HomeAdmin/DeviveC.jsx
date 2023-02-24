import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import UsbIcon from "@mui/icons-material/Usb";
import { useState,useEffect } from "react";
import axios from "axios";

export const DeviceC = (props) => {
  const [checkConnect, setCheckConnect] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api-vuonthongminh.vercel.app/datas/getalldata")
        .then((result) => {
          // const newdata = JSON.parse(result.data);
          const count = result.data.data.reduce((total, item) => {
            if (item.connect === 'connect') {
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
  
  return(
    <div style={{width:"100%"}}>
    <Card {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Thiết bị đang kết nối
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
  )}
export default DeviceC;

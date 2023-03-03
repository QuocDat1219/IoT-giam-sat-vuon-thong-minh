import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Css/UserTotal.css";
import RingLoader from "react-spinners/RingLoader";
export const UserTotal = (props) => {
  const [totalUser, setTotalUser] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api-vuon-thong-minh.onrender.com/datas/getalldata")
        .then((result) => {
          const numOfEmailFields = result.data.data.filter(
            (obj) => obj.email !== undefined
          ).length;
          setTotalUser(numOfEmailFields);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return totalUser != "" ? (
    <div style={{ width: "150%" }} className="total-US">
      <Card {...props}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
              <p style={{ fontWeight: "bolder" }}>tài khoản</p>
              </Typography>
              <Typography color="textPrimary" variant="h4">
                {totalUser}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "#f9ca24",
                  height: 56,
                  width: 56,
                }}
              >
                <PeopleIcon />
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
    <div style={{ width: "150%" }} className="total-US">
      <Card {...props}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                tài khoản
              </Typography>
              <Typography color="textPrimary" variant="h4">
                <RingLoader size="42px" color="#f9ca24" />
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "#f9ca24",
                  height: 56,
                  width: 56,
                }}
              >
                <PeopleIcon />
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
export default UserTotal;

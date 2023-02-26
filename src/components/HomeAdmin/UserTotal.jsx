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
export const UserTotal = (props) => {
  const [totalUser, setTotalUser] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api-vuonthongminh.vercel.app/datas/getalldata")
        .then((result) => {
          const numOfEmailFields = result.data.data.filter(obj => obj.email !== undefined).length;
          setTotalUser(numOfEmailFields)
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ width: "150%" }}>
      <Card {...props}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                tài khoản
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
  )
};
export default UserTotal;

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import UsbOffIcon from "@mui/icons-material/UsbOff";

export const DeviceD = (props) => (
  <div style={{ width: "100%" }}>
    <Card {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Thiết bị ngắt kết nối
            </Typography>
            <Typography color="textPrimary" variant="h4">
              2
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
export default DeviceD;

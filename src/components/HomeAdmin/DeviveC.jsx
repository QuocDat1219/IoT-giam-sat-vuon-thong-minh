import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import UsbIcon from "@mui/icons-material/Usb";

export const DeviceC = (props) => (
  <div style={{width:"100%"}}>
    <Card {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Thiết bị đang kết nối
            </Typography>
            <Typography color="textPrimary" variant="h4">
              2
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
export default DeviceC;

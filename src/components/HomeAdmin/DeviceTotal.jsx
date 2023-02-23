import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

export const DeviceTotal = (props) => (
  <div style={{width:"135%"}}>
    <Card {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Tổng thiết bị
            </Typography>
            <Typography color="textPrimary" variant="h4">
              4
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
export default DeviceTotal;

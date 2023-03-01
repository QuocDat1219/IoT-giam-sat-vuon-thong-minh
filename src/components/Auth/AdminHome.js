import UserTotal from "../HomeAdmin/UserTotal";
import DeviceTotal from "../HomeAdmin/DeviceTotal";
import DeviceC from "../HomeAdmin/DeviveC";
import DeviceD from "../HomeAdmin/DeviceD";
import HeaDer from "../HomeAdmin/Header";
import TableUser from "../HomeAdmin/TableUser";

import "./AdminHome.css";

const AdminHome = () => {
  return (
    <div className="homeAdmin">
      <div className="homeContainerAdmin">
        <HeaDer />
        <div className="TotalUS">
          <div className="userTotal">
            <UserTotal />
          </div>
          <div className="deviceTotal">
            <DeviceTotal />
          </div>
          <div className="deviceC">
            <DeviceC />
          </div>
          <div className="deviceD">
            <DeviceD />
          </div>
        </div>
        <div className="tableU">
          <TableUser />
        </div>
      </div>
    </div>
  );
};
export default AdminHome;

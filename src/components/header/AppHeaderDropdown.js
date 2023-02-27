import React from "react";
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ToastContainer, toast } from "react-toastify";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Navigate } from "react-router-dom";
const AppHeaderDropdown = () => {
  const Logout = async () => {
    {
      toast.success("Đăng xuất thành công ");
      const logtime = () => {
        window.localStorage.clear();
        window.localStorage.setItem("loggedIn", "false");
        window.localStorage.getItem("loggedIn");
        window.location.href = "/login";
      };
      const logoutTime = setTimeout(async () => {
        await logtime();
        clearTimeout(logoutTime);
      }, 1000);
    }
    // An error happened.
  };

  return (
    <CDropdown variant="nav-item" style={{ listStyle: "none" }}>
      <ToastContainer pauseOnHover={false} draggable={false} autoClose={2500} />
      <CDropdownToggle lacement="bottom-end" className="py-0" caret={false}>
        <CAvatar
          src="https://www.iriset.in/tms/uploads/profile/profile.png"
          size="5px"
        />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-gray-200 fw-semibold py-2">
          Tài khoản
        </CDropdownHeader>
        <Link to="/user">
          <CDropdownItem>
            <AccountCircleIcon /> Quản lý tài khoản
          </CDropdownItem>
        </Link>
        <CDropdownItem onClick={Logout}>
          <LogoutIcon /> Đăng xuất
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};
export default AppHeaderDropdown;

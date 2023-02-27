import React from "react";
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { ToastContainer, toast } from "react-toastify";
import LogoutIcon from "@mui/icons-material/Logout";
const HeaderDropdown = () => {
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
      <ToastContainer />
      <CDropdownToggle lacement="bottom-end" className="py-0" caret={false}>
        <CAvatar
          src="https://www.iriset.in/tms/uploads/profile/profile.png"
          size="5px"
        />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-gray-200 fw-semibold py-2">
          Setting
        </CDropdownHeader>
        <CDropdownItem onClick={Logout}>
          <LogoutIcon /> Đăng xuất
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};
export default HeaderDropdown;

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate, useLocation } from "react-router-dom";

const EmployeeSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  const path = location.pathname.replace("/employee-dashboard/", "");
  const items = [
    {
      icon: <HomeOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "Dashboard",
      url: "employee-name",
    },
    {
      icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "Profile",
      url: "profile",
    },
    {
      icon: <BorderColorOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "My Resume",
      url: "my-resume",
    },
    {
      icon: <BusinessCenterOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "Applied Jobs",
      url: "applied-jobs",
    },
    {
      icon: <BookmarkBorderOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "Short Listed",
      url: "saved-jobs",
    },
    {
      icon: <NotificationsNoneOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "Job Alert",
      url: "job-alert",
    },
    {
      icon: <LockOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "Change Password",
      url: "change-password",
    },
    {
      icon: <LogoutOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "Logout",
      url: "logout",
    },
  ];
  return (
    <div className='border-r border-gray-300 px-4 pb-4 pt-8 space-y-3'>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(item.url)}
          className={`flex items-center gap-x-3 justify-between px-6 py-3 w-52 text-gray-600 hover:bg-indigo-100 hover:text-indigo-500 font-[500] rounded-lg cursor-pointer ${
            path === item.url ? "bg-indigo-100 text-indigo-500" : ""
          }`}>
          {item.icon}
          <p className='mr-auto min-w-full'>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeSidebar;

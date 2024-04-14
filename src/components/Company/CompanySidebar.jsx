import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import { useNavigate, useLocation } from "react-router-dom";

const CompanySidebar = () => {
  const iconsAndLabels = [
    {
      icon: <HomeOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "Dashboard",
      url: "",
    },
    {
      icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "Profile",
      url: "profile",
    },
    {
      icon: <CreateNewFolderOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "Post New Job",
      url: "post-job",
    },
    {
      icon: <ContactPageOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "All Applicant",
      url: "job-applicant",
    },
    {
      icon: <BusinessCenterOutlinedIcon sx={{ fontSize: 25 }} />,
      label: "Manage Jobs",
      url: "manage-jobs",
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

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.replace("/company-dashboard/", "");

  console.log(path);

  return (
    <div className='border-r border-gray-300 px-4 pb-4 pt-8 space-y-3'>
      {iconsAndLabels.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(item.url)}
          className={`flex items-center gap-x-3 justify-between px-10 py-3 text-gray-600 hover:bg-indigo-100 hover:text-indigo-500 font-[500] rounded-lg cursor-pointer ${
            path === item.url ? "bg-indigo-100 text-indigo-500" : ""
          }`}>
          {item.icon}
          <p className='mr-auto min-w-full'>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanySidebar;

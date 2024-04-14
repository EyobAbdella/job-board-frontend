import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DrawerComp from "./Drawer";

const CustomHeader = ({ headerType, tabs, searchPlaceholder, url }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar
        position='static'
        sx={{ background: "#fff", color: "#000", boxShadow: "none" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <SearchIcon sx={{ fontSize: 30 }} />
              <Link to='/' className='w-full'>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    paddingLeft: "10%",
                    textAlign: "center",
                  }}>
                  Logo
                </Typography>
              </Link>
              <DrawerComp />
            </>
          ) : (
            <>
              <Link to='/'>
                <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                  Logo
                </Typography>
              </Link>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor='secondary'
                textColor='inherit'
                value={value}
                onChange={(e, value) => {
                  setValue(value);
                  navigate(url[value]);
                }}>
                {tabs.map((tabLabel, index) => (
                  <Tab key={index} label={tabLabel} />
                ))}
              </Tabs>
              {headerType == "Header" ? (
                <div>
                  <button
                    onClick={() => navigate("signup")}
                    className='ml-auto bg-green-500 px-4 py-2.5 rounded hover:border border-green-500 duration-500 drop-shadow-2xl hover:bg-white'>
                    Join Now <ArrowForwardOutlinedIcon />
                  </button>
                </div>
              ) : (
                <div className='flex items-center space-x-2 ml-auto'>
                  <input
                    type='text'
                    className='hover:border-indigo-300 border border-gray-400 outline-none py-1.5 px-2.5 rounded-lg'
                    placeholder={searchPlaceholder}
                  />
                  <div className='ml-7 h-11 w-11 rounded-full bg-indigo-400'></div>
                </div>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default CustomHeader;

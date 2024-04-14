import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
const DrawerComp = () => {
  const pages = ["Find Jobs", "Companies", "Reporter Jobs"];
  const url = ["/Jobs", "/Companies", "/Employee"];
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handlePageClick = (index) => {
    navigate(url[index]);
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}>
        <List sx={{ width: 220, mt: 1 }}>
          <div className='flex items-center space-x-2 hover:bg-gray-100 px-2.5 py-1'>
            <div className='h-11 w-11 rounded-full bg-indigo-400'></div>
            <p>John Smith</p>
          </div>

          {pages.map((page, index) => (
            <ListItemButton key={index} onClick={() => handlePageClick(index)}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color='black' />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;

import React, { useState } from "react";
import { Drawer } from "@mui/material";

const LeftBar = (props) => {

const {openDrawer,setOpenDrawer}=props;


  return <Drawer open={openDrawer}>LeftDrawer</Drawer>;
};

export default LeftBar;

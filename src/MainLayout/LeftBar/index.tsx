import React, { useState } from "react";
import { Drawer } from "@mui/material";

type LeftBarProps = {
    openDrawer:boolean;
    setOpenDrawer:(data:boolean)=>void

};

const LeftBar: React.FC<LeftBarProps> = (props) => {

const {openDrawer,setOpenDrawer}=props;


  return <Drawer open={openDrawer}>LeftDrawer</Drawer>;
};

export default LeftBar;

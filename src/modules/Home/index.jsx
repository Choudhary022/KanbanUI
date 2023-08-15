import { useState } from "react";
import { Drawer, Typography } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { State } from "../../Redux/rootReducer";
// import { useAppSelector,useAppDispatch } from "../../Redux/hook";



const Home = () => {

  // useAppSelector(state=>state.rootReducer)
  
  // const dispatch = useAppDispatch()
  // const {openDrawer,}= useAppSelector(state=>state.rootReducer)

  // console.log("open drawer ...",openDrawer);
  
  return (
    <>
      <Drawer open={false} variant="persistent">
        <Typography>Hello first option</Typography>
      </Drawer>
    </>
  );
};

export default Home;





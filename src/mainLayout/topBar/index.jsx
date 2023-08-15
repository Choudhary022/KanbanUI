import {
    Typography,
    IconButton,
    Box,
    Tooltip,
    AppBar,
    Toolbar,
  } from "@mui/material";
  
  import LoginIcon from "@mui/icons-material/Login";
  
  import { Link } from "react-router-dom";
  import MenuIcon from "@mui/icons-material/Menu";
  // import { useDispatch } from "react-redux";
  // import { useAppDispatch ,useAppSelector} from "../../Redux/hook";
  // import {
  //   logIn,
  //   handleOpenDrawer,
  // } from "../../Redux/user/ActionCreator/actions";
  // import { setOpenDrawer } from "../../Redux/user/slice";
  // import { RootState } from "../../Store";

  const TopBar = () => {
  
    // const dispatch = useAppDispatch();
//   const {isUserLogged,}= useAppSelector((state:RootState)=>state.rootReducer)
  
  
  
  
    const handleDrawer = () => {
      console.log("method invoked ..");
      
      // dispatch(setOpenDrawer(true));
    };
  
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Tooltip title="Menu">
              <IconButton onClick={handleDrawer}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Typography variant="h6">Kanban</Typography>
            <Box>
              <Link to="/signIn">
                <IconButton title="Sign in">
                  <LoginIcon />
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </>
    );
  };
  
  export default TopBar;
  


  
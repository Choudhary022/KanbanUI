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


const Navbar = () => {
  
  return (
    <>
      <AppBar position="static">
        <Toolbar>
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

export default Navbar;

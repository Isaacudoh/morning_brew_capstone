import React from "react";
import { Toolbar, AppBar, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{background: "Black"}}>
      <Toolbar>
        <Typography variant="h4">Morning Brew</Typography>
        <Box display="flex" marginLeft="auto">
          <button>Login</button>
          <button>Start</button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

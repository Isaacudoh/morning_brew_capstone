import React, { useState } from "react";
import { Tab, Tabs, Toolbar, AppBar, Typography, Box } from "@mui/material";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar position="sticky" sx={{ background: "Black" }}>
      <Toolbar>
        <Typography variant="h4">Morning Brew</Typography>
        <Box display="flex">
          <Tabs
            value={value}
            onChange={(e,val) => setValue(val)}
            textColor="white"
          >
            <Tab label="Articles" />
            <Tab label="My Articles" />
            <Tab label="Add Article" />
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
          <button>Login</button>
          <button>Signup</button>
          <button>Logout</button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

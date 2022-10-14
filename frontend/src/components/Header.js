import React, { useState } from "react";
import { Button, Tab, Tabs, Toolbar, AppBar, Typography, Box } from "@mui/material";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar position="sticky" sx={{ background: "Black" }}>
      <Toolbar>
        <Typography variant="h4">Morning Br☕w </Typography>
        <Box display="flex" marginLeft={"auto"} marginRight="auto">
          <Tabs
            value={value}
            onChange={(e, val) => setValue(val)}
            textColor="white"
          >
            <Tab label="Articles" href="/blogs"/>
            <Tab label="My Articles" href="/myBlogs"/>
            <Tab label="New Articles" href="/AddBlogs"/>
          
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
          <Button href="/auth">Login</Button>
          <Button>Signup</Button>
          <Button>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

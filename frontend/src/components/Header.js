import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Tab, Tabs, Toolbar, AppBar, Typography, Box } from "@mui/material";

const Header = () => {
  const isLoggedin = useSelector((state) => state.isLoggedin);
  const [value, setValue] = useState();
  return (
    <AppBar position="sticky" sx={{ background: "Black" }}>
      <Toolbar>
        <Typography variant="h4">Morning ☕ Brew </Typography>
        {isLoggedin && <Box display="flex" marginLeft={"auto"} marginRight="auto">
          <Tabs
            value={value}
            onChange={(e, val) => setValue(val)}
            textColor="white"
          >
            <Tab label="Articles" href="/blogs"/>
            <Tab label="My Articles" href="/myBlogs"/>
            <Tab label="New Articles" href="/AddBlogs"/>
          
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
          {!isLoggedin && <Button href="/auth">Login</Button>}
          {!isLoggedin && <Button href="/auth">Signup</Button>}
          {isLoggedin && <Button href="/auth">Logout</Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

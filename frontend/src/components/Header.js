import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Tab,
  Tabs,
  Toolbar,
  AppBar,
  Typography,
  Box,
} from "@mui/material";
import { authActions } from "../store";

const Header = () => {
  const dispath = useDispatch;
  const isLoggedin = useSelector((state) => state.isLoggedin);
  const [value, setValue] = useState();
  return (
    <AppBar position="sticky" sx={{ background: "Black" }}>
      <Toolbar>
        <Typography variant="h4">Morning ☕ Brew </Typography>
        {isLoggedin && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              value={value}
              onChange={(e, val) => setValue(val)}
              textColor="white"
            >
              <Tab label="Articles" href="/blogs" />
              <Tab label="My Articles" href="/myBlogs" />
              <Tab label="Add Articles" href="/blogs/add" />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedin && <Button href="/auth">Login</Button>}
          {!isLoggedin && <Button href="/auth">Signup</Button>}
          {isLoggedin && (
            <Button onClick={() => dispath(authActions.logout())} href="/auth">
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

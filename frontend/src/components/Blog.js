import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const blog = (props, title, description, imageURL,userName) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: "40%",
          margin: "auto",
          mt: 10,
          padding: 2,
          boxshadow: "10px 10px 20px #ccc",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
              {props.userName}
            </Avatar>
          }
          title={props.userName}
          subheader="Posted few minutes ago"
        />
        <CardMedia component="img" height="194" image="{imageURl}" alt="blog image" />
        <CardContent>
        {props.title}
          <Typography paddingTop={2} variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default blog;

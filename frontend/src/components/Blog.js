import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const blog = (props) => {
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
              N
            </Avatar>
          }
          title={props.title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image=""
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default blog;

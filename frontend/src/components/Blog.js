import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const blog = () => {
  return (
    <div>
      <Card
        sx={{
          Width: "5%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxshadow: "10px 10px 20px #ccc",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default blog;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LetterType } from "../pages/Main/letterList";

export default function LetterCard(props: LetterType) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia sx={{ height: 100 }} image={props.img} title={props.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.sub}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          구독하기
        </Button>
        <Button size="small" variant="contained">
          자세히보기
        </Button>
      </CardActions>
    </Card>
  );
}

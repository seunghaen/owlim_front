import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LetterType } from "../pages/Main/letterList";

type CardProp = {
  item: LetterType;
};

export default function LetterCard({ item }: CardProp) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 300,
        margin: "15px",
        borderColor: "black",
      }}
    >
      <CardMedia sx={{ height: 100 }} image={item.img} title={item.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.sub}
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

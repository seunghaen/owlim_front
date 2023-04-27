import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LetterType } from "../slices/letter";

type CardProp = {
  item: LetterType;
};

export default function LetterCard({ item }: CardProp) {
  return (
    <Card
      sx={{
        maxWidth: 250,
        minWidth: 250,
        margin: "15px",
      }}
    >
      <CardMedia
        sx={{
          height: 150,
          margin: "5px",
          border: 2,
          borderColor: "primary.main",
        }}
        image={item.imgUrl}
        title={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.desc}
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

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export default function MediaCard({course:c}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={c?.image}
        title="green iguana"
      />
      <CardContent>
        <h4 style={{ fontWeight: 700 }}>
          {c?.title}
        </h4>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {c?.author}
        </Typography>

        <div className="ratingDiv">
          <p>{c?.rating}</p>
          <Rating
            name="half-rating-read"
            defaultValue={c?.rating}
            precision={0.5}
            readOnly
            id="rating"
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
          />
          <p className="ratingNumbers">({c?.total_rating} Ratings)</p>
        </div>
        <div className="priceDiv">
          <p className="currentPrice">${c?.current_price}</p>
          <del className="actualPrice">${c?.actual_price}</del>
        </div>
      </CardContent>
      <CardActions>
        <a href={`/courses/${c?._id}`} className="theme-btn btn-style-five ms-1">
          <span className="txt">Description</span>
        </a>
      </CardActions>
    </Card>
  );
}

import * as React from 'react';
import { useState, useEffect } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
const  SpaceCard = ({apod}) => {

  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked(!isLiked);

  }
  
    return (
      
      <Card sx={{width: 500, margin: 2 }}>
      
      <CardMedia
        component="img"
        height="35%"
        image={apod.hdurl}
        alt={apod.title}
      />
      
      <CardContent sx={{px:3, height:"fit-content"}}>
        <h3>{apod.title}</h3>
        <p>{apod.date}</p>
        <p>{apod.explanation}</p>
      </CardContent>
      
      {isLiked ?
        <FavoriteIcon sx={{color: "Red"}} fontSize="large" onClick={handleClick}/>
        :
        <FavoriteBorderIcon sx={{color: "black"}} fontSize="large" onClick={handleClick}/>
        }
      </Card>
      );
}


export default SpaceCard;
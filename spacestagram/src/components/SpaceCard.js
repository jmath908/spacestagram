import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
const  SpaceCard = ({apod}) => {
  
    return (
      
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={apod.hdurl}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {apod.explanation}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {apod.date}
            </Typography>
          </CardContent>
          <CardActions>
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </CardActions>
        </Card>
      );
}

export default SpaceCard;
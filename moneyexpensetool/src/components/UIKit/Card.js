import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardMedia({id ,title,firstDescription,secondDescription ,UpdateClicked ,DeleteClicked}) {

  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {firstDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price : {secondDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>UpdateClicked(id)}>Update</Button>
        <Button size="small" onClick={()=>DeleteClicked(id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}
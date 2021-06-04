import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({Product}) => {
    const classes = useStyles();
    return (
        <Card className ={classes.root}>
         <CardMedia className={classes.media} image={Product.image} title={Product.name} />
            <CardContent>
               <div className ={classes.CardContent}>
               <Typography variant ='h6'>
                       {Product.code}
                   </Typography>
                   <Typography variant ='h5' gutterBottom>
                       {Product.name}
                   </Typography>
                   <Typography variant ='h5'>
                       {Product.price}
                   </Typography>
                   </div> 
                   <Typography variant ='body2' color= 'textSecondary'>{Product.description}

                   </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label ="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;

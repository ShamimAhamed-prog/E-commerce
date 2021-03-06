import React from 'react'
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products=[
   {id:1, name:'shoes', description:'Running shoes.', price:'$5',code: '1234478',Image:'' },
   {id:2, name:'Macboook', description:'Apple Macbook.',price:'$6',code: '748684'},
];
const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
             {products.map((product) => (
             <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                 <Product Product={product} />
          </Grid>
          ))}
         </Grid>
        </main>
        );
};

export default Products;

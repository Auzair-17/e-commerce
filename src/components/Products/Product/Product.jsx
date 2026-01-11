import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import classes from "./styles.sx";

const Product = ({ product }) => {
  return (
    <Card sx={classes.root}>
      <CardMedia
        sx={classes.media}
        title={product.name}
        image={product.image}
      />
      <CardContent>
        <Box sx={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

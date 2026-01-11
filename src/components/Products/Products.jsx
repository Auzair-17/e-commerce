import { Box, Grid } from "@mui/material";

import Product from "./Product/Product";

const productsArr = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySJw7XlhpaCEetvRSIzoVNI4K8t9LlfoKjQ&s",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: 5,
    image:
      "https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/257607_M4_MacBook_Air_ADiBenedetto_0021.jpg?quality=90&strip=all&crop=0,0,100,100",
  },
];

const Products = () => {
  return (
    <Box component="main">
      <Grid container justify="center" spacing={4}>
        {productsArr.map((productItem) => (
          <Grid
            item
            key={productItem.id}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          >
            <Product product={productItem} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Products;

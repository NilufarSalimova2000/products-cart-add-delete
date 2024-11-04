import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteProduct } from "../../redux/reducers/product-reducer";
import formatter from "../../utils/currency-format";

export const ProductCard = (props) => {
    const dispatch = useDispatch();
    const isInCart = useSelector((state) =>
        state.product.product_list.some((item) => item.id === props.id)
      );
    
      const handleButtonClick = () => {
        if (isInCart) {
          dispatch(deleteProduct({ id: props.id }));
        } else {
          dispatch(addCart(props));
        }
      };
    return (
        <Box>
            <img style={{ width: '100%', height: '250px' }} src={props.img} alt="imag" />
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="h6">{formatter(props.price)} sum</Typography>
            <Typography variant="body1">{props.brand}</Typography>
            <Button fullWidth onClick={handleButtonClick} variant="contained">{isInCart ? "Remove" : "Buy"}</Button>
        </Box>
    )
}
import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { SelectedProduct } from "../selected-product";
import { nanoid } from "@reduxjs/toolkit";
import formatter from "../../utils/currency-format";

export const Cart = () => {
    const totalPrice = useSelector((state) => state.product.totalPrice);
    const { product_list } = useSelector((state) => state.product)
    return (
        <Box width={"400px"} p={"30px"} bgcolor={"#fff"} height={screen}>
            <Typography variant="h5">Umumiy narx: {formatter(totalPrice)} sum</Typography>
            {product_list.map((item) => {
                return <SelectedProduct key={nanoid()} {...item} />
            })}
        </Box>
    )
}
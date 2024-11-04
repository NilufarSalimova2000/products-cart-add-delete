import { Badge, Box, Drawer, IconButton } from "@mui/material";
import React from "react";
import { Cart } from "../cart";
import { useSelector } from "react-redux";
import { CartIcon } from "../../assets/cart-icon";

export const Header = () => {
    const [showP, setShowP] = React.useState(false);
    const { count } = useSelector((state) => state.product);
    return (
        <Box py={"50px"} bgcolor={"pink"}>
            <Drawer onClose={() => setShowP(false)} open={showP} anchor="left">
                <Cart />
            </Drawer>
            <div className="container">
                <IconButton onClick={() => setShowP(true)} aria-label="cart">
                    <Badge badgeContent={count ? count : "0"} color="error">
                        <CartIcon />
                    </Badge>
                </IconButton>
            </div>
        </Box>
    )
}
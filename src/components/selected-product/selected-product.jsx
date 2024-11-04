import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import formatter from "../../utils/currency-format";
import { useDispatch} from "react-redux";
import {
    deleteProduct,
    toggleAmount,
} from "../../redux/reducers/product-reducer";

export const SelectedProduct = (props) => {
    const dispatch = useDispatch();
    
    return (
        <Box>
            <Stack
            mb={"20px"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <Stack>
                <div className="w-[100px]">
                    <img src={props.img} alt="img" />
                </div>
                <h4>{props.title}</h4>
                <p>{formatter(props.price)} sum</p>
            </Stack>
            <div>
                <Stack direction="row" alignItems={"center"}>
                    <IconButton
                        onClick={() =>
                            dispatch(toggleAmount({ id: props.id, type: "increment" }))
                        }
                    >
                        +
                    </IconButton>
                    <span>{props.user_count}</span>
                    {props.user_count < 2 ? (
                        <IconButton
                            onClick={() => dispatch(deleteProduct({ id: props.id }))}
                        >
                            x
                        </IconButton>
                    ) : (
                        <IconButton
                            onClick={() =>
                                dispatch(toggleAmount({ id: props.id, type: "decrement" }))
                            }
                        >
                            -
                        </IconButton>
                    )}
                </Stack>
                <strong>{formatter(props.user_price)} sum</strong>
            </div>
        </Stack>
        </Box>
        
    );
};

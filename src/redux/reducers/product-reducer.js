import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    product_list: [],
    count: 0,
    totalPrice: 0,
  },
  reducers: {
    addCart: (state, action) => {
      const product = state.product_list.find((item) => item.id === action.payload.id);
      if (!product) {
        state.product_list.push({
          ...action.payload,
          user_price: action.payload.price,
          user_count: 1,
        });
      }
      // Umumiy narxni hisoblash
      state.totalPrice = state.product_list.reduce((total, item) => total + item.user_price, 0);
    },
    toggleAmount: (state, action) => {
      const newProductList = state.product_list.map((item) => {
        if (action.payload.type === "increment" && item.id === action.payload.id) {
          return {
            ...item,
            user_count: item.user_count + 1,
            user_price: (item.user_count + 1) * item.price,
          };
        } else if (action.payload.type === "decrement" && item.id === action.payload.id && item.user_count > 1) {
          return {
            ...item,
            user_count: item.user_count - 1,
            user_price: (item.user_count - 1) * item.price,
          };
        }
        return item;
      });

      // Yangilangan ro'yxatni saqlash va umumiy narxni hisoblash
      state.product_list = newProductList;
      state.totalPrice = newProductList.reduce((total, item) => total + item.user_price, 0);
    },
    deleteProduct: (state, action) => {
      const newProductList = state.product_list.filter((item) => item.id !== action.payload.id);

      // Yangilangan ro'yxatni saqlash va umumiy narxni hisoblash
      state.product_list = newProductList;
      state.totalPrice = newProductList.reduce((total, item) => total + item.user_price, 0);
    },
    totalCount: (state) => {
      // Umumiy miqdorni hisoblash
      state.count = state.product_list.length;
    },
  },
});

export default productReducer.reducer;
export const { addCart, toggleAmount, deleteProduct, totalCount } = productReducer.actions;

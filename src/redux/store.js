import {
    configureStore,
    createListenerMiddleware,
    isAnyOf,
  } from "@reduxjs/toolkit";
  import productReducer from "./reducers/product-reducer";
  import { loadState, saveState } from "../utils/storage";
  import { addCart, deleteProduct, totalCount } from "./reducers/product-reducer";
  
  const totalCountMiddlware = createListenerMiddleware();
  totalCountMiddlware.startListening({
    matcher: isAnyOf(addCart, deleteProduct),
    effect: (action, api) => {
      api.dispatch(totalCount());
      api.dispatch(totalPrice());
    },
  });
  
  export const store = configureStore({
    reducer: {
      product: productReducer,
    },
    preloadedState: {
      product: loadState("products"),
    },
    middleware: (defaultMiddlware) =>
      defaultMiddlware().prepend(totalCountMiddlware.middleware),
  });
  
  store.subscribe(() => {
    saveState("products", store.getState().product);
  });
  
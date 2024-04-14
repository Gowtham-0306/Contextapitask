import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [],
  },
  reducers: {
    storeBlogs: (state, action) => {
      if (action.payload) {
        state.data = [...action.payload];
      }
    },
    calculatePrice: (state, action) => {
      const { id, quantity } = action.payload; 
      state.data = state.data.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            Quantity: quantity, 
            total: quantity * product.price,
          };
        } else {
          return product;
        }
      });
    },
  },
});

export default BlogSlice.reducer;

export const { storeBlogs, calculatePrice } = BlogSlice.actions;

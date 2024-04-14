
import { configureStore } from "@reduxjs/toolkit";

import BlogReducer from "./reducers/BlogReducer";

export default configureStore({

  reducer: {
    
    blogs: BlogReducer,
  },
});

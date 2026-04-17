import { configureStore } from "@reduxjs/toolkit";
import { clothingApi } from "./clothingApi";

export const store = configureStore({
	reducer: {
		[clothingApi.reducerPath]: clothingApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(clothingApi.middleware),
});

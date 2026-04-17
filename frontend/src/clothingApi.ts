import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clothingApi = createApi({
	reducerPath: "clothingApi",
	baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
	endpoints: (builder) => ({
		uploadClothingFile: builder.mutation({
			query: (file) => {
				const formData = new FormData();
				formData.append("file", file);
				return {
					url: "/upload",
					method: "POST",
					body: formData,
				};
			},
		}),
		getClothing: builder.query({
			query: () => "/items",
		}),
	}),
});

export const { useUploadClothingFileMutation, useGetClothingQuery } =
	clothingApi;

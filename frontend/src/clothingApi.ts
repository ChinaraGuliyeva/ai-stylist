import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clothingApi = createApi({
	reducerPath: "clothingApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1" }),
	endpoints: (builder) => ({
		uploadClothingFile: builder.mutation({
			query: (file) => {
				const formData = new FormData();
				formData.append("file", file);
				return {
					url: "/clothes/upload",
					method: "POST",
					body: formData,
					formData: true,
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

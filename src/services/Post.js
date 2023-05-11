import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react/";

export const postApi = createApi({
  reducerPath: "postApi",
  // fetchBaseQuery :- it is a fetch wrapper that handle request headers and response parsers just like axios
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllPostQuery, useGetPostByIdQuery } = postApi;
// we will use this hook useGetAllPostQuery wherever we want to fetch data.

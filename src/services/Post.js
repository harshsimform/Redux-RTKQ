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
      query: (id) => {
        console.log(id); // to verify that we are getting correct id which we are passing in useGetPostByIdQuery hook in App.js
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),
    getPostByLimit: builder.query({
      query: (limit) => {
        console.log(limit);
        return {
          url: `posts?_limit=${limit}`,
          method: "GET",
        };
      },
    }),
    deletePost: builder.mutation({
      query: (id) => {
        console.log("Delete id:", id);
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),
    createPost: builder.mutation({
      query: (newPost) => {
        console.log("Create Post", newPost);
        return {
          url: `posts`,
          method: "POST",
          body: newPost,
          headers: {
            "Content-type": "application/json;",
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
} = postApi;
// we will use this hook useGetAllPostQuery wherever we want to fetch data.

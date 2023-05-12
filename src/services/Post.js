import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react/";

// It is used to define our endpoints and allow to create the API slice
export const postApi = createApi({
  // The unique key that defines where the Redux store will store our cache.
  reducerPath: "postApi",
  // The base query to request data.
  // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  // The set of operations that we want to perform against the server.
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => {
        // console.log(id); // to verify that we are getting correct id which we are passing in useGetPostByIdQuery hook in App.js
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),
    getPostByLimit: builder.query({
      query: (limit) => {
        // console.log(limit);
        return {
          url: `posts?_limit=${limit}`,
          method: "GET",
        };
      },
    }),
    deletePost: builder.mutation({
      query: (id) => {
        // console.log("Delete id:", id);
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
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    updatePost: builder.mutation({
      query: (updatePost) => {
        const { id, ...data } = updatePost;
        console.log("Updated Post:", data);
        return {
          url: `posts/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
// we will use this hook useGetAllPostQuery wherever we want to fetch data.

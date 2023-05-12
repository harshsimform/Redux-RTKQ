import "./App.css";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./services/Post";

function App() {
  // const { isLoading, isError, isSuccess, data } = useGetAllPostQuery();
  const responseInfo = useGetAllPostQuery();
  // console.log(responseInfo);

  const singleUser = useGetPostByIdQuery(5);
  // console.log(singleUser);

  const userInfoLimit = useGetPostByLimitQuery(8);
  // console.log(userInfoLimit);

  const [deletePost, userDelete] = useDeletePostMutation();
  // console.log(userDelete);

  // const [createPost, userCreate] = useCreatePostMutation();
  // console.log(userCreate);
  // const newPost = {
  //   title: "newTitle",
  //   body: "newBody",
  //   userId: 1,
  // };

  const [updatePost, userUpdate] = useUpdatePostMutation();
  console.log(userUpdate);
  const updatePostData = {
    id: 1,
    title: "updateTitle",
    bode: "updateBody",
    userId: 1,
  };

  if (responseInfo.isLoading) return <div className="App">Loading...</div>;
  if (responseInfo.isError)
    return <h1>Error Occurred {responseInfo.error.error}</h1>;

  return (
    <>
      {/* Get All Posts */}
      {/* <div className="App">
          {responseInfo.data.map((post) => {
            return (
              <div key={post.id}>
                <h2>
                  {post.id}. {post.title}
                </h2>
                <p>{post.body}</p>
                <hr />
              </div>
            );
          })}
      </div> */}
      {/* Get Post by id  */}
      {/* <div className="App" key={singleUser.data?.id}>
        <h2>
          {singleUser.data?.id} {singleUser.data?.title}
        </h2>
        <p>{singleUser.data?.body}</p>
      </div> */}
      {/* Get Limit Data  */}
      {/* {userInfoLimit.data?.map((user) => {
        return (
          <div className="App" key={user.id}>
            <h2>
              {user.id} {user.title}
            </h2>
            <p>{user.body}</p>
            <hr />
          </div>
        );
      })} */}
      {/* Delete User  */}
      {/* <div className="App">
        <button onClick={() => deletePost(2)}>Delete Post</button>
      </div> */}
      {/* Create User  */}
      {/* <div className="App">
        <button onClick={() => createPost(newPost)}>Create Post</button>
      </div> */}
      {/* Update User  */}
      <div className="App">
        <button onClick={() => updatePost(updatePostData)}>Update Post</button>
      </div>
    </>
  );
}

export default App;

// data - The returned result if present.
// error - The error result if present.
// isUninitialized - When true, indicates that the query has not started yet.
// isLoading - When true, indicates that the query is currently loading for the first time, and has no data yet. This will be true for the first request fired off, but not for subsequent requests.
// isFetching - When true, indicates that the query is currently fetching, but might have data from an earlier request. This will be true for both the first request fired off, as well as subsequent requests.
// isSuccess - When true, indicates that the query has data from a successful request.
// isError - When true, indicates that the query is in an error state.
// refetch - A function to force refetch the query

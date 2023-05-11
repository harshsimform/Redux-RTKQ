import "./App.css";
import { useGetAllPostQuery, useGetPostByIdQuery } from "./services/Post";

function App() {
  // const { isLoading, isError, isSuccess, data } = useGetAllPostQuery();
  const responseInfo = useGetAllPostQuery();
  // console.log(responseInfo);

  const singleUser = useGetPostByIdQuery(5);
  // console.log(singleUser);

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
      <div className="App" key={singleUser.data?.id}>
        <h2>
          {singleUser.data?.id} {singleUser.data?.title}
        </h2>
        <p>{singleUser.data?.body}</p>
      </div>
    </>
  );
}

export default App;

import Comment from "./Comment"

function Post(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>By: {props.author}</p>
      <div>{props.body}</div>
      <ul>
        {props.comments.map((comment) => (
          <Comment message={comment} />
        ))}
      </ul>
    </div>
  );
}

export default Post;
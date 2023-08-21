import { format } from "timeago.js";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post?.img && <img src={post.img} />}
      <div className="post-container">
        <div className="post-container__content">
          <div className="user">
            <span className="date">{format(post.date)}</span>
          </div>
          <span
            className="post-title"
            style={{
              fontSize: "22px",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            {post.title}
          </span>
          <p style={{ whiteSpace: "pre-line" }}>{post.desc}</p>
        </div>
        <div className="post-container__footer">
          <i className="fa-regular fa-heart" />
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>
    </div>
  );
};

export default Post;

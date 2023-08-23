import ReactSvg from "../assets/icons/react.svg";
import NodeJsSvg from "../assets/icons/nodejs.svg";
import PythonSvg from "../assets/icons/python.svg";
import JavascriptSvg from "../assets/icons/javascript.svg";
import TensorflowSvg from "../assets/icons/tensorflow.svg";
import CPlusPLus from "../assets/icons/c++.svg";
import Typescript from "../assets/icons/typescript.svg";
import { format } from "timeago.js";

const Post = ({ post }) => {
  const IconImg = ({ name }) => {
    if (name === "React") {
      return <img src={ReactSvg} className="icon" />;
    } else if (name === "NodeJS") {
      return <img src={NodeJsSvg} className="icon" />;
    } else if (name === "Python") {
      return <img src={PythonSvg} className="icon" />;
    } else if (name === "Javascript") {
      return <img src={JavascriptSvg} className="icon" />;
    } else if (name === "Tensorflow") {
      return <img src={TensorflowSvg} className="icon" />;
    } else if (name === "C++") {
      return <img src={CPlusPLus} className="icon" />;
    } else if (name === "Typescript") {
      return <img src={Typescript} className="icon" />;
    }
  };

  return (
    <div className="post">
      {post?.img && <img src={post.img} className="post-img" />}
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
        {post?.tags && (
          <div className="tags">
            {post.tags?.map((t) => (
              <div className="chip">
                <span className="text">{t}</span>
                <IconImg name={t} />
              </div>
            ))}
          </div>
        )}
        <div className="post-container__footer">
          <i className="fa-regular fa-heart" />
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>
    </div>
  );
};

export default Post;

import Rdr2 from "../assets/images/rdr2.jpg";
import Diana from "../assets/images/diana.jpg";
import Post from "./Post";

const posts = [
  {
    id: 0,
    date: "2009-04-30 09:44:35",
    profilePic: Diana,
    img: Rdr2,
    title: "RDR2 Upscaler Beta Build 01",
    desc: "This is a post talking about the latest development in our project.\n The project uses these frameworks:\n\n-React\n-NodeJs",
  },
];

const Feed = () => {
  return (
    <div className="feed">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
};

export default Feed;

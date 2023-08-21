import Rdr2 from "../assets/images/rdr2.jpg";
import Diana from "../assets/images/diana.jpg";
import SamsungSam from "../assets/images/samsung-sam.jpg";
import Post from "./Post";

const posts = [
  {
    id: 0,
    date: "2022-04-30 09:44:35",
    profilePic: Diana,
    img: Rdr2,
    title: "RDR2 Upscaler Beta Build 01",
    desc: "This is a post talking about the latest development in our project.\n The project uses these frameworks:\n\n-React\n-NodeJs",
  },
  {
    id: 1,
    date: "2022-01-20 10:34:05",
    profilePic: "",
    title: "Global Nomadic Work Social Networking",
    desc: "Building the latest social networking application. Needing skilled developers in python, javascript, react, and aws.",
  },
  {
    id: 2,
    date: "2022-03-14 07:21:10",
    profilePic: "",
    img: SamsungSam,
    title: "Dynamic ChatBot Beta 02",
    desc: "Developing a chatbot that becomes accostumed to your daily routines. Responds to your actions in a dynamic way like an actual person.\nNeed developers with experience in natural language processing.",
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

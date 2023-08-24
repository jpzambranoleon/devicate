import Rdr2 from "../assets/images/rdr2.jpg";
import Diana from "../assets/images/diana.jpg";
import SamsungSam from "../assets/images/samsung-sam.jpg";
import AnnImg from "../assets/images/neural-network.jpeg";
import Post from "./Post";

const posts = [
  {
    id: 0,
    date: "2022-04-30 09:44:35",
    profilePic: Diana,
    img: Rdr2,
    title: "RDR2 Upscaler Beta Build 01",
    desc: "This is a post talking about the latest development in our project.\n The project uses these frameworks:\n\n-React\n-NodeJs",
    tags: ["C++"],
  },
  {
    id: 1,
    date: "2022-01-20 10:34:05",
    profilePic: "",
    title: "Global Nomadic Work Social Networking",
    desc: "Building the latest social networking application. Needing skilled developers in python, javascript, react, and aws.",
    tags: ["React", "Javascript", "Typescript", "NodeJS"],
  },
  {
    id: 2,
    date: "2020-03-14 07:21:10",
    profilePic: "",
    img: SamsungSam,
    title: "Dynamic ChatBot Beta 02",
    desc: "Developing a chatbot that becomes accostumed to your daily routines. Responds to your actions in a dynamic way like an actual person.\nNeed developers with experience in natural language processing.",
    tags: ["React", "Python"],
  },
  {
    id: 3,
    date: "2020-05-06 11:14:29",
    profilePic: "",
    img: AnnImg,
    title: "Artificial Neural Network Modeling",
    desc: "We are a research team from the University of Denver, Colorado. We are researching the speed in which an ANN model processes data. If you would like to collaborate with use, feel free to contact us and join our research venture. By engaging with our models, you will be helping us record data that we need to explore the processing speed of ANN models. We hope to construct new models for faster data processing.",
    tags: ["Python", "Tensorflow"],
  },
  {
    id: 4,
    date: "2019-12-21 13:35:09",
    profilePic: "",
    img: "",
    title: "Hello from everyone at Devicate",
    desc: "We are so glad that you chose to be apart of this community of developers. We hope to grow our community and contribute to independent projects while also helping you develop your skills.",
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

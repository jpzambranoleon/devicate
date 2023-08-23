import Diana from "../assets/images/diana.jpg";
import Sakura from "../assets/images/sakura.jpg";

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile-images">
        <img src={Sakura} alt="coverPic" className="cover-img" />
        <img src={Diana} alt="profilePic" className="user-img" />
      </div>
    </section>
  );
}

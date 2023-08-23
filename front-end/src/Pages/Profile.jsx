import { Avatar, AvatarGroup } from "@mui/material";
import Diana from "../assets/images/diana.jpg";
import Sakura from "../assets/images/sakura.jpg";
import AppSocials from "../components/AppSocials";
import Feed from "../components/Feed";
import Button from "../components/Button";

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile-images">
        <img src={Sakura} alt="coverPic" className="cover-img" />
        <img src={Diana} alt="profilePic" className="user-img" />
      </div>
      <div className="user-bio container">
        <span className="username">Diana Ayi</span>
        <span className="desc">
          Data Scientist 🤓 | React Developer 💻 | Python Programmer 🐍
        </span>
      </div>
      <div className="profile-container container grid">
        <div className="left">
          <Feed />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem 0 1rem 0",
            }}
          >
            <Button text={`Load more`} />
          </div>
        </div>
        <div
          className="right"
          style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}
        >
          <div className="app-card">
            <div className="app-card__container">
              <div className="top">
                <span>Connect with developers</span>
              </div>
              <small className="text">
                Become a better developer. Follow and contribute to projects.
                Connect with other developers in the field.
              </small>

              <AvatarGroup className="avatar-group">
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
                <Avatar
                  alt="Travis Howard"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://mui.com/static/images/avatar/3.jpg"
                />
                <Avatar
                  alt="Agnes Walker"
                  src="https://mui.com/static/images/avatar/4.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://mui.com/static/images/avatar/6.jpg"
                />
              </AvatarGroup>
            </div>
          </div>
          <AppSocials />
        </div>
      </div>
    </section>
  );
}

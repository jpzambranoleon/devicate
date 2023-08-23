import Feed from "../components/Feed";
import AppSocials from "../components/AppSocials";
import { Avatar, AvatarGroup } from "@mui/material";

export default function Home() {
  return (
    <div className="home section">
      <div className="home-container container grid">
        <div className="left">
          <Feed />
          <button>Load more</button>
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
    </div>
  );
}

import Card from "../components/Card";
import Feed from "../components/Feed";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home container">
      <div className="home-container grid">
        <div className="left">
          <Feed />
        </div>
        <div className="right">
          <div className="app-card">
            <div className="app-card__container">
              <div className="top">
                <Link className="logo">Devicate</Link>
              </div>
              <small className="text">
                Become a better React developer. Following our tips, tricks, and
                real life experiences.
              </small>
              <ul className="list">
                <li className="item">
                  <Link className="link">
                    <i className="fa-brands fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link className="link">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

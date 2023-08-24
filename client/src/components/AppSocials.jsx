import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

const AppSocials = () => {
  return (
    <div className="company">
      <div className="company-container">
        <div>
          <ul className="company-info">
            <li>
              <span>Devicate</span>
            </li>
            <li>
              Connect and Socialize with a modest growing community of
              developers, programmers, and IT enthusiats. Create and share your
              ideas!
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <Link to="#" className="social-link">
                <Facebook
                  className="logo-facebook"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </Link>
            </li>
            <li>
              <Link to="#" className="social-link">
                <Instagram
                  className="logo-instagram"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </Link>
            </li>
            <li>
              <Link to="#" className="social-link">
                <Twitter
                  className="logo-instagram"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSocials;

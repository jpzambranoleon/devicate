import { Link } from "react-router-dom";
import {
  Call,
  Facebook,
  Instagram,
  LocationOn,
  Mail,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <div>
          <ul>
            <Link>Devicate</Link>
            <p className="footer-description">
              Maecenas pellentesque placerat quam, in finibus nisl tincidunt
              sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget
              felis.
            </p>
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
    </footer>
  );
};

export default Footer;

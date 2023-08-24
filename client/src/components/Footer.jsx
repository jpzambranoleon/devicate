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
      <div className="footer-container container">
        <div className="footer-left">
          <span className="logo">Devicate</span>
        </div>
        <div className="footer-center">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
        <div className="footer-right">
          <span className="copyright">© 2023 Devicate</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

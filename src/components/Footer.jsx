import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <br />
      <nav className="link-container">
        <Link to="/">
          <p>Hem</p>
        </Link>
        {/*<Link to="/omoss">
          <p>Om oss</p>
        </Link>*/}
        <Link to="/meny">
          <p>Meny</p>
        </Link>
        <Link to="/kontakt">
          <p>Kontakt / Events / Företagsevents</p>
        </Link>
      </nav>
      <br />
      <p>© 2024 Glädjekällans foodtruck</p>
    </div>
  );
};

export default Footer;

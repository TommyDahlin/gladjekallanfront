import "./footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      <br />
      <nav className="link-container">
        <Link to="/">
          <p>{t("nav.home")}</p>
        </Link>
        {/*<Link to="/omoss">
          <p>Om oss</p>
        </Link>*/}
        <Link to="/meny">
          <p>{t("nav.menu")}</p>
        </Link>
        <Link to="/kontakt">
          <p>{t("nav.contactEventsCompany")}</p>
        </Link>
      </nav>
      <br />
      <p>{t("footer.copyright")}</p>
    </div>
  );
};

export default Footer;

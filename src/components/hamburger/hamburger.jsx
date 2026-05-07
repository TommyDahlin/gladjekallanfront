import "./hamburger.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hamburger = () => {
  const { t } = useTranslation();

  return (
    <nav className="menu--left" role="navigation">
      <div className="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul className="menuItem">
          <li>
            <Link to="/"> {t("nav.home")} </Link>
          </li>
          {
            //<li><Link to ='/omoss'> Om oss</Link></li>
          }
          <li>
            <Link to="/meny">{t("nav.menu")}</Link>
          </li>
          <li>
            <Link to="/kontakt">{t("nav.contactEvents")}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;

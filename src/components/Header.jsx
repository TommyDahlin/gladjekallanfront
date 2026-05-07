import Hamburger from "./hamburger/hamburger";
import Logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import "./header.css";

const Header = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="header-container">
            <div className="header-left">
        <Hamburger />
            </div>

            <div className="header-right">
                <label className="language-switcher-label" htmlFor="language-switcher">
                    {t("common.language")}
                </label>
                <select
                    id="language-switcher"
                    className="language-switcher"
                    aria-label={t("common.language")}
                    value={i18n.resolvedLanguage?.startsWith("en") ? "en" : "sv"}
                    onChange={(event) => i18n.changeLanguage(event.target.value)}
                >
                    <option value="sv">Svenska</option>
                    <option value="en">English</option>
                </select>
        <img src={Logo} alt="logo" className="logo-image-header"></img>
            </div>
        </div>
    );
};
export default Header;
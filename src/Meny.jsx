import Header from "./components/Header";
import Footer from "./components/Footer";
import burger from "./assets/niclasburger.jpg";
import kycklingrulle from "./assets/Kycklingrulle - Copy.jpg";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Meny.css";

const Meny = () => {
  const { t, i18n } = useTranslation();

  const priceText = (value) =>
    i18n.resolvedLanguage?.startsWith("en") ? `${value} SEK` : `${value}kr`;

  const formatIngredients = (key) => {
    const ingredients = t(key, { returnObjects: true });
    return Array.isArray(ingredients)
      ? ingredients.map((ingredient, index) => (
          <span key={`${key}-${ingredient}`}>
            {ingredient}
            {index < ingredients.length - 1 ? <br /> : null}
          </span>
        ))
      : ingredients;
  };

  return (
    <>
      <Header />
      <h1 className="MENY">{t("menu.heading")}</h1>
      <h2>{t("menu.glutenInfo")}</h2>

      <section className="today-menu-card" aria-label={t("menu.today.title")}>
        <div>
          <p className="today-menu-label">{t("menu.today.title")}</p>
          <p className="today-menu-hint">{t("menu.today.hint")}</p>
          <span className="today-menu-price">{t("menu.today.price")}</span>
        </div>
        <div className="today-menu-meta">
          <div className="today-menu-social-links">
            <a
              href="https://www.instagram.com/gladjekallans_foodtruck/"
              target="_blank"
              rel="noreferrer"
              className="today-menu-social-link"
            >
              <FaInstagram aria-hidden="true" />
              <span>{t("menu.social.instagram")}</span>
            </a>
            <a
              href="https://www.facebook.com/p/Gl%C3%A4djek%C3%A4llans-Foodtruck-100082006564608/"
              target="_blank"
              rel="noreferrer"
              className="today-menu-social-link"
            >
              <FaFacebookF aria-hidden="true" />
              <span>{t("menu.social.facebook")}</span>
            </a>
          </div>
        </div>
      </section>

      <div className="meny-container">
        <div className="meny-part">
          <div className="meny-title">{t("menu.sections.burgers")}</div>
          <div className="sausage-type">
            <br /> {t("menu.sections.burgerTypes")}
          </div>
          <div className="hamburger-container">
            <div className="meny-type">
              <ul className="meny-list">
                <li className="meny-item">
                  <img
                    src={burger}
                    alt={t("menu.sections.burgers")}
                    className="meny-image"
                  />
                  <div className="meny-name">{t("menu.items.hogrevMenu.name")}</div>
                  <div className="meny-description">{t("menu.items.hogrevMenu.desc")}</div>
                  <div className="meny-price">{priceText(120)}</div>
                </li>

                <li className="meny-item">
                  <div className="meny-name">{t("menu.items.hogrevBread")}</div>
                  <div className="meny-price">{priceText(90)}</div>
                </li>
                <li className="meny-item">
                  <div className="meny-name">{t("menu.items.halloumiMenu.name")}</div>
                  <div className="meny-description">{t("menu.items.halloumiMenu.desc")}</div>
                  <div className="meny-price">{priceText(120)}</div>
                </li>

                <li className="meny-item">
                  <div className="meny-name">{t("menu.items.halloumiBread.name")}</div>
                  <div className="meny-description">{t("menu.items.halloumiBread.desc")}</div>
                  <div className="meny-price">{priceText(90)}</div>
                </li>

                <li className="meny-item">
                  <div className="meny-name">{t("menu.items.politikern.name")}</div>
                  <div className="meny-description">
                    {formatIngredients("menu.items.politikern.desc")}
                  </div>
                </li>
                <li className="meny-item">
                  <div className="meny-name">{t("menu.items.atleten.name")}</div>
                  <div className="meny-description">
                    {formatIngredients("menu.items.atleten.desc")}
                  </div>
                </li>
              </ul>
              <ul className="meny-list">
                <div className="hamburger-type-container">
                  <li className="meny-item">
                    <div className="meny-name">{t("menu.items.rockaren.name")}</div>
                    <div className="meny-description">
                      {formatIngredients("menu.items.rockaren.desc")}
                    </div>
                  </li>

                  <li className="meny-item">
                    <div className="meny-name">{t("menu.items.missPiggy.name")}</div>
                    <div className="meny-description">
                      {formatIngredients("menu.items.missPiggy.desc")}
                    </div>
                  </li>
                  <li className="meny-item">
                    <div className="meny-name">{t("menu.items.butchern.name")}</div>
                    <div className="meny-description">
                      {formatIngredients("menu.items.butchern.desc")}
                    </div>
                  </li>
                  <li className="meny-item">
                    <div className="meny-name">{t("menu.items.starkeAdolf.name")}</div>
                    <div className="meny-description">
                      {formatIngredients("menu.items.starkeAdolf.desc")}
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="meny-part">
          <div className="meny-title">{t("menu.sections.other")}</div>
          <div className="sausage-type">
            <br /> {t("menu.sections.sausageTypes")}
          </div>
          <ul className="meny-list">
            <li className="meny-item">
              <img
                src={kycklingrulle}
                alt={t("menu.items.chickenWrap.name")}
                className="meny-image"
              />
              <div className="meny-name">{t("menu.items.chickenWrap.name")}</div>
              <div className="meny-description">{t("menu.items.chickenWrap.desc")}</div>
              <div className="meny-price">{priceText(100)}</div>
            </li>

            <li className="meny-item">
              <div className="meny-name">{t("menu.items.friesThickSausage")}</div>
              <div className="meny-price">{priceText(60)}</div>
            </li>
          </ul>
          <ul className="meny-list">
            <li className="meny-item">
              <div className="meny-name">{t("menu.items.friesThinSausage")}</div>
              <div className="meny-price">{priceText(50)}</div>
            </li>

            <li className="meny-item">
              <div className="meny-name">{t("menu.items.toastFalukorv.name")}</div>
              <div className="meny-description">{t("menu.items.toastFalukorv.desc")}</div>
              <div className="meny-price">{priceText(40)}</div>
            </li>

            <li className="meny-item">
              <div className="meny-name">{t("menu.items.toastSpecial.name")}</div>
              <div className="meny-description">{t("menu.items.toastSpecial.desc")}</div>
              <div className="meny-price">{priceText(40)}</div>
            </li>

            <li className="meny-item">
              <div className="meny-name">{t("menu.items.toast.name")}</div>
              <div className="meny-description">{t("menu.items.toast.desc")}</div>
              <div className="meny-price">{priceText(30)}</div>
            </li>
            <li className="meny-item">
              <div className="meny-name">{t("menu.items.thickSausageBread")}</div>
              <div className="meny-price">{priceText(40)}</div>
            </li>
            <li className="meny-item">
              <div className="meny-name">{t("menu.items.thinSausageBread")}</div>
              <div className="meny-price">{priceText(30)}</div>
            </li>
            <li className="meny-item">
              <div className="meny-name">{t("menu.items.friesPlate")}</div>
              <div className="meny-price">{priceText(40)}</div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Meny;

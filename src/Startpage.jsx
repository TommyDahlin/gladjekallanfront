import "./Startpage.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Position from "./assets/position.png";
import Familytransparent from "./assets/family-transparent.png";
import Logo from "./assets/logo.png";
import BurgerPlate from "./assets/Burgertallrik.jpg";
import HalloumiBurger from "./assets/Halloumi-Burgers-13.jpg";
import NiclasBurger from "./assets/niclasburger.jpg";
import ChickenWrap from "./assets/kycklingrulle.jpeg";
import Breakfast from "./assets/Frukost.jpg";
import SausageAndFries from "./assets/KorvOPommes.jpg";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import SEO from "./components/SEO";

const galleryImages = [
  {
    src: BurgerPlate,
    altKey: "startpage.galleryAlts.burgerPlate",
  },
  {
    src: HalloumiBurger,
    altKey: "startpage.galleryAlts.halloumiBurger",
  },
  {
    src: NiclasBurger,
    altKey: "startpage.galleryAlts.cheeseburger",
  },
  {
    src: ChickenWrap,
    altKey: "startpage.galleryAlts.chickenWrap",
  },
  {
    src: Breakfast,
    altKey: "startpage.galleryAlts.breakfast",
  },
  {
    src: SausageAndFries,
    altKey: "startpage.galleryAlts.sausageFries",
  },
];

const Startpage = () => {
  const { t } = useTranslation();
  const seoStructuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Glädjekällans Foodtruck",
    description: t("seo.structuredData.description"),
    url: "https://www.gkfoodtruck.se/",
    areaServed: "Göteborg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Göteborg",
      addressCountry: "SE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "05:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/gladjekallans_foodtruck/",
      "https://www.facebook.com/p/Gl%C3%A4djek%C3%A4llans-Foodtruck-100082006564608/",
    ],
    servesCuisine: ["Street Food", "Burgare", "Halloumi"],
  };

  return (
    <>
      <SEO
        title={t("seo.pages.home.title")}
        description={t("seo.pages.home.description")}
        keywords={t("seo.pages.home.keywords")}
        canonicalPath="/"
        structuredData={seoStructuredData}
      />
      <Header />
      <div className="startpage-container">
        <div className="startpage-welcome">
          <div className="startpage-logo-text">
            <div className="family-image-wrap">
              <img
                src={Familytransparent}
                alt={t("startpage.galleryAlts.family")}
                className="family-image"
              ></img>
            </div>
            <div className="hero-branding">
              <img
                src={Logo}
                alt={t("startpage.galleryAlts.logo")}
                className="hero-logo"
              />
              <h1>{t("startpage.title")}</h1>
              <p>{t("startpage.subtitle")}</p>
            </div>
          </div>

          <div className="startpage-text">
            <p>
              <Trans
                i18nKey="startpage.intro"
                components={{
                  eventLink: <Link to="/kontakt" className="eventlink" />,
                }}
              />
            </p>

            <p>
              {t("startpage.openingHours")} <br /> {t("startpage.weekdays")} <br />
              {t("startpage.truckHours")}
            </p>

            <p>
              {t("startpage.locationText")}
              <a
                href="https://maps.app.goo.gl/bQEDBA7ZEgQeonTW9"
                className="map-holder"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Position}
                  alt={t("startpage.mapAlt")}
                  className="position-image"
                />
              </a>{" "}
            </p>

            <div className="social-follow-card">
              <h3>{t("startpage.socialTitle")}</h3>
              <p>{t("startpage.socialHint")}</p>
              <div className="social-follow-links">
                <a
                  href="https://www.instagram.com/gladjekallans_foodtruck/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-follow-link"
                >
                  <FaInstagram aria-hidden="true" />
                  <span>{t("startpage.socialInstagram")}</span>
                </a>
              </div>
                <a
                  href="https://www.facebook.com/p/Gl%C3%A4djek%C3%A4llans-Foodtruck-100082006564608/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-follow-link"
                >
                  <FaFacebookF aria-hidden="true" />
                  <span>{t("startpage.socialFacebook")}</span>
                </a>
            </div>
          </div>
          <section className="food-gallery" aria-label={t("startpage.galleryLabel")}>
            {galleryImages.map((image) => (
              <figure className="food-gallery-item" key={image.src}>
                <img src={image.src} alt={t(image.altKey)} loading="lazy" />
              </figure>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Startpage;

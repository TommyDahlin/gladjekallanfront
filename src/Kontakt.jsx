import Header from "./components/Header";
import Footer from "./components/Footer";
import BurgerMaking from "./assets/BurgerMaking.jpg";
import Breakfast from "./assets/Frukost.jpg";
import { useTranslation } from "react-i18next";
import "./Kontakt.css";

const Kontakt = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="contactbody">
        <div className="contact-holder">
          <div className="contact-container">
            <div className="contact-image">
              <img src={BurgerMaking} alt="burgermaking"></img>
            </div>
            <div className="contact-container-text">
              <h1>{t("contact.heading")}</h1>
              <p>{t("contact.primaryContact")}</p>
              <p>Niclas Ambjornsson</p>
              <p>
                {t("contact.phoneLabel")}: 0735028351
              </p>
              <p>
                {t("contact.emailLabel")}: niclas@slakthusetskottbod.se
              </p>
              <p>
                <br />
                {t("contact.location")} <br />
              </p>
              <p>
                {t("contact.openingHours")} <br />
                {t("contact.truckWeekdays")} <br />
                {t("contact.truckHours")}
              </p>
              <p>
                <br />
                {t("contact.meatSupplier")}
              </p>
              <p>{t("contact.phoneLabel")}: 0735141011</p>
              <p>{t("contact.butcherAddress")}</p>
              <p>
                <br />
                {t("contact.openingHours")}
                <br />
                {t("contact.butcherHours")}
                <br />
              </p>
            </div>
          </div>

          <div className="event-container">
            <div className="event-text-holder">
              <h2>{t("contact.companyEventsTitle")}</h2>
              <p>{t("contact.companyBreakfast")}</p>
              <p>
                <br /> {t("contact.companyPricesTitle")}
              </p>
              <p>
                {t("contact.companyBurgerPrice")}
                <br />
              </p>
              <p>{t("contact.companyDrinkPrice")}</p>
              <p>
                <br />
                {t("contact.companyHourly")}
                <br />
              </p>

              <p>
                <br />
                {t("contact.companyDeliveryIn")}
              </p>
              <p>{t("contact.companyDeliveryOut")}</p>
              <p>
                <br />
                {t("contact.companyVat")}
              </p>
            </div>
            <div className="img-text">
              <img src={Breakfast} alt="breakfast" className="breakfast"></img>

              <h2>{t("contact.privateTitle")}</h2>
              <p>{t("contact.privatePrices")}</p>
              <p>
                <br />
                {t("contact.privateFrom")}
              </p>
              <p>
                <br />
                {t("contact.privateMin")}
              </p>
              <p>{t("contact.privateVat")}</p>
            </div>
          </div>
          <div className="contact-container-form">
            <h2>{t("contact.formTitle")}</h2>
            <form
              action="https://formsubmit.co/niclas@slakthusetskottbod.se"
              method="Post"
            >
              <label htmlFor="fname">{t("contact.form.firstName")}</label>
              <input
                className="contact-form"
                type="text"
                id="FullName"
                name="fullname"
                placeholder={t("contact.form.firstNamePlaceholder")}
              />
              <label htmlFor="email">{t("contact.form.email")}</label>
              <input
                className="contact-form"
                type="email"
                id="Email"
                name="email"
                placeholder={t("contact.form.emailPlaceholder")}
              />
              <label htmlFor="subject">{t("contact.form.message")}</label>
              <textarea
                className="contact-form"
                id="subject"
                name="Meddelande"
                placeholder={t("contact.form.messagePlaceholder")}
                style={{ height: "200px" }}
              ></textarea>
              <input
                className="contact-form"
                type="submit"
                value={t("contact.form.send")}
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kontakt;

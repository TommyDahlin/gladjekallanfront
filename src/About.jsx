import Footer from "./components/Footer";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="about-container">
        <h1>{t("about.title")}</h1>
      </div>
      <Footer />
    </div>
  );
};

export default About;

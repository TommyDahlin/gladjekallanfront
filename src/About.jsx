import Footer from "./components/Footer";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import SEO from "./components/SEO";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <SEO
        title={t("seo.pages.about.title")}
        description={t("seo.pages.about.description")}
        keywords={t("seo.pages.about.keywords")}
        canonicalPath="/omoss"
      />
      <Header />
      <div className="about-container">
        <h1>{t("about.title")}</h1>
      </div>
      <Footer />
    </div>
  );
};

export default About;

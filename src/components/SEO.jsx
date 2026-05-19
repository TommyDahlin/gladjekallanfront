import { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const SITE_NAME = "Glädjekällans Foodtruck";

const upsertMeta = (attrName, attrValue, content) => {
  if (!content) return;

  const selector = `meta[${attrName}='${attrValue}']`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertCanonical = (href) => {
  if (!href) return;

  let canonical = document.head.querySelector("link[rel='canonical']");

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
};

const upsertStructuredData = (data) => {
  const scriptId = "seo-structured-data";
  const existingScript = document.getElementById(scriptId);

  if (!data) {
    if (existingScript) {
      existingScript.remove();
    }
    return;
  }

  const script = existingScript || document.createElement("script");
  script.id = scriptId;
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(data);

  if (!existingScript) {
    document.head.appendChild(script);
  }
};

const SEO = ({ title, description, keywords, canonicalPath = "/", structuredData }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const locale = i18n.resolvedLanguage?.startsWith("en") ? "en" : "sv";
    const ogLocale = locale === "en" ? "en_US" : "sv_SE";
    const baseUrl = `${globalThis.location.origin}${import.meta.env.BASE_URL}`;
    const canonicalUrl = new URL(canonicalPath.replace(/^\//, ""), baseUrl).href;
    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    document.title = pageTitle;
    document.documentElement.setAttribute("lang", locale);

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", ogLocale);
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);

    upsertCanonical(canonicalUrl);
    upsertStructuredData(structuredData);
  }, [canonicalPath, description, i18n.resolvedLanguage, keywords, structuredData, title]);

  return null;
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonicalPath: PropTypes.string,
  structuredData: PropTypes.object,
};

export default SEO;
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./instagram-feed.css";

// After signing up at https://behold.so and connecting your Instagram account,
// copy your Feed ID and add it to your .env file:
//   VITE_BEHOLD_FEED_ID=your_feed_id_here
const feedId = import.meta.env.VITE_BEHOLD_FEED_ID;

const InstagramFeed = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const scriptSrc = "https://w.behold.so/widget.js";
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.type = "module";
    document.head.appendChild(script);
  }, []);

  if (!feedId) return null;

  return (
    <section className="instagram-feed-section">
      <h2 className="instagram-feed-title">{t("startpage.instagramTitle")}</h2>
      <behold-widget feed-id={feedId}></behold-widget>
    </section>
  );
};

export default InstagramFeed;

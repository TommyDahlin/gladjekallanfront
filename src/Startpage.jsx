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

const galleryImages = [
  {
    src: BurgerPlate,
    alt: "Burger plate from Gladjekallans Foodtruck",
  },
  {
    src: HalloumiBurger,
    alt: "Halloumi burger from Gladjekallans Foodtruck",
  },
  {
    src: NiclasBurger,
    alt: "Cheeseburger from Gladjekallans Foodtruck",
  },
  {
    src: ChickenWrap,
    alt: "Chicken wrap from Gladjekallans Foodtruck",
  },
  {
    src: Breakfast,
    alt: "Breakfast plate from Gladjekallans Foodtruck",
  },
  {
    src: SausageAndFries,
    alt: "Sausage and fries from Gladjekallans Foodtruck",
  },
];

const Startpage = () => {
  return (
    <>
      <Header />
      <div className="startpage-container">
        <div className="startpage-welcome">
          <div className="startpage-logo-text">
            <div className="family-image-wrap">
              <img
                src={Familytransparent}
                alt="Gladjekallans Foodtruck family"
                className="family-image"
              ></img>
            </div>
            <div className="hero-branding">
              <img
                src={Logo}
                alt="Glädjekällans Foodtruck logo"
                className="hero-logo"
              />
              <h1>Glädjekällans Foodtruck</h1>
              <p>Street food med hjärta, värme och smak.</p>
            </div>
          </div>

          <div className="startpage-text">
            <p>
              Vi är en familjeägd foodtruck som serverar mat med kärlek och
              glädje. Vi finns i Göteborg och tar oss gärna till erat{" "}
              <Link to="/kontakt" className="eventlink">
                event
              </Link>{" "}
              för att tillhandahålla era mat och catering behov.
            </p>
            
            <p>
              {" "}
              Öppettider: <br /> Tisdag-Fredag <br /> 05:00-13:00
            </p>

            <p>
              Foodtrucken står vid fiskeauktionen.
              <a href="https://maps.app.goo.gl/bQEDBA7ZEgQeonTW9" className="map-holder">
                <img src={Position} alt="position" className="position-image" />
              </a>{" "}
            </p>
            
          </div>
          <section className="food-gallery" aria-label="Galleri med matbilder">
            {galleryImages.map((image) => (
              <figure className="food-gallery-item" key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
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

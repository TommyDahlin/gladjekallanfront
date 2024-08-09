import "./Startpage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Position from "../assets/position.png"; 
import Familytransparent from "../assets/family-transparent.png";
import { Link } from "react-router-dom";
const Startpage = () => {
    return (
        <>
        <Header />
        <div className="startpage-container">
        
        <div className="startpage-welcome">
        <div className="startpage-logo-text">
        <h1>Välkommen!</h1>
        </div>
        <div className="startpage-text">
        <p><br/>Vi är en familjeägd foodtruck som serverar mat med kärlek och glädje.
        <br/>Vi finns i Göteborg och tar oss gärna till erat <Link to ="/kontakt" className="eventlink">event</Link> för att tillhandahålla era mat och catering behov.
        
        <br/>Foodtrucken står vid fiskeauktionen.<a href="https://maps.app.goo.gl/bQEDBA7ZEgQeonTW9">
        <img src={Position} alt="position" className="position-image"/></a> <br/> Öppettider: Tisdag-Fredag <br/> 05:00-12:00</p>
        <img src={Familytransparent} alt="family" className="family-image"></img>
        </div></div>        

        </div>
        <Footer />
        </>
    )
}
export default Startpage;
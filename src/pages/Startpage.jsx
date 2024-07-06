import "./Startpage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Familytransparent from "../assets/family-transparent.png";
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
        <p><br/>Vi är en familjeägd foodtruck som serverar mat med kärlek och glädje.<br/>Vi finns i Göteborg och tar oss gärna till erat event för att tillhandahålla era matbehov.<br/>Håll utkik på vår hemsida för att se var vi befinner oss just nu!</p>
        <img src={Familytransparent} alt="family" className="family-image"></img>
        </div></div>        

        </div>
        <Footer />
        </>
    )
}
export default Startpage;
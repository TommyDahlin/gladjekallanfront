import Hamburger from "./hamburger/hamburger";
import Logo from "../assets/logo.png";
import "./header.css"


const Header = () => {
    return (
        <div className="header-container">
        <Hamburger />
        <img src={Logo} alt="logo" className="logo-image-header"></img>
        </div>
    );
}
export default Header;
import "./hamburger.css";
import { Link } from "react-router-dom";
const Hamburger = () => {
    return (
        <nav class="menu--left" role="navigation">
    <div class="menuToggle">
      <input type="checkbox"/>
      <span></span>
      <span></span>
      <span></span>
      <ul class="menuItem">
        <li><Link to="/"> Startsida </Link></li>
        <li><Link to ='/omoss'> Om oss</Link></li>
        <li><Link to ="/meny">Meny</Link></li>
        <li><Link to ="/kontakt">Kontakt / Events</Link></li>
      </ul>
    </div>
  </nav>
    );
}

export default Hamburger;
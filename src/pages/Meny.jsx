import Header from "../components/Header";
import Footer from "../components/Footer";
import burger from "../assets/hamruger.webp";
import kycklingrulle from "../assets/kycklingrulle.jpeg";
import "./Meny.css";
const Meny = () => {
    return (
        <>
            <Header/>
            <h1 className="MENY">Meny</h1>
            <h2> Alla Burgare & Korv kan tillagas med glutenfritt bröd!</h2>
            
            <div className="meny-container">
            
            <div className="meny-part">
            <div className="meny-title">Hamburgare </div>
            <div className="sausage-type"><br/> Hamburgersorter: Högrev eller Halloumi</div>
            <div className="hamburger-container">
            <div className="meny-type">
            <ul className="meny-list">
            
            
            <li className="meny-item">

            <img src={burger} alt="Hamburgare" className="meny-image"/>
            <div className="meny-name">Högrevs burger meny</div>
            <div className="meny-description">Burgare, pommes, dryck</div>
            <div className="meny-price"> 110kr</div>
                </li>

                <li className="meny-item">
            <div className="meny-name">Högrevs burgare med bröd</div>
            <div className="meny-price"> 90kr</div>

            <li className="meny-item">
            <div className="meny-name">Halloumi burger meny</div>
            <div className="meny-description">Burgare, pommes, dryck</div>
            <div className="meny-price"> 110kr</div>
                </li>

                <li className="meny-item">
            <div className="meny-name">Halloumi burgare med bröd</div>
            <div className="meny-description">Friterad halloumi</div>
            <div className="meny-price"> 90kr</div>
                </li>
                </li>
                <li className="meny-item">
            <div className="meny-name">Politikern</div>
            <div className="meny-description">Ost <br/> Bacon <br/> Stekt lök <br/>Hamburgerdressing<br/> Sallad <br/> Tomat <br/> BBQ Sås</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Atleten</div>
            <div className="meny-description">Ost <br/> Bacon <br/> Stekt lök <br/> Vitlöksmayo <br/> Sallad <br/> Jalapeño <br/> Sriracha Mayo </div>
                </li>
                
            </ul>
            <ul className="meny-list">
            <div className="hamburger-type-container">
            
           
               
                <li className="meny-item">
            <div className="meny-name">Rockaren</div>
            <div className="meny-description">Ost <br/> Bacon x 2 <br/> Vitlöksmayo <br/> Sallad <br/> Rå lök <br/> Tomat <br/> BBQ Sås</div>
                </li>
            
                <li className="meny-item">
            <div className="meny-name">Miss piggy</div>
            <div className="meny-description">Ost <br/> Bacon x 2 <br/> Stekt lök <br/> Sallad <br/> Picklad rödlök <br/> Tomat <br/> Tryffelmayo</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Butchern</div>
            <div className="meny-description">Ost <br/> Bacon x 2 <br/> Hamburgerdressing <br/> Sallad <br/> Rå lök <br/> Ketchup <br/> Senap </div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Starke Adolf</div>
            <div className="meny-description">Ost <br/> Bacon <br/> Hamburgerdressing <br/> Sallad <br/> Jalapeño <br/> Tomat <br/> Sriracha </div>
                </li>
                </div>
                
            </ul>
            </div>
            </div>
            
            </div>
            
            <div className="meny-part">
            <div className="meny-title">Annat</div>
            <div className="sausage-type"><br/> Korvsorter: Fläsk, Kyckling, Vegetarisk</div>
            <ul className="meny-list">
                <li className="meny-item">
                <img src={kycklingrulle} alt="kycklingrulle" className="meny-image"/>
            <div className="meny-name">Kycklingrulle</div>
            <div className="meny-description">Bröd, Kyckling, Sallad, Rå Lök, <br/> Picklad Lök, Jalapeño, Tomat, Valfri sås</div>
            <div className="meny-price"> 90kr</div>
                </li>

                <li className="meny-item">
            <div className="meny-name">Hel Special</div>
            <div className="meny-description">2 Korvar, Bröd, Mos <br/></div>
            <div className="meny-price"> 80kr</div>
                </li>

                <li className="meny-item">
            <div className="meny-name">Halv Special</div>
            <div className="meny-description">1 Korv, Bröd, Mos  </div>
            <div className="meny-price"> 70kr</div>
                </li>

                <li className="meny-item">
            <div className="meny-name">Pommes tallrik med tjock korv</div>
            <div className="meny-price"> 60kr</div>
                </li>
                </ul>
                <ul className="meny-list">
                <li className="meny-item">
            <div className="meny-name">Pommes tallrik med smal korv</div>
            <div className="meny-price"> 50kr</div>
                </li>
                
                <li className="meny-item">
            <div className="meny-name">Toast falukorv</div>
            <div className="meny-description">Ost & Falukorv </div>
            <div className="meny-price"> 40kr</div>
                </li>
                
                <li className="meny-item">
            <div className="meny-name">Toast special</div>
            <div className="meny-description">Ost, Skinka, ägg </div>
            <div className="meny-price"> 40kr</div>
                </li>

                <li className="meny-item">
            <div className="meny-name">Toast</div>
            <div className="meny-description">Ost & Skinka </div>
            <div className="meny-price"> 30kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Tjock Korv med bröd</div>
            <div className="meny-price"> 35kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Smal Korv med bröd</div>
            <div className="meny-price"> 25kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Pommes Tallrik</div>
            <div className="meny-price"> 30kr</div>
                </li>
                <li className="meny-item">
            <div className="meny-name">Mos Tallrik</div>
            <div className="meny-price"> 30kr</div>
                </li>
            </ul>
            
            </div>
            
            </div>
            <Footer/>
        </>
    );
}

export default Meny;
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Kontakt.css";
const Kontakt = () => {
    return (
        <>
        <Header/>
        <div className="contact-holder">
        <div className="contact-container">
            <h1>Kontakt</h1>
            <p>Glädjekällans foodtruck Kontakt:</p>
            <p>Niclas Ambjörnsson</p>
            <p>Telefon: 0735028351</p>
            <p>Email: niclas@slakthusetskottbod.se</p>
            <p><br/>Foodtrucken står vid fiskeauktionen. <br/></p>
            <p>Öppettider: <br/>Tisdag-Fredag <br/>05:00-12:00</p>

            <p><br/>Vi får vårat kött från Slakthusets Köttbod i Olskroken.</p>
            <p>Telefon: 0735141011</p>
            <p>Borgaregatan 19, 416 66 Göteborg </p>
            <p><br/>Öppettider: 
                <br/>Måndag-Fredag: 9-18 
                <br/> Lördag: 9-14 
                <br/> Söndag: Stängt
                <br/>
            </p>
        </div>
        <div className="contact-container-form">
        <form action="https://formsubmit.co/niclas@slakthusetskottbod.se" method="Post">
            <label for="fname">Förnamn</label>
            <input className="contact-form" type="text" id="FullName" name="fullname" placeholder="Ditt namn.."/>
            <label for="email">Email</label>
            <input className="contact-form" type="email" id="Email" name="email" placeholder="Din email.."/>
            <label for="subject">Meddelande</label>
            <textarea className="contact-form" id="subject" name="Meddelande" placeholder="Skriv något.." style={{height:"200px"}}></textarea>
            <input className="contact-form" type="submit" value="Skicka"/>
        </form>
        </div>
            <div className="event-container">
            <h2>Företags Events</h2>
            <p> Priser: </p>
            <p>90kr per hamburgare. 200g Högrevsburgare.<br/></p>
            <p>15kr för dricka exkl. moms.</p>
            <p><br/>350kr i timmen<br/></p>
            <p> exkl. moms.</p>
            
            <p><br/>Gratis utkörning inom Göteborg.</p>
            <p>Utanför Göteborg 50kr per mil.</p>
            <p><br/>Dessa priser är exkl. moms.</p>
            </div>
        </div>
            <Footer/>
        </>
        )
}

export default Kontakt;
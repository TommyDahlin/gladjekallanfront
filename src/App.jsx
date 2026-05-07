import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import Startpage from "./Startpage";
import About from "./About";
import Meny from "./Meny";
import Kontakt from "./Kontakt";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Startpage />} />
            <Route path="/meny" element={<Meny />} />
            <Route path="/omoss" element={<About />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

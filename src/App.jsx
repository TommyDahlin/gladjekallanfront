import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import Startpage   from "./pages/Startpage";
import About from "./pages/About";
import Meny from "./pages/Meny";
import Kontakt from "./pages/Kontakt";
import './App.css';

function App() {

  return (
  <>
  <div className="app-container">
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/meny" element={<Meny />} />
        <Route path="/omoss" element={<About />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
    </div>
  </>
  )
}

export default App;

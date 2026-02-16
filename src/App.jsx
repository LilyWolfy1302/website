import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Hækkeklipning from "./pages/hækkeklipning";
import Beskaeringskunst from "./pages/beskæringkunst";
import BeskaeringFaeldning from "./pages/BeskaeringFaeldning";
import Tagrenderensning from "./pages/Tagrenderensning";
import Graesslaaning from "./pages/græsslåning";
import Lugning from "./pages/lugning";

export default function App() {
  return (
    <BrowserRouter basename="/website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/hækkeklipning" element={<Hækkeklipning />} />
        <Route path="/services/beskæringskunst" element={<Beskaeringskunst />} />
        <Route path="/services/beskaering-faeldning" element={<BeskaeringFaeldning />} />
        <Route path="/services/tagrenderensning" element={<Tagrenderensning />} />
        <Route path="/services/græsslåning" element={<Graesslaaning />} />
        <Route path="/services/lugning" element={<Lugning />} />
      </Routes>
    </BrowserRouter>
  );
}
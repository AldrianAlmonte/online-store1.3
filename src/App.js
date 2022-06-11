import "./App.css";
import Navbar from "./components/navbar"; // always import
import Catalog from "./components/catalog";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

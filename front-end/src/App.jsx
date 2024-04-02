import "./App.css";

import Home from "./components/pages/Home";
// import About from "./components/pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from "./components/pages/Contact";
// import Portfolio from "./components/pages/Portfolio";
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";

function App() {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} /> */}
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;

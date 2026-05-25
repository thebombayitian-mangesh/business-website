import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? "dark" : ""}>

      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

import Services from "./Services";
import Portfolio from "./Portfolio";

function Home({ darkMode, setDarkMode }) {

  return (
    <div>

      <Navbar />

      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />

      <Services />

      <Portfolio />

      <Footer />

    </div>
  );
}

export default Home;
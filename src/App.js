import "./App.css";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage";
import NavBar from "./components/navBar";
import AboutPage from "./pages/aboutPage";
import Education from "./pages/educationPage";
import Contact from "./pages/contactPage";
import Portfolio from "./pages/portfolioPage";
import Experience from "./pages/experiencePage";
import WishPage from "./pages/WishingPage/WishPage";
import ServicePage from "./pages/ServicePage/ServicePage";

const particlesOptions = {
  fullScreen: {
    enable: false,
  },
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        area: 900,
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 6,
        color: "#037fff",
      },
    },
  },
};

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  const navClick = () => {
    setNavToggle((currentValue) => !currentValue);
  };

  return (
    <div className="App">
      <div className={`sideBar ${navToggle ? "navToggleB" : ""}`}>
        <NavBar setNavToggle={setNavToggle} />
      </div>
      <button
        type="button"
        className="navBtn"
        onClick={navClick}
        aria-label="Toggle navigation"
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
      <div className="mainContent">
        {location.pathname === "/" && particlesReady ? (
          <Particles className="particles" options={particlesOptions} />
        ) : null}
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wish" element={<WishPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import HomePage from "./pages/homePage";
import NavBar from "./components/navBar";
import AboutPage from "./pages/aboutPage";
import Education from "./pages/educationPage";
import Contact from "./pages/contactPage";
import Portfolio from "./pages/portfolioPage";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Particles from "react-particles-js";
import Experience from "./pages/experiencePage";
import WishPage from "./pages/WishingPage/WishPage";
import ServicePage from "./pages/ServicePage/ServicePage";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div className={`sideBar ${navToggle ? "navToggleB" : ""}`}>
        {<NavBar toggle={navToggle} setNavToggle={setNavToggle} />}
      </div>
      <div className="navBtn" onClick={navClick}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className="mainContent">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Particles
                className="particles"
                params={{
                  particles: {
                    number: 50,
                    density: { enable: true, value_area: 900 },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 6,
                        color: "#037fff",
                      },
                    },
                  },
                }}
              />
              <HomePage />
            </Route>

            <Route path="/about" exact>
              <AboutPage />
            </Route>

            <Route path="/education" exact>
              <Education />
            </Route>
            <Route path="/experience" exact>
              <Experience />
            </Route>

            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>

            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/wish" exact>
              <WishPage />
            </Route>
            <Route path="/service" exact>
              <ServicePage />
            </Route>
            <Route path="*" component={HomePage} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

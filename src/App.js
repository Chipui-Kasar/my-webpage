import "./App.css";
import HomePage from "./pages/homePage";
import NavBar from "./components/navBar";
import AboutPage from "./pages/aboutPage";
import Education from "./pages/educationPage";
import Contact from "./pages/contactPage";
import Portfolio from "./pages/portfolioPage";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div className={`sideBar ${navToggle ? "navToggleB" : ""}`}>
        <NavBar />
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
              <HomePage />
            </Route>

            <Route path="/about" exact>
              <AboutPage />
            </Route>

            <Route path="/education" exact>
              <Education />
            </Route>

            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>

            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

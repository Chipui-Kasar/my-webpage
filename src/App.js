import "./App.css";
import HomePage from "./pages/homePage";
import NavBar from "./components/navBar";
import AboutPage from "./pages/aboutPage";
import Education from "./pages/educationPage";
import Contact from "./pages/contactPage";
import Portfolio from "./pages/portfolioPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <NavBar />
      </div>
      <div className="main-content">
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

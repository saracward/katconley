import './App.css';
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import About from "./components/About"
import SetArt from "./components/SetArt"
import SetDesign from "./components/SetDesign"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
        <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/SetArt">
          <SetArt />
        </Route>
        <Route path="/SetDesign">
          <SetDesign />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import { Switch, Route } from "react-router-dom"
import {useState} from 'react'
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import About from "./components/About"
import SetArt from "./components/SetArt"
import SetDesign from "./components/SetDesign"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

function Component(props){
  const [apiData,setApiData] = useEffect({})

  const getData = async () => {
    const response = await fetch("https://cdn.contentful.com/spaces/rgcbkr9elt8o/environments/master/content_types/setDesign?access_token=cLMVrw5z3-NKZeTgkmLZzkSVARbXGPo6pwRD-PmL6LU&content_type=setDesign")
    const data = await response.json()
    setApiData(data)
  }

  useEffect(()=> {
    getData()
  }, [])

  return <h1> {apiData?.results[0]?.name} </h1>
}

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

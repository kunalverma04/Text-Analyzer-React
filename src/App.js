// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from "./MyComponents/Navbar";
import Textform from "./MyComponents/Textform";
import About from "./MyComponents/About";
import Alert from "./MyComponents/Alert";
// import { Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const funAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1800);

  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#3d4b56";
      funAlert(": Dark Mode Activated", "success");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      funAlert(": Light Mode Activated", "success");
    }

  }
  return (
    
    <div className="App">
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Textform heading="Enter The Text To Analyze" mode={mode} funAlert={funAlert} />
          </Route>
        </Switch>
        </Router>
    </div>
   
  );
}

export default App;

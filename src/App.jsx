import { Route, Routes } from "react-router-dom";

import "./App.css";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect} from 'react'

import Home from "./components/Home/Home";
function App() {
    useEffect(()=>{
  AOS.init()
    },[])

    window.onload= function () {
      window.scrollTo(0,0);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        
      </Routes>
    </div>
  );
}

export default App;

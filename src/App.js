import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import LandingScreen from "./LandingScreen";
import foodData from "./backend";



function App() {
  return (
    <div className='App'>
      <LandingScreen all_data={foodData}/>
    </div>
  );
}

export default App;

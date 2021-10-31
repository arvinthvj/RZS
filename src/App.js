import logo from "./logo.svg";
import "./App.css";
import LandingScreen from "./LandingScreen";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  var [allRestaurantDataWithMenus, setAllRestaurantDataWithMenus] = useState([]);
  useEffect(() => {
    async function getFoodData() {
      var foodData = await axios.get(
        "https://rcz-backend-arvinth.herokuapp.com/api/allResorts"
      );
      console.log(foodData.data);
      setAllRestaurantDataWithMenus(foodData.data);
    }
    debugger;
    getFoodData();
  }, []);

  return (
    <div className='App'>
      <LandingScreen all_data={allRestaurantDataWithMenus} />
    </div>
  );
}

export default App;

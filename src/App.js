import logo from "./logo.svg";
import "./App.css";
import LandingScreen from "./LandingScreen";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CarryForwarded from "./CarryForwarded";

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
    
    getFoodData();
  }, []);

  return (
    <Router>
      <div className='App'>

<Switch>
          <Route path="/" exact>
            <LandingScreen all_data={allRestaurantDataWithMenus} />
          </Route>
        </Switch>


        <Switch>

          <Route path="/category-nv">
            <CarryForwarded all_data={allRestaurantDataWithMenus}/>
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;

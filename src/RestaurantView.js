import React from "react";
import ListOfItems from "./ListOfItems";
import NavBarForCarryForwardedPage from "./NavBarForCarryForwardedPage";
import './resort.css'
import { useHistory } from "react-router-dom";
import TopImageContainer from "./TopImageContainer";
function RestaurantView(props) {
    const history = useHistory();
    const baseObject = history.location.state;
  return (
    <div>
       <NavBarForCarryForwardedPage/>
        <TopImageContainer/>
        <div className="restaurantDetails">
            <h1>{baseObject.hotel_name}</h1>
            <h3>{baseObject.kind_of_food_available}</h3>
            <h4>{baseObject.average_price_to_order}</h4>
            <p>{baseObject.offer_available}</p>
            {baseObject.menu_available.non_veg.map(p=>(
                <ListOfItems data = {p}/>
            ))}
        </div>
       

      </div>
    
  );
}

export default RestaurantView;

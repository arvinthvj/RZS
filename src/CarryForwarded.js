import React from 'react';
import NavBarForCarryForwardedPage from './NavBarForCarryForwardedPage';
import "./carry.css"
function CarryForwarded(props) {
    
    return (
        <div className = "carryForwarded_main_container">
            <NavBarForCarryForwardedPage all_data={props.all_data} />
            {/* <BreadCrumbsCarryForwardedPage />
            <CardsForCarryForwardedPage /> */}
        </div>
    );
}

export default CarryForwarded;
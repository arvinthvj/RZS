import React from 'react';
import NavBarForCarryForwardedPage from './NavBarForCarryForwardedPage';
import "./carry.css"
import CardsForCarryForwardedPage from './CardsForCarryForwardedPage';
function CarryForwarded(props) {
    
    return (
        <div className = "carryForwarded_main_container">
            <NavBarForCarryForwardedPage all_data={props.all_data} />
            {/* <BreadCrumbsCarryForwardedPage />*/}
            <div className="Carrycards">
                {[{name:"sam"}, {name:"muthu"}].map(f=>(
                    <div>
                    <CardsForCarryForwardedPage  /> 
                        </div>
                ))}
            
            
            </div>
           
        </div>
    );
}

export default CarryForwarded;
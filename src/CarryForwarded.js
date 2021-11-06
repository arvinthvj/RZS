import React, { useEffect, useState } from 'react';
import {Badge,  Card } from "antd";
import { useHistory } from "react-router-dom";
import { Carousel } from 'antd'
import './carry.css'
import { Rate } from 'antd';

import combineddata from './imagesBackend'
import NavBarForCarryForwardedPage from './NavBarForCarryForwardedPage';
// import "./carry.css"
// import CardsForCarryForwardedPage from './CardsForCarryForwardedPage'


const { Meta } = Card;




function CarryForwarded(props) {
    const contentStyle = {
        height: '50px',
        color: 'black',
        // lineHeight: '160px',
        textAlign: 'center',
        background: '#fff',
      };
    let historyCarried = useHistory();
    console.log(historyCarried)
    var [hotelsBasedOnkeywordData , setHotelsBasedOnkeywordData] =useState([]);

    useEffect(() => {
        let backendData = props.all_data;
       let filteredHotels =  backendData.map(o=>{

            let searchedAvailabe = o.menu_available.non_veg.filter(e=>{
                            
                         return e.food_name.toLowerCase().includes(historyCarried.location.state.toLowerCase())
                    
                    });
            
            if(searchedAvailabe.length > 0){
                    return {...o}
            }
            
            
            }).filter(e=>{return e!= undefined});
            filteredHotels.forEach(element => {
                element.imagePath = combineddata[Math.floor(Math.random() *18)]
            });
            setHotelsBasedOnkeywordData(filteredHotels)
    }, [])


    return (
        <div className = "carryForwarded_main_container">
            <NavBarForCarryForwardedPage all_data={props.all_data} />
        <div className="totalcardscarry">
            {hotelsBasedOnkeywordData.map(o => (
                <div className="carryforwardcard">
                    <Badge.Ribbon text={(o.offer_available).split("-")[0] + " off"} placement="start">
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={o.imagePath} />}
                        >
                            <div className="carryminutes"><Badge count={Math.floor(Math.random() * 30) + " mins"}></Badge></div>
                            <div className="carrymeta">
                            <Meta title={o.hotel_name} description={o.average_price_to_order} />
                            <Meta  description={o.kind_of_food_available} />
                            </div>
                            <Rate disabled defaultValue={Math.floor(Math.random() *(5-2)+2)} />
                            <Carousel autoplay effect="fade">
                                <div>
                                    <h3 style={contentStyle}>Follows all Max Safety measures to ensure your food is safe</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>3775+ orders placed from here recently</h3>
                                </div>

                            </Carousel>
                        </Card>
                    </Badge.Ribbon>
                </div>
            ))}
            </div>
        </div>
    );
}

export default CarryForwarded;
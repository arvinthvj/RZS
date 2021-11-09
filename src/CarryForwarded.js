import React, { useEffect, useState } from 'react';
import { Badge, Card } from "antd";
import { useHistory } from "react-router-dom";
import { Carousel } from 'antd'
import './carry.css'
import { Rate } from 'antd';
import { Spin, Space } from 'antd';
import { Tag } from 'antd';
// import { useHistory } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import combineddata from './imagesBackend'
import NavBarForCarryForwardedPage from './NavBarForCarryForwardedPage';
// import "./carry.css"
// import CardsForCarryForwardedPage from './CardsForCarryForwardedPage'


const { Meta } = Card;
const { CheckableTag } = Tag;


const tagsData = ['Movies', 'Books', 'Music', 'Sports'];


function CarryForwarded(props) {
    const history = useHistory();
    const contentStyle = {
        height: '50px',
        color: 'black',
        // lineHeight: '160px',
        textAlign: 'center',
        background: '#fff',
    };
    let historyCarried = useHistory();
    console.log(historyCarried)
    var [hotelsBasedOnkeywordData, setHotelsBasedOnkeywordData] = useState([]);

    useEffect(() => {
        let backendData = props.all_data;
        let filteredHotels = backendData.map(o => {

            let searchedAvailabe = o.menu_available.non_veg.filter(e => {

                return e.food_name.toLowerCase().includes(historyCarried.location.state.toLowerCase())

            });

            if (searchedAvailabe.length > 0) {
                return { ...o }
            }


        }).filter(e => { return e != undefined });
        filteredHotels.forEach(element => {
            element.imagePath = combineddata[Math.floor(Math.random() * 18)]
        });
        setTimeout(() => {
            setHotelsBasedOnkeywordData(filteredHotels)
        }, 1000);
       
    }, [])

function hanldeCarryCardClick(clickedCardObj){
    debugger
    history.push({
        pathname: '/resort',
        state: clickedCardObj
      });
}
    return (

        <div>
            {hotelsBasedOnkeywordData.length == 0 ? (
                <div className="spinner">
                <Space size="middle">
                    <Spin size="large" />
                </Space>
                </div>
            ) : (
                <div className="carryForwarded_main_container">
                    <NavBarForCarryForwardedPage all_data={props.all_data} />
                    <div className="carryBreadCrumbs">
                            <Breadcrumb>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href="">Erode Restaurants</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href="">Non-Veg</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>Biryani</Breadcrumb.Item>
                            </Breadcrumb>
                    </div>
                    <div className="carrytags">
                        
                    </div>
                    <div className="totalcardscarry">
                        {hotelsBasedOnkeywordData.map(o => (
                            <div className="carryforwardcard" onClick={()=>{hanldeCarryCardClick(o)}}>
                                <Badge.Ribbon text={(o.offer_available).split("-")[0] + " off"} placement="start">
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={o.imagePath} />}
                                    >
                                        <div className="carryminutes"><Badge count={Math.floor(Math.random() * 30) + " mins"} ></Badge></div>
                                        <div className="carrymeta">
                                            <Meta title={o.hotel_name} description={o.average_price_to_order} />
                                            <Meta description={o.kind_of_food_available.split(",")[Math.floor(Math.random() * o.kind_of_food_available.split(",").length) - 1]} />
                                        </div>
                                        <Rate disabled defaultValue={Math.floor(Math.random() * (5 - 2) + 2)} />
                                        <Carousel autoplay effect="fade">
                                            <div>
                                            <img className="carryCarousalMaxSafety" src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp"></img>

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
            )}

        </div>
    );
}

export default CarryForwarded;
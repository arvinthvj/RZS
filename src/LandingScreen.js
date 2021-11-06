import React, { useState } from "react";
import "./landing.css";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { Tag } from "antd";
import { Popover} from "antd";
import { Card } from "antd";

import UserProfileUI from "./UserProfileUI";

const { Search } = Input;
const { Meta } = Card;

function LandingScreen(props) {
  var [popUpVisible, setPopupVisible] = useState(false);
  var [clickedTagName, setClickedTagName] = useState("");
  var [isTextInsideSearchInput, setIsTextInsideSearchInput] = useState(false);
  var [capturedSearchText, setCapturedSearchText] = useState("");
  var [filteredFoodBasedOnSearchInput ,setFilteredFoodBasedOnSearchInput] = useState([]);



 
  let zomatoBackground =
    "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png";

  function changeVisibilityOfPOpUp() {
    setPopupVisible(true);
  }
  function toHide() {
    setPopupVisible(false);
  }
  function handleTagsClick(nameoftag) {
    setClickedTagName(nameoftag);
  }


  function filterTheFoodItem(searchKeyword) {
    let  filteredNonVegItemsBasedOnKeyword = props.all_data.reduce((accumulator, objectInCurrentLoop) =>{
    let nonvegsSearch = objectInCurrentLoop.menu_available.non_veg.filter(f=> {return f.food_name.includes(searchKeyword)})
        accumulator.push(...nonvegsSearch)
        return accumulator
    },[])
    setFilteredFoodBasedOnSearchInput(filteredNonVegItemsBasedOnKeyword);
  }


  
  function createContentForPopup() {
    return (
      <div>
        {isTextInsideSearchInput == false ? (
          <div>
            <Tag>
              <a
                onClick={(e) => {
                  handleTagsClick(e.currentTarget.innerText);
                }}
              >
                Test
              </a>
            </Tag>
          </div>
        ) : (
          <div>
            {filteredFoodBasedOnSearchInput.map((e) => (
              <div className="landing">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt='example'
                      src='https://b.zmtcdn.com/data/pictures/9/19341909/01c361be49104bfce556f3360879c13a_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A'
                    />
                  }
                >
                  <Meta
                    title={e.food_name}
                    description={e.price}
                  />
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='Landing_zomatoBg'>
      <img src={zomatoBackground}></img>
      <div className='landing_overTheImageContainer'>
      {/* <UserProfileUI logInData = {props.logInData}/> */}
      <UserProfileUI />
        <h1 className='landing_logo_text'>zomato</h1>
        <h2>Discover the best food & drinks in Erode</h2>
        <div className='landing_input_holder'>
          <Space align='center'>
            <Popover
              content={createContentForPopup}
              title='Title'
              trigger='click'
              visible={popUpVisible}
              placement='bottom'
              onVisibleChange={changeVisibilityOfPOpUp}
            >
              <Search
                onChange={(e) => {
                  debugger;
                  filterTheFoodItem(e.currentTarget.value);
                  setIsTextInsideSearchInput(true);
                }}
                // value = {clickedTagName}
                placeholder='input search text'
                // onBlur ={toHide}
                allowClear
                // onSearch={onSearch}
                style={{ width: 600 }}
              />
            </Popover>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;

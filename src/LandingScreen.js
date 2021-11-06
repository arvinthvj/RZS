import React, { useState } from "react";
import "./landing.css";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { Tag } from "antd";
import { Popover } from "antd";
import { Card } from "antd";
import { useHistory } from 'react-router-dom';
import UserProfileUI from "./UserProfileUI";
import combineddata from './imagesBackend'
// import { useHistory } from "react-router-dom";
const { Search } = Input;
const { Meta } = Card;


function LandingScreen(props) {

  const history = useHistory()
  var [popUpVisible, setPopupVisible] = useState(false);
  var [clickedTagName, setClickedTagName] = useState("");
  var [isTextInsideSearchInput, setIsTextInsideSearchInput] = useState(false);
  var [capturedSearchText, setCapturedSearchText] = useState("");
  var [filteredFoodBasedOnSearchInput, setFilteredFoodBasedOnSearchInput] = useState([]);




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
  function cardOnClick(cardData) {
    history.push({
      pathname: '/category-nv',
      state: cardData.food_name
    });

  }


  function filterTheFoodItem(searchKeyword) {
    let filteredNonVegItemsBasedOnKeyword = props.all_data.reduce((accumulator, objectInCurrentLoop) => {
      let nonvegsSearch = objectInCurrentLoop.menu_available.non_veg.filter(f => { return f.food_name?.toLowerCase().includes(searchKeyword?.toLowerCase()) })
      accumulator.push(...nonvegsSearch)
      return accumulator
    }, [])
    let toUnshiftCategory = filteredNonVegItemsBasedOnKeyword[0].food_name.split(" ").map(e => {
      if (e.toLowerCase().indexOf(searchKeyword.toLowerCase()) != -1) {
        return e
      }
    }).filter(o => { return o != undefined })[0];
    let unshiftObj = {
      food_name: toUnshiftCategory,
      votes: "100",
      price: "200",
      category: "Category"
    }
    
    filteredNonVegItemsBasedOnKeyword.unshift(unshiftObj)
    filteredNonVegItemsBasedOnKeyword.forEach(e=>{
    //  e.menu_available.non_veg && e.menu_available.non_veg.forEach(f=>{
                
        e.imagePath = combineddata[Math.floor(Math.random() *18)]
   
  //  });

    })
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
              <div className="landing" onClick={() => { cardOnClick(e) }}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt='example'
                      src={e.imagePath}
                      loading="lazy"
                    />
                  }
                >
                  <Meta
                    title={e.food_name}
                    description={e.category ? e.category : e.price}
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

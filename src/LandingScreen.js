import React from "react";
import "./landing.css";
import { Input, Space } from "antd";
import "antd/dist/antd.css";

const { Search } = Input;
function LandingScreen(props) {
  let zomatoBackground =
    "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png";

  return (
    <div className='Landing_zomatoBg'>
      <img src={zomatoBackground}></img>
      <div className='landing_overTheImageContainer'>
        <h1 className='landing_logo_text'>zomato</h1>
        <h2>Discover the best food & drinks in Erode</h2>
        <div className="landing_input_holder">
        <Space align='center'>
        <Search placeholder="input search text" allowClear 
        // onSearch={onSearch} 
        style={{ width: 600 }} />
        </Space>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;

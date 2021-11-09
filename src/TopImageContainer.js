import React from 'react';
import './topcontainerresort.css'
function TopImageContainer(props) {
    return (
        <div className="resorttotalpart">
            <div className="firstHalf">
                <img className="largeImgs align" src="http://wirally.com/wp-content/uploads/2019/04/3-Restaurant.jpg"></img>
            </div>
            <div className="secondHalf">
                <img className="smallImgs align" src="http://wirally.com/wp-content/uploads/2019/04/3-Restaurant.jpg"></img>
                <img className="smallImgs align" src="http://wirally.com/wp-content/uploads/2019/04/3-Restaurant.jpg"></img>
                <img className="smallImgs align" src="http://wirally.com/wp-content/uploads/2019/04/3-Restaurant.jpg"></img>
                <img className="smallImgs align" src="http://wirally.com/wp-content/uploads/2019/04/3-Restaurant.jpg"></img>
            </div>

        </div>
    );
}

export default TopImageContainer;
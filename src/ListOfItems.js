import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;


function ListOfItems(props) {
    return (
        <div>
            <div className="listofitemsResort">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title={props.data.food_name} description={props.data.price} />
                    <Meta  description={props.data.votes} />
                </Card>
            </div>
        </div>
    );
}

export default ListOfItems;
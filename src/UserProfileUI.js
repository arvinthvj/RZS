import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./userLogin.css"
function UserProfileUI(props) {
    
    const menu = (
        <Menu >
            <Menu.Item key="0">
                <a href="">{Object.keys(props.logInData).length &&  props.logInData.user.displayName}</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="https://www.aliyun.com">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
      );
    return (
        <div className="navBarProfile">
            {Object.keys(props.logInData).length ? (<><Avatar src={<Image src={props.logInData.user.photoURL} />} size={50}/>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {props.logInData.user.displayName}<DownOutlined />
                </a>
            </Dropdown></>) 
            : 
            (
                <button onClick={window.googleProvider}>Login</button>
            )
            }
            
        </div>
    );
}

export default UserProfileUI;
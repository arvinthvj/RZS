import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./userLogin.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
// import { actionCreators } from "./state/index";
// import { bindActionCreators } from 'redux'

function UserProfileUI(props) {
    const user = useSelector((state) => state.userDetails);
    // const dispatch = useDispatch();
    // const { userForProfileUI } = bindActionCreators(actionCreators, dispatch);
    const menu = (
        <Menu >
            <Menu.Item key="0">
                <a href="">{Object.keys(user).length &&  user.user.displayName}</a>
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
            {Object.keys(user).length ? (<><Avatar src={<Image src={user.user.photoURL} />} size={50}/>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {user.user.displayName}<DownOutlined />
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
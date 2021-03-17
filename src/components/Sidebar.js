import React from 'react';
import {Menu} from 'antd';
import {MailOutlined} from '@ant-design/icons';

const Sidebar = () => {
    const {SubMenu} = Menu;
    return (
        <Menu style={{width: 256}}>
            <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default Sidebar;
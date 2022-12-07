import React,{useState} from 'react'
import { Layout,Dropdown,Avatar} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
  } from '@ant-design/icons';
export default function TopBar() {
  const {Header} =Layout
  let [collapsed,setCollapsed] = useState(false)
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          退出
        </a>
      ),
    },]
  return (
    <Header
    className="site-layout-background"
    style={{
      padding: 0,
    }}
  >

   {collapsed?<MenuUnfoldOutlined
    className='trigger'
    onClick={() => setCollapsed(!collapsed)} 
   /> : <MenuFoldOutlined
   
   className='trigger'
   onClick={() => setCollapsed(!collapsed)} 
   />}
    <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
       <div style={{float:'right'}}>
        
            <Avatar size={24} icon={<UserOutlined/>}></Avatar>
             欢迎回来
        </div>
      </Dropdown>
  </Header>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/sideBar'
import TopBar from '../components/topBar'
import { Layout} from 'antd';
import './newSandBox.css'
export default function NewSandBox() {
    const {Content} = Layout
  return (
    <Layout>
        <SideBar  />
        <Layout className="site-layout">
            <TopBar/>
            <Content   className="site-layout-background">
            <Outlet/>
            </Content>
            
        </Layout>
    </Layout>
  )
}

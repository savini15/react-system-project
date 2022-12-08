import React,{useState,useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { Layout, Menu} from 'antd';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MehOutlined
  } from '@ant-design/icons';
  import './index.css'
import axios from 'axios';
export default function SideBar(props) {
 const {  Sider } = Layout;
 const navigate = useNavigate()
 //从后台根据当前的用户角色返回侧边栏
let [items,setItems]  =useState([])
useEffect(()=>{
    axios.get('http://localhost:8090/rights?_embed=children').then(
        res=>{
            console.log(res.data)
            
            setItems(res.data)
        }
    )
},[])
 let [collapsed,setCollapse] = useState(false)
 const location =useLocation()
 console.log('lcation----',location)
 const defaultSelectedKeys = [location.pathname]
 const arr = location.pathname.split('/')
 const defaultOpenKeys = [`${arr.splice(0,arr.length-2).join('/')}`]

 const selectedKeys = [`/${location.pathname.split('/')[1]}`]
 console.log('defaultOpenKeys',defaultOpenKeys)
 let goPage = (item  )=>{
   console.log('item----',item)
   navigate(item.key)
 }
  return (
    
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" > 导航列表</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={defaultOpenKeys}
         
          items={items}

          onClick={(item)=>{goPage(item)}}
          selectedKeys={defaultSelectedKeys}
        //   selectedKeys={selectedKeys}
        />
      </Sider>
    )
}

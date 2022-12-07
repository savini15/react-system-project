import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Menu} from 'antd';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MehOutlined
  } from '@ant-design/icons';
  import './index.css'
export default function SideBar() {
 const {  Sider } = Layout;
 const navigate = useNavigate()
 //从后台根据当前的用户角色返回侧边栏
// 
 const items = [
    { label: '首页', key: '/newSandBox/home',icon:<MehOutlined /> }, // 菜单项务必填写 key
    { label: '用户管理', key: '/newSandBox/user-manager',
     children:[
        {
            label:'用户列表',
            key: '/newSandBox/user-manager/list',
        }
     ]
    },
    {
      label: '权限管理',
      key: '/right-manage',
      children: [
        { label: '角色列表', key: '/newSandBox/right-manager/role/list' },
        { label: '权限列表', key: '/newSandBox/right-manager/right/list' },
    ],
    },
  ];
 let [collapsed,setCollapse] = useState(false)
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
          defaultSelectedKeys={['1']}
          items={items}

          onClick={(item)=>{goPage(item)}}
        />
      </Sider>
    )
}

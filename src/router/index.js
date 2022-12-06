import React from 'react'
 import { useRoutes } from 'react-router-dom'
import Login from '../views/login'
import NewSandBox from '../views/newSandBox'
import Auth from './auth'
import Home from '../views/home'
import RightList from '../views/right-manager/rightList'
import RoleList from '../views/right-manager/roleList'
import UserList from '../views/user-manager/UserList'
import NoPermission from '../views/NoPermission'
export default function Routes() {
    const route = useRoutes([
        {path:'/',element:<Home/>},
        {path:'/login',element:<Login/>},
        {path:'/home',element:<Home/>},
         {path:'/newSandBox',element:<NewSandBox/>,
         children:[
            {path:'user-manager/list',element:<UserList/>},
            {path:'right-manager/role/list',element:<RoleList/>},
            {path:'right-manager/right/list',element:<RightList/>},
         ]
    
       },
       {path:'*',  element:<NoPermission/>},
    ])
  return (
    route
  )
}




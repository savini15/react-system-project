import React,{useState,useEffect} from 'react'
import { Button, Table, Tag ,Modal} from 'antd'
import axios from 'axios';
import { DeleteOutlined, EditOutlined,ExclamationCircleFilled } from '@ant-design/icons';
export default function RightList() {
    let [dataSource,setDataSource]  =useState([])
    const {confirm} = Modal
    useEffect(()=>{
        axios.get('http://localhost:8090/rights?_embed=children').then(
            res=>{
                setDataSource(res.data)
            }
        )
    },[])
      
      const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          render:(id)=><b>{id}</b>
        
        },
        {
          title: '权限名称',
          dataIndex: 'label',
          
        },
        {
          title: '权限路径',
          dataIndex: 'key',
          render:(key)=><Tag color='orange'>{key}</Tag>
        },

        {
            title: '操作',
            // dataIndex: 'key',
            render:(item)=>(
               <div>
                 <Button danger shape='circle' 
                 onClick={()=>deleteConfirm(item)}
                 icon={<DeleteOutlined/>}></Button>
                <Button type='primary' shape='circle'
                icon={<EditOutlined/>}></Button>
               </div>
            )
          },
      ];

      const deleteConfirm = (item) => {
        confirm({
          title: 'Do you Want to delete these items?',
         icon: <ExclamationCircleFilled />,
          content: 'Some descriptions',
          onOk() {
            deleteItem(item)
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      };

    let deleteItem =(item)=>{
    console.log('---delete',item)
    const url = item.grade ===1 ? 'http://localhost:8090/rights/':'http://localhost:8090/children/'
    
    if(item.grade ===1){
        setDataSource(dataSource.filter(i=>i.id!==item.id))
    }else {
        const list = dataSource.filter(i=>i.id===item.rightId)
        list[0].children = list[0].children.filter(i=>i.id!==item.id)
     console.log('new data----',dataSource
     )
        setDataSource([...dataSource])
    }
    axios.delete(`${url}${item.id}`).then(
        res=>{
          
        }
    )
    }
  return (
    <div>



    <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  )
}

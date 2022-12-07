import React from 'react'
import { Button } from 'antd'
import axios from 'axios'
export default function Home() {
  let data = ()=>{
    //获取数据
    // axios.get('http://localhost:8090/posts').then(es=>{
    //    console.log(es.data) 
    // })
    // // 增加数据
    // axios.post('http://localhost:8090/posts',{
    //     title:'kkk',
    //     author:'jjjjj'
    // })
    // //替换  修改  url 带一个唯一标识
    // axios.put('http://localhost:8090/posts/1',{
    //     title:'hahahha',
    //     author:'okdsdsjj'
    // })
    // update 更新
    // axios.patch('http://localhost:8090/posts/1',{
    //     title:'9090',
    //     author:'000'
    // })
    //axios.delete('http://localhost:8090/posts/1')

    //连表查询
    axios.get('http://localhost:8090/posts?_embed=comments').then(
        res=>{
            console.log(res.data)
        }
    )


    axios.get('http://localhost:8090/comments?_expand=post').then(
        res=>{
            console.log(res.data)
        }
    )
  }

  return (
    <div>
        
        <Button type="primary" onClick={data}>AA</Button>
    </div>
  )
}

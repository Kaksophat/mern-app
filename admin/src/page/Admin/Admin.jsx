// import React from 'react'
import Sider from "../../component/Sider/Sider"
import { Route,Routes } from "react-router-dom"
import Addproduct from "../../component/Addproduct/Addproduct"
import Listproduct from "../../component/Listproduct/Listproduct"
import "./Admin.css"

const Admin = () => {
  return (
    <div className="admin">
      <Sider/>
      <Routes>
        <Route path="/addproduct" element={ <Addproduct/>}/>
        <Route path="/listproduct" element={ <Listproduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin
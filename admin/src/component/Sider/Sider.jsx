import React from 'react'
import {Link} from "react-router-dom"
import add_product_icon from "../../assets/Product_Cart.svg"
import list_product_icon from "../../assets/Product_list_icon.svg"
import "./Sider.css"


const Sider = () => {
  return (
    <>
    <div className='sider'>
     <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className="sider-item">
        <img src={add_product_icon} alt="" />
        <p>addproduct</p>
      </div>
     </Link>
     <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className="sider-item">
        <img src={list_product_icon} alt="" />
        <p>listproduct</p>
      </div>
     </Link>
    </div>
    </>
  )
}

export default Sider
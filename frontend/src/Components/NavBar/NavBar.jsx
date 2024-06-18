import React, { useContext, useRef, useState } from 'react'
import './NavBar.css'
import logo from"../Assets/laaya-logo.png"
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext/ShopContext'
import drop_down from '../Assets/nav-dropdown.png'
const NavBar = () => {
    const[menu,setMenu]=useState("shop");
    const {getTotalCartItems} =useContext(ShopContext);
    const menuRef=useRef();
    const drop_down_toggle=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
  return (
    <div className='navbar'>
        <div className="navLogo">
            <img src={logo} alt="" />
        </div>
        <img  className="nav-dropdown" onClick={drop_down_toggle} src={drop_down} alt="" />
        <ul ref={menuRef} className="navMenu">
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button><Link to='/login'style={{textDecoration:'none'}}>Login</Link></button>
            <Link to='/cart'><img src={cart} alt="" /></Link>
            <div className="nav-cart-count">
           { getTotalCartItems()}
            </div>
        </div>
    </div> 
  )
}

export default NavBar

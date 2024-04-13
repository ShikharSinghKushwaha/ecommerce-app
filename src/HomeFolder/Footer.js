import React from 'react'
import './Footer.css';
import TopBar from '../Components/Navbar';
import { NavLink, BrowserRouter as Router, Routes } from 'react-router-dom';
function Footer() {
  return (
    <div>
        <footer className="page-footer">    
            <div className="container"> 
                <div className='comp-name'>
                    <h2>OnlineStore.com</h2>
                </div>
                <div className='links'>
                   
                    <NavLink to='/' className="link blinker-regular">Home </NavLink>
                    <NavLink to='/' className="link blinker-regular">Categories </NavLink>
                    <NavLink to='/' className="link blinker-regular">Cart </NavLink>
                    {/* <NavLink to='/' className="link blinker-regular">Home </NavLink> */}
                    
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer

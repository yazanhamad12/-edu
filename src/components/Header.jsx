import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function Header() {
  
  return (
    <header id='header'>
        <nav className="navbar" >
        <a href="#" className='logo'>edu</a>
        <ul>
            <li> <a href="#">Home</a></li>
            <li> <a href="#">Product</a></li>
            <li> <a href="#">Pricing</a></li>
            <li> <a href="#">Contact</a></li>
        </ul>
        <div className="account">
            <a href="#"> Login </a>
             <a  className="btn-join"   href="#">Join us<FaArrowRight />
            </a>
        </div>

        </nav>
        </header >
  )
}

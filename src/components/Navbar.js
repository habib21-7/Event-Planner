import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
      <div className='header'>
      <a href="#" class="logo"><span>P</span>lanner</a>

      <nav className="navbar">
      <a href="/">Home</a>
      <a href="#service">Events</a>
      <a href="#about">About Us</a>
      <a href="#gallery">Gallery</a>
      <a href="#price">Price</a>
      <a href="#review">Review</a>
      <a href="#contact">Contact Us</a>
  </nav>
      </div>
   
  )
}

export default Navbar
import React from 'react'
import {ReactNavbar } from "overlay-navbar"
import logo from "../../Images/logo2.png"
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  
  return (

    <ReactNavbar
    navColor1 ="#3D9970"
    navColor2 = "#ff851b"
    navColor4 ="#85144b"
    logo =  {logo}
    burgerColor="#0074d9"
    burgerColorHover="Black"
    nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="Black"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon= {true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="Black"
      profileIconColorHover="white"
    />
   
  )
}

export default Header
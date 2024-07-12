import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <header className="header">
        <a href="/" className="logo" >Jwel</a>
        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">About Us</a>
        <a href="/">Contact</a>
            <a href="/">Price</a>
        </nav>
    </header>
    </>
  )
}

export default Navbar

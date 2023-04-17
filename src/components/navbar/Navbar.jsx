import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const closeMobileMenu = () => setToggleMenu(false);
  return (
    <div className='gpt3-navbar'>
      <div className="gpt3-navbar-links">
        <div className="gpt3-navbar-links-logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3-navbar-links-container">
          <a href="#home">Home </a>
          <a href="#wgpt3">What is GPT?</a>
          <a href="#features">Case Studies</a>
          <a href="#possibility">Open AI</a>
          <a href="#blog">Library</a>
        </div>
      </div>
      <div className="gpt3-navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3-navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='white' size={30} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='white' size={30} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="gpt3-navbar-menu-container scale-up-center" >
            <div className="gpt3-navbar-menu-container-links">
              <a href="#home" onClick={closeMobileMenu}>Home</a>
              <a href="#wgpt3" onClick={closeMobileMenu}>What is GPT?</a>
              <a href="#features" onClick={closeMobileMenu}>Case Studies</a>
              <a href="#possibility" onClick={closeMobileMenu}>Open AI</a>
              <a href="#blog" onClick={closeMobileMenu}>Library</a>
              <div className="gpt3-navbar-menu-container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
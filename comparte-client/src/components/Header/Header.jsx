import React, { useState } from 'react';

import classes from './Header.module.scss';

import Logo from './../../assets/images/LogoComparteINC.png';

import Button from "./../Header/Navbar/NavbarButton/NavbarButton";

import {useNavigate, Link } from 'react-router-dom';

import Menu from './Navbar/NavbarMenu/NavbarMenu';

// import Navbar from './Navbar/Navbar';

const Header = () => {

  return (
    <header className={classes["Header"]} >
      <nav>
        <div className={classes["nav-brand-container"]}>
          <figure >
            <img src={Logo} alt="ComparteINC Logo"></img>
          </figure>
          <Link to = "/"><h1>  ComparteINC </h1></Link>
        </div>

        <div className={classes["nav-links-list"]}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
        <Menu/>
      </nav>
    </header>
  );
}

export default Header;
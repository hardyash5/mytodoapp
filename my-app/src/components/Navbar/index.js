import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './Navbarelements';

const Navbar = () => {
  return (
    <>
    <Nav>   
        <NavLink to='/'>
            <h1>To-Do App</h1>
        </NavLink>
        <Bars className="bars" />
        <NavMenu >
            <NavLink to='/about' activeStyle>
                About
            </NavLink>
            <NavLink to='/' activeStyle>
                To-Do List
            </NavLink>
            <NavLink to='/contact' activeStyle>
                Contact
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
    </Nav>
    </>
  );
};

export default Navbar;

import React from 'react'
import home from '../../assets/icons/home.svg';
import trending from '../../assets/icons/trending.svg';
import subscription from '../../assets/icons/subscriptions.svg';
import library from '../../assets/icons/library.svg';
import { NavLink } from 'react-router-dom';
import './footernav.css'

const FooterNav = () => {
  return (
    <ul className='flex justify-between footer__nav sm:hidden'>
        <li >
        <NavLink className='flex'>
            <img src={home} alt="icon" />
            <span>Home</span>
            </NavLink>    
        </li>
        <li >
        <NavLink className='flex'>
            <img src={trending} alt="icon" />
            <span>Trending</span>
            </NavLink>    
        </li>
        <li >
        <NavLink className='flex'>
            <img src={subscription} alt="icon" />
            <span>Subscriptions</span>
            </NavLink>    
        </li>
        <li >
        <NavLink className='flex'>
            <img src={library} alt="icon" />
            <span>Library</span>
            </NavLink>    
        </li>
    </ul>
  )
}

export default FooterNav;
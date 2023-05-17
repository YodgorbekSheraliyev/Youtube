import { MyContext } from "../Context/UseContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import menu from "../../assets/icons/menu.svg";
import youtube from "../../assets/icons/youtube.svg";
import account from "../../assets/icons/account.jpg";
import {FiSun} from 'react-icons/fi';
import {BsMoon} from 'react-icons/bs'

const Navbar = () => {
  const {dark, handleTheme, searchText, setSearchText} = useContext(MyContext)
  return (
    <nav className={dark? 'dark__nav nav':'nav'} >
      <ul className="nav__list flex  ">
        <li className="nav__item nav__item-menu">
          <img src={menu} alt="menu" className={`burger__menu ${dark? 'light':'dark'}`}/>
          <Link to='/'><img src={youtube} alt="youtube" className="youtube__logo" /></Link>
          <Link to='/'><span className={dark? 'light':'dark'}>YouTube</span></Link>
        </li>
        <li className="nav__item nav__item-searchbar">
          <input
            type="text"
            placeholder="Searchch"
            className="searchbar__input" value={searchText} onChange={(e)=> setSearchText(e.target.value)}
          /><br/>
        </li>
        <li className="nav__item nav__item-icon-wrapper flex justify-end">
          <span onClick={handleTheme} className="mr-[15px]">{dark ? <FiSun className="light"/> : <BsMoon/>}</span>
        <img
            className="nav__icon-right nav__icon-right-profile"
            src={account} alt="icons" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

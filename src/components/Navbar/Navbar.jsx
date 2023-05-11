import "./navbar.css";
import menu from "../../assets/icons/menu.svg";
import youtube from "../../assets/icons/youtube.svg";
import search from "../../assets/icons/search.svg";
import video from "../../assets/icons/video.svg";
import dots from "../../assets/icons/dots.svg";
import notification from "../../assets/icons/notification.svg";
import account from "../../assets/icons/account.jpg";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list flex  ">
        <li className="nav__item nav__item-menu">
          <img src={menu} alt="menu" className="burger__menu"/>
          <img src={youtube} alt="youtube" className="youtube__logo" />
          <span className="text-red">YouTube</span>
        </li>
        <li className="nav__item nav__item-searchbar">
          <input
            type="text"
            placeholder="Search"
            className="searchbar__input"
          /><br/>
          <img src={search} alt="search" className="searchbar__img" />
        </li>
        <li className="nav__item nav__item-icon-wrapper flex">
          <img
            className="nav__icon-right nav__icon-right-video"
            src={video}
            alt="icons"
          />
          <img
            className="nav__icon-right nav__icon-right-dots"
            src={dots}
            alt="icons"
          />
          <img
            className="nav__icon-right nav__icon-right-notification"
            src={notification}
            alt="icons"
          />
          <img
            className="nav__icon-right nav__icon-right-profile"
            src={account}
            alt="icons"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

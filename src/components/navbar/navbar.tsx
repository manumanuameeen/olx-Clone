import React from 'react';
// import olx_logo from '../../assets/symbol.png';
import search_logo from '../../assets/search1.svg';
import arrowIcon from '../../assets/arrow-down.svg';
import searchWt from '../../assets/search.svg';
import './navbar.css';
import { FiBell, FiMessageCircle, FiHeart, FiUser } from 'react-icons/fi'
import { MdArrowDropDown } from "react-icons/md"
import userproifle from "../../assets/avatar.png"
import { useAuth } from '../context/Auth';
import { Plus } from 'lucide-react'; 
import olx_logo from "../../assets/olx_logo_2025.svg"

type NavProp = {
  toggleModal?: () => void;
  toggelModalSell: () => void;
};

const Navbar: React.FC<NavProp> = ({ toggleModal, toggelModalSell }) => {
  const { user, logout } = useAuth()
  return (
    <nav className="navbar">
      <h1></h1>
      <div className="navbar-container">
        <a href="/">
          <img src={olx_logo} alt="OLX Logo" className="navbar-logo" />
        </a>
        <div className="location-container">
          <img src={search_logo} alt="Search Icon" className="location-icon" />
          <input
            type="text"
            name="loc"
            placeholder="India"
            className="location-input"
          />
          <img src={arrowIcon} alt="Dropdown Arrow" className="location-dropdown" />
        </div>
        <div className="search-container">
          <input
            type="text"
            name="search"
            placeholder="Find Cars, Mobile Phones and more..."
            className="search-input"
          />
          <button className="search-button">
            <img src={searchWt} alt="Search Icon" />
          </button>
        </div>
        <div className="lang">
          <p className=''><strong>English</strong></p>
          <img src={arrowIcon} alt="Language Dropdown Arrow" />
        </div>
        <div className="hidden md:flex items-center gap-5 mx-2">
          <FiHeart className="text-gray-600 hover:text-blue-600 cursor-pointer" size={22} />
          <FiMessageCircle className="text-gray-600 hover:text-blue-600 cursor-pointer" size={22} />
          <FiBell className="text-gray-600 text-dark  hover:text-blue-600 cursor-pointer" size={22} />

          <img src={userproifle} className="text-gray-600 hover:text-blue-600 cursor-pointer w-10" alt="" />

          <img src={arrowIcon} alt="Language Dropdown Arrow" className='w-[16px]' />

        </div>
        <div className="user-actions">

          {user ? (
            <button className='login-button' onClick={logout}>Log Out</button>
          ) : (
            <button className="login-button" onClick={toggleModal}>
              Login
            </button>

          )}


<button
  onClick={user ? toggelModalSell : toggleModal}
  className="gradient-border-button"
>
  <span className="button-inner">
    <Plus className="plus-icon" />
    <span className="sell-text">SELL</span>
  </span>
</button>





        </div>
      </div>
    </nav>
  );
};

export default Navbar;
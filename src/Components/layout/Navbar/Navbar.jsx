import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownMenu from './DropDown';
import Logo from "../../../assets/Logo.png"
import Accordion from './Accordian';
import {
    faChevronUp,
    faChevronDown,
    faTimes,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from 'gsap';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);
    useEffect(() => {
        if (dropdown) {
            gsap.fromTo(`.dropdown-menu.${dropdown}`,
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.5 });
        }
    }, [dropdown]);

    const handleMouseEnter = (menu) => {
        if (dropdown === menu) {
            setDropdown(null);
            return;
        }
        setDropdown(menu);
    };
    const [isCross, setIsCross] = useState(false);

    const handleClick = () => {
        setIsCross(!isCross);
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li className="navbar-item" onClick={() => handleMouseEnter('products')}>
                    <a href="#">Products
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`margin-icon ${dropdown === "products" ? "rotate" : ""}`}
                        />
                    </a>
                    {dropdown === 'products' && (
                        <div className='dropdown-menu products'>
                            <DropdownMenu />
                        </div>
                    )}
                </li>
                <li className="navbar-item">
                    <a href="#">Pricing</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Compare</a>
                </li>
                <li className="navbar-item" onClick={() => handleMouseEnter('aboutus')}>
                    <a href="#">About Us</a>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`margin-icon ${dropdown === "aboutus" ? "rotate" : ""}`}
                    />
                    {dropdown === 'aboutus' && (
                        <div className="dropdown-menu aboutus">
                            <a href="#">Our Story</a>
                            <a href="#">Team</a>
                            <a href="#">Careers</a>
                        </div>
                    )}
                </li>
                <li className="navbar-item" onClick={() => handleMouseEnter('resources')}>
                    <a href="#">Resources</a>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`margin-icon ${dropdown === "resources" ? "rotate" : ""}`}
                    />
                    {dropdown === 'resources' && (
                        <div className="dropdown-menu resources">
                            <a href="#">Blog</a>
                            <a href="#">E-books</a>
                            <a href="#">Webinars</a>
                        </div>
                    )}
                </li>
            </ul>
            <div className='button-and-icon-container'>
                <button className="demo-button">
                    <span>Book a Demo</span>
                    <div className='arrow-icons-container'>
                        <span className='arrow-icon'>
                            <svg className='previous-icon' xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 21" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M14.3828 7.82861L17.5078 10.9536M17.5078 10.9536L14.3828 14.0786M17.5078 10.9536L2.50781 10.9536" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <svg className='next-icon' xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 21" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M14.3828 7.82861L17.5078 10.9536M17.5078 10.9536L14.3828 14.0786M17.5078 10.9536L2.50781 10.9536" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </div>
                </button>
                <div className="small-navbar-icon-container" onClick={handleClick}>
                    <div className={`small-navbar-icon ${isCross ? 'small-navbar-cross-icon' : 'small-navbar-bar-icon'}`}>
                        <div className="small-navbar-bar small-navbar-bar1"></div>
                        <div className="small-navbar-bar small-navbar-bar2"></div>
                        <div className="small-navbar-bar small-navbar-bar3"></div>
                    </div>
                </div>
            </div>
               <Accordion isOpen={isCross} />
        </nav>
    );
}

export default Navbar;

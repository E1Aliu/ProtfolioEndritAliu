import React, {useState, useEffect} from 'react';
import{Link} from 'react-router-dom';
import clsx from 'clsx';
import {FormattedMessage} from 'react-intl';


import './navbar.scss';
import MobileNav from '../MobileNav/MobileNav'
import { BiSearch } from 'react-icons/bi'
import {CgProfile } from 'react-icons/cg'


const Navbar =(props)=>{
    const [isSticky,setIsSticky]= useState(false);
    useEffect(() => {
        const nav = document.querySelector(".nav");
        const navHeight = nav.scrollHeight;
    
        const handleScroll = () => {
          const scrollHeight = window.pageYOffset;
          setIsSticky(scrollHeight > 180 ? true : false);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        return(
            <div id="navbar" className={clsx(`nav ${props.styles}`, isSticky ? "nav__sticky" : "")} >
            <Link to='/' className='nav-logo'>
                <div className='logo-container'><CgProfile/></div>
                <h6>Portfolio</h6>
            </Link>

            <div className='nav-links'>

                <div className='nav-link features-link'>
                        <a href='#projects'>
                         <FormattedMessage id="navbar-main-link1" defaultMessage='Projects'/>
                         </a>
                </div>

                <div className='nav-link products-link'>
                    <a href="#technologies">
                         <FormattedMessage id="navbar-main-link2" defaultMessage='Technologies' />
                         </a>
                </div>


                <div className='nav-link pricing-link'>
                    <a href="#aboutme">
                        <FormattedMessage id="navbar-main-link3" defaultMessage='About' />
                        </a>
                </div>
                <div className='nav-link pricing-link'>
                    <a href="#contact">
                        <FormattedMessage id="navbar-main-link4" defaultMessage='Contact' />
                    </a>
                </div>
                <div className='nav-link pricing-link'>
                    <a href="#pricing">
                        <FormattedMessage id="navbar-main-link3" defaultMessage='Pricing' />
                    </a>
                </div>
            </div>

            {/* <div className='nav-auth'>
               <div className="search-button">
                   <button className='inner-button'><BiSearch /></button>
               </div>
            </div> */}

            <MobileNav />
        </div>
        )
        ;
}

export default Navbar; 
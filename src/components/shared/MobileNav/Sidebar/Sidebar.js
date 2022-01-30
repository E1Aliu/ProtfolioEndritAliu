import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FormattedMessage } from "react-intl";

import {CgClose} from 'react-icons/cg'
import {CgProfile } from 'react-icons/cg'
// import {Data1, Data2, Data3} from '../../Navbar/data'

const Sidebar = (props) => {

    const List = (props) => {
        return (
            <div className='dropdown-links-items'>
                <Link to={props.item.to} className='sidebar-dropdown-link'>
                    {props.item.title}
                </Link>
            </div>
        )
    }

    const [list,showList] = useState(false);
    function show(){
        showList(!list);
    }

    const [list2,showList2] = useState(false);
    function show2(){
        showList2(!list2);
    }

    const [list3,showList3] = useState(false);
    function show3(){
        showList3(!list3);
    }
    const [list4,showList4] = useState(false);
    function show4(){
        showList4(!list4);
    }

    return (
        <div className='mobile-sidebar'>
             <div className='sidebar-logo-row'>
                <Link to='/'>
                    <div className='mobile-logo-container'><CgProfile/></div>
                    <h6>Portfolio</h6>
                </Link>
                <button onClick={props.click}><CgClose/> </button>
            </div>

            <div className='mobile-sidebar-links'>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link'>
                        <a href="#projects" className='nav-anchor'>
                            <FormattedMessage id="navbar-main-link1" defaultMessage='Projects'/> 
                        </a>
                    </div>
                </div>


                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link'>
                        <a href="#technologies" className='nav-anchor'>
                            <FormattedMessage id="navbar-main-link2" defaultMessage='technologies' />
                        </a>
                    </div>
                </div>

                <div className='nav-sidebar-link'>
                    <a href='#about' className='nav-anchor'>
                        <FormattedMessage id="navbar-main-link3" defaultMessage='About' />
                    </a>
                </div>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link'>
                        <a href="#contact" className='nav-anchor'>
                            <FormattedMessage id="navbar-main-link4" defaultMessage='Contact'/> 
                        </a>
                    </div>
                </div>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link'>
                        <a href='#pricing' className='nav-anchor'>
                            <FormattedMessage id="navbar-main-link5" defaultMessage='Pricing'/> 
                        </a>
                    </div>
                </div>

               


            </div>
            <div className='space'></div>
        </div>
    )
}

export default Sidebar

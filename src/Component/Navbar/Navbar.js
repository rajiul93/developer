import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const [bar, setBar] = useState(false);
    const [service, setService] = useState(false);

    const barClick = () => {
        setBar(!bar);
    }
    const serviceControl = () => {
        setService(!service);
        console.log(service);
    };

    return (
        <div className='Navbar'>
            {/* computer nav */}
            <div className='nav-container_1'>
                <div className='navbar_1'>
                <div><Link style={{textDecoration:"none", color:"#222222"}} to="/"><h2 className=''>I'm Juwel</h2></Link></div>


                    <ul >
                        <NavLink to="/" className="link">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/about" className="link">
                            <li>About me</li>
                        </NavLink>
                        <NavLink to="/service" className="link">
                            <li>Service <i className="bi bi-caret-down-fill"></i></li>
                        </NavLink>
                        <NavLink to="/portfolio" className="link">
                            <li>Portfolio</li>
                        </NavLink>
                        <NavLink to="/blog" className="link">
                            <li>Blog posts</li>
                        </NavLink>
                        <NavLink to="/contact" className="link">
                            <li>Contact me</li>
                        </NavLink>
                    </ul>

                </div>

            </div>


            {/* mobile nav */}
            <div className='nav-container-2'>
                <div className='navbar_2 position-relative px-3'>
                    <div><Link style={{textDecoration:"none", color:"#222222"}} to="/"><h2 className=''>I'm Juwel</h2></Link></div>

                    <div onClick={barClick} className='menu-control '>
                        <div className='bar-container'>
                            <div className={bar ? 'active-bar-1 bar ' : 'bar'}></div>
                            <div className={bar ? 'active-bar-2 bar' : 'bar'}></div>
                            <div className={bar ? 'active-bar-3 m-0  bar' : 'bar m-0'}></div>
                        </div>
                    </div>

                </div>
                <div className='unOrderList '>
                    <div className={bar ? 'nav-menu-control-show' : "nav-menu-control-hide"}>

                        <NavLink to="/" className="link border-top">
                            <div className='nav_list border-top'>Home</div>
                        </NavLink>

                        <NavLink
                            to="/about" className="link">
                            <li className='nav_list'>About me</li>
                        </NavLink>


                        <NavLink   className="link position_relative">
                            <li onClick={serviceControl} className='nav_list dropdownMenu '>Service <i className="bi bi-caret-down-fill"></i></li>
                            <div className={service ? "mega-menu__sub-menu" : "mega-menu__sub-menu_hide"}>
                                <div className='submenu px-5'>Service 1</div>
                                <div className='submenu px-5'>Service 2</div>
                                <div className='submenu px-5'>Service 3</div>
                            </div>
                        </NavLink>




                        <NavLink
                            to="/portfolio" className="link">
                            <li className='nav_list'>Portfolio</li>
                        </NavLink>
                        <NavLink
                            to="/blog" className="link">
                            <li className='nav_list'>Blog posts</li>
                        </NavLink>
                        <NavLink
                            to="/contact" className="link">
                            <li className='nav_list'>Contact me</li>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    return (
        <div className='Navbar'>
            {/* computer nav */}
            <div className='nav-container_1'>
                <div className='navbar_1'>
                    <div><h2 className='fs-4'>I'm Juwel</h2></div>

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
                <div className='navbar_2 position-relative mx-3'>
                    <div><h2 className=''>I'm Juwel</h2></div>

                    <div className='menu-control '>
                        <div className='bar-container'>
                            <div className='bar'></div>
                            <div className='bar'></div>
                            <div className='bar m-0'></div>
                        </div>
                    </div>

                </div>
                <div className='unOrderList '>
                    <div className='nav-menu-control'>
                        <NavLink to="/" className="link border-top">
                            <div  className='nav_list'>Home</div>
                        </NavLink>
                        <NavLink to="/about" className="link">
                            <li className='nav_list'>About me</li>
                        </NavLink>
                        <NavLink to="/service" className="link">
                            <li className='nav_list'>Service <i className="bi bi-caret-down-fill"></i></li>
                        </NavLink>
                        <NavLink to="/portfolio" className="link">
                            <li className='nav_list'>Portfolio</li>
                        </NavLink>
                        <NavLink to="/blog" className="link">
                            <li className='nav_list'>Blog posts</li>
                        </NavLink>
                        <NavLink to="/contact" className="link">
                            <li className='nav_list'>Contact me</li>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
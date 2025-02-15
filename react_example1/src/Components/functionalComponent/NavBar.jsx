import React from "react";
import '../../assets/css/NavBar.css'
import {Link} from 'react-router-dom'

var NavBar = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to = "/">HOME</Link></li>
                    <li><Link to = "/about">ABOUT</Link></li>
                    <li><Link to = "/gallery">GALLERY</Link></li>
                    <li><Link to = "/useref">USEREF</Link></li>
                    <li><Link to = "/useeffect">USEEFFECT</Link></li>
                    <li><Link to = "/usecontext">USECONTEXT</Link></li>
                    <li><Link to = "/usememo">USEMEMO</Link></li>
                    <li><Link to = "/contact">CONTACT</Link></li>
                    <li><Link to = "/loginpage">LOGIN</Link></li>
                    <li><Link to = "/signup">SIGNUP</Link></li>

                </ul>
            </nav>
        </header>
    )
}
export default NavBar;
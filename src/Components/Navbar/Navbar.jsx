import React, { useState } from 'react';
import "../../styles/navbar.css";
import { Link } from 'react-router-dom';
import Submenu from './Submenu';
import { sendListArrayToNavbar } from "../../Constants/NavbarArray";
import {
    Collapse,
    NavbarToggler
} from "reactstrap";

const NavbarMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const test = isOpen ? "nav-menu-navbar active" : "nav-menu-navbar not-active";
    return (
    <div id="nav-menu">
        <div className="wrapper" id="nav-menu-item">
            <div><Link> <img src={process.env.PUBLIC_URL + "/statics/images/logo.png"} alt="logo" /></Link></div>
          
                <span onClick={toggle} id="nav-response"><i class="fa fa-bars fa-2x" ></i></span>
                <div className={test}>
                    <ul className="nav-menu">
                        <li className="nav-menu-item">
                            <Link to="/" >خانه</Link>
                        </li>
                        <li className="nav-menu-item" >
                            <a>درباره ما&nbsp;<i class="fa fa-angle-down"></i></a>
                            <Submenu about={sendListArrayToNavbar(0)} />
                        </li>
                        <li className="nav-menu-item"> 
                            <a>خدمات &nbsp;<i class="fa fa-angle-down"></i></a>
                            <Submenu about={sendListArrayToNavbar(1)} />
                        </li>
                        <li className="nav-menu-item"><a>تماس با ما</a></li>
                        <li className="nav-menu-item">
                            <a>آموزش&nbsp;<i class="fa fa-angle-down"></i></a>
                            <Submenu about={sendListArrayToNavbar(2)} />
                        </li>
                    </ul>
                </div>
        
            <div className="nav-menu-virtual">
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-rss"></a>
                <a href="https://bsbourse.irbrokersite.ir/Customer/Login" >ورود به نسخه قدیمی</a>
            </div>

        </div>

    </div>
    );
}

export default NavbarMenu;



import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Submenu = (props) => {
    console.log(props.about)
    return (
        <ul className="nav-submenu">
            {
                props.about.map(item => (
                    <li className="nav-submenu-item " key={item.name}>
                        <Link to={item.target}> {item.name} </Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default Submenu;

import React from "react";
import{ Link } from "react-router-dom";
import logo from "../assets/logobg.png";

const Header = () => {
    const links = [
     {label:"Home",url:"/"},
     {label:"Contact Me", url:"/contact"},
     {label:"About", url:"/about"},
    ];
    
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            {links.map(({ label, url}) => (
                <Link to={url} key={url}>
                    {label}
                </Link>
            ))}

        </nav>
       
    );
};

export default Header;
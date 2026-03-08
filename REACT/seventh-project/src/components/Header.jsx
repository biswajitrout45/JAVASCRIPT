import React from "react";
import './header.css';

function Header(){
    return(
        <div className="header">
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <nav className="middle">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
            <nav className="last">
                <a href="">X</a>
                <a href="">Y</a>
                <a href="">Z</a>
            </nav>
        </div>
    )
}
export default Header;

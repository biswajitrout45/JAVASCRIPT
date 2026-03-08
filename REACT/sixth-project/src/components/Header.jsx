import React from "react";
import './header.css';

function Header({c}){
    return(
        <div className="header">
            <div className="logo">
                <h1>{c}</h1>
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
                <button className="menu-toggle" onClick={()=> document.querySelector(".last" ).classList.toggle("open")}>☰</button>
        </div>
    )
}
export default Header;

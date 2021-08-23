import React from 'react';
import Navbar from '../Navbar/navbar';


function Header (){
    return (
        <div className="header">
            <div className="header-content">
                <h1 className="header-headline">IP Address Tracker</h1>
                <form action="post" className="header-form">
                    <input className="header-input" type="text" placeholder="Search for any IP address or domain"></input>
                    <button className="header-button">&rsaquo;</button>
                </form>
            </div>
            <Navbar />
        </div>
    )
}

export default Header;
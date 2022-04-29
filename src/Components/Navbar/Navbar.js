import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className="navbar d-flex align-items-center mb-0">
            <div className="logo">
                <h2><span className="text-info">O</span>mniGaming</h2>
            </div>
            <ul className="nav-items d-flex">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="#">Items</Link></li>
                <li className="nav-item"><Link to="#">Inventory</Link></li>
                <li className="nav-item"><Link to="#">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
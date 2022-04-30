import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Navbar.css"


const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }

    return (

        <nav className="navbar d-flex align-items-center mb-0">
            <div className="logo">
                <h2><span className="text-info">O</span>mniGaming</h2>
            </div>
            <ul className="nav-items d-flex">
                <li className="nav-item"><Link to="/">Home</Link></li>
                {
                    user && <>
                        <li className="nav-item"><Link to="/addItem">Add Item</Link></li>
                        <li className="nav-item"><Link to="/inventory">Manage Items</Link></li>
                        <li className="nav-item"><Link to="/myItems">My Items</Link></li>
                    </>
                }
                <li className="nav-item"><Link to="/blogs">Blogs</Link></li>
                <li>{
                    user ?
                        <button className="btn btn-primary" onClick={handleSignOut}>SignOut</button>
                        :
                        <Link className="btn btn-primary" to="/login">Login</Link>
                }
                </li>
            </ul>
        </nav>

    );
};

export default Navbar;
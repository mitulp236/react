
import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to='/login/'>Login</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to='/signup/'>Signup</NavLink>
                </li>
               
                
                </ul>
                
            </div>
            </nav>
        </div>
    )
}


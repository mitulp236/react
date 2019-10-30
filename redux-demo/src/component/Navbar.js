import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">Redux-Demo</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="nav-item"><NavLink className="nav-link" to='/'>Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to='/login/'>Login</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to='/signup/'>Signup</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

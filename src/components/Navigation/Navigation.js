import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand navbar-light bg-light">
                <NavLink to="/" className="navbar-brand">Tafjord K AS</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/tjenester" className="nav-link">Tjenester</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/om" className="nav-link">Om</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;
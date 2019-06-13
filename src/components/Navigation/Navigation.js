import React from 'react';
import './Navigation.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../static/logo/logo_horizontal-color.svg';

class Navigation extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    <img src={logo} />
                </Link>
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
import React from 'react';
import './Navigation.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../static/logo/logo_horizontal-color.svg';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/" className="navigation__logo">
                <img src={logo} alt="Logo" />
            </Link>
            <ul className="navigation__navbar">
                <li className="navigation__navbar__item">
                    <NavLink to="/tjenester" className="navigation__navbar__item__link" activeClassName="active" >Tjenester</NavLink>
                </li>
                <li className="navigation__navbar__item nav-item">
                    <NavLink to="/om" className="navigation__navbar__item__link" activeClassName="active">Om</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
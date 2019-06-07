import React from 'react';

class Navigation extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand navbar-light bg-light">
                <a href="#" className="navbar-brand">Tafjord K AS</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Tjenester</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Om</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;
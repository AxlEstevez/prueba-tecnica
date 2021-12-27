import React, { Component } from 'react';
import logo from './../logo.svg';

class Nav extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav ml-5 mt-3">
                    <li className="nav-item">
                        <img src={logo} height="50" width="50" alt="" />
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#home">CRUD</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Home">Pokemon´s</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;
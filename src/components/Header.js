import React from 'react'
import { NavLink } from 'react-router-dom'

export default props => (
    <nav className="navbar navbar-dark bg-dark">
        <ul className="nav nav">
            <li className="nav-item">
                <NavLink className="nav-link" to='/'> Home </NavLink>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/Sobre'>Sobre</NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
            </li>
        </ul>
    </nav>
)
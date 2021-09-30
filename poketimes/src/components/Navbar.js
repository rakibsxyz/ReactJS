import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
    console.log(props)
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Ratuls Website</a>
                <ul className="right">
                    <li><a href ="/">Home</a></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><NavLink to ="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
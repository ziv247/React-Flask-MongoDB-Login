import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/register" className="nav-link">Register</Link>

                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <Link to="/profile" className="nav-link">User</Link>
                </li>
                <li className="navbar-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-contect-md-center"
                    id="navbar1">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}

                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar)

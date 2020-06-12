import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink, Router } from "react-router-dom"
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this)

        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
            <Jumbotron fluid className="mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>
                                <h1>
                                    name of the site
                                </h1>
                                <h2>
                                    Covid Tracker
                                </h2>
                            </h1>
                        </div>
                    </div>
                </div>  
            </Jumbotron>
            <Navbar dark sticky="top" expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav}/>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <i className="fa fa-home fa-lg"/> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/stayingsafe">
                                <i className="fa fa-list fa-lg" /> Staying Safe
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/data">
                                <i className="fa fa-info fa-lg"/> Data
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="">
                                <i className="fa fa-address-card fa-lg"/> MORE INFO ¯\_(ツ)_/¯
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
        </React.Fragment>
        );
    }
}

export default Header;

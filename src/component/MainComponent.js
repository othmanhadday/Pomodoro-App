import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import TimerComponent from "./TimerComponent";
import TaskComponent from "./task/TaskComponent";


const links = [
    {href: '#home', text: 'Home'},
    {href: '#card', text: 'Product'},
    {href: '#about', text: 'About'},
    {href: '/login', text: 'LOGIN'},
];

const createNavItem = ({href, text, className}) => (
    <NavItem key={href}>
        <NavLink href={href} className={className}>{text}</NavLink>
    </NavItem>
);

class MainComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div>
                <div className=" d-flex align-items-center  prm-clr flex-column">
                    <Navbar className="prm-clr" light expand="lg">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="" navbar>
                                {links.map(createNavItem)}
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <div className="mt-5  body">
                        <TimerComponent/>
                        <TaskComponent/>
                    </div>

                </div>
            </div>

        );
    }
}

export default MainComponent;
import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import '../style/main.scss';
import { 
    Collapse, 
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem  } from 'reactstrap'; 

class Header extends Component {

    state = {
        isOpen: false
    };
    
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (     
            <header>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Trainer App</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Options
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                </Navbar>
            </header>
        )
    }
} 

export default Header;
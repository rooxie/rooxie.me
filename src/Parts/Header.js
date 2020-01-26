import React, {useState} from 'react';
import './Header.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

function Header() {
    const [lang, setLang] = useState('en');

    return (
        <Navbar light expand="md" className="Header">
            <div className="navbar-collapse  w-100 order-1 order-md-0 dual-collapse2">
                <NavbarBrand href="/">rooxie</NavbarBrand>
            </div>
            <div className="mx-auto order-0"/>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav>
                        <DropdownToggle nav caret>
                            <span>{lang}</span>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={() => setLang('en')}>english</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </div>
        </Navbar>
    );
}

export default Header;

import React from 'react';
import './Header.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
    return (
        <div>
            <Navbar light expand="md" className="Header">
                <NavbarBrand href="/">
                    <span className="font-weight-normal">roman</span><span className="font-weight-bold">derlemenko</span>
                    <span className="font-weight-normal"> // <span className="">rooxie</span></span>
                </NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Header;

import React, {useState} from 'react';
import './Header.css';
import {Navbar, NavbarBrand,} from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar light expand="md" className="Header">
                <NavbarBrand href="/">
                    <span className="font-weight-normal">roman</span><span className="font-weight-bold">derlemenko</span>
                    <span className="font-weight-normal"> // <span className="">rooxie</span></span>
                </NavbarBrand>
                {/*<NavbarToggler onClick={toggle} />*/}
                {/*<Collapse isOpen={isOpen} navbar>*/}
                {/*    <Nav className="mr-auto" navbar>*/}
                {/*        <NavItem>*/}
                {/*            <NavLink href="/cv">CV</NavLink>*/}
                {/*        </NavItem>*/}
                {/*        <NavItem>*/}
                {/*            <NavLink href="/contact">Contact</NavLink>*/}
                {/*        </NavItem>*/}
                {/*    </Nav>*/}
                {/*</Collapse>*/}
            </Navbar>
        </div>
    );

    // return (
    //     <div>
    //         <Navbar light className="Header" expand="md">
    //             <Router>
    //                 <Link to="/" className="inactive navbar-brand">
    //                     <span className="font-weight-normal">roman</span><span className="font-weight-bold">derlemenko</span>
    //                     <span className="font-weight-normal"> // <span className="">rooxie</span></span>
    //                 </Link>
    //             </Router>
    //             <NavbarToggler onClick={toggle} />
    //             <Collapse navbar isOpen={isOpen}>
    //                 <Nav  navbar>
    //                     <NavItem>
    //                         <NavLink href="/components/">Components</NavLink>
    //                     </NavItem>
    //                     <NavItem>
    //                         <Router>
    //                             <Link to='/cv'>CV</Link>
    //                         </Router>
    //                     </NavItem>
    //                 </Nav>
    //             </Collapse>
    //         </Navbar>
    //     </div>
    // );
}

export default Header;

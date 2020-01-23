import React from 'react';
import { CardFooter } from "reactstrap";
import './Footer.css';

function Footer() {
    return (
        <CardFooter>
            <div className="row">
                <span className="col-md-12 text-center text-muted inactive">Copyright © 2020 Roman Derlemenko. All rights reserved.</span>
            </div>
        </CardFooter>
    );
}

export default Footer;

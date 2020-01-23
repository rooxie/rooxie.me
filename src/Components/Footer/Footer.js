import React from 'react';
import { CardFooter } from "reactstrap";
import './Footer.css';
import { content } from '../../content';

function Footer() {
    return (
        <CardFooter>
            <div className="row">
                <span className="col-md-12 text-center inactive">{content.footer.text}</span>
            </div>
        </CardFooter>
    );
}

export default Footer;

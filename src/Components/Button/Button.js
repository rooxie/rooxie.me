import React from 'react';
import { Button as BootstrapButton } from "reactstrap";
import './Button.css'

function Button(props) {
    return (
        <BootstrapButton className="Button" tag="a" color="lg" href={props.href}>
            {props.children}
        </BootstrapButton>
    );
}

export default Button;

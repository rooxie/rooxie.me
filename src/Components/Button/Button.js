import React from 'react';
import { Button as BootstrapButton } from "reactstrap";

function Beda(props) {
    return (
        <BootstrapButton tag="a" color="lg">
            {props.children}
        </BootstrapButton>
    );
}

export default Beda;

import React from 'react';
import './Window.css';
import {
    Card as BootstrapCard,
    CardBody as BootstrapCardBody,
    CardHeader as BootstrapCardHeader
} from "reactstrap";

function Window(props) {
    return (
        <BootstrapCard className="Window">
            <BootstrapCardHeader className="inactive text-center">
                <span>{props.title}</span>
                <span><i className="fa fa-times-circle" aria-hidden="true"/></span>
            </BootstrapCardHeader>
            <BootstrapCardBody>
                {props.children}
            </BootstrapCardBody>
        </BootstrapCard>
    );
}

export default Window;

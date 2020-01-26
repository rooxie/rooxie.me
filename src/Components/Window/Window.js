import React, {useState} from 'react';
import './Window.css';
import {
    Card as BootstrapCard,
    CardBody as BootstrapCardBody,
    CardHeader as BootstrapCardHeader
} from "reactstrap";

function Window(props) {
    const [isInvisible, setIsInvisible] = useState(false);
    const hide = () => {
        setIsInvisible(true);
        setTimeout(() => setIsInvisible(false), 500); // TODO: Remove after implementing task-bar.
    };

    return (
        <BootstrapCard className="Window" hidden={isInvisible}>
            <BootstrapCardHeader className="inactive text-center">
                <span>{props.title}</span>
                <span><i className="fa fa-times-circle" aria-hidden="true" onClick={hide}/></span>
            </BootstrapCardHeader>
            <BootstrapCardBody>
                {props.children}
            </BootstrapCardBody>
        </BootstrapCard>
    );
}

export default Window;

import React from 'react';
import Window from "../Components/Window/Window";
import { content } from "../content";
import Button from "../Components/Button/Button";

function Introduction() {
    return (
        <Window title="Introduction">
            <div className="row">
                <div className="col-md-4 card-col-left">
                    <img id="photo" alt={content.introduction.title} src={content.introduction.links.photo}/>
                </div>
                <div className="col-md-8 card-col-right">
                    <div className="content">
                        <h4>{content.introduction.title}</h4>
                        <p>{content.introduction.intro}</p>
                        <p>{content.introduction.professional}</p>
                        <p>{content.introduction.personal}</p>
                        <hr/>
                        <div className="links">
                            <Button href={content.introduction.links.github}>
                                <i className="fa fa-github" aria-hidden="true"/>
                            </Button>
                            <Button href={content.introduction.links.linkedin}>
                                <i className="fa fa-linkedin" aria-hidden="true"/>
                            </Button>
                            <Button href={content.introduction.links.email}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                            </Button>
                            <Button href={content.introduction.links.phone}>
                                <i className="fa fa-phone" aria-hidden="true"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Window>
    );
}

export default Introduction;

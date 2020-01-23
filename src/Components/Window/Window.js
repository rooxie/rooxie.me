import React from 'react';
import './Hero.css';
import { Jumbotron, Button, Card, CardBody, CardHeader } from "reactstrap";
import { content } from '../../content';

function Window() {



    return (
        <Card className="Hero">
            <CardHeader className="inactive">
                <span>
                    Introduction
                </span>
                <span>
                    <i className="fa fa-times-circle" aria-hidden="true"/>
                </span>
            </CardHeader>
            <CardBody>
                <div className="row">
                    <div className="col-md-4 card-col-left">
                        <img id="photo" alt={content.hero.title} src={content.hero.links.photo}/>
                    </div>
                    <div className="col-md-8 card-col-right">
                        <div className="contents">
                            <h4>{content.hero.title}</h4>
                            <p className="bg-black-text-white">{content.hero.intro}</p>
                            <p className="bg-black-text-white horizontal-padding">{content.hero.professional}</p>
                            <p className="bg-black-text-white horizontal-padding">{content.hero.personal}</p>
                            <div className="links">
                                <Button tag="a" color="lg" href={content.hero.links.github}>
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </Button>
                                <Button tag="a" color="lg" href={content.hero.links.linkedin}>
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </Button>
                                <Button tag="a" color="lg" href={content.hero.links.email}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                </Button>
                                <Button tag="a" color="lg" href={content.hero.links.phone}>
                                    <i className="fa fa-phone" aria-hidden="true"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default Window;

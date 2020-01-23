import React from 'react';
import Window from "../Components/Window/Window";
import './ProfessionalExperience.css'
import { content } from '../content'

function ProfessionalExperience() {
    const jumpToHash = name => {
        window.location.hash = name;
        window.history.pushState('', document.title, window.location.pathname);
    };

    const renderJob = job => {
        return (
            <div>
                <h5>
                    <a target="_blank" rel="noopener noreferrer" href={job.link} title="Website">{job.company}</a>
                    &nbsp;
                    <span className="job-years text-muted">{job.years}</span>
                </h5>
                <div className="card-text">
                    <p>{job.outline}</p>
                    <ul>{job.responsibilities.map(responsibility => <li>{responsibility}</li>)}</ul>
                    <div>
                        {job.skills.map(skill => <span className="job-skill">{skill}, </span>)} etc.
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Window title="Professional Experience">
            <div className="row">
                <div className="col-md-2 card-list card-col-left">
                    <ul className="list-group">
                        <li className="list-group-item inactive" onClick={() => jumpToHash('prof-exp-profile')}>{content.experience.profile.title}</li>
                        <li className="list-group-item inactive" onClick={() => jumpToHash('prof-exp-career')}>{content.experience.career.title}</li>
                        <li className="list-group-item inactive" onClick={() => jumpToHash('prof-exp-education')}>{content.experience.education.title}</li>
                        <li className="list-group-item inactive" onClick={() => jumpToHash('prof-exp-languages')}>{content.experience.languages.title}</li>
                    </ul>
                </div>
                <div className="col-md-10 card-col-right">

                    <div className="content">

                        <div>
                            <h4 id="prof-exp-profile">{content.experience.profile.title}</h4>
                            {content.experience.profile.paragraphs.map(paragraph => <p>{paragraph}</p>)}
                        </div>

                        <div>
                            <h4 id="prof-exp-career">{content.experience.career.title}</h4>
                            <div>
                                <div className="row">
                                    <div className="col-md-12">
                                        {renderJob(content.experience.career.jobs[0])}
                                    </div>
                                    <div className="w-100"/>
                                    <div className="col-md-6">
                                        {renderJob(content.experience.career.jobs[1])}
                                    </div>
                                    <div className="col-md-6">
                                        {renderJob(content.experience.career.jobs[2])}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <h4 id="prof-exp-education">{content.experience.education.title}</h4>
                                    <div className="row">
                                        <div className="col-md-3"><span>{content.experience.education.years}</span></div>
                                        <div className="col-md-8 exception"><span className="font-weight-bold">{content.experience.education.university}</span>
                                        </div>
                                        <div className="w-100"/>
                                        <div className="col-md-3"/>
                                        <div className="col-md-8 exception"><span className="horizontal-padding">{content.experience.education.degree}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <h4 id="prof-exp-languages">{content.experience.languages.title}</h4>
                                    <div className="row">
                                        <div className="col-md-3"><span className="font-weight-bold">English</span></div>
                                        <div className="col-md-3"><span>Advanced</span>
                                        </div>
                                        <div className="w-100"/>
                                        <div className="col-md-3"><span className="font-weight-bold">German</span></div>
                                        <div className="col-md-3"><span>A1</span></div>
                                        <div className="w-100"/>
                                        <div className="col-md-3"><span className="font-weight-bold">Japanese</span></div>
                                        <div className="col-md-3"><span>N4</span></div>
                                        <div className="w-100"/>
                                        <div className="col-md-3"><span className="font-weight-bold">Russian</span></div>
                                        <div className="col-md-3"><span>Native</span>
                                        </div>
                                        <div className="w-100"/>
                                        <div className="col-md-3"><span className="font-weight-bold">Ukrainian</span></div>
                                        <div className="col-md-3"><span>Native</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Window>
    );
}

export default ProfessionalExperience;

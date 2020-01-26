import React from 'react';
import Header from "./Parts/Header";
import Introduction from "./Parts/Introduction";
import ProfessionalExperience from "./Parts/ProfessionalExperience";
import './App.css'

function Application() {
  return (
      <React.Fragment>
          <Header/>
          <div className="br"/>
          <main role="main" className="container sticky">
              <Introduction/>
              <div className="br"/>
              <ProfessionalExperience/>
              <div className="br"/>
          </main>
      </React.Fragment>
  );
}

export default Application;

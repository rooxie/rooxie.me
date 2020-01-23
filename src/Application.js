import React from 'react';
import Header from "./Components/Header/Header";
import './App.css'
// import Footer from "./Components/Footer/Footer";
import Introduction from "./Parts/Introduction";
import ProfessionalExperience from "./Parts/ProfessionalExperience";

function Application() {
  return (
      <React.Fragment>
          <Header/>                     <div className="br"/>
          <main role="main" className="container">
              <Introduction/>           <div className="br"/>
              <ProfessionalExperience/> <div className="br"/>
              {/*<Footer/>*/}
          </main>

      </React.Fragment>
  );
}

export default Application;

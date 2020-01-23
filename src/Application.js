import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./Components/Header/Header";
import './App.css'
import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main";
import CV from "./Pages/CV";

function App() {
  return (
      <React.Fragment>
          <Header/>
          <main role="main" className="container">
              <Router>
                  <Switch>
                      <Route exact path="/">
                          <Main/>
                      </Route>
                  </Switch>
                  <Switch>
                      <Route exact path="/cv">
                          <CV/>
                      </Route>
                  </Switch>
              </Router>
              <Footer/>
          </main>
      </React.Fragment>
  );
}

export default App;

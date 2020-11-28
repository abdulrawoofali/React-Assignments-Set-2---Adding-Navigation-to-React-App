import React, { Component, useState } from "react";
import {  useLocation } from "react-router-dom";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="main">
     
                <Link to="/">Home</Link>

    
                <Link to="/about">About</Link>
        
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <LocationDisplay />
          </div>
      </Router>
    );
  }
}

function Home(props) {
  return (
    <>
      <h3>You are home</h3>
    </>
  );
}

function About(props) {
  return (
    <>
      <h3>You are on the about page</h3>{" "}
    </>
  );
}
function PageNotFound(props) {
  return (
    <>
      {" "}
      <h3>No match</h3>
    </>
  );
}

function LocationDisplay(props) {
  let location  = useLocation();
  //console.log("rendering location",location);
  return (
    <>
      <div data-testid="location-display">{location.pathname}</div>
    </>
  );
}

export default App;

import React, { Component, useState } from "react";
import "../styles/App.css";
import { Switch, Route, Link,useLocation } from "react-router-dom";

class App extends Component {
  render() {
    return (
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
      <h3>You are on the about page</h3>
    </>
  );
}
function PageNotFound(props) {
  return (
    <>
      <h3>No match</h3>
    </>
  );
}

function LocationDisplay() {
  let loc = useLocation();
  //console.log("rendering location",location);
  return <div data-testid="location-display">{loc.pathname}</div>;
}

export default App;

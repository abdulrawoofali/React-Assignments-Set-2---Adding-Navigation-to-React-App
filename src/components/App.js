import React, { Component, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/App.css";
import { Switch, Route, Link } from "react-router-dom";
import Location from "./Location";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Location/>

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



export default App;

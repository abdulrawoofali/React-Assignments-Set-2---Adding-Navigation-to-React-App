import React, {Component, useState} from "react";
import { useHistory,useLocation } from "react-router-dom";
import '../styles/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends Component {
    render() {

        return(
            <Router>
            <div id="main">
               {/* Do not remove the main div */}
             
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound/>
          </Route>
        </Switch>
        <LocationDisplay/>
            </div>
            </Router>

        )
    }
}

function Home(props) {

    return <><h3>You are home</h3></>;
  }
  
  function About(props) {
    return <><h3>You are on the about page</h3>  </>;
  }
  function PageNotFound(props){
      return <> <h3>No match</h3></>
  }

  function LocationDisplay(props){
      let {location} = useHistory();
      //console.log("rendering location",location);
  return <><p data-testid="location-display">{location.pathname}</p></>

  }


export default App;

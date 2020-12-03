import React from 'react';
import{useLocation} from 'react-router-dom';

const Location=()=>{
    let loc = useLocation();
    //console.log("rendering location",location);
    return <div data-testid="location-display">{loc.pathname}</div>;
  }

  export default Location
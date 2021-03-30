import React from "react";
import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burrr it is cold!',
        //just a reminder this "snowflake... is the name of the icon in the semantics-ui. " same for the summer object. 
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const seasons = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[seasons] 

  return (
    <div className={`season-display ${seasons}`}>
    <i className={`icon-left massive ${iconName} icon`} />
     <h1> {text}</h1>
     <i className ={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

//Geolocation API hmmm what would this look like with google maps API... :)

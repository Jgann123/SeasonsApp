import React from "react";

const getSeasons = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const seasons = getSeasons(props.lat, new Date().getMonth());
  

  return <div>{seasons === 'winter' ? 'Burr, it is chilly.' : 'Lets hit the beach!'}</div>

};

export default SeasonDisplay;

//Geolocation API hmmm what would this look like with google maps API... :)

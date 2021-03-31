import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from'./SeasonDisplay';
import Spinner from './Spinner';
import'./index.css';




class App extends React.Component {
  state = { lat: null, errorMessage: "" };


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("it was updated");
  
  }

  renderComponent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
      
    }
    return <Spinner message="Please accept location request!" />
  }
  

  render() {
 return (   
   <div className="border-red">
     {this.renderComponent()}
   </div>
 );
}
}

ReactDOM.render(<App />, document.querySelector("#root"));

// there are also... shouldComponentUpdate, gerDerivedStateFromProps, getSnapshotBeforeUpdate
//Why would we use these lifecycle methods??? ??? //when to use classes and when to use hooks?
//
//component lifecycle/lifecycle methods.
//constructor
//render lifecycle function, content visible on the screen
//componentDedMount, this is after acomponent shows up on the screen or in the browser.
//ComponentDidUpdata, this is after the component did updata. These are methoda that we can put code into that can even change the state after these events happen... :)
// These are called once.
// componentWillUnmount, this is called is the component needs to not be shown anymore on the screen we could put a timeout function or some sort of clean up after some time .
//lifecycle... constructor, render, componentDidMount, render, componentDidUpdata...
//officail documents say to not do data loading inside of the constructor, but instead to a componentDidMount() method instead... You can still use the constructor but recommended to use componentDidMount.
//the reason is if you always centralize all of your data loading stuff in this method it is going to lead to good clear code. :) So it is not spread out between constructor and the componentDidMount method...
// componentDIdUpdate example could be if a we wanted to make a vnetwork request everytime a user clicks on a button or something changes..
//How to get new props??
// Love is the answer!!!>

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    //can be a good place to initialize state
    super(props);
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
          this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }
  //React says we have to define a render method
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

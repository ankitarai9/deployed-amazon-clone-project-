import React from "react";
// import logo from "./logo.svg";
import "./App.css";

class Date extends React.Component {
  state = {
    curDT: new Date().toLocaleString(),
  };
  render() {
    return (
      <div className="App">
        <p>Current Date And Time : {this.state.curDT}</p>
      </div>
    );
  }
}

export default Date;

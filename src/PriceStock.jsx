import { enableRipple } from "react";
import { ButtonComponent } from "react";
import * as React from "react";
import * as ReactDom from "react-dom";
enableRipple(true);
class App extends React.Component {
  // Click Event.
  btnClick() {
    window.open("https://www.google.com");
  }
  render() {
    return (
      <div>
        <ButtonComponent cssClass="e-link" onClick={this.btnClick.bind(this)}>
          Go to google
        </ButtonComponent>
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("button"));

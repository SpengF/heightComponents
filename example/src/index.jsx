import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import Components from "../../src/index";
const { Button, Aside } = Components;

function App() {
  console.log(Components);
  return (
    <React.Fragment>
      <Button>xxx</Button>
      <Aside>123</Aside>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

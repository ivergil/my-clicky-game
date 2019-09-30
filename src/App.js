import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Grid from "./components/Grid/Grid";


class App extends Component {
  
  render() {
    return (
      <Wrapper>
          <Grid />
      </Wrapper>
    );
  }
}

export default App;
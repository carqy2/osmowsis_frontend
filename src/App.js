import React, { Component } from "react";
import lawnData from "./components/lawnData";
import NavBar from "./components/navbar";
import Lawn from "./components/lawn1";
import ObjectTable from "./components/objTable";
import "./App.css";

class App extends Component {
  state = {
    squares: JSON.parse(JSON.stringify(lawnData))
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Lawn squares={this.state.squares} />
          <ObjectTable />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

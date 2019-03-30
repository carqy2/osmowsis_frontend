import React, { Component } from "react";

class Square extends Component {
  render() {
    return <span>{this.props.square}</span>;
  }

  formatSquareWord() {
    const { square } = this.props.square;
    return square;
  }
}

export default Square;

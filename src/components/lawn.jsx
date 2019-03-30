import React, { Component } from "react";
import Square from "./square";

class Lawn extends Component {
  state = {
    counter: 0,
    y: 0
  };

  incrementY = () => {
    let temp = this.state.y;
    temp++;
    this.setState({ temp });
  };

  renderLawn(squareRow) {
    // const squares = this.props.squares;
    // let rows = squares.map((item, i) => {
    //   let square = item.map((ele, j) => {
    //     return <Square key={this.state.counter}>{ele.squareWord}</Square>;
    //     this.counterIncrement();
    //   });
    //   return <div key={j}>{square}</div>;
    // });
    // return <div key={i}>{rows}</div>;

    let rows = squareRow.map(function(square, i) {
      return <Square key={i}>{square.squareWord}</Square>;
    });
  }

  render() {
    let squares = this.props.squares;
    // return (
    //   <div>
    //     {squares.map(
    //       function(sr, i) {
    //         return <div key={i}>{this.renderLawn(sr)}</div>;
    //       },
    //       () => this.incrementY()
    //     )}
    //   </div>
    // );
    let rows = squares.map(function(item, i) {
      let entry = item.map(function(element, j) {
        return <td key={j}>{element.squareWord}</td>;
      });
      return <tr key={i}>{entry}</tr>;
    });
    return (
      <table className="table table-bordered">
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Lawn;

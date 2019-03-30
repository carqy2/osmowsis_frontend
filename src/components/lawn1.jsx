import React, { Component } from "react";
import Square from "./square";

class Lawn extends Component {
  render() {
    const self = this;
    let rows = this.props.squares.map(function(item, i) {
      let entry = item.map(function(element, j) {
        console.log(self);
        const str = element.squareWord;
        console.log(str);
        return (
          <div key={j} className={self.getBadgeClasses(str)}>
            {element.squareWord}
          </div>
        );
      });
      return (
        <div key={i} className="row">
          {entry}
        </div>
      );
    });
    return <div className="container">{rows}</div>;
  }

  getBadgeClasses = str => {
    // alert("badge");
    let classes = "col border badge badge-";
    if (str == "grass") {
      classes += "success";
    } else if (str == "crater") {
      classes += "danger";
    } else if (str.startsWith("puppy")) {
      console.log("str starts with puppy", str.startsWith("puppy"));
      classes += "warning";
    } else {
      classes += "light";
    }
    return classes;
  };
}

export default Lawn;

import React from 'react';

class BreakPanel extends React.Component {

  render() {
    return (
      React.createElement("div", { id: "break-label", className: "grid-item breakLabel" },
      React.createElement("h3", null, "Break Length"),
      React.createElement("i", { id: "break-decrement",
        class: "fas fa-arrow-alt-circle-down",
        onClick: this.props.breakDecrementCB }),

      React.createElement("b", { id: "break-length" }, this.props.breakLength),
      React.createElement("i", { id: "break-increment",
        class: "fas fa-arrow-alt-circle-up",
        onClick: this.props.breakIncrementCB })));



  }
}

export default BreakPanel;
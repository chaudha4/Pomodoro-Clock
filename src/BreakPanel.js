import React from 'react';

class BreakPanel extends React.Component {

  /**
    render() {
      return (
        React.createElement("div", { id: "break-label", className: "grid-item breakLabel" },
        React.createElement("h3", null, "Break Length"),
        React.createElement("i", { id: "break-decrement",
          class: "fa fa-arrow-up",
          onClick: this.props.breakDecrementCB }),
  
        React.createElement("b", { id: "break-length" }, this.props.breakLength),
        React.createElement("i", { id: "break-increment",
          class: "fa fa-arrow-down",
          onClick: this.props.breakIncrementCB }))
          );
    } //render
    */


  render() {
    return (
      <div id="break-label" className="panel">
        <h3>Break Length</h3>
        <i id="break-decrement" className="fa fa-arrow-down"
          onClick={this.props.breakDecrementCB}></i>
        <b id="break-length">{this.props.breakLength}</b>
        <i id="break-decrement" className="fa fa-arrow-up"
          onClick={this.props.breakIncrementCB}></i>
      </div>
    );
  } //render



}

export default BreakPanel;
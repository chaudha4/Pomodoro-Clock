import React from 'react';

class SessionPanel extends React.Component {

  render() {
    return (
      React.createElement("div", { id: "session-label", className: "grid-item sessionLabel" },
      React.createElement("h3", null, "Session Length"),
      React.createElement("i", { id: "session-decrement",
        class: "fas fa-arrow-alt-circle-down",
        onClick: this.props.sessionDecrementCB }),

      React.createElement("b", { id: "session-length" }, this.props.sessionLength),
      React.createElement("i", { id: "session-increment",
        class: "fas fa-arrow-alt-circle-up",
        onClick: this.props.sessionIncrementCB })));



  }
}

export default SessionPanel;

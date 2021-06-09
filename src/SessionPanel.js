import React from 'react';

class SessionPanel extends React.Component {

  render() {
    return (
      React.createElement("div", { id: "session-label", className: "panel" },
        React.createElement("h3", null, "Session Length"),
        React.createElement("i", {
          id: "session-decrement",
          className: "fa fa-arrow-down",
          onClick: this.props.sessionDecrementCB
        }),

        React.createElement("b", { id: "session-length" }, this.props.sessionLength),
        React.createElement("i", {
          id: "session-increment",
          className: "fa fa-arrow-up",
          onClick: this.props.sessionIncrementCB
        })));



  }
}

export default SessionPanel;

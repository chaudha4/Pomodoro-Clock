import React from 'react';

class TimerControl extends React.Component {

  render() {
    return (
      React.createElement("div", { id: "start_stop", className: "grid-item start_stop" },
      React.createElement("i", { id: "timer_start",
        class: "fa fa-play",
        onClick: this.props.timerPlay }),

      React.createElement("i", { id: "timer_pause",
        class: "fa fa-pause",
        onClick: this.props.timerPause }),

      React.createElement("i", { id: "reset",
        class: "fa fa-recycle",
        onClick: this.props.timerRefresh })));



  }}
// TimerControl

export default TimerControl;
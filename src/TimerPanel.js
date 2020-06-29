import React from 'react';
import {TIMER_RUNNING_BREAK, TIMER_RUNNING_SESSION} from './Constants';

class TimerPanel extends React.Component {

  render() {
    let titleText = this.props.timerState === TIMER_RUNNING_BREAK ? TIMER_RUNNING_BREAK : TIMER_RUNNING_SESSION;
    let minStr = "0" + this.props.MM;
    let secStr = "0" + this.props.SS;
    return (
      React.createElement("div", { id: "timer-label", className: "grid-item timer" },
      React.createElement("h3", null, titleText),
      React.createElement("i", { id: "time-left" }, minStr.slice(-2), ":", secStr.slice(-2))));


  }
}

export default TimerPanel;

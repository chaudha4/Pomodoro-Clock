import React from 'react';

class TimerControl extends React.Component {

  render() {
    return (

      // First way
      /*
      React.createElement("div", { id: "start_stop", className: "panel" },
        React.createElement("i", {
          id: "timer_start",
          class: "fa fa-play",
          onClick: this.props.timerPlay
        }),

        React.createElement("i", {
          id: "timer_pause",
          class: "fa fa-pause",
          onClick: this.props.timerPause
        }),

        React.createElement("i", {
          id: "reset",
          class: "fa fa-recycle",
          onClick: this.props.timerRefresh
        })));
      */

      // Second way to create html components

      // Using pre tag to add whitespaces/

      <div id="start_stop" className="panel singleLine center">
        <pre>  </pre>
        <i id="timer_start" className="fa fa-play"
          onClick={this.props.timerPlay}></i>
        <pre>  </pre>
        <i id="timer_pause" className="fa fa-pause"
          onClick={this.props.timerPause}></i>
        <pre>  </pre>
        <i id="reset" className="fa fa-recycle"
          onClick={this.props.timerRefresh}></i>
        <pre>  </pre>
      </div>


    );

  } //render
} //TimerControl

export default TimerControl;
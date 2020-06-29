import React from 'react';
import './App.css';
import BreakPanel from './BreakPanel';
import SessionPanel from './SessionPanel';
import TimerPanel from './TimerPanel';
import TimerControl from './TimerControl';
import {DEFAULT, TIMER_RUNNING_BREAK, TIMER_RUNNING_SESSION} from './Constants';

// get our fontawesome imports
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT;

    this.breakDecrementCB = this.breakDecrementCB.bind(this);
    this.breakIncrementCB = this.breakIncrementCB.bind(this);
    this.sessionDecrementCB = this.sessionDecrementCB.bind(this);
    this.sessionIncrementCB = this.sessionIncrementCB.bind(this);

    this.timerPlayCB = this.timerPlayCB.bind(this);
    this.timerPauseCB = this.timerPauseCB.bind(this);
    this.timerRefreshCB = this.timerRefreshCB.bind(this);
    this.timerFunc = this.timerFunc.bind(this);
  }

  breakDecrementCB(id) {
    console.log("Break Decrement pressed - " + this.state.timerState + " - " + this.state.timerRunnning);
    let newVal = this.state.breakLength - 1;
    if (newVal <= 0) {
      return;
    }

    if (this.state.timerRunnning) {
      if (this.state.timerState === TIMER_RUNNING_SESSION) {
        this.setState({ breakLength: newVal });
      } else {
        // Cannot update while my Timer is running
        return;
      }
    } else {
      this.setState({ breakLength: newVal });
      if (this.state.timerState === TIMER_RUNNING_BREAK) {
        this.setState({ SS: 0, MM: newVal });
      }
    }
  } //breakDecrementCB

  breakIncrementCB(id) {
    console.log("Break Increment pressed - " + this.state.timerState + " - " + this.state.timerRunnning);
    let newVal = this.state.breakLength + 1;
    if (newVal > 60) {
      return;
    }

    if (this.state.timerRunnning) {
      if (this.state.timerState === TIMER_RUNNING_SESSION) {
        this.setState({ breakLength: newVal });
      } else {
        // Cannot update while my Timer is running
        return;
      }
    } else {
      this.setState({ breakLength: newVal });
      if (this.state.timerState === TIMER_RUNNING_BREAK) {
        this.setState({ SS: 0, MM: newVal });
      }
    }
  } //breakIncrementCB

  sessionDecrementCB(id) {
    console.log("Session Decrement pressed - " + this.state.timerState + " - " + this.state.timerRunnning);
    let newVal = this.state.sessionLength - 1;
    if (newVal <= 0) {
      return;
    }

    if (this.state.timerRunnning) {
      if (this.state.timerState === TIMER_RUNNING_BREAK) {
        this.setState({ sessionLength: newVal });
      } else {
        // Cannot update while my Timer is running
        return;
      }
    } else {
      this.setState({ sessionLength: newVal });
      if (this.state.timerState === TIMER_RUNNING_SESSION) {
        this.setState({ SS: 0, MM: newVal });
      }
    }
  } //sessionDecrementCB

  sessionIncrementCB(id) {
    console.log("Session Increment pressed - " + this.state.timerState + " - " + this.state.timerRunnning);
    let newVal = this.state.sessionLength + 1;
    if (newVal > 60) {
      return;
    }

    if (this.state.timerRunnning) {
      if (this.state.timerState === TIMER_RUNNING_BREAK) {
        this.setState({ sessionLength: newVal });
      } else {
        // Cannot update while Breat Timer is running
        return;
      }
    } else {
      this.setState({ sessionLength: newVal });
      if (this.state.timerState === TIMER_RUNNING_SESSION) {
        this.setState({ SS: 0, MM: newVal });
      }
    }
  } //sessionIncrementCB

  timerFunc() {
    let sec = this.state.SS;
    let min = this.state.MM;

    this.setState({ timerRunnning: true });

    if (sec === 0 && min === 0) {
      // Reached end of Session or break.
      console.log("Swap Session Break");
      if (this.state.timerState === TIMER_RUNNING_SESSION) {
        this.setState({ timerState: TIMER_RUNNING_BREAK,
          SS: 0,
          MM: this.state.breakLength });

      } else {
        this.setState({ timerState: TIMER_RUNNING_SESSION,
          SS: 0,
          MM: this.state.sessionLength });

      }
      return;
    } // Swap Session Complete

    if (sec > 0) {
      sec = sec - 1;
      this.setState({ SS: sec });
      console.log("timerPlayCB pressed - Decrement Sec " + min + ":" + sec);
    } else {
      min = min - 1;
      sec = 59;
      this.setState({ MM: min,
        SS: sec });


    }
  } //timerFunc

  timerPlayCB(id) {
    console.log("timerPlayCB pressed");
    this.timerFunc();
    let inst = setInterval(this.timerFunc, 1000); //setInterval
    this.setState({ timerInstance: inst });
  } //timerPlayCB


  timerPauseCB(id) {
    //this.setState({value: id});
    console.log("timerPauseCB pressed");
    clearInterval(this.state.timerInstance);
    this.setState({ timerRunnning: false });
  }

  timerRefreshCB(id) {
    //this.setState({value: id});
    console.log("timerRefreshCB pressed");
    clearInterval(this.state.timerInstance);
    this.setState(DEFAULT);
  }

  render() {
    return (
      React.createElement("div", { id: "container", className: "grid-container" },
      React.createElement("div", { id: "title", className: "grid-item title" }, "Pomodoro Clock"),

      React.createElement(BreakPanel, {
        breakLength: this.state.breakLength,
        breakDecrementCB: this.breakDecrementCB,
        breakIncrementCB: this.breakIncrementCB }),

      React.createElement(SessionPanel, {
        sessionLength: this.state.sessionLength,
        sessionDecrementCB: this.sessionDecrementCB,
        sessionIncrementCB: this.sessionIncrementCB }),

      React.createElement(TimerPanel, {
        timerState: this.state.timerState,
        MM: this.state.MM,
        SS: this.state.SS }),

      React.createElement(TimerControl, {
        timerPlay: this.timerPlayCB,
        timerPause: this.timerPauseCB,
        timerRefresh: this.timerRefreshCB })));



  } // render

} // App


/**
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


export default App;

import { h, Component, createRef } from "preact";
import { connect } from "unistore/preact";

import GridGame from "./GridGame";
import Navigation from "./Navigation";
import TaskList from "./TaskList";
import Code from "./Code";
import { actions } from "./Store";



class App extends Component {

  componentDidMount() {
    this.props.handleHashChange();
    window.addEventListener("hashchange", this.props.handleHashChange, false);
  }

  render() {
    const {task, section, code, gridProps, stdout} = this.props;

    return (
      <div class="columns is-gapless is-marginless">
        <div class="my-controls is-flex resize-horizontal">
          <Navigation {{task, section}} />
          { section === "tasks" && <TaskList {task} /> }
          { section === "code"
            && <Code {{task, stdout, onChange: this.props.setCode}} />
          }
          { section === "help" && <h1>HELP</h1> }
        </div>
        <div class="column is-flex is-grow">
          <GridGame {{...gridProps, code, onStdout: this.props.setStdout}} />
        </div>
      </div>);
  }
}


export default connect(
  ["task", "section", "code", "stdout", "gridProps"],
  actions
)(App);

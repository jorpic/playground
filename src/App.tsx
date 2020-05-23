import { h, Component, createRef } from "preact";

import SvgGrid from "./SvgGrid";
import Navigation from "./Navigation";
import TaskList from "./TaskList";
import Code from "./Code";


const LOCATION_RX = new RegExp("#([^/]*)(/(.*))?");

export default class App extends Component {
  constructor() {
    super();
    this.setState({
      selectedTab: 1
    });
  }

  componentDidMount() {
    window.addEventListener(
      "hashchange",
      () => this.forceUpdate(),
      false);
  }


  render() {
    // TODO: load from idb if hash is empty
    const match = window.location.hash.match(LOCATION_RX);
    const task = match ? match[1] : "example";
    const section = match && match[3] ? match[3] : "code";

    return (
      <div class="columns is-gapless is-marginless">
        <div class="my-controls is-flex resize-horizontal">
          <Navigation {{task, section}} />
          { section === "tasks" && <TaskList {{task}} /> }
          { section === "code" && <Code {{task}}/> }
          { section === "help" && <h1>HELP</h1> }
        </div>
        <div class="column is-flex is-grow">
          <SvgGrid gridSize={12} />
        </div>
      </div>);
  }
}

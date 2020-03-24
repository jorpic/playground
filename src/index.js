import { h, render, Component, createRef } from "preact";

// TODO:
// - save code to localStorage
//

class App extends Component {
  constructor() {
    super();
    this.setState({
      codeChanged: true,
      gridSize: localStorage.getItem("gridSize") || 30,
      time: 0
    });
    this.codeRef = createRef();
    this.onGrid = this.onGrid.bind(this);
    this.onCode = this.onCode.bind(this);
    this.eval = this.eval.bind(this);
  }

  componentDidMount() {
    const textarea = this.codeRef.current;
    textarea.value = localStorage.getItem("code");
    setInterval(() => this.setState({time: this.state.time+1}), 200);
  }

  eval(code) {
    const pixels = [];
    const messages = [];
    try {
      const run = Function("time", "pixel", "log", code);
      run(
        this.state.time,
        (x, y, color) => pixels.push({x, y, color}),
        msg => messages.push(JSON.stringify(msg)));
      localStorage.setItem("code", this.codeRef.current.value);
    } catch(ex) {
      messages.push(ex.toString());
    }
    return {pixels, messages};
  }


  onGrid(e) {
    const gridSize = e.target.value;
    localStorage.setItem("gridSize", gridSize);
    this.setState({gridSize});
  }

  onCode(e) {
    this.setState({codeChanged: true});
  }

  render() {
    const grid = this.state.gridSize;

    const textarea = this.codeRef.current;
    const code = textarea ? textarea.value : "";
    const res = this.eval(code);
    const log = res.messages.join("\n");
    const pixels = res.pixels.map(({x, y, color}) =>
      <rect
        x={x*grid + 0.5}
        y={y*grid + 0.5}
        width={grid-1}
        height={grid-1}
        fill={color || "skyblue"}/>
    );
    const rect = (size, width) =>
      <rect width={size} height={size} fill="none" stroke="lightgray" stroke-width={width}/>;
    const gridPattern =
      <defs>
        <pattern id="smallGrid" width={grid} height={grid} patternUnits="userSpaceOnUse">
          {rect(grid, 0.5)}
        </pattern>
        <pattern id="grid" width={grid*5} height={grid*5} patternUnits="userSpaceOnUse">
          <rect width={grid*5} height={grid*5} fill="url(#smallGrid)"/>
          {rect(grid*5, 1)}
        </pattern>
      </defs>;
    return (
      <div class="columns">
        <div class="left">
          <div class="env">
            <div>Размер клеток: {grid}</div>
            <input type="range" min="8" max="60" value={grid} onChange={this.onGrid}/>
          </div>
          <textarea class="code" onKeyUp={this.onCode} ref={this.codeRef}>
          </textarea>
          <textarea class="log" readonly="true" value={log}></textarea>
        </div>
        <div class="right">
          <svg width="100%" height="100%">
            {gridPattern}
            <rect width="100%" height="100%" fill="url(#grid)" />
            {pixels}
          </svg>
        </div>
      </div>);
  }
}

render(<App />, document.body);

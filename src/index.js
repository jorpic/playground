import { h, render, Component, createRef } from "preact";

// TODO:
// - save code to localStorage
//

class App extends Component {
  constructor() {
    super();
    this.setState({
      codeChanged: true,
      time: 0
    });
    this.codeRef = createRef();
    this.onCode = this.onCode.bind(this);
    this.eval = this.eval.bind(this);
  }

  componentDidMount() {
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
    } catch(ex) {
      return messages.push(ex.toString());
    }
    return {pixels, messages};
  }

  onCode(e) {
    this.setState({codeChanged: true});
  }

  render() {
    const grid = 40;

    const textarea = this.codeRef.current;
    const code = textarea ? textarea.value : "";
    const res = this.eval(code);
    const log = res.messages.join("\n");
    const pixels = res.pixels.map(({x, y, color}) =>
      <rect
        x={x*grid + 1}
        y={y*grid + 1}
        width={grid-1}
        height={grid-2}
        fill={color || "skyblue"}/>
    );
    return (
      <div class="columns">
        <div class="left">
          <div class="env"></div>
          <textarea class="code" onKeyUp={this.onCode} ref={this.codeRef}>
          </textarea>
          <textarea class="log" readonly="true" value={log}></textarea>
        </div>
        <div class="right">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="lightgray" stroke-width="0.5"/>
              </pattern>
              <pattern id="grid" width="200" height="200" patternUnits="userSpaceOnUse">
                <rect width="200" height="200" fill="url(#smallGrid)"/>
                <path d="M 200 0 L 0 0 0 200" fill="none" stroke="lightgray" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {pixels}
          </svg>
        </div>
      </div>);
  }
}

render(<App />, document.body);

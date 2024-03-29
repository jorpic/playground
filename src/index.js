import { h, render, Component, createRef } from "preact";

// This is required as parcel uses babel to translate
// generator functions to ES5+.
import regeneratorRuntime from "regenerator-runtime";

class App extends Component {
  constructor() {
    super();
    this.setState({
      gridSize: localStorage.getItem("gridSize") || 30,
      animationSpeed: localStorage.getItem("animationSpeed") || 1,
      time: 0,
      code: ""
    });
    this.codeRef = createRef();
    this.onClick = this.onClick.bind(this);
    this.onGridSize = this.onGridSize.bind(this);
    this.onAnimationSpeed = this.onAnimationSpeed.bind(this);
    this.onCode = this.onCode.bind(this);
    this.eval = this.eval.bind(this);
  }

  componentDidMount() {
    const textarea = this.codeRef.current;
    textarea.value = localStorage.getItem("code");
    this.setState({code: textarea.value});

    const loop = () => {
        this.setState({time: this.state.time+1});
        setTimeout(loop, 1000 / this.state.animationSpeed);
    }
    loop();
  }

  eval(code) {
    const pixels = [];
    const messages = [];

    function* range(a, b) {
      if (a <= b) {
        for(let i = a; i <= b; i++) {
          yield i;
        }
      }
    }

    try {
      const run = Function(
        "time", "pixel", "log", "range",
        code);
      run(
        this.state.time,
        (x, y, color) => pixels.push({x, y, color}),
        msg => messages.push(JSON.stringify(msg)),
        range
      );
      if(this.codeRef.current)
        localStorage.setItem("code", this.codeRef.current.value);
    } catch(ex) {
      messages.push(ex.toString());
    }
    return {pixels, messages};
  }

  onClick(e) {
    if (!e.target.classList.contains("pixel")) {
      const rect = e.target.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / this.state.gridSize);
      const y = Math.floor((e.clientY - rect.top) / this.state.gridSize);
      this.codeRef.current.value += `\npixel(${x}, ${y});`;
      this.forceUpdate();
    }
  }

  onAnimationSpeed(e) {
    const animationSpeed = e.target.value;
    localStorage.setItem("animationSpeed", animationSpeed);
    this.setState({animationSpeed});
  }

  onGridSize(e) {
    const gridSize = e.target.value;
    localStorage.setItem("gridSize", gridSize);
    this.setState({gridSize});
  }

  onCode(e) {
    const textarea = this.codeRef.current;
    if(this.state.code != textarea.value) {
      this.setState({time: 0, code: textarea.value});
    }
  }

  render() {
    const grid = this.state.gridSize;

    const textarea = this.codeRef.current;
    const code = textarea ? textarea.value : "";
    const res = this.eval(code);
    const log = res.messages.join("\n");
    const pixels = res.pixels.map(({x, y, color}) =>
      <rect
        class="pixel"
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
      <div class="container">
        <div class="controls">
          <div class="size">
            <div>Размер клеток: {grid}</div>
            <input type="range" min="8" max="60" value={grid} onChange={this.onGridSize}/>
          </div>
          <div class="speed">
            <div>Скорость анимации: {this.state.animationSpeed}</div>
            <input
              type="range" min="1" max="20"
              value={this.state.animationSpeed}
              onChange={this.onAnimationSpeed}/>
          </div>
          <textarea class="code" onKeyUp={this.onCode} ref={this.codeRef}/>
          <textarea class="log" readonly="true" value={log}/>
        </div>
        <div class="gird">
          <svg width="100%" height="100%" onClick={this.onClick}>
            {gridPattern}
            <rect width="100%" height="100%" fill="url(#grid)" />
            {pixels}
          </svg>
        </div>
      </div>);
  }
}

render(<App />, document.body);

import { h, Component } from "preact";
import Grid from "./Grid";


class Pixels {
  pixels = {};
  clear = () => {
    this.pixels = {};
    return this;
  }
  get = (x, y) => this.pixels[[x,y]];
  set = (x, y, color) => {
    this.pixels[[x,y]] = color || "skyblue";
    return this;
  }
}


export default class GridGame extends Component {
  state = {
    time: 0,
  };

  grid = new Pixels();


  eval(code) {
    const stdout = [];
    try {
      const run = Function(
        "time", "grid", "log",
        code);
      run(
        this.state.time,
        this.grid,
        msg => stdout.push(JSON.stringify(msg))
      );
    } catch(ex) {
      stdout.push(ex.toString());
    }

    this.forceUpdate();
    this.props.onStdout(stdout);
  }

  const evalLoop = () => {
    const {time} = this.state;
    const {speed, code} = this.props;

    this.eval(code);
    this.setState({time: time + 1});
    if(this.evalLoop) {
      setTimeout(this.evalLoop, 1000 / speed);
    }
  }

  componentDidMount() {
    this.evalLoop();
  }

  componentWillUnmount() {
    this.evalLoop = null;
  }


  render() {
    const {size} = this.props;
    const pixels = this.grid.pixels;
    return (<Grid size={size} pixels={pixels} />);
  }
}

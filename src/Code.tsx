import { h, Component, createRef } from "preact";
import cls from "classnames";

import Editor from "./Editor";


type CodeProps = {
  task: string;
}

export default class Code extends Component {

  state = {
    time: 0,
    lastChange: 0,
    logMessages: [],
  };

  editorRef = createRef();

  codeChanged = () => this.setState({lastChange: this.state.time});

  eval(code) {
    const logMessages = [];
    try {
      const run = Function(
        "time", "log",
        code);
      run(
        this.state.time,
        msg => logMessages.push(JSON.stringify(msg))
      );
    } catch(ex) {
      logMessages.push(ex.toString());
    }

    this.setState({logMessages});
  }

  const evalLoop = () => {
    const speed = 2; // frames per second
    const {lastChange, time} = this.state;
    const shouldReset = lastChange !== null && time - lastChange > speed;

    if(shouldReset && this.editorRef) {
      // TODO: recompile & reset state
      this.setState({lastChange: null});
      localStorage.setItem("code", this.editorRef.current.getText());

    }

    const code = this.editorRef.current.getText();
    this.eval(code);
    this.setState({time: time + 1});
    if(this.evalLoop) {
      setTimeout(this.evalLoop, 1000 / speed);
    }
  }

  componentDidMount() {
    const code = localStorage.getItem("code") ||  "log({time})";
    this.editorRef.current.setText(code);
    this.evalLoop();
  }

  componentWillUnmount() {
    this.evalLoop = null;
  }


  render(props: CodeProps) {
    return (
      <div class="code-editor is-flex is-grow">
        <article class="message is-info is-marginless">
          <div class="message-body">
            <h1>{props.task}</h1>
          </div>
        </article>
        <Editor
          class="code resize-vertical"
          onChange={this.codeChanged}
          ref={this.editorRef}
        />
        <textarea
          class="message is-grow"
          readonly="true"
          value={this.state.logMessages.join("\n")}/>
      </div>
    );
  }
}

import { h, Component, createRef } from "preact";
import cls from "classnames";

import Editor from "./Editor";


type CodeProps = {
  logMessages: string[];
  savedCode: string;
}

export default class Code extends Component {

  editorRef = createRef();

  codeChanged = () => {
    const code = this.editorRef.current.getText();
    this.props.onChange(code);
  }

  componentDidMount() {
    // FIXME: move this to will receive props?
    const code = localStorage.getItem("code") ||  "log({time})";
    this.editorRef.current.setText(code);
  }

  render() {
    return (
      <div class="code-editor is-flex is-grow">
        <article class="message is-info is-marginless">
          <div class="message-body">
            <h1>{this.props.task}</h1>
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
          value={this.props.stdout.join("\n")}/>
      </div>
    );
  }
}

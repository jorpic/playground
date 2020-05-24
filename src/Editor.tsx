import { h, Component, createRef } from "preact";
import { EditorView } from "@codemirror/next/view";
import { EditorState } from "@codemirror/next/state";
import { keymap } from "@codemirror/next/keymap";
import { baseKeymap } from "@codemirror/next/commands";
import { lineNumbers } from "@codemirror/next/gutter";
import { defaultHighlighter } from "@codemirror/next/highlight";
import { javascript, esLint } from "@codemirror/next/lang-javascript";
// import Linter from "eslint4b/dist/linter";
// import { linter, openLintPanel } from "@codemirror/next/lint";


export default class Editor extends Component {

  divRef = createRef();

  componentDidMount() {
    console.log({defaultHighlighter, lineNumbers});
    this.editor = new EditorView({
      state: EditorState.create({
        doc: this.props.code,
        extensions: [
          lineNumbers(),
          javascript(),
          // linter(esLint(new Linter)),
          defaultHighlighter,
          keymap(baseKeymap)
        ]
      })
    });

    this.divRef.current.appendChild(this.editor.dom);
    // openLintPanel(this.editor);
    this.editor.focus();
  }

  // Disable rerendering by preact as this component is ruled by codemirror.
  shouldComponentUpdate = () => false;

  componentWillReceiveProps(nextProps) { }

  componentWillUnmount = () => this.editor?.destroy();

  render(props) {
    return <div class={props.class} ref={this.divRef} />;
  }
}

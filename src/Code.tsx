import { h, Component } from "preact";
import cls from "classnames";

import Editor from "./Editor";


type CodeProps = {
  task: string;
}

export default class Code extends Component {
  render(props: CodeProps) {
    return (
      <div class="code-editor is-flex is-grow">
        <article class="message is-info is-marginless">
          <div class="message-body">
            <h1>{props.task}</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>
        <Editor class="code resize-vertical" code="const hello = world;" />
        <textarea class="is-grow" readonly="true" value={"log"}/>
      </div>
    );
  }
}

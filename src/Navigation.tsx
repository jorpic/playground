import { h } from "preact";
import cls from "classnames";

type NavigationProps = {
  task: string;
  section: string;
}


export default function Navigation({task, section}: NavigationProps) {
  const link = (hash, name) =>
    <li class={cls({"is-active": hash === section})}>
      <a href={`/#${task}/${hash}`}>{name}</a>
    </li>;

  return (
    <div class="tabs is-marginless">
      <ul>
        { link("tasks", "Задачи") }
        { link("code", "Код") }
        { link("settings", "Настройки") }
        { link("help", "Справка") }
      </ul>
    </div>);
}

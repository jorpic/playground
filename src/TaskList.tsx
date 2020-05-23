import { h } from "preact";
import cls from "classnames";

type TaskListProps = {
  task: string
}

export default function TaskList({task}: TaskListProps) {
  const link = (hash, name) =>
    <li>
      <a href={`/#${hash}/code`}
        class={cls({"is-active": hash === task})}
      >
        {name}
      </a>
    </li>;

  return (
    <div class="menu">
      <p class="menu-label">
        Система координат
      </p>
      <ul class="menu-list">
        { link("moving-square", "Бегающий квадрат") }
        { link("snake-spiral", "Змеиная спираль") }
        { link("speed-racing", "Гонки") }
      </ul>
      <p class="menu-label">
        Углы
      </p>
      <ul class="menu-list">
      </ul>
    </div>);
}

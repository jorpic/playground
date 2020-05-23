import { h } from "preact";

type GridProps = {
  gridSize: number;
  onClick(string): ();
}


export default function SvgGrid(props: GridProps) {
  const ss = props.gridSize; // small cell size
  const ls = ss * 5; // large cell size
  return (
    <svg width="100%" height="100%" onClick={props.onClick}>
      <defs>
        <pattern id="smallGrid" width={ss} height={ss} patternUnits="userSpaceOnUse">
          <Rect size={ss} strokeWidth={0.5} fill="none" />
        </pattern>
        <pattern id="grid" width={ls} height={ls} patternUnits="userSpaceOnUse">
          <Rect size={ls} strokeWidth={1} fill="url(#smallGrid)"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}


type RectProps = {
  size: number;
  srtokeWidth: number;
  fill: string;
}

const Rect = (props: RectProps) =>
  <rect
    width={props.size}
    height={props.size}
    fill={props.fill}
    stroke-width={props.strokeWidth}
    stroke="lightgray"
  />;

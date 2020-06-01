import { h } from "preact";

type GridProps = {
  size: number;
  onClick(string): ();
}


export default function Grid(props: GridProps) {
  const ss = props.size; // small cell size
  const ls = ss * 5; // large cell size

  const pixels = Object.entries(props.pixels).map(pix => {
    const [xy, color] = pix;
    const [x,y] = xy.split(",");
    return <rect
      class="pixel"
      x={x*ss + 0.5}
      y={y*ss + 0.5}
      width={ss-1}
      height={ss-1}
      fill={color}/>;
  });

  return (
    <svg width="100%" height="100%">
      <defs>
        <pattern id="smallGrid" width={ss} height={ss} patternUnits="userSpaceOnUse">
          <Rect size={ss} strokeWidth={0.5} fill="none" />
        </pattern>
        <pattern id="grid" width={ls} height={ls} patternUnits="userSpaceOnUse">
          <Rect size={ls} strokeWidth={1} fill="url(#smallGrid)"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      {pixels}
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

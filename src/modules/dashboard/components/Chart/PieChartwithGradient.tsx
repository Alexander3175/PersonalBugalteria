import { Sector, type PieSectorShapeProps } from "recharts";

export const createPieGradient =
  (colors: string[], activeStrokeWidth = 6) =>
  (props: PieSectorShapeProps) => {
    const color = colors[props.index % colors.length];

    return (
      <g>
        <defs>
          <radialGradient
            id={`pieGradient-${props.index}`}
            cx={props.cx}
            cy={props.cy}
            r={props.outerRadius}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={color} stopOpacity={0.2} />
            <stop offset="100%" stopColor={color} stopOpacity={0.9} />
          </radialGradient>
        </defs>

        <Sector
          {...props}
          fill={`url(#pieGradient-${props.index})`}
          stroke={props.isActive ? color : "none"}
          strokeWidth={props.isActive ? activeStrokeWidth : 0}
        />
      </g>
    );
  };

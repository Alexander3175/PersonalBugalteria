import { Sector, type PieSectorShapeProps } from "recharts";
import "../../style/Chart/PieChartwithGradient.css";

export const createPieGradient =
  (colors: string[], activeStrokeWidth = 4) =>
  (props: PieSectorShapeProps) => {
    const color = colors[props.index % colors.length];

    return (
      <g>
        <defs>
          <radialGradient
            id={`pieGradient-${props.index}`}
            cx="50%"
            cy="50%"
            r="50%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={color} stopOpacity={0.4} />
            <stop offset="100%" stopColor={color} stopOpacity={1} />
          </radialGradient>
        </defs>

        <Sector
          {...props}
          fill={`url(#pieGradient-${props.index})`}
          stroke={props.isActive ? color : "transparent"}
          strokeWidth={props.isActive ? activeStrokeWidth : 0}
          style={{
            filter: props.isActive
              ? "drop-shadow(0 0 8px rgba(0,0,0,0.3))"
              : "none",
            transition: "all 0.3s ease",
          }}
        />
      </g>
    );
  };

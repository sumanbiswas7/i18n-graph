import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import { refColor } from "../colors";

export function CombinedChart({
  data,
  color1,
  color2,
  maxTL,
  minTL,
  maxHL,
  minHL,
}) {
  return (
    <LineChart
      style={{ fontSize: "14px" }}
      width={1000}
      height={350}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 120]} />
      <Tooltip />
      <Legend />
      <ReferenceLine
        y={100}
        label={maxTL}
        stroke={refColor}
        strokeDasharray="2 2"
      />
      <Line type="monotone" dataKey="temp" stroke={color1} />
      <ReferenceLine
        y={60}
        label={minTL}
        stroke={refColor}
        strokeDasharray="2 2"
      />
      <ReferenceLine
        y={50}
        label={maxHL}
        stroke={refColor}
        strokeDasharray="2 2"
      />
      <Line type="monotone" dataKey="humid" stroke={color2} />
      <ReferenceLine
        y={10}
        label={minHL}
        stroke={refColor}
        strokeDasharray="2 2"
      />
    </LineChart>
  );
}

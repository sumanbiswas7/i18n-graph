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

export function TempChart({ data, color }) {
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
        label="Max Temp (100°C)"
        stroke={refColor}
        strokeDasharray="2 2"
      />
      <Line type="monotone" dataKey="temp" stroke={color} />
      <ReferenceLine
        y={60}
        label="Min Temp (60°C)"
        stroke={refColor}
        strokeDasharray="2 2"
      />
    </LineChart>
  );
}

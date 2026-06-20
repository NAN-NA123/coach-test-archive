"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { VersionData } from "@/lib/types";

interface DimensionChartProps {
  versions: VersionData[];
}

export function DimensionChart({ versions }: DimensionChartProps) {
  const data = versions.map((v) => ({
    name: v.name,
    "R库(40)": v.dimensions.rLibrary.score,
    "K库(15)": v.dimensions.kLibrary.score,
    "C库(10)": v.dimensions.cLibrary.score,
    "输出(25)": v.dimensions.output.score,
    "稳定性(10)": v.dimensions.stability.score,
  }));

  const lines = [
    { key: "R库(40)", color: "#4a9eff" },
    { key: "K库(15)", color: "#34d399" },
    { key: "C库(10)", color: "#a78bfa" },
    { key: "输出(25)", color: "#fbbf24" },
    { key: "稳定性(10)", color: "#f472b6" },
  ];

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a3a5c" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6b8ab5" }} axisLine={{ stroke: "#2a3a5c" }} />
          <YAxis domain={[0, 40]} tick={{ fontSize: 12, fill: "#6b8ab5" }} axisLine={{ stroke: "#2a3a5c" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#141d33",
              border: "1px solid #2a3a5c",
              borderRadius: "12px",
              fontSize: "13px",
              color: "#e2e8f0",
            }}
            labelStyle={{ color: "#8bb4e8" }}
          />
          <Legend wrapperStyle={{ fontSize: "12px", color: "#8ba3c7" }} />
          {lines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              stroke={line.color}
              strokeWidth={2}
              dot={{ r: 4, fill: line.color, strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

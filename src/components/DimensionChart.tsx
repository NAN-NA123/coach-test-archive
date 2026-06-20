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
    { key: "R库(40)", color: "#1a365d" },
    { key: "K库(15)", color: "#2563eb" },
    { key: "C库(10)", color: "#7c3aed" },
    { key: "输出(25)", color: "#ea580c" },
    { key: "稳定性(10)", color: "#16a34a" },
  ];

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#64748b" }} />
          <YAxis domain={[0, 40]} tick={{ fontSize: 12, fill: "#64748b" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "13px",
            }}
          />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
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

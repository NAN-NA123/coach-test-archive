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

interface ScoreChartProps {
  versions: VersionData[];
}

export function ScoreChart({ versions }: ScoreChartProps) {
  const data = versions.map((v) => ({
    name: v.name,
    总分: v.totalScore,
  }));

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a3a5c" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6b8ab5" }} axisLine={{ stroke: "#2a3a5c" }} />
          <YAxis domain={[50, 100]} tick={{ fontSize: 12, fill: "#6b8ab5" }} axisLine={{ stroke: "#2a3a5c" }} />
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
          <Legend wrapperStyle={{ fontSize: "13px", color: "#8ba3c7" }} />
          <Line
            type="monotone"
            dataKey="总分"
            stroke="#4a9eff"
            strokeWidth={2.5}
            dot={{ r: 5, fill: "#4a9eff", strokeWidth: 0 }}
            activeDot={{ r: 7, fill: "#4a9eff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

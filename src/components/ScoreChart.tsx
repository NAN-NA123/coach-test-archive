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

  const config = {
    总分: { color: "#1a365d" },
  };

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#64748b" }} />
          <YAxis domain={[50, 100]} tick={{ fontSize: 12, fill: "#64748b" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "13px",
            }}
          />
          <Legend wrapperStyle={{ fontSize: "13px" }} />
          <Line
            type="monotone"
            dataKey="总分"
            stroke={config.总分.color}
            strokeWidth={2.5}
            dot={{ r: 5, fill: config.总分.color, strokeWidth: 0 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

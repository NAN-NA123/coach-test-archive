"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { VersionData } from "@/lib/types";

interface VersionRadarChartProps {
  version: VersionData;
}

export function VersionRadarChart({ version }: VersionRadarChartProps) {
  const data = [
    {
      dimension: "R库",
      score: version.dimensions.rLibrary.score ?? 0,
      max: version.dimensions.rLibrary.max,
      pct: version.dimensions.rLibrary.score
        ? Math.round((version.dimensions.rLibrary.score / version.dimensions.rLibrary.max) * 100)
        : 0,
    },
    {
      dimension: "K库",
      score: version.dimensions.kLibrary.score ?? 0,
      max: version.dimensions.kLibrary.max,
      pct: version.dimensions.kLibrary.score
        ? Math.round((version.dimensions.kLibrary.score / version.dimensions.kLibrary.max) * 100)
        : 0,
    },
    {
      dimension: "C库",
      score: version.dimensions.cLibrary.score ?? 0,
      max: version.dimensions.cLibrary.max,
      pct: version.dimensions.cLibrary.score
        ? Math.round((version.dimensions.cLibrary.score / version.dimensions.cLibrary.max) * 100)
        : 0,
    },
    {
      dimension: "输出",
      score: version.dimensions.output.score ?? 0,
      max: version.dimensions.output.max,
      pct: version.dimensions.output.score
        ? Math.round((version.dimensions.output.score / version.dimensions.output.max) * 100)
        : 0,
    },
    {
      dimension: "稳定性",
      score: version.dimensions.stability.score ?? 0,
      max: version.dimensions.stability.max,
      pct: version.dimensions.stability.score
        ? Math.round((version.dimensions.stability.score / version.dimensions.stability.max) * 100)
        : 0,
    },
  ];

  return (
    <div className="h-[280px] w-full max-w-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="#2a3a5c" />
          <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 12, fill: "#8ba3c7" }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: "#6b8ab5" }} />
          <Radar
            name="得分率(%)"
            dataKey="pct"
            stroke="#4a9eff"
            fill="#4a9eff"
            fillOpacity={0.15}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

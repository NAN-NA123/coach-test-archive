import { AllVersionsData, VersionData } from "./types";

const data: AllVersionsData = require("@/data/versions.json");

export function getAllVersions(): VersionData[] {
  return data.versions;
}

export function getVersionById(id: string): VersionData | undefined {
  return data.versions.find((v) => v.id === id);
}

export function getScoreColor(score: number | null): string {
  if (score === null) return "text-[#6b8ab5]";
  if (score >= 90) return "text-emerald-400";
  if (score >= 80) return "text-amber-400";
  return "text-red-400";
}

export function getScoreBg(score: number | null): string {
  if (score === null) return "bg-[#1a2744]";
  if (score >= 90) return "bg-emerald-500/10";
  if (score >= 80) return "bg-amber-500/10";
  return "bg-red-500/10";
}

export function getScoreBorder(score: number | null): string {
  if (score === null) return "border-[#2a3a5c]";
  if (score >= 90) return "border-emerald-500/30";
  if (score >= 80) return "border-amber-500/30";
  return "border-red-500/30";
}

export function getStatusBadge(status: string): { bg: string; text: string } {
  switch (status) {
    case "基线":
      return { bg: "bg-[#2a3a5c]", text: "text-[#8bb4e8]" };
    case "已完成":
      return { bg: "bg-emerald-500/15", text: "text-emerald-400" };
    case "待执行":
      return { bg: "bg-amber-500/15", text: "text-amber-400" };
    case "上线后迭代":
      return { bg: "bg-sky-500/15", text: "text-sky-400" };
    case "规划中":
      return { bg: "bg-violet-500/15", text: "text-violet-400" };
    case "已归档":
      return { bg: "bg-[#1a2744]", text: "text-[#6b8ab5]" };
    default:
      return { bg: "bg-[#2a3a5c]", text: "text-[#8bb4e8]" };
  }
}

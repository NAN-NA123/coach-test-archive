import { AllVersionsData, VersionData } from "./types";

const data: AllVersionsData = require("@/data/versions.json");

export function getAllVersions(): VersionData[] {
  return data.versions;
}

export function getVersionById(id: string): VersionData | undefined {
  return data.versions.find((v) => v.id === id);
}

export function getScoreColor(score: number | null): string {
  if (score === null) return "text-slate-400";
  if (score >= 90) return "text-emerald-600";
  if (score >= 80) return "text-orange-600";
  return "text-red-600";
}

export function getScoreBg(score: number | null): string {
  if (score === null) return "bg-slate-100";
  if (score >= 90) return "bg-emerald-50";
  if (score >= 80) return "bg-orange-50";
  return "bg-red-50";
}

export function getScoreBorder(score: number | null): string {
  if (score === null) return "border-slate-200";
  if (score >= 90) return "border-emerald-200";
  if (score >= 80) return "border-orange-200";
  return "border-red-200";
}

export function getStatusBadge(status: string): { bg: string; text: string } {
  switch (status) {
    case "基线":
      return { bg: "bg-slate-100", text: "text-slate-700" };
    case "已完成":
      return { bg: "bg-emerald-50", text: "text-emerald-700" };
    case "待执行":
      return { bg: "bg-amber-50", text: "text-amber-700" };
    case "上线后迭代":
      return { bg: "bg-blue-50", text: "text-blue-700" };
    case "规划中":
      return { bg: "bg-slate-100", text: "text-slate-600" };
    case "已归档":
      return { bg: "bg-gray-100", text: "text-gray-500" };
    default:
      return { bg: "bg-slate-100", text: "text-slate-700" };
  }
}

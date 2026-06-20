"use client";

import Link from "next/link";
import { getAllVersions, getScoreColor, getScoreBg, getScoreBorder, getStatusBadge } from "@/lib/data";
import { ScoreChart } from "@/components/ScoreChart";
import { DimensionChart } from "@/components/DimensionChart";
import { Navbar } from "@/components/Navbar";

export default function DashboardPage() {
  const versions = getAllVersions();
  const scoredVersions = versions.filter((v) => v.totalScore !== null);

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#1a365d]">版本演进总览</h1>
          <p className="text-[#64748b] mt-1">AI瘦子增重执行教练系统 - 从V5基线到最新版本的测试评估结果</p>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#1a365d] mb-6">版本演进时间线</h2>
          <div className="relative">
            <div className="absolute top-[7px] left-[8%] right-[8%] h-0.5 bg-[#cbd5e0]" />
            <div className="flex justify-between relative">
              {versions.map((v, i) => {
                const dotClass =
                  v.status === "基线"
                    ? "bg-[#1a365d] border-[#1a365d] shadow-[0_0_0_4px_rgba(26,54,93,0.15)]"
                    : v.status === "已完成"
                    ? "bg-emerald-500 border-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"
                    : v.status === "待执行"
                    ? "bg-amber-400 border-amber-400 shadow-[0_0_0_4px_rgba(251,191,36,0.15)]"
                    : "bg-slate-300 border-slate-300";

                const scoreDisplay =
                  v.totalScore !== null
                    ? `${v.totalScore}`
                    : v.status === "待执行"
                    ? "待测"
                    : "—";

                return (
                  <Link
                    key={v.id}
                    href={`/version/${v.id}`}
                    className="flex flex-col items-center group"
                    style={{ width: `${100 / versions.length}%` }}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 z-10 transition-transform group-hover:scale-125 ${dotClass}`} />
                    <div className="mt-3 text-center">
                      <div className="text-sm font-bold text-[#1a365d]">{v.name}</div>
                      <div className={`text-xl font-mono font-bold mt-1 ${
                        v.totalScore !== null
                          ? getScoreColor(v.totalScore)
                          : v.status === "待执行"
                          ? "text-amber-500"
                          : "text-slate-400"
                      }`}>
                        {scoreDisplay}
                      </div>
                      <div className={`text-xs mt-1 px-2 py-0.5 rounded-full inline-block ${getStatusBadge(v.status).bg} ${getStatusBadge(v.status).text}`}>
                        {v.status}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlight Card - only show if there are scored versions */}
        {scoredVersions.length > 0 && (() => {
          const best = scoredVersions.reduce((a, b) =>
            (a.totalScore ?? 0) > (b.totalScore ?? 0) ? a : b
          );
          return (
            <div className={`rounded-lg border-2 p-6 mb-8 ${getScoreBorder(best.totalScore)} ${getScoreBg(best.totalScore)}`}>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="text-sm font-medium text-[#64748b]">当前最高分版本</div>
                  <div className="text-2xl font-bold text-[#1a365d] mt-1">{best.fullName}</div>
                  <div className="text-[#475569] mt-2 text-sm">{best.coreChange}</div>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-mono font-bold ${getScoreColor(best.totalScore)}`}>
                    {best.totalScore}
                  </div>
                  <div className="text-sm text-[#64748b]">/100</div>
                  <div className="text-xs text-[#64748b] mt-1">
                    {best.testRounds}轮均分
                  </div>
                </div>
              </div>
              {best.issues && best.issues.length > 0 && (
                <div className="mt-4 pt-4 border-t border-[#e2e8f0]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#64748b]">问题修复状态：</span>
                    <span className="text-sm font-medium text-emerald-600">
                      {best.issues.filter((i) => i.status.includes("已修复")).length}/{best.issues.length} 修复完成
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* Charts - only scored versions */}
        {scoredVersions.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-[#e2e8f0] p-6">
              <h2 className="text-lg font-semibold text-[#1a365d] mb-4">评分趋势</h2>
              <ScoreChart versions={scoredVersions} />
            </div>
            <div className="bg-white rounded-lg border border-[#e2e8f0] p-6">
              <h2 className="text-lg font-semibold text-[#1a365d] mb-4">维度评分对比</h2>
              <DimensionChart versions={scoredVersions} />
            </div>
          </div>
        )}

        {/* Version Navigation Cards */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#1a365d] mb-4">版本详情入口</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {versions.map((v) => (
              <Link
                key={v.id}
                href={`/version/${v.id}`}
                className={`block rounded-lg border p-5 transition-all hover:shadow-md hover:-translate-y-0.5 ${
                  v.totalScore !== null
                    ? `${getScoreBorder(v.totalScore)} bg-white`
                    : v.status === "待执行"
                    ? "border-amber-200 bg-amber-50/30"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-[#1a365d]">{v.fullName}</span>
                  {v.totalScore !== null ? (
                    <span className={`text-2xl font-mono font-bold ${getScoreColor(v.totalScore)}`}>
                      {v.totalScore}
                    </span>
                  ) : v.status === "待执行" ? (
                    <span className="text-sm font-medium text-amber-600">
                      {v.issues.length}项修复计划中
                    </span>
                  ) : null}
                </div>
                <p className="text-sm text-[#64748b] line-clamp-2">{v.coreChange}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadge(v.status).bg} ${getStatusBadge(v.status).text}`}>
                    {v.status}
                  </span>
                  {v.testRounds && (
                    <span className="text-xs text-[#64748b]">{v.testRounds}轮测试</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

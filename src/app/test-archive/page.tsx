"use client";

import Link from "next/link";
import { versions } from "@/data/versions.json";
import { ScoreChart } from "@/components/ScoreChart";
import { DimensionChart } from "@/components/DimensionChart";
import { getScoreColor } from "@/lib/data";

type VersionData = (typeof versions)[number];

export default function TestArchivePage() {
  const scoredVersions: VersionData[] = versions.filter(
    (v) => v.totalScore !== null
  );
  const bestVersion = scoredVersions.reduce(
    (a, b) => ((a.totalScore ?? 0) > (b.totalScore ?? 0) ? a : b),
    scoredVersions[0]
  );
  const dualTrackVersions = scoredVersions.filter((v) => v.totalScore2 !== null && v.totalScore2 !== undefined);
  const bestVersion2 = dualTrackVersions.length > 0
    ? dualTrackVersions.reduce((a, b) => ((a.totalScore2 ?? 0) > (b.totalScore2 ?? 0) ? a : b))
    : null;

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            测试档案
          </h1>
          <p className="text-[#8ba3c7] text-base">
            从V1规则雏形到最新版本的测试评估结果
          </p>
        </div>

        {/* Version Timeline */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-white mb-6">
            版本演进
          </h2>
          <div className="flex items-center justify-between overflow-x-auto pb-4 px-2">
            {versions.map((v, i) => (
              <div key={v.id} className="flex items-center">
                <Link
                  href={`/version/${v.id}`}
                  className="flex flex-col items-center min-w-[80px] group"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all group-hover:scale-110 ${
                      v.status === "已归档"
                        ? "bg-[#1a2744] border-2 border-[#2a3a5c] text-[#6b8ab5]"
                        : v.status === "待执行" || v.status === "规划中"
                        ? "bg-[#1a2744] border-2 border-amber-500/50 text-amber-400"
                        : v.totalScore !== null && v.totalScore >= 90
                        ? "bg-emerald-500/20 border-2 border-emerald-500/50 text-emerald-400"
                        : v.totalScore !== null && v.totalScore >= 80
                        ? "bg-amber-500/20 border-2 border-amber-500/50 text-amber-400"
                        : v.totalScore !== null
                        ? "bg-rose-500/20 border-2 border-rose-500/50 text-rose-400"
                        : "bg-[#1a2744] border-2 border-[#2a3a5c] text-[#6b8ab5]"
                    }`}
                  >
                    {v.name.replace("V", "")}
                  </div>
                  <span className="text-[#8ba3c7] text-xs mt-1.5 font-medium">
                    {v.name}
                  </span>
                  <span className="text-xs mt-0.5 font-mono text-[#4a9eff]">
                    {v.totalScore !== null
                      ? `1.0:${v.totalScore}`
                      : v.status === "已归档"
                      ? "—"
                      : "待测"}
                  </span>
                  {v.totalScore2 !== null && v.totalScore2 !== undefined && (
                    <span className="text-xs font-mono text-[#a78bfa]">
                      2.0:{v.totalScore2}
                    </span>
                  )}
                </Link>
                {i < versions.length - 1 && (
                  <div className="w-6 sm:w-12 h-0.5 bg-[#2a3a5c] mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Best Score Highlights - Dual Track */}
        {bestVersion && (
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1.0 Best */}
              <div className="bg-gradient-to-r from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-[#4a9eff] bg-[#4a9eff]/10 px-2 py-1 rounded-lg">
                    1.0 最高分 · 系统合规性
                  </span>
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-white text-2xl font-bold">
                    {bestVersion.name}
                  </span>
                  <span
                    className="text-4xl font-bold font-mono"
                    style={{ color: getScoreColor(bestVersion.totalScore ?? 0) }}
                  >
                    {bestVersion.totalScore}
                  </span>
                  <span className="text-[#6b8ab5] text-lg">/100</span>
                </div>
                <div className="text-sm text-[#8ba3c7]">
                  {bestVersion.testRounds}轮均分 · 门槛检查「系统能不能跑」
                </div>
              </div>

              {/* 2.0 Best */}
              {bestVersion2 ? (
                <div className="bg-gradient-to-r from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-[#a78bfa] bg-[#a78bfa]/10 px-2 py-1 rounded-lg">
                      2.0 最高分 · 用户满意度
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-white text-2xl font-bold">
                      {bestVersion2.name}
                    </span>
                    <span
                      className="text-4xl font-bold font-mono"
                      style={{ color: getScoreColor(bestVersion2.totalScore2 ?? 0) }}
                    >
                      {bestVersion2.totalScore2}
                    </span>
                    <span className="text-[#6b8ab5] text-lg">/100</span>
                  </div>
                  <div className="text-sm text-[#8ba3c7]">
                    {bestVersion2.testRounds}轮均分 · 核心评价「用户用着好不好」
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-[#a78bfa] bg-[#a78bfa]/10 px-2 py-1 rounded-lg">
                      2.0 用户满意度
                    </span>
                  </div>
                  <div className="text-[#6b8ab5] text-sm">
                    V6.2起启用双轨评分
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Dual Track Relationship */}
        {dualTrackVersions.length > 0 && (
          <section className="mb-12">
            <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
              <h3 className="text-base font-semibold text-white mb-4">
                双轨关系一览
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="bg-[#1a2744] rounded-lg p-4 border border-[#2a3a5c]">
                  <div className="text-xs text-[#6b8ab5] mb-2">1.0高 + 2.0低</div>
                  <div className="text-sm text-amber-400 font-medium">系统能跑但用户不满意 → 产品有问题</div>
                </div>
                <div className="bg-[#1a2744] rounded-lg p-4 border border-[#2a3a5c]">
                  <div className="text-xs text-[#6b8ab5] mb-2">双高</div>
                  <div className="text-sm text-emerald-400 font-medium">产品方向对了</div>
                </div>
                <div className="bg-[#1a2744] rounded-lg p-4 border border-[#2a3a5c]">
                  <div className="text-xs text-[#6b8ab5] mb-2">双低</div>
                  <div className="text-sm text-rose-400 font-medium">回到画板</div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>版本</th>
                      <th>1.0 系统合规性</th>
                      <th>2.0 用户满意度</th>
                      <th>判断</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dualTrackVersions.map((v) => {
                      const s1 = v.totalScore ?? 0;
                      const s2 = v.totalScore2 ?? 0;
                      const verdict = s1 >= 80 && s2 >= 80
                        ? { text: "双高→产品方向对了", color: "text-emerald-400" }
                        : s1 >= 80 && s2 < 70
                        ? { text: "系统OK+用户不满意→产品有问题", color: "text-amber-400" }
                        : s1 < 60 && s2 < 60
                        ? { text: "双低→回到画板", color: "text-rose-400" }
                        : s1 >= 80 && s2 >= 70
                        ? { text: "系统OK+用户基本满意", color: "text-amber-300" }
                        : { text: "系统基本OK+用户及格", color: "text-amber-400" };
                      return (
                        <tr key={v.id}>
                          <td className="text-[#e0e6f0] font-medium">{v.name}</td>
                          <td className={`font-mono ${getScoreColor(s1)}`}>{s1}</td>
                          <td className={`font-mono ${getScoreColor(s2)}`}>{s2}</td>
                          <td className={`text-sm ${verdict.color}`}>{verdict.text}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Charts */}
        {scoredVersions.length > 0 && (
          <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
              <h3 className="text-base font-semibold text-white mb-4">
                评分趋势
              </h3>
              <ScoreChart versions={scoredVersions} />
            </div>
            <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
              <h3 className="text-base font-semibold text-white mb-4">
                维度评分对比
              </h3>
              <DimensionChart versions={scoredVersions} />
            </div>
          </section>
        )}

        {/* Version Navigation Cards */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-6">
            版本详情
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {versions.map((v) => (
              <Link key={v.id} href={`/version/${v.id}`}>
                <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-5 hover:border-[#4a9eff]/50 transition-all hover:-translate-y-0.5 group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-bold text-lg">
                      {v.name}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-lg font-medium ${
                        v.status === "已归档"
                          ? "bg-[#1a2744] text-[#6b8ab5]"
                          : v.status === "基线"
                          ? "bg-[#1a2744] text-[#8ba3c7]"
                          : v.status === "已完成"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : v.status === "待执行"
                          ? "bg-amber-500/10 text-amber-400"
                          : v.status === "规划中"
                          ? "bg-violet-500/10 text-violet-400"
                          : "bg-[#1a2744] text-[#6b8ab5]"
                      }`}
                    >
                      {v.status}
                    </span>
                  </div>
                  <p className="text-[#6b8ab5] text-sm mb-3 line-clamp-2">
                    {v.coreChange}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {v.totalScore !== null ? (
                        <>
                          <span
                            className="text-xl font-bold font-mono"
                            style={{ color: getScoreColor(v.totalScore) }}
                          >
                            {v.totalScore}
                            <span className="text-xs text-[#4a9eff] ml-0.5">1.0</span>
                          </span>
                          {v.totalScore2 !== null && v.totalScore2 !== undefined && (
                            <span
                              className="text-xl font-bold font-mono"
                              style={{ color: getScoreColor(v.totalScore2) }}
                            >
                              {v.totalScore2}
                              <span className="text-xs text-[#a78bfa] ml-0.5">2.0</span>
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-sm text-[#4a5e80]">
                          {v.status === "已归档"
                            ? "未评分"
                            : v.issues?.length
                            ? `${v.issues.length}项修复计划中`
                            : "待测试"}
                        </span>
                      )}
                    </div>
                    <span className="text-[#4a5e80] group-hover:text-[#4a9eff] transition-colors text-sm">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

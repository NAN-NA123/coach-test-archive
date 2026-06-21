"use client";

import { useState } from "react";
import failuresData from "@/data/failures.json";

type FixStatus = "已修复" | "修复中" | "未修复" | "待修正";

interface FailureCase {
  id: string;
  name: string;
  components: string[];
  severity: string;
  errorType: string;
  foundVersion: string;
  fixVersion: string;
  fixStatus: FixStatus;
  cluster: string;
  clusterName: string;
  description: string;
  fixDirection: string;
}

const clusters = [
  { key: "all", label: "全部" },
  { key: "A", label: "A · 规则体系", color: "#ef4444" },
  { key: "B", label: "B · K库越权", color: "#f97316" },
  { key: "C", label: "C · 输出不可控", color: "#eab308" },
  { key: "D", label: "D · 自主性缺失", color: "#84cc16" },
  { key: "E", label: "E · 输出层分离", color: "#22c55e" },
  { key: "F", label: "F · 四库实操性", color: "#06b6d4" },
  { key: "G", label: "G · 执行不彻底", color: "#3b82f6" },
  { key: "H", label: "H · 评估层误判", color: "#8b5cf6" },
  { key: "I", label: "I · 真实场景盲区 ★", color: "#ec4899" },
  { key: "J", label: "J · 系统合规用户不满意 ★", color: "#f59e0b" },
  { key: "K", label: "K · 产品定位冲突 ★", color: "#a855f7" },
];

const clusterColorMap: Record<string, string> = {
  "A": "bg-red-900/40 text-red-300 border-red-700/40",
  "B": "bg-orange-900/40 text-orange-300 border-orange-700/40",
  "C": "bg-yellow-900/40 text-yellow-300 border-yellow-700/40",
  "D": "bg-lime-900/40 text-lime-300 border-lime-700/40",
  "E": "bg-emerald-900/40 text-emerald-300 border-emerald-700/40",
  "F": "bg-cyan-900/40 text-cyan-300 border-cyan-700/40",
  "G": "bg-blue-900/40 text-blue-300 border-blue-700/40",
  "H": "bg-violet-900/40 text-violet-300 border-violet-700/40",
  "I": "bg-pink-900/40 text-pink-300 border-pink-700/40",
  "J": "bg-amber-900/40 text-amber-300 border-amber-700/40",
  "K": "bg-purple-900/40 text-purple-300 border-purple-700/40",
};

const severityColor: Record<string, string> = {
  "最高": "bg-red-900/60 text-red-300",
  "阻断": "bg-red-800/50 text-red-300",
  "高": "bg-amber-900/50 text-amber-300",
  "中": "bg-yellow-900/40 text-yellow-300",
  "一般": "bg-sky-900/50 text-sky-300",
  "低": "bg-slate-700/50 text-slate-400",
};

const statusStyle: Record<FixStatus, string> = {
  "已修复": "bg-emerald-900/40 text-emerald-400",
  "修复中": "bg-amber-900/40 text-amber-400",
  "未修复": "bg-red-900/40 text-red-400",
  "待修正": "bg-violet-900/40 text-violet-400",
};

const migrationTrends = [
  {
    version: "V1-V4",
    clusters: "聚类A+B+C+D",
    insight: "系统性缺陷暴露期 — 规则体系空白、K库越权、输出失控、自主性缺失",
  },
  {
    version: "V5",
    clusters: "聚类E+F+G萌芽",
    insight: "规则引入后的新问题 — C库边缘化、输出结构化不彻底、执行一致性下降",
  },
  {
    version: "V6",
    clusters: "聚类E爆发+G延续",
    insight: "结构化输出的双刃剑 — 系统语言泄漏、行动方案位置过深，输出层分离成为关键瓶颈",
  },
  {
    version: "V6.1",
    clusters: "聚类F+G+H已识别",
    insight: "实操精度攻坚期 — 量化缺失、补剂盲区、路由B质检、评估层误判",
  },
  {
    version: "V6.1真实测试",
    clusters: "聚类I（+F/G/H已识别）",
    insight: "真实场景交互缺口 — 合成测试的结构性盲区暴露，交互决策和规则维度完整性是下一攻坚方向",
    highlight: true,
  },
  {
    version: "V6.2",
    clusters: "聚类J+K（+E回归）★",
    insight: "1.0系统合规但2.0用户不满意 — 双轨评分暴露的核心矛盾：系统能跑但用户用着不好。聚类J（6条）占比最高，反映产品层面问题。聚类E回归（F028格式崩塌）说明F012修复不彻底。聚类K（产品定位冲突）首次出现，提示P库与C库的对齐是新产品定位下的必答题",
    highlight: true,
  },
];

export default function FailuresPage() {
  const cases = failuresData.cases as FailureCase[];
  const [activeCluster, setActiveCluster] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeCluster === "all"
    ? cases
    : cases.filter((c) => c.cluster === activeCluster);

  const totalFixed = cases.filter((c) => c.fixStatus === "已修复").length;
  const totalFixing = cases.filter((c) => c.fixStatus === "修复中").length;
  const totalPendingFix = cases.filter((c) => c.fixStatus === "待修正").length;
  const totalUnfixed = cases.filter((c) => c.fixStatus === "未修复").length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">失败案例库</h1>
        <p className="text-[#8ba3c7]">记录系统从V1到当前版本所有已发现的问题，追踪修复状态</p>
        <p className="text-xs text-[#4a5c7a] mt-2">最近更新：2026-06-22（F024-F032，来源V6.2双轨评分测试）</p>
      </div>

      {/* 阅读指南 */}
      <div className="mb-10 bg-[#141d33] border border-[#4a9eff]/20 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-[#4a9eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-bold text-[#4a9eff]">阅读指南</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#8ba3c7]">
          <div>
            <div className="text-xs font-semibold text-white mb-2">聚类颜色含义</div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap["A"]}`}>A</span> 规则体系 — R库设计缺陷</div>
              <div className="flex items-center gap-2"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap["B"]}`}>B</span> K库越权 — 知识库越位推理</div>
              <div className="flex items-center gap-2"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap["C"]}`}>C</span> 输出不可控 — 格式/语气失控</div>
              <div className="flex items-center gap-2"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap["D"]}`}>D</span> 自主性缺失 — 无独立判断</div>
              <div className="flex items-center gap-2"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap["E"]}`}>E</span> 输出层分离 — 系统语言泄漏</div>
              <div className="flex items-center gap-2"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap["F"]}`}>F</span> 四库实操性 — 规则难落地</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-white mb-2">&nbsp;</div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap["G"]}`}>G</span> 执行不彻底 — 修一半留一半</div>
              <div className="flex items-center gap-2"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap["H"]}`}>H</span> 评估层误判 — 评分偏差</div>
              <div className="flex items-center gap-2"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap["I"]}`}>I ★</span> 真实场景盲区 — 合成测试无法覆盖</div>
              <div className="flex items-center gap-2"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap["J"]}`}>J ★</span> 系统合规但用户不满意 — 1.0高2.0低</div>
              <div className="flex items-center gap-2"><span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap["K"]}`}>K ★</span> 产品定位与系统输出冲突</div>
            </div>
            <div className="text-xs text-[#6b8ab5] mt-3">
              ★ 标记为真实测试/V6.2新增聚类 — 反映双轨评分后的新认知
            </div>
          </div>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-10">
        <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-white font-mono">{cases.length}</div>
          <div className="text-xs text-[#6b8ab5] mt-1.5">总案例</div>
        </div>
        <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-emerald-400 font-mono">{totalFixed}</div>
          <div className="text-xs text-[#6b8ab5] mt-1.5">已修复</div>
        </div>
        <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-amber-400 font-mono">{totalFixing}</div>
          <div className="text-xs text-[#6b8ab5] mt-1.5">修复中</div>
        </div>
        <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-violet-400 font-mono">{totalPendingFix}</div>
          <div className="text-xs text-[#6b8ab5] mt-1.5">待修正</div>
        </div>
        <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-red-400 font-mono">{totalUnfixed}</div>
          <div className="text-xs text-[#6b8ab5] mt-1.5">未修复</div>
        </div>
      </div>

      {/* 案例总览表 */}
      <div className="mb-10">
        <h2 className="text-lg font-bold text-white mb-4">案例总览</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-[#1a2744]">
                <th className="text-left px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">编号</th>
                <th className="text-left px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">失败名称</th>
                <th className="text-center px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">聚类</th>
                <th className="text-left px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">影响组件</th>
                <th className="text-center px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">严重度</th>
                <th className="text-left px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">错误类型</th>
                <th className="text-left px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">发现版本</th>
                <th className="text-center px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">修复状态</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-b border-[#1a2744] hover:bg-[#1a2744]/60 transition-colors cursor-pointer ${i % 2 === 1 ? "bg-[#0d1525]/40" : ""}`}
                  onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
                >
                  <td className="px-3 py-2 font-mono font-bold text-[#4a9eff]">{c.id}</td>
                  <td className="px-3 py-2 text-[#c8d6e5] max-w-[280px]">
                    <span className="line-clamp-1">{c.name}</span>
                  </td>
                  <td className="px-3 py-2 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap[c.cluster] || "bg-slate-700/50 text-slate-400 border-slate-600/40"}`}>
                      {c.cluster}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex flex-wrap gap-1">
                      {c.components.map((comp) => (
                        <span key={comp} className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#4a9eff]/10 text-[#4a9eff]">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 py-2 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${severityColor[c.severity] || "bg-slate-700/50 text-slate-400"}`}>
                      {c.severity}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-[#8ba3c7]">{c.errorType}</td>
                  <td className="px-3 py-2 text-[#8ba3c7]">{c.foundVersion}</td>
                  <td className="px-3 py-2 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${statusStyle[c.fixStatus]}`}>
                      {c.fixStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 版本间迁移趋势 */}
      <div className="mb-10">
        <h2 className="text-lg font-bold text-white mb-4">版本间迁移趋势</h2>
        <div className="space-y-3">
          {migrationTrends.map((t, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 rounded-xl border p-4 ${
                t.highlight
                  ? "bg-[#1a2744] border-[#4a9eff]/40 shadow-lg shadow-[#4a9eff]/5"
                  : "bg-[#141d33] border-[#2a3a5c]"
              }`}
            >
              {/* 时间线节点 */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-3 h-3 rounded-full ${t.highlight ? "bg-[#4a9eff] shadow-lg shadow-[#4a9eff]/50" : "bg-[#2a3a5c]"}`} />
                {i < migrationTrends.length - 1 && <div className="w-0.5 h-8 bg-[#2a3a5c] mt-1" />}
              </div>
              {/* 内容 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-mono font-bold text-sm ${t.highlight ? "text-[#4a9eff]" : "text-white"}`}>{t.version}</span>
                  <span className="text-xs text-[#6b8ab5]">{t.clusters}</span>
                  {t.version === "V6.1真实测试" && <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-pink-900/40 text-pink-300 border border-pink-700/40">真实测试新增</span>}
                  {t.version === "V6.2" && <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-900/40 text-amber-300 border border-amber-700/40">双轨评分新增</span>}
                </div>
                <p className={`text-sm ${t.highlight ? "text-[#c8d6e5]" : "text-[#8ba3c7]"}`}>{t.insight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 聚类筛选 */}
      <div className="flex flex-wrap gap-2 mb-8">
        {clusters.map((cl) => (
          <button
            key={cl.key}
            onClick={() => setActiveCluster(cl.key)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCluster === cl.key
                ? "bg-[#4a9eff] text-white shadow-lg shadow-[#4a9eff]/20"
                : "bg-[#141d33] text-[#8ba3c7] border border-[#2a3a5c] hover:border-[#4a9eff]/40 hover:text-white"
            }`}
          >
            {cl.label}
            {cl.key !== "all" && (
              <span className="ml-1 text-[10px] opacity-60">
                ({cases.filter((c) => c.cluster === cl.key).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* 案例列表 */}
      <div className="space-y-3">
        {filtered.map((c) => {
          const isExpanded = expandedId === c.id;
          return (
            <div
              key={c.id}
              className="bg-[#141d33] border border-[#2a3a5c] rounded-xl overflow-hidden hover:border-[#3a4a6c] transition-colors"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : c.id)}
                className="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-[#1a2744]/50 transition-colors"
              >
                {/* 编号 */}
                <span className="text-xs font-mono font-bold text-[#4a9eff] whitespace-nowrap mt-0.5">{c.id}</span>
                {/* 主体 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-white text-sm">{c.name}</span>
                    {/* 聚类标签 */}
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${clusterColorMap[c.cluster] || "bg-slate-700/50 text-slate-400 border-slate-600/40"}`}>
                      {c.cluster} · {c.clusterName}
                    </span>
                  </div>
                  {!isExpanded && (
                    <p className="text-xs text-[#6b8ab5] mt-1 truncate">{c.description}</p>
                  )}
                </div>
                {/* 状态标签 */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${severityColor[c.severity] || "bg-slate-700/50 text-slate-400"}`}>
                    {c.severity}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${statusStyle[c.fixStatus]}`}>
                    {c.fixStatus}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#6b8ab5] transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* 展开详情 */}
              {isExpanded && (
                <div className="px-5 pb-5 border-t border-[#2a3a5c] pt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <span className="text-[#6b8ab5] text-xs">错误类型</span>
                      <div className="font-medium text-white">{c.errorType}</div>
                    </div>
                    <div>
                      <span className="text-[#6b8ab5] text-xs">发现版本</span>
                      <div className="font-medium text-white">{c.foundVersion}</div>
                    </div>
                    <div>
                      <span className="text-[#6b8ab5] text-xs">修复版本</span>
                      <div className="font-medium text-white">{c.fixVersion || "—"}</div>
                    </div>
                    <div>
                      <span className="text-[#6b8ab5] text-xs">聚类</span>
                      <div className="font-medium text-white">{c.cluster} · {c.clusterName}</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-xs font-semibold text-[#6b8ab5] mb-1">问题描述</div>
                    <p className="text-sm text-[#8ba3c7] leading-relaxed">{c.description}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#6b8ab5] mb-1">修复方向</div>
                    <p className="text-sm text-[#4a9eff] font-medium">{c.fixDirection}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#6b8ab5] text-sm">当前筛选条件下没有案例</div>
      )}

      {/* 底部趋势判断 */}
      <div className="mt-12 bg-[#141d33] border border-[#4a9eff]/20 rounded-xl p-5">
        <div className="text-xs font-semibold text-[#4a9eff] mb-2">趋势判断</div>
        <p className="text-sm text-[#8ba3c7] leading-relaxed mb-3">
          V6.2双轨评分揭示了核心矛盾：<span className="text-white font-medium">1.0系统合规 ≠ 用户满意</span>。聚类J（系统合规但用户不满意）以6条案例成为最大聚类，说明「系统能跑」只是门槛，「用户用着好不好」才是产品价值的核心判断。聚类E回归（F028格式崩塌）说明F012修复不彻底。聚类K首次出现，提示产品定位升级后P库与C库的对齐是新阶段的必答题。
        </p>
        <p className="text-sm text-[#8ba3c7] leading-relaxed">
          真实用户测试的价值远高于合成测试。从V6.1真实测试发现聚类I，到V6.2双轨评分发现聚类J/K，两次真实测试都暴露了合成测试的结构性盲区。后续应以真实场景作为主要测试方式，双轨评分作为核心评价体系。
        </p>
      </div>
    </div>
  );
}

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
  { key: "A", label: "聚类A · 规则体系" },
  { key: "B", label: "聚类B · K库越权" },
  { key: "C", label: "聚类C · 输出不可控" },
  { key: "D", label: "聚类D · 自主性缺失" },
  { key: "E", label: "聚类E · 输出层分离" },
  { key: "F", label: "聚类F · 四库实操性" },
  { key: "G", label: "聚类G · 执行不彻底" },
  { key: "H", label: "聚类H · 评估层误判" },
  { key: "I", label: "聚类I · 真实场景盲区 ★" },
];

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
  const totalUnfixed = cases.filter((c) => c.fixStatus === "未修复" || c.fixStatus === "待修正").length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">失败案例库</h1>
        <p className="text-[#8ba3c7]">记录系统从V1到当前版本所有已发现的问题，追踪修复状态</p>
        <p className="text-xs text-[#4a5c7a] mt-2">最近更新：2026-06-21 00:39（F022-F023，来源V6.1真实用户测试）</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
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
                  {t.highlight && <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#4a9eff]/20 text-[#4a9eff]">V6.1真实测试新增</span>}
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
                    {c.components.map((comp) => (
                      <span key={comp} className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#4a9eff]/10 text-[#4a9eff]">
                        {comp}
                      </span>
                    ))}
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
                      <div className="font-medium text-white">{c.fixVersion}</div>
                    </div>
                    <div>
                      <span className="text-[#6b8ab5] text-xs">聚类</span>
                      <div className="font-medium text-white">{c.clusterName}</div>
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
        <p className="text-sm text-[#8ba3c7] leading-relaxed">
          真实用户测试暴露了合成测试的结构性盲区——交互决策和规则维度完整性。V6.1真实测试新增的聚类I（真实场景盲区）标志着测试方式的关键转折：合成测试是「用户提问→系统回答」的单向模式，无法模拟真实场景中「用户抛出判断、教练要不要接、怎么接」的交互决策。后续应以真实场景作为主要测试方式。
        </p>
      </div>
    </div>
  );
}

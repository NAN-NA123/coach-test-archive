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
    </div>
  );
}

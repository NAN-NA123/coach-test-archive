"use client";

import { useState } from "react";
import failuresData from "@/data/failures.json";

type FixStatus = "已修复" | "修复中" | "未修复";

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
  "最高": "bg-[#7f1d1d] text-white",
  "阻断": "bg-[#dc2626] text-white",
  "高": "bg-[#ea580c] text-white",
  "中": "bg-[#f59e0b] text-white",
  "一般": "bg-[#0ea5e9] text-white",
  "低": "bg-[#64748b] text-white",
};

const statusStyle: Record<FixStatus, string> = {
  "已修复": "bg-[#16a34a]/10 text-[#16a34a]",
  "修复中": "bg-[#ea580c]/10 text-[#ea580c]",
  "未修复": "bg-[#dc2626]/10 text-[#dc2626]",
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
  const totalUnfixed = cases.filter((c) => c.fixStatus === "未修复").length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#1e293b] mb-2">失败案例库</h1>
        <p className="text-[#64748b] text-sm">记录系统从V1到当前版本所有已发现的问题，追踪修复状态</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 text-center">
          <div className="text-2xl font-bold text-[#1a365d] font-mono">{cases.length}</div>
          <div className="text-xs text-[#64748b] mt-1">总案例</div>
        </div>
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 text-center">
          <div className="text-2xl font-bold text-[#16a34a] font-mono">{totalFixed}</div>
          <div className="text-xs text-[#64748b] mt-1">已修复</div>
        </div>
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 text-center">
          <div className="text-2xl font-bold text-[#ea580c] font-mono">{totalFixing}</div>
          <div className="text-xs text-[#64748b] mt-1">修复中</div>
        </div>
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 text-center">
          <div className="text-2xl font-bold text-[#dc2626] font-mono">{totalUnfixed}</div>
          <div className="text-xs text-[#64748b] mt-1">未修复</div>
        </div>
      </div>

      {/* 聚类筛选 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {clusters.map((cl) => (
          <button
            key={cl.key}
            onClick={() => setActiveCluster(cl.key)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCluster === cl.key
                ? "bg-[#1a365d] text-white"
                : "bg-white text-[#64748b] border border-[#e2e8f0] hover:border-[#1a365d]/30 hover:text-[#1a365d]"
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
              className="bg-white rounded-lg border border-[#e2e8f0] overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : c.id)}
                className="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-gray-50/50 transition-colors"
              >
                {/* 编号 */}
                <span className="text-xs font-mono font-bold text-[#1a365d] whitespace-nowrap mt-0.5">{c.id}</span>
                {/* 主体 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-[#1e293b] text-sm">{c.name}</span>
                    {c.components.map((comp) => (
                      <span key={comp} className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#1a365d]/10 text-[#1a365d]">
                        {comp}
                      </span>
                    ))}
                  </div>
                  {!isExpanded && (
                    <p className="text-xs text-[#64748b] mt-1 truncate">{c.description}</p>
                  )}
                </div>
                {/* 状态标签 */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${severityColor[c.severity] || "bg-gray-400 text-white"}`}>
                    {c.severity}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${statusStyle[c.fixStatus]}`}>
                    {c.fixStatus}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#64748b] transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`}
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
                <div className="px-5 pb-5 border-t border-[#e2e8f0] pt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 text-sm">
                    <div>
                      <span className="text-[#64748b] text-xs">错误类型</span>
                      <div className="font-medium text-[#1e293b]">{c.errorType}</div>
                    </div>
                    <div>
                      <span className="text-[#64748b] text-xs">发现版本</span>
                      <div className="font-medium text-[#1e293b]">{c.foundVersion}</div>
                    </div>
                    <div>
                      <span className="text-[#64748b] text-xs">修复版本</span>
                      <div className="font-medium text-[#1e293b]">{c.fixVersion}</div>
                    </div>
                    <div>
                      <span className="text-[#64748b] text-xs">聚类</span>
                      <div className="font-medium text-[#1e293b]">{c.clusterName}</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-xs font-semibold text-[#64748b] mb-1">问题描述</div>
                    <p className="text-sm text-[#1e293b] leading-relaxed">{c.description}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#64748b] mb-1">修复方向</div>
                    <p className="text-sm text-[#1a365d] font-medium">{c.fixDirection}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-[#64748b] text-sm">当前筛选条件下没有案例</div>
      )}
    </div>
  );
}

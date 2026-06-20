"use client";

import { useState } from "react";
import Link from "next/link";
import decisionsData from "@/data/decisions.json";

export default function DecisionsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { summary, groups } = decisionsData;

  const totalDecisions = groups.reduce(
    (acc, g) => acc + g.decisions.length,
    0
  );

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#1a365d] mb-2">
            决策日志
          </h1>
          <p className="text-sm text-[#64748b]">
            记录产品演进过程中的每一个关键决策及其背后的原因
          </p>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="text-sm text-[#64748b] mb-1">总决策数</div>
            <div className="text-3xl font-semibold text-[#1a365d] font-mono">
              {summary.totalCount}
            </div>
            <div className="text-xs text-[#64748b] mt-1">条关键决策</div>
          </div>
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="text-sm text-[#64748b] mb-1">跨越天数</div>
            <div className="text-3xl font-semibold text-[#1a365d] font-mono">
              {summary.dayCount}
            </div>
            <div className="text-xs text-[#64748b] mt-1">
              {summary.dateRange}
            </div>
          </div>
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="text-sm text-[#64748b] mb-1">日均决策</div>
            <div className="text-3xl font-semibold text-[#1a365d] font-mono">
              {(totalDecisions / summary.dayCount).toFixed(1)}
            </div>
            <div className="text-xs text-[#64748b] mt-1">条/天</div>
          </div>
        </div>

        {/* 按日期分组展示 */}
        {groups.map((group) => (
          <div key={group.date} className="mb-10">
            {/* 日期标题 */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#1a365d]"></div>
              <h2 className="text-lg font-semibold text-[#1a365d]">
                {group.date}
              </h2>
              <span className="text-xs text-[#64748b] bg-[#f1f5f9] px-2 py-0.5 rounded">
                {group.decisions.length} 条决策
              </span>
            </div>

            {/* 决策卡片列表 */}
            <div className="space-y-3 ml-6">
              {group.decisions.map((d) => {
                const isExpanded = expandedId === d.id;
                return (
                  <div
                    key={d.id}
                    className="bg-white rounded-lg border border-[#e2e8f0] overflow-hidden transition-shadow hover:shadow-md"
                  >
                    {/* 卡片头部 - 始终可见 */}
                    <button
                      className="w-full text-left px-5 py-4 flex items-start gap-4 cursor-pointer"
                      onClick={() =>
                        setExpandedId(isExpanded ? null : d.id)
                      }
                    >
                      <span className="inline-flex items-center justify-center min-w-[36px] h-[36px] rounded-lg bg-[#1a365d] text-white text-sm font-mono font-semibold shrink-0">
                        {String(d.id).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-[#1e293b] leading-snug">
                          {d.title}
                        </h3>
                        {!isExpanded && (
                          <p className="text-xs text-[#64748b] mt-1 line-clamp-1">
                            {d.decision}
                          </p>
                        )}
                      </div>
                      <svg
                        className={`w-5 h-5 text-[#64748b] shrink-0 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* 展开详情 */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-0 border-t border-[#e2e8f0] mt-0">
                        <div className="pt-4 space-y-4">
                          <div>
                            <div className="text-xs font-semibold text-[#1a365d] uppercase tracking-wider mb-1.5">
                              决定
                            </div>
                            <p className="text-sm text-[#1e293b] leading-relaxed bg-[#f7fafc] rounded-lg p-3 border border-[#e2e8f0]">
                              {d.decision}
                            </p>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-[#1a365d] uppercase tracking-wider mb-1.5">
                              原因 / 目的
                            </div>
                            <p className="text-sm text-[#64748b] leading-relaxed">
                              {d.reason}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* 底部导航 */}
        <div className="mt-12 pt-6 border-t border-[#e2e8f0] flex justify-between items-center">
          <Link
            href="/philosophy"
            className="text-sm text-[#1a365d] hover:underline"
          >
            ← 产品理念
          </Link>
          <Link
            href="/roadmap"
            className="text-sm text-[#1a365d] hover:underline"
          >
            产品线路图 →
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import decisionsData from "@/data/decisions.json";

interface Decision {
  id: number;
  title: string;
  content?: string;
  bullets?: string[];
  reason?: string;
  purpose?: string;
  highlight?: string;
}

interface DecisionGroup {
  date: string;
  decisions: Decision[];
}

export default function DecisionsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { summary, groups } = decisionsData as {
    summary: { totalCount: number; dateRange: string; dayCount: number };
    groups: DecisionGroup[];
  };

  const totalDecisions = groups.reduce(
    (acc, g) => acc + g.decisions.length,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">决策日志</h1>
        <p className="text-[#8ba3c7]">记录产品演进过程中的每一个关键决策及其背后的原因</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
          <div className="text-xs text-[#6b8ab5] mb-1">总决策数</div>
          <div className="text-3xl font-semibold text-white font-mono">{summary.totalCount}</div>
          <div className="text-xs text-[#4a5e80] mt-1">条关键决策</div>
        </div>
        <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
          <div className="text-xs text-[#6b8ab5] mb-1">记录天数</div>
          <div className="text-3xl font-semibold text-white font-mono">{summary.dayCount}</div>
          <div className="text-xs text-[#4a5e80] mt-1">{summary.dateRange} 有记录</div>
        </div>
        <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
          <div className="text-xs text-[#6b8ab5] mb-1">日均决策</div>
          <div className="text-3xl font-semibold text-white font-mono">{(totalDecisions / summary.dayCount).toFixed(1)}</div>
          <div className="text-xs text-[#4a5e80] mt-1">条/天</div>
        </div>
      </div>

      {/* 按日期分组展示 */}
      {groups.map((group) => (
        <div key={group.date} className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4a9eff]"></div>
            <h2 className="text-lg font-semibold text-white">{group.date}</h2>
            <span className="text-xs text-[#6b8ab5] bg-[#1a2744] px-2 py-0.5 rounded-lg">{group.decisions.length} 条决策</span>
          </div>

          <div className="space-y-3 ml-6">
            {group.decisions.map((d) => {
              const isExpanded = expandedId === d.id;
              const hasDetail = d.content || (d.bullets && d.bullets.length > 0) || d.reason || d.purpose || d.highlight;
              return (
                <div
                  key={d.id}
                  className="bg-[#141d33] border border-[#2a3a5c] rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full text-left px-5 py-4 flex items-start gap-4 cursor-pointer hover:bg-[#1a2744]/50 transition-colors"
                    onClick={() => {
                      if (hasDetail) {
                        setExpandedId(isExpanded ? null : d.id);
                      }
                    }}
                  >
                    <span className="inline-flex items-center justify-center min-w-[36px] h-[36px] rounded-lg bg-[#4a9eff] text-white text-sm font-mono font-semibold shrink-0">
                      {String(d.id).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white leading-snug">{d.title}</h3>
                      {!isExpanded && d.content && (
                        <p className="text-xs text-[#6b8ab5] mt-1 line-clamp-1">{d.content}</p>
                      )}
                      {!isExpanded && !d.content && d.reason && (
                        <p className="text-xs text-[#6b8ab5] mt-1 line-clamp-1">{d.reason}</p>
                      )}
                      {!isExpanded && !d.content && !d.reason && d.bullets && d.bullets.length > 0 && (
                        <p className="text-xs text-[#6b8ab5] mt-1 line-clamp-1">{d.bullets.join(" · ")}</p>
                      )}
                    </div>
                    {hasDetail && (
                      <svg
                        className={`w-5 h-5 text-[#6b8ab5] shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {isExpanded && hasDetail && (
                    <div className="px-5 pb-5 pt-0 border-t border-[#2a3a5c] mt-0">
                      <div className="pt-4 space-y-4">
                        {d.content && (
                          <div>
                            <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-1.5">决定</div>
                            <p className="text-sm text-[#8ba3c7] leading-relaxed bg-[#1a2744] rounded-lg p-3 border border-[#2a3a5c]">
                              {d.content}
                            </p>
                          </div>
                        )}

                        {d.bullets && d.bullets.length > 0 && (
                          <div>
                            <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-1.5">要点</div>
                            <div className="space-y-1.5">
                              {d.bullets.map((b, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-[#8ba3c7]">
                                  <span className="text-[#4a9eff] shrink-0 mt-0.5">•</span>
                                  <span>{b}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {d.reason && (
                          <div>
                            <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-1.5">原因</div>
                            <p className="text-sm text-[#8ba3c7] leading-relaxed">{d.reason}</p>
                          </div>
                        )}

                        {d.purpose && (
                          <div>
                            <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-1.5">目的</div>
                            <p className="text-sm text-[#8ba3c7] leading-relaxed">{d.purpose}</p>
                          </div>
                        )}

                        {d.highlight && (
                          <div className="bg-[#4a9eff]/10 border border-[#4a9eff]/20 rounded-lg p-3">
                            <p className="text-sm text-[#4a9eff] font-medium leading-relaxed">{d.highlight}</p>
                          </div>
                        )}
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
      <div className="mt-12 pt-6 border-t border-[#2a3a5c] flex justify-between items-center">
        <Link href="/philosophy" className="text-sm text-[#4a9eff] hover:underline">← 产品理念</Link>
        <Link href="/roadmap" className="text-sm text-[#4a9eff] hover:underline">产品线路图 →</Link>
      </div>
    </div>
  );
}

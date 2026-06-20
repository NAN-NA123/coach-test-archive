"use client";

import { useState } from "react";
import { getAllVersions, getScoreColor } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { VersionData, QARecord } from "@/lib/types";

export default function QAPage() {
  const versions = getAllVersions();
  const versionsWithQA = versions.filter((v) => v.qaRecords.length > 0);
  const [selectedVersion, setSelectedVersion] = useState<string>(
    versionsWithQA.length > 0 ? versionsWithQA[0].id : ""
  );
  const [selectedRound, setSelectedRound] = useState<string>("all");

  const currentVersion = versions.find((v) => v.id === selectedVersion);
  const records = currentVersion?.qaRecords ?? [];

  const filteredRecords =
    selectedRound === "all"
      ? records
      : records.filter((r) => r.round === selectedRound);

  const rounds = records.map((r) => r.round);

  return (
    <div className="min-h-screen" style={{ background: "#0a0f1e" }}>
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-[#6b8ab5]">
          <span className="text-white font-medium">测试问答详情</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filter */}
          <div className="lg:w-60 flex-shrink-0">
            <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-4 sticky top-20">
              <h3 className="text-sm font-semibold text-white mb-3">筛选</h3>

              {/* Version Filter */}
              <div className="mb-4">
                <label className="text-xs text-[#6b8ab5] block mb-1.5">版本</label>
                <div className="space-y-1">
                  {versionsWithQA.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => {
                        setSelectedVersion(v.id);
                        setSelectedRound("all");
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedVersion === v.id
                          ? "bg-[#4a9eff] text-white"
                          : "text-[#8ba3c7] hover:bg-[#1a2744]"
                      }`}
                    >
                      {v.fullName}
                      <span className={`ml-2 font-mono text-xs ${selectedVersion === v.id ? "text-white/70" : v.totalScore !== null ? getScoreColor(v.totalScore) : "text-[#4a5e80]"}`}>
                        {v.totalScore !== null ? v.totalScore : "未评分"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Round Filter */}
              {rounds.length > 1 && (
                <div>
                  <label className="text-xs text-[#6b8ab5] block mb-1.5">轮次</label>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedRound("all")}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedRound === "all"
                          ? "bg-[#4a9eff] text-white"
                          : "text-[#8ba3c7] hover:bg-[#1a2744]"
                      }`}
                    >
                      全部
                    </button>
                    {rounds.map((r) => (
                      <button
                        key={r}
                        onClick={() => setSelectedRound(r)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                          selectedRound === r
                            ? "bg-[#4a9eff] text-white"
                            : "text-[#8ba3c7] hover:bg-[#1a2744]"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* QA Records */}
          <div className="flex-1 min-w-0">
            {currentVersion && (
              <div className="mb-6">
                <h1 className="text-xl font-bold text-white">
                  {currentVersion.fullName} - 测试问答记录
                </h1>
                <p className="text-sm text-[#6b8ab5] mt-1">
                  共 {records.length} 条记录，当前显示 {filteredRecords.length} 条
                </p>
              </div>
            )}

            {filteredRecords.length === 0 ? (
              <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-12 text-center">
                <div className="text-[#4a5e80] text-lg">暂无测试问答记录</div>
                <p className="text-sm text-[#4a5e80] mt-2">该版本尚未执行测试或测试结果待录入</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredRecords.map((record, i) => (
                  <QARecordCard key={i} record={record} versionId={selectedVersion} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function QARecordCard({ record, versionId }: { record: QARecord; versionId: string }) {
  const [showAudit, setShowAudit] = useState(false);
  const isUnscored = record.score === 0 && (versionId === "v1" || versionId === "v2" || versionId === "v3" || versionId === "v4");

  return (
    <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#1a2744] px-5 py-3 flex items-center justify-between border-b border-[#2a3a5c]">
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-sm text-[#4a9eff]">{record.round}</span>
          <span className="text-[#2a3a5c] text-xs">|</span>
          <span className="text-sm text-[#6b8ab5]">{versionId}</span>
          <span className="text-[#2a3a5c] text-xs">|</span>
          {isUnscored ? (
            <span className="text-sm text-[#4a5e80]">未评分</span>
          ) : (
            <span className="font-mono font-bold text-sm" style={{ color: getScoreColor(record.score) }}>
              {record.score}/100
            </span>
          )}
        </div>
        <button
          onClick={() => setShowAudit(!showAudit)}
          className="text-xs px-3 py-1 rounded-lg bg-[#4a9eff]/10 text-[#4a9eff] hover:bg-[#4a9eff]/20 transition-colors"
        >
          {showAudit ? "隐藏审计层" : "查看审计层"}
        </button>
      </div>

      <div className="p-5 space-y-4">
        {/* Pressure Point & R Trigger */}
        <div className="flex items-start gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold flex-shrink-0 mt-0.5">压</span>
          <div className="flex-1">
            <span className="text-xs font-medium text-[#6b8ab5] uppercase tracking-wider">压测点</span>
            <p className="text-sm text-[#8ba3c7] mt-0.5">{record.pressurePoint}</p>
          </div>
          {record.rTrigger && (
            <div className="flex-shrink-0">
              <span className={`text-xs font-mono px-2 py-1 rounded-lg bg-[#0d1526] ${
                record.rTrigger.includes("✅") && !record.rTrigger.includes("❌")
                  ? "text-emerald-400"
                  : record.rTrigger.includes("⚠️")
                  ? "text-amber-400"
                  : record.rTrigger.includes("❌")
                  ? "text-red-400"
                  : "text-[#6b8ab5]"
              }`}>
                {record.rTrigger}
              </span>
            </div>
          )}
        </div>

        {/* Question */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#4a9eff]/20 text-[#4a9eff] text-[10px] font-bold">Q</span>
            <span className="text-xs font-medium text-[#6b8ab5] uppercase tracking-wider">测试问题</span>
          </div>
          <div className="bg-[#1a2744] rounded-lg p-4 text-[#e0e6f0] leading-relaxed">
            {record.question}
          </div>
        </div>

        {/* Coach Answer */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">A</span>
            <span className="text-xs font-medium text-[#6b8ab5] uppercase tracking-wider">教练回答</span>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-4 text-[#8ba3c7] leading-relaxed whitespace-pre-line">
            {record.coachAnswer}
          </div>
        </div>

        {/* Audit Layer */}
        {showAudit && (
          <>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 text-[10px] font-bold">审</span>
                <span className="text-xs font-medium text-[#6b8ab5] uppercase tracking-wider">审计层记录</span>
              </div>
              <div className="bg-rose-500/5 border border-rose-500/10 rounded-lg p-4 text-[#6b8ab5] leading-relaxed text-sm whitespace-pre-wrap">
                {record.auditNote}
              </div>
            </div>

            {record.auditConclusion && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold">结</span>
                  <span className="text-xs font-medium text-[#6b8ab5] uppercase tracking-wider">评估结论</span>
                </div>
                <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-4 text-[#e0e6f0] leading-relaxed text-sm">
                  {record.auditConclusion}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

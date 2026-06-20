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
    <div className="min-h-screen bg-[#f7fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-[#64748b]">
          <span className="text-[#1a365d] font-medium">测试问答详情</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filter */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 sticky top-20">
              <h3 className="text-sm font-semibold text-[#1a365d] mb-3">筛选</h3>

              {/* Version Filter */}
              <div className="mb-4">
                <label className="text-xs text-[#64748b] block mb-1.5">版本</label>
                <div className="space-y-1">
                  {versionsWithQA.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => {
                        setSelectedVersion(v.id);
                        setSelectedRound("all");
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedVersion === v.id
                          ? "bg-[#1a365d] text-white"
                          : "text-[#475569] hover:bg-[#f0f4f8]"
                      }`}
                    >
                      {v.fullName}
                      <span className={`ml-2 font-mono text-xs ${selectedVersion === v.id ? "text-white/70" : getScoreColor(v.totalScore)}`}>
                        {v.totalScore}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Round Filter */}
              {rounds.length > 1 && (
                <div>
                  <label className="text-xs text-[#64748b] block mb-1.5">轮次</label>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedRound("all")}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                        selectedRound === "all"
                          ? "bg-[#1a365d] text-white"
                          : "text-[#475569] hover:bg-[#f0f4f8]"
                      }`}
                    >
                      全部
                    </button>
                    {rounds.map((r) => (
                      <button
                        key={r}
                        onClick={() => setSelectedRound(r)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                          selectedRound === r
                            ? "bg-[#1a365d] text-white"
                            : "text-[#475569] hover:bg-[#f0f4f8]"
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
              <div className="mb-4">
                <h1 className="text-xl font-bold text-[#1a365d]">
                  {currentVersion.fullName} - 测试问答记录
                </h1>
                <p className="text-sm text-[#64748b] mt-1">
                  共 {records.length} 条记录，当前显示 {filteredRecords.length} 条
                </p>
              </div>
            )}

            {filteredRecords.length === 0 ? (
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-12 text-center">
                <div className="text-[#94a3b8] text-lg">暂无测试问答记录</div>
                <p className="text-sm text-[#cbd5e0] mt-2">该版本尚未执行测试或测试结果待录入</p>
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

  return (
    <div className="bg-white rounded-lg border border-[#e2e8f0] overflow-hidden">
      {/* Header */}
      <div className="bg-[#1a365d] text-white px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-sm">{record.round}</span>
          <span className="text-white/60 text-xs">|</span>
          <span className="text-sm text-white/80 uppercase">{versionId}</span>
          <span className="text-white/60 text-xs">|</span>
          <span className="font-mono font-bold text-sm" style={{ color: getScoreColor(record.score) }}>
            {record.score}/100
          </span>
        </div>
        <button
          onClick={() => setShowAudit(!showAudit)}
          className="text-xs px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
        >
          {showAudit ? "隐藏审计层" : "查看审计层"}
        </button>
      </div>

      <div className="p-5 space-y-4">
        {/* Pressure Point */}
        <div className="flex items-start gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] font-bold flex-shrink-0 mt-0.5">压</span>
          <div>
            <span className="text-xs font-medium text-[#64748b] uppercase tracking-wider">压测点</span>
            <p className="text-sm text-[#475569] mt-0.5">{record.pressurePoint}</p>
          </div>
        </div>

        {/* Question */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1a365d] text-white text-[10px] font-bold">Q</span>
            <span className="text-xs font-medium text-[#64748b] uppercase tracking-wider">测试问题</span>
          </div>
          <div className="bg-[#f0f4f8] rounded-lg p-4 text-[#1e293b] leading-relaxed">
            {record.question}
          </div>
        </div>

        {/* Coach Answer */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">A</span>
            <span className="text-xs font-medium text-[#64748b] uppercase tracking-wider">教练回答</span>
          </div>
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-4 text-[#1e293b] leading-relaxed whitespace-pre-line">
            {record.coachAnswer}
          </div>
        </div>

        {/* Audit Layer */}
        {showAudit && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-600 text-white text-[10px] font-bold">审</span>
              <span className="text-xs font-medium text-[#64748b] uppercase tracking-wider">审计层记录</span>
            </div>
            <div className="bg-amber-50/50 border border-amber-100 rounded-lg p-4 text-[#475569] leading-relaxed text-sm">
              {record.auditNote}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

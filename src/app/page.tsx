"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { getAllVersions, getScoreColor } from "@/lib/data";
import failureData from "@/data/failures.json";

export default function LandingPage() {
  const versions = getAllVersions();
  const scoredVersions = versions.filter((v) => v.totalScore !== null);
  const best = scoredVersions.length > 0
    ? scoredVersions.reduce((a, b) => (a.totalScore ?? 0) > (b.totalScore ?? 0) ? a : b)
    : null;
  const latestVersion = versions.find((v) => v.id === "v6.1");
  const fixedCount = failureData.cases.filter((c: { fixStatus: string }) => c.fixStatus === "已修复").length;

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#111b36] to-[#0d1530]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-32 sm:pb-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a365d]/40 border border-[#2d4a7a]/50 text-[#7db4f5] text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              可自评估 · 可自修复
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-4">
              Coach<span className="text-[#4a9eff]">教练</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-[#8bb4e8] font-medium mb-6">
              AI瘦子增重执行教练
            </p>
            <p className="text-base sm:text-lg text-[#6b8ab5] max-w-2xl mx-auto mb-10 leading-relaxed">
              不是单次生成饮食计划，而是通过用户记录、用户描述和持续反馈，<br className="hidden sm:block" />
              不断判断用户为什么增重失败，并灵活给出对应解决方案。
            </p>

            {/* CTA */}
            <Link
              href="/philosophy"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1a365d] hover:bg-[#234876] text-white rounded-lg font-medium transition-colors text-lg border border-[#2d4a7a]"
            >
              了解更多
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
      </section>

      {/* Three-Layer Architecture */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">三层AI架构</h2>
          <p className="text-[#6b8ab5]">可控 · 可评估 · 可迭代</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Design Layer */}
          <div className="group rounded-xl bg-gradient-to-b from-[#1a2744] to-[#141d33] border border-[#2a3a5c] p-6 hover:border-[#4a9eff]/40 transition-all">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#4a9eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">设计层</h3>
            <div className="text-sm text-[#4a9eff] mb-3">军师AI</div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">系统设计与规则定义，定义四库规则和决策逻辑</p>
          </div>

          {/* Execution Layer */}
          <div className="group rounded-xl bg-gradient-to-b from-[#1a2744] to-[#141d33] border border-[#2a3a5c] p-6 hover:border-emerald-400/40 transition-all">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">执行层</h3>
            <div className="text-sm text-emerald-400 mb-3">教练AI</div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">四库决策与用户输出，直接回答用户问题</p>
          </div>

          {/* Evaluation Layer */}
          <div className="group rounded-xl bg-gradient-to-b from-[#1a2744] to-[#141d33] border border-[#2a3a5c] p-6 hover:border-amber-400/40 transition-all">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">评估层</h3>
            <div className="text-sm text-amber-400 mb-3">战略AI</div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">评分审计与自动修复，确保系统质量持续提升</p>
          </div>
        </div>
      </section>

      {/* Four-Library System */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">四库决策系统</h2>
          <p className="text-[#6b8ab5]">四大库协同，构成完整的分层决策引擎</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* K Library */}
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-5 hover:border-sky-400/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold text-lg font-mono">K</div>
              <h3 className="text-base font-bold text-white">知识解释层</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed mb-3">
              营养与生理机制知识
            </p>
            <div className="text-xs text-sky-400/80 bg-sky-400/5 px-3 py-1.5 rounded-md">
              只能解释，不能决策
            </div>
          </div>

          {/* C Library */}
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-5 hover:border-violet-400/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold text-lg font-mono">C</div>
              <h3 className="text-base font-bold text-white">行为模式识别层</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed mb-3">
              失败案例与用户行为匹配
            </p>
            <div className="text-xs text-violet-400/80 bg-violet-400/5 px-3 py-1.5 rounded-md">
              从现象到行为系统
            </div>
          </div>

          {/* R Library */}
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-5 hover:border-[#4a9eff]/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-[#4a9eff] font-bold text-lg font-mono">R</div>
              <h3 className="text-base font-bold text-white">决策执行层</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed mb-3">
              系统核心，驱动所有决策
            </p>
            <div className="text-xs text-[#4a9eff]/80 bg-[#4a9eff]/5 px-3 py-1.5 rounded-md">
              L1硬约束 / L2诊断路由 / L3优化建议
            </div>
          </div>

          {/* P Library */}
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-5 hover:border-amber-400/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold text-lg font-mono">P</div>
              <h3 className="text-base font-bold text-white">原则约束层</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed mb-3">
              决策原则和输出格式约束
            </p>
            <div className="text-xs text-amber-400/80 bg-amber-400/5 px-3 py-1.5 rounded-md">
              系统逻辑边界
            </div>
          </div>
        </div>
      </section>

      {/* Core Data */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">测试数据</h2>
          <p className="text-[#6b8ab5]">6轮全量测试，持续迭代优化</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-5 text-center">
            <div className="text-sm text-[#6b8ab5] mb-2">当前版本</div>
            <div className="text-2xl font-bold text-white font-mono">V6.1</div>
          </div>
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-5 text-center">
            <div className="text-sm text-[#6b8ab5] mb-2">最新评分</div>
            <div className={`text-2xl font-bold font-mono ${best ? getScoreColor(best.totalScore) : "text-emerald-400"}`}>
              {best?.totalScore ?? 95}
            </div>
            <div className="text-xs text-[#6b8ab5]">/100</div>
          </div>
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-5 text-center">
            <div className="text-sm text-[#6b8ab5] mb-2">测试轮次</div>
            <div className="text-2xl font-bold text-white font-mono">6</div>
            <div className="text-xs text-[#6b8ab5]">轮全量测试</div>
          </div>
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-5 text-center">
            <div className="text-sm text-[#6b8ab5] mb-2">失败案例</div>
            <div className="text-2xl font-bold text-white font-mono">20</div>
            <div className="text-xs text-emerald-400">{fixedCount}条已修复</div>
          </div>
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-5 text-center">
            <div className="text-sm text-[#6b8ab5] mb-2">版本迭代</div>
            <div className="text-2xl font-bold text-white font-mono">{versions.length}</div>
            <div className="text-xs text-[#6b8ab5]">个版本</div>
          </div>
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-5 text-center">
            <div className="text-sm text-[#6b8ab5] mb-2">决策记录</div>
            <div className="text-2xl font-bold text-white font-mono">22</div>
            <div className="text-xs text-[#6b8ab5]">条决策</div>
          </div>
        </div>

        {/* Score Dimensions */}
        {latestVersion && latestVersion.dimensionDetails.length > 0 && (
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-6">
            <h3 className="text-sm font-medium text-[#6b8ab5] mb-4 text-center">V6.1 评分维度</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[
                { label: "R库决策质量", score: 38.2, max: 40, color: "bg-[#4a9eff]" },
                { label: "K库使用质量", score: 14.3, max: 15, color: "bg-sky-400" },
                { label: "C库匹配质量", score: 9.8, max: 10, color: "bg-violet-400" },
                { label: "输出质量", score: 23.3, max: 25, color: "bg-emerald-400" },
                { label: "系统稳定性", score: 9.5, max: 10, color: "bg-amber-400" },
              ].map((dim) => (
                <div key={dim.label} className="text-center">
                  <div className="text-xs text-[#6b8ab5] mb-2">{dim.label}</div>
                  <div className="text-lg font-bold text-white font-mono">
                    {dim.score}<span className="text-xs text-[#4a5e80]">/{dim.max}</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-[#1a2744] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${dim.color}`}
                      style={{ width: `${(dim.score / dim.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Navigation Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">探索更多</h2>
          <p className="text-[#6b8ab5]">深入了解系统的每个方面</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link href="/philosophy" className="group rounded-xl bg-[#141d33] border border-[#2a3a5c] p-6 hover:border-[#4a9eff]/40 transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#4a9eff]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#4a9eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">产品理念</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] mb-4">了解Coach教练的核心设计理念和产品架构</p>
            <span className="text-sm text-[#4a9eff] group-hover:underline">查看详情 →</span>
          </Link>

          <Link href="/test-archive" className="group rounded-xl bg-[#141d33] border border-[#2a3a5c] p-6 hover:border-emerald-400/40 transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">测试档案</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] mb-4">从V1到V6.1的全部测试评估结果和数据</p>
            <span className="text-sm text-emerald-400 group-hover:underline">查看详情 →</span>
          </Link>

          <Link href="/failures" className="group rounded-xl bg-[#141d33] border border-[#2a3a5c] p-6 hover:border-rose-400/40 transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">失败案例库</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] mb-4">20条系统失败案例的完整追踪记录</p>
            <span className="text-sm text-rose-400 group-hover:underline">查看详情 →</span>
          </Link>

          <Link href="/roadmap" className="group rounded-xl bg-[#141d33] border border-[#2a3a5c] p-6 hover:border-amber-400/40 transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">产品线路图</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] mb-4">四库系统设计全流程图和版本演化记录</p>
            <span className="text-sm text-amber-400 group-hover:underline">查看详情 →</span>
          </Link>

          <Link href="/decisions" className="group rounded-xl bg-[#141d33] border border-[#2a3a5c] p-6 hover:border-violet-400/40 transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">决策日志</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] mb-4">22条关键产品决策的完整记录</p>
            <span className="text-sm text-violet-400 group-hover:underline">查看详情 →</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a2744] py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-[#4a5e80]">
            Coach教练 — 可自评估·可自修复的分层决策引擎
          </p>
        </div>
      </footer>
    </div>
  );
}

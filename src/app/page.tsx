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
  const fixedCount = failureData.cases.filter((c: { fixStatus: string }) => c.fixStatus === "已修复").length;

  const coreFeatures = [
    { num: "1", title: "制定训练计划", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    )},
    { num: "2", title: "每天提醒打卡", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    )},
    { num: "3", title: "记录营养摄入", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12" />
      </svg>
    )},
    { num: "4", title: "记录体重围度训练睡眠食欲消化状态", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )},
    { num: "5", title: "动态调整饮食训练恢复方案", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    )},
    { num: "6", title: "判断增肌/增重失败原因", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    )},
    { num: "7", title: "降低执行难度", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    )},
    { num: "8", title: "阶段性复盘", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { num: "9", title: "风险边界提醒", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )},
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#111b36] to-[#0d1530]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-20 sm:pt-32 sm:pb-28">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-4">
              Coach
            </h1>
            <p className="text-xl sm:text-2xl text-[#8bb4e8] font-medium mb-4">
              AI时代的私人定制教练
            </p>
            <p className="text-base sm:text-lg text-[#6b8ab5] max-w-2xl mx-auto leading-relaxed">
              面向体型管理受阻用户，通过记录、判断和动态调整，<br className="hidden sm:block" />
              帮助用户持续解决增肌/增重过程中的问题
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
      </section>

      {/* Core Concept */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">产品核心</h2>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4a9eff] to-[#4a9eff]/20 rounded-full hidden sm:block" />
            <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed">
              不是生成一次性计划，<br />
              而是根据用户记录和反馈，<br />
              <span className="text-[#4a9eff]">持续判断问题、动态调整方案</span>。
            </p>
          </blockquote>
        </div>
      </section>

      {/* Two Core Systems */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">两大核心系统</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* 营养管理区 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-lg bg-[#2a3a5c] text-[#4a9eff] text-sm font-bold flex items-center justify-center">1</span>
              <h3 className="text-lg font-bold text-white">营养管理区</h3>
            </div>
            <ul className="space-y-3 text-sm text-[#8ba3c7]">
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">•</span><span>记录饮食</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">•</span><span>记录热量、蛋白质、餐次、食欲、完成率</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">•</span><span>收集用户描述</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">•</span><span>发现饮食执行问题</span></li>
              <li className="flex gap-2"><span className="font-medium text-white">为动态增重系统提供判断数据</span></li>
            </ul>
          </div>

          {/* Flow Arrow (visible on md+) */}
          <div className="hidden md:flex absolute items-center justify-center" style={{ left: "50%", transform: "translateX(-50%)" }}>
          </div>

          {/* 动态增重系统 */}
          <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border-2 border-[#4a9eff]/40 p-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-lg bg-[#4a9eff] text-white text-sm font-bold flex items-center justify-center">2</span>
              <h3 className="text-lg font-bold text-white">动态增重系统</h3>
              <span className="text-xs bg-[#4a9eff] text-white px-2 py-0.5 rounded-full font-medium">核心</span>
            </div>
            <ul className="space-y-3 text-sm text-[#8ba3c7]">
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">•</span><span>判断增重失败原因</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">•</span><span>匹配 R / K / C / P 四库</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">•</span><span>动态调整方案</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">•</span><span>处理吃不下、漏餐、消化差、训练停滞、睡眠不足、体重波动等问题</span></li>
              <li className="flex gap-2 font-medium text-white"><span className="text-[#4a9eff] shrink-0">•</span><span>让用户持续执行，而非只拿计划</span></li>
            </ul>
          </div>
        </div>

        {/* Flow indicator */}
        <div className="flex items-center justify-center mt-6 gap-3 text-sm text-[#6b8ab5]">
          <span className="bg-[#141d33] border border-[#2a3a5c] rounded-lg px-4 py-2 text-[#8ba3c7]">营养管理区</span>
          <svg className="w-6 h-6 text-[#4a9eff] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span className="text-xs text-[#6b8ab5]">提供判断数据</span>
          <svg className="w-6 h-6 text-[#4a9eff] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span className="bg-gradient-to-r from-[#4a9eff] to-[#3b82f6] rounded-lg px-4 py-2 text-white font-medium">动态增重系统</span>
        </div>
      </section>

      {/* 9 Core Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">9项核心功能</h2>
          <p className="text-[#6b8ab5]">持续判断问题、动态调整方案的完整能力</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreFeatures.map((feat) => (
            <div key={feat.num} className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-5 hover:border-[#4a9eff]/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#4a9eff]/10 flex items-center justify-center text-[#4a9eff] group-hover:bg-[#4a9eff]/20 transition-colors shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <div className="text-xs text-[#6b8ab5] mb-1">功能 {feat.num}</div>
                  <div className="text-sm font-medium text-white leading-snug">{feat.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Auxiliary Systems */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">辅助系统</h2>
          <p className="text-[#6b8ab5]">三大副区域协同核心系统</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-6 hover:border-emerald-400/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-2">训练计划区</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              展示适合用户的训练方案。根据动态增重系统反馈，调整训练频率、训练量、恢复安排和训练重点。
            </p>
          </div>

          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-6 hover:border-amber-400/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-2">烹饪细节区</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              根据用户食谱自动提出合理烹饪方式。包括食材处理、烹饪步骤、替代食材、低成本做法、宿舍/便利店/外卖适配。
            </p>
          </div>

          <div className="rounded-xl bg-[#141d33] border border-[#2a3a5c] p-6 hover:border-violet-400/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-2">睡眠管理区</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              记录睡眠时长和睡眠质量。为恢复评分、压力评分、训练调整、食欲判断提供数据支持。
            </p>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">发展路线</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold bg-[#4a9eff] text-white px-3 py-1 rounded-full">第一阶段</span>
            </div>
            <div className="text-base font-semibold text-white mb-3">只做增重区</div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              核心目标是收集瘦子增重失败案例，帮助瘦子持续增重。
            </p>
          </div>

          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold bg-[#6b8ab5] text-white px-3 py-1 rounded-full">第二阶段</span>
            </div>
            <div className="text-base font-semibold text-white mb-3">扩展更多人群和目标</div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed mb-4">
              依靠用户数据和动态增重系统，扩展更多人群和目标。
            </p>
            <div className="flex flex-wrap gap-2">
              {["减脂教练", "高级训练/营养教练", "高级决策系统", "专业版教练"].map((item) => (
                <span key={item} className="text-xs bg-[#1a2744] text-[#8bb4e8] px-3 py-1.5 rounded-lg border border-[#2a3a5c]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
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
            <p className="text-sm text-[#8ba3c7] mb-4">Coach教练系统的历史测试评估记录</p>
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
            <p className="text-sm text-[#8ba3c7] mb-4">系统失败案例的完整追踪记录</p>
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
            <p className="text-sm text-[#8ba3c7] mb-4">关键产品决策的完整记录</p>
            <span className="text-sm text-violet-400 group-hover:underline">查看详情 →</span>
          </Link>

          <Link href="/scoring" className="group rounded-xl bg-[#141d33] border border-[#2a3a5c] p-6 hover:border-cyan-400/40 transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">评分系统</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] mb-4">双轨评分制：1.0系统合规性 + 2.0用户满意度</p>
            <span className="text-sm text-cyan-400 group-hover:underline">查看详情 →</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a2744] py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-[#4a5e80]">
            Coach教练 — AI时代的私人定制AI教练
          </p>
        </div>
      </footer>
    </div>
  );
}

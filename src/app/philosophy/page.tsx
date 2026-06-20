import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-[#1e293b] mb-2">产品理念</h1>
        <p className="text-[#64748b] text-sm">AI瘦子增重执行教练系统的设计哲学与架构蓝图</p>
      </div>

      {/* 核心使命和价值 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-6">
          <div className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-3">使命</div>
          <p className="text-lg font-semibold text-[#1a365d]">帮助吃不下的瘦子持续增重</p>
        </div>
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-6">
          <div className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-3">核心价值</div>
          <p className="text-lg font-semibold text-[#1a365d]">不是制定计划，而是帮助执行</p>
        </div>
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-6">
          <div className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-3">目标用户</div>
          <p className="text-lg font-semibold text-[#1a365d]">长期吃不胖的人</p>
        </div>
      </div>

      {/* 核心理念 */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#1a365d] mb-4">核心理念</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1a365d]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-[#1e293b]">动态调整</div>
              <p className="text-sm text-[#64748b] mt-1">不是给一个静态方案，而是根据用户每次反馈动态修正方向。每一次对话都是一次重新评估。</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1a365d]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-[#1e293b]">场景化解决问题</div>
              <p className="text-sm text-[#64748b] mt-1">不回答「怎么增重」这种泛问题，而是针对「加班族睡眠4-5h每周4练体重不涨」这种真实场景给出裁决。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 三层AI架构 */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#1a365d] mb-4">三层AI架构</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-[#1a365d]/5 border border-[#1a365d]/10">
            <div className="w-10 h-10 rounded-lg bg-[#1a365d] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">设</div>
            <div>
              <div className="font-semibold text-[#1e293b]">设计层（军师AI）</div>
              <p className="text-sm text-[#64748b] mt-1">架构设计，定义四库规则和决策逻辑。决定系统「应该怎么想」。</p>
            </div>
          </div>
          <div className="flex justify-center">
            <svg className="w-5 h-5 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-lg bg-[#16a34a]/5 border border-[#16a34a]/10">
            <div className="w-10 h-10 rounded-lg bg-[#16a34a] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">执</div>
            <div>
              <div className="font-semibold text-[#1e293b]">执行层（教练AI）</div>
              <p className="text-sm text-[#64748b] mt-1">用户问答，调用四库，输出可执行建议。决定系统「怎么跟用户说」。</p>
            </div>
          </div>
          <div className="flex justify-center">
            <svg className="w-5 h-5 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-lg bg-[#ea580c]/5 border border-[#ea580c]/10">
            <div className="w-10 h-10 rounded-lg bg-[#ea580c] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">评</div>
            <div>
              <div className="font-semibold text-[#1e293b]">评估层（战略AI）</div>
              <p className="text-sm text-[#64748b] mt-1">审计执行质量，评分，自动修复。决定系统「做得好不好，怎么改进」。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 四库系统 */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#1a365d] mb-4">四库系统</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-[#e2e8f0]">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#1a365d] text-white text-xs font-bold">K</span>
              <span className="font-semibold text-[#1e293b]">K库 · 知识解释层</span>
            </div>
            <p className="text-sm text-[#64748b]">营养与生理机制知识。回答「为什么」，提供科学解释支撑决策。每条引用不超过3句话。</p>
          </div>
          <div className="p-4 rounded-lg border border-[#e2e8f0]">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#16a34a] text-white text-xs font-bold">C</span>
              <span className="font-semibold text-[#1e293b]">C库 · 行为模式识别层</span>
            </div>
            <p className="text-sm text-[#64748b]">失败案例与用户行为匹配。识别「你这种情况别人踩过什么坑」，在R库触发后做验证。</p>
          </div>
          <div className="p-4 rounded-lg border border-[#e2e8f0]">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#ea580c] text-white text-xs font-bold">R</span>
              <span className="font-semibold text-[#1e293b]">R库 · 决策执行层（核心）</span>
            </div>
            <p className="text-sm text-[#64748b]">三级规则体系：</p>
            <div className="mt-2 space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-[#dc2626] text-white">L1</span>
                <span className="text-[#1e293b]">硬约束 — 无条件执行，不可绕过</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-[#ea580c] text-white">L2</span>
                <span className="text-[#1e293b]">诊断路由 — 有条件触发，按路径执行</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-[#16a34a] text-white">L3</span>
                <span className="text-[#1e293b]">优化建议 — 可选增强，不强制</span>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg border border-[#e2e8f0]">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#64748b] text-white text-xs font-bold">P</span>
              <span className="font-semibold text-[#1e293b]">P库 · 原则约束层</span>
            </div>
            <p className="text-sm text-[#64748b]">决策原则和输出格式约束。定义系统的行为边界——不能做什么，必须怎么做。</p>
          </div>
        </div>
      </div>

      {/* 评分体系 */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#1a365d] mb-4">评分体系（100分制）</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1a365d] text-white">
                <th className="text-left px-4 py-2.5 font-medium">维度</th>
                <th className="text-center px-4 py-2.5 font-medium">分值</th>
                <th className="text-left px-4 py-2.5 font-medium">评估重点</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dim: "R库决策质量", score: 40, focus: "规则触发准确性、路由协议执行、L1优先级遵守", color: "#ea580c" },
                { dim: "K库使用质量", score: 15, focus: "引用准确性、触发词映射、单次不超过2条每条不超过3句", color: "#1a365d" },
                { dim: "C库匹配质量", score: 10, focus: "行为模式捕捉、匹配度诚实标注", color: "#16a34a" },
                { dim: "输出质量", score: 25, focus: "行动前置、语气对话化、PC-9零术语、比喻适度", color: "#64748b" },
                { dim: "系统稳定性", score: 10, focus: "自检完整、边界检查、无矛盾输出", color: "#dc2626" },
              ].map((row, i) => (
                <tr key={row.dim} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-2.5">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: row.color }} />
                      <span className="font-medium text-[#1e293b]">{row.dim}</span>
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: row.color }}>
                      {row.score}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-[#64748b]">{row.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 产品形态 */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#1a365d] mb-4">产品形态</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[#1a365d]/5">
            <div className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-1">目标形态</div>
            <p className="text-[#1e293b] font-medium">App / 小程序</p>
          </div>
          <div className="p-4 rounded-lg bg-[#ea580c]/5">
            <div className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-1">当前阶段</div>
            <p className="text-[#1e293b] font-medium">半结构化决策系统</p>
            <p className="text-sm text-[#64748b] mt-1">可自评估、可自修复，正在边补四库边测试</p>
          </div>
        </div>
      </div>

      {/* 快速导航 */}
      <div className="flex gap-3">
        <Link
          href="/failures"
          className="px-4 py-2 rounded-lg bg-[#1a365d] text-white text-sm font-medium hover:bg-[#1a365d]/90 transition-colors"
        >
          查看失败案例库
        </Link>
        <Link
          href="/roadmap"
          className="px-4 py-2 rounded-lg border border-[#1a365d] text-[#1a365d] text-sm font-medium hover:bg-[#1a365d]/5 transition-colors"
        >
          查看产品线路图
        </Link>
      </div>
    </div>
  );
}

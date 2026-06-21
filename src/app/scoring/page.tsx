"use client";

export default function ScoringPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            评分系统
          </h1>
          <p className="text-[#8ba3c7] text-base">
            双轨评分制 —— 系统能不能跑 + 用户用着好不好
          </p>
        </div>

        {/* 双轨关系总览 */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white mb-6">
              双轨关系
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#0a0f1e]/60 rounded-xl p-5 border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-emerald-400 font-bold text-lg">1.0高 + 2.0低</span>
                </div>
                <p className="text-[#8ba3c7] text-sm">
                  系统能跑但用户不满意
                </p>
                <p className="text-amber-400 text-sm mt-2 font-medium">
                  → 产品有问题
                </p>
              </div>
              <div className="bg-[#0a0f1e]/60 rounded-xl p-5 border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-emerald-400 font-bold text-lg">双高</span>
                </div>
                <p className="text-[#8ba3c7] text-sm">
                  系统OK且用户满意
                </p>
                <p className="text-emerald-400 text-sm mt-2 font-medium">
                  → 产品方向对了
                </p>
              </div>
              <div className="bg-[#0a0f1e]/60 rounded-xl p-5 border border-rose-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-rose-400 font-bold text-lg">双低</span>
                </div>
                <p className="text-[#8ba3c7] text-sm">
                  系统不行用户也不满
                </p>
                <p className="text-rose-400 text-sm mt-2 font-medium">
                  → 回到画板
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1.0 评分 */}
        <section className="mb-10">
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-bold text-white">1.0</span>
              <span className="text-sm font-medium text-[#4a9eff] bg-[#4a9eff]/10 px-3 py-1 rounded-lg">
                系统合规性
              </span>
            </div>
            <p className="text-[#6b8ab5] text-sm mb-6">
              追踪工程基础是否退步 · 定位：门槛检查，「系统能不能跑」
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { label: "R库", max: 40, desc: "规则触发与执行" },
                { label: "K库", max: 15, desc: "知识调用精准度" },
                { label: "C库", max: 10, desc: "案例匹配质量" },
                { label: "输出", max: 25, desc: "格式与表达规范" },
                { label: "稳定性", max: 10, desc: "边界场景表现" },
              ].map((d) => (
                <div
                  key={d.label}
                  className="bg-[#0a0f1e]/60 rounded-xl p-4 border border-[#2a3a5c]"
                >
                  <div className="text-white font-bold text-lg mb-1">
                    {d.label}
                  </div>
                  <div className="text-[#4a9eff] font-mono text-2xl font-bold mb-1">
                    {d.max}
                  </div>
                  <div className="text-[#6b8ab5] text-xs">{d.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#2a3a5c] text-right">
              <span className="text-[#8ba3c7] text-sm">满分 </span>
              <span className="text-white font-bold font-mono text-xl">100</span>
            </div>
          </div>
        </section>

        {/* 2.0 评分 */}
        <section className="mb-10">
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-bold text-white">2.0</span>
              <span className="text-sm font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg">
                用户满意度
              </span>
            </div>
            <p className="text-[#6b8ab5] text-sm mb-2">
              追踪用户体验是否提升 · 定位：核心评价，「用户用着好不好」
            </p>
            <p className="text-amber-400 text-sm mb-6 font-medium">
              核心原则：做到本分不加分，追问是基本功不是亮点
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
              {[
                { label: "需求识别", max: 20, desc: "用户每个担忧都回应了吗？深层卡点看到了吗？" },
                { label: "四库质量", max: 20, desc: "调用精准吗？有凑数吗？" },
                { label: "主因判断", max: 15, desc: "优先级对吗？用户能认同吗？" },
                { label: "可执行性", max: 15, desc: "方案是给「我」做的还是给所有人做的？" },
              ].map((d) => (
                <div
                  key={d.label}
                  className="bg-[#0a0f1e]/60 rounded-xl p-4 border border-[#2a3a5c]"
                >
                  <div className="text-white font-bold text-base mb-1">
                    {d.label}
                  </div>
                  <div className="text-emerald-400 font-mono text-2xl font-bold mb-2">
                    {d.max}
                  </div>
                  <div className="text-[#6b8ab5] text-xs leading-relaxed">{d.desc}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: "表达舒适", max: 15, desc: "像真教练1对1吗？有术语吗？" },
                { label: "安全边界", max: 10, desc: "该提醒的都提醒了吗？不该碰的都没碰吗？" },
                { label: "反馈闭环", max: 5, desc: "7天后用户知道怎么继续吗？" },
                { label: "简洁度", max: 5, desc: "每句话都有用吗？" },
              ].map((d) => (
                <div
                  key={d.label}
                  className="bg-[#0a0f1e]/60 rounded-xl p-4 border border-[#2a3a5c]"
                >
                  <div className="text-white font-bold text-base mb-1">
                    {d.label}
                  </div>
                  <div className="text-emerald-400 font-mono text-2xl font-bold mb-2">
                    {d.max}
                  </div>
                  <div className="text-[#6b8ab5] text-xs leading-relaxed">{d.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#2a3a5c] text-right">
              <span className="text-[#8ba3c7] text-sm">满分 </span>
              <span className="text-white font-bold font-mono text-xl">100</span>
            </div>
          </div>
        </section>

        {/* 2.0 评分门槛 */}
        <section className="mb-10">
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white mb-6">
              2.0 评分门槛
            </h2>
            <div className="space-y-3">
              {[
                { range: "90+", color: "emerald", desc: "用户觉得「这个教练真的懂我，替我想到了前面」" },
                { range: "80-89", color: "amber", desc: "基本满意但有明显遗憾" },
                { range: "70-79", color: "sky", desc: "能用但还差点意思" },
                { range: "60-69", color: "orange", desc: "不够好" },
                { range: "<60", color: "rose", desc: "不能用" },
              ].map((t) => {
                const colorMap: Record<string, string> = {
                  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                  sky: "text-sky-400 bg-sky-500/10 border-sky-500/20",
                  orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
                  rose: "text-rose-400 bg-rose-500/10 border-rose-500/20",
                };
                const colorClass = colorMap[t.color] || "";
                return (
                  <div
                    key={t.range}
                    className={`flex items-center gap-4 rounded-xl px-5 py-4 border ${colorClass}`}
                  >
                    <span className={`font-mono font-bold text-lg min-w-[70px]`}>
                      {t.range}
                    </span>
                    <span className="text-[#8ba3c7] text-sm">{t.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 版本适用说明 */}
        <section>
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white mb-4">
              版本适用
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#4a9eff] font-mono font-bold min-w-[80px]">V5/V6/V6.1</span>
                <span className="text-[#8ba3c7]">仅有1.0评分（系统合规性）</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-mono font-bold min-w-[80px]">V6.2起</span>
                <span className="text-[#8ba3c7]">双轨评分（1.0系统合规性 + 2.0用户满意度）</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

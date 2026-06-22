export default function RoadmapPage() {
  const sectionBg = "bg-[#141d33] border border-[#2a3a5c] rounded-xl";
  const head = "text-base font-semibold text-white";
  const body = "text-sm text-[#8ba3c7]";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">四库系统线路图</h1>
        <p className="text-[#8ba3c7]">AI增肌教练 · 四大库系统全流程图（设计→演化→升级）</p>
      </div>

      {/* ① 系统设计层 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">系统设计全流程图</h2>
        <div className="space-y-4">

          {/* ① 系统设计层 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">①</span>
              <h3 className={head}>系统设计层（Concept Design）</h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="bg-[#1a2744] rounded-lg px-3 py-1.5 text-[#8ba3c7]">目标定义</span>
              <span className="text-[#4a5e80]">→</span>
              <span className="bg-[#4a9eff] text-white rounded-lg px-3 py-1.5 font-medium">AI增肌教练系统</span>
              <span className="text-[#4a5e80]">→</span>
              <span className="bg-[#1a2744] rounded-lg px-3 py-1.5 text-[#8ba3c7]">问题拆解：为什么不长肌肉？</span>
              <span className="text-[#4a5e80]">→</span>
              <span className="bg-[#1a2744] rounded-lg px-3 py-1.5 text-[#8ba3c7]">拆分维度：摄入 / 吸收 / 训练 / 恢复</span>
              <span className="text-[#4a5e80]">→</span>
              <span className="bg-[#1a2744] rounded-lg px-3 py-1.5 text-[#8ba3c7]">抽象系统结构</span>
              <span className="text-[#4a5e80]">→</span>
              <span className="bg-emerald-900/40 text-emerald-400 rounded-lg px-3 py-1.5 font-medium">四大库框架诞生</span>
            </div>
          </div>

          {/* ② 四库初始结构层 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">②</span>
              <h3 className={head}>四库初始结构层（V1设计）</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-3">
              <div className="bg-[#1a2744] rounded-lg p-3 text-center">
                <div className="font-semibold text-white">K库（知识）</div>
                <div className="text-xs text-[#6b8ab5] mt-1">生理学/营养学/训练原理</div>
              </div>
              <div className="bg-[#1a2744] rounded-lg p-3 text-center">
                <div className="font-semibold text-white">C库（案例）</div>
                <div className="text-xs text-[#6b8ab5] mt-1">增肌失败现象集合</div>
              </div>
              <div className="bg-[#1a2744] rounded-lg p-3 text-center">
                <div className="font-semibold text-white">R库（规则）</div>
                <div className="text-xs text-[#6b8ab5] mt-1">简单判断逻辑（未分层）</div>
              </div>
              <div className="bg-[#1a2744] rounded-lg p-3 text-center">
                <div className="font-semibold text-white">P库（原则）</div>
                <div className="text-xs text-[#6b8ab5] mt-1">基础认知（热量、恢复等）</div>
              </div>
            </div>
            <div className={body}>输出：经验型AI教练（解释为主）</div>
          </div>

          {/* ③ 测试与问题暴露层 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-white text-xs font-bold flex items-center justify-center">③</span>
              <h3 className={head}>测试与问题暴露层（V2-V4）</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-white mb-2">输入 → 输出 → 问题暴露：</div>
                <ol className="space-y-1.5 text-[#8ba3c7]">
                  <li><span className="text-[#4a9eff] font-medium">1.</span> K库过度解释（无决策）</li>
                  <li><span className="text-[#4a9eff] font-medium">2.</span> C库只是贴标签</li>
                  <li><span className="text-[#4a9eff] font-medium">3.</span> R库没有优先级</li>
                  <li><span className="text-[#4a9eff] font-medium">4.</span> 多因素混乱（无主因）</li>
                  <li><span className="text-[#4a9eff] font-medium">5.</span> 输出不可执行</li>
                </ol>
              </div>
              <div className="flex items-center">
                <span className="bg-red-900/40 text-red-400 rounded-lg px-3 py-2 font-medium text-sm">→ 系统失效模式确认</span>
              </div>
            </div>
          </div>

          {/* ④ 关键升级层 */}
          <div className={`${sectionBg} p-5 border-red-900/40`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white text-xs font-bold flex items-center justify-center">④</span>
              <h3 className={head}>关键升级层（V5重构）</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex gap-2">
                <span className="text-[#4a9eff] font-medium shrink-0">R库升级</span>
                <span className="text-[#8ba3c7]">按维度拆分（摄入/吸收/训练/恢复）、分层结构（L1/L2/L3）</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#4a9eff] font-medium shrink-0">C库升级</span>
                <span className="text-[#8ba3c7]">从「现象」→「行为模式」</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#4a9eff] font-medium shrink-0">K库约束</span>
                <span className="text-[#8ba3c7]">只能解释，不能决策</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#4a9eff] font-medium shrink-0">P库强化</span>
                <span className="text-[#8ba3c7]">成为系统逻辑边界</span>
              </div>
            </div>
            <div className="mt-3 text-sm font-medium text-[#4a9eff]">系统进入：分层决策AI</div>
          </div>

          {/* ⑤ 战略控制层 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-violet-600 text-white text-xs font-bold flex items-center justify-center">⑤</span>
              <h3 className={head}>战略控制层（新增）</h3>
            </div>
            <div className="text-sm mb-3 text-[#8ba3c7]">执行AI输出 → 战略AI评估：</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs mb-3">
              <div className="bg-violet-900/30 border border-violet-800/40 rounded-lg p-2 text-center text-violet-300">R库是否正确触发</div>
              <div className="bg-violet-900/30 border border-violet-800/40 rounded-lg p-2 text-center text-violet-300">K库是否滥用</div>
              <div className="bg-violet-900/30 border border-violet-800/40 rounded-lg p-2 text-center text-violet-300">C库是否误匹配</div>
              <div className="bg-violet-900/30 border border-violet-800/40 rounded-lg p-2 text-center text-violet-300">是否可执行</div>
              <div className="bg-violet-900/30 border border-violet-800/40 rounded-lg p-2 text-center text-violet-300">是否系统收敛</div>
            </div>
            <div className="text-sm text-[#8ba3c7]">
              → 评分系统（0-100）→ 系统质量量化
            </div>
          </div>

          {/* ⑥ 自动修复层 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-amber-600 text-white text-xs font-bold flex items-center justify-center">⑥</span>
              <h3 className={head}>自动修复层（V6目标）</h3>
            </div>
            <div className="text-sm mb-3 text-[#8ba3c7]">战略AI输出 → 问题识别 → 自动修复建议：</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3">
              <div className="bg-amber-900/30 border border-amber-800/40 rounded-lg p-2 text-center text-amber-300">R库规则冲突修复</div>
              <div className="bg-amber-900/30 border border-amber-800/40 rounded-lg p-2 text-center text-amber-300">权重调整</div>
              <div className="bg-amber-900/30 border border-amber-800/40 rounded-lg p-2 text-center text-amber-300">结构重排</div>
              <div className="bg-amber-900/30 border border-amber-800/40 rounded-lg p-2 text-center text-amber-300">C库行为模式优化</div>
            </div>
            <div className="text-sm text-[#8ba3c7]">→ 反馈回系统设计层 → 形成闭环</div>
          </div>

          {/* ⑦ 完整闭环系统 */}
          <div className="bg-gradient-to-r from-[#4a9eff]/20 to-[#141d33] border border-[#4a9eff]/30 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-[#4a9eff] text-white text-xs font-bold flex items-center justify-center">⑦</span>
              <h3 className="text-base font-semibold text-white">完整闭环系统（最终形态）</h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="bg-[#1a2744] rounded-lg px-3 py-1.5 text-[#8ba3c7]">用户问题</span>
              <span className="text-[#4a9eff]">→</span>
              <span className="bg-[#1a2744] rounded-lg px-3 py-1.5 text-[#8ba3c7]">执行AI（教练）</span>
              <span className="text-[#4a9eff]">→</span>
              <span className="bg-[#1a2744] rounded-lg px-3 py-1.5 text-[#8ba3c7]">四库决策（K/C/R/P）</span>
              <span className="text-[#4a9eff]">→</span>
              <span className="bg-[#1a2744] rounded-lg px-3 py-1.5 text-[#8ba3c7]">输出答案</span>
              <span className="text-[#4a9eff]">→</span>
              <span className="bg-[#1a2744] rounded-lg px-3 py-1.5 text-[#8ba3c7]">战略AI评分</span>
              <span className="text-[#4a9eff]">→</span>
              <span className="bg-[#1a2744] rounded-lg px-3 py-1.5 text-[#8ba3c7]">自动修复</span>
              <span className="text-[#4a9eff]">→</span>
              <span className="bg-[#4a9eff]/20 text-[#4a9eff] rounded-lg px-3 py-1.5 font-medium">回流优化四库</span>
              <span className="text-[#4a9eff]">→</span>
              <span className="bg-[#4a9eff]/20 text-[#4a9eff] rounded-lg px-3 py-1.5 font-medium">系统升级</span>
              <span className="text-[#4a9eff]">→</span>
              <span className="bg-[#4a9eff]/30 text-white rounded-lg px-3 py-1.5 font-semibold">下一轮更稳定输出</span>
            </div>
          </div>
        </div>
      </div>

      {/* 版本演化 */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6">版本演化</h2>
        <div className="space-y-4">

          {/* V1 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#4a9eff]">V1</span>
              <span className="text-sm font-semibold text-white">规则雏形</span>
              <span className="text-xs bg-[#4a5e80]/40 text-[#6b8ab5] px-2 py-0.5 rounded-lg">已归档</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#4a9eff]">特点：</span><span className="text-[#8ba3c7]">基本依赖K库解释、无规则优先级、输出偏「科普型建议」、能解释但不能裁决</span></div>
              <div className="bg-[#1a2744] rounded-lg p-2.5 mt-2"><span className="font-medium text-[#4a9eff]">结论：</span><span className="text-[#8ba3c7]">K库可以解释增重失败，但只靠知识解释无法形成动态增重系统</span></div>
            </div>
          </div>

          {/* V2 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#4a9eff]">V2</span>
              <span className="text-sm font-semibold text-white">引入C库</span>
              <span className="text-xs bg-[#4a5e80]/40 text-[#6b8ab5] px-2 py-0.5 rounded-lg">已归档</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#4a9eff]">特点：</span><span className="text-[#8ba3c7]">引入失败案例分类、可识别「吃很多但不长」、C库开始辅助判断</span></div>
              <div className="bg-[#1a2744] rounded-lg p-2.5 mt-2"><span className="font-medium text-[#4a9eff]">结论：</span><span className="text-[#8ba3c7]">C库必须存在但C库不能替代R库，案例匹配不等于规则裁决</span></div>
            </div>
          </div>

          {/* V3 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#4a9eff]">V3</span>
              <span className="text-sm font-semibold text-white">引入R库</span>
              <span className="text-xs bg-[#4a5e80]/40 text-[#6b8ab5] px-2 py-0.5 rounded-lg">已归档</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#4a9eff]">特点：</span><span className="text-[#8ba3c7]">开始规则化判断（R001/R002/R003）、系统开始具备决策雏形</span></div>
              <div className="bg-[#1a2744] rounded-lg p-2.5 mt-2"><span className="font-medium text-[#4a9eff]">结论：</span><span className="text-[#8ba3c7]">R库是动态增重系统的核心，但不能只是规则列表，必须结构化</span></div>
            </div>
          </div>

          {/* V4 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#4a9eff]">V4</span>
              <span className="text-sm font-semibold text-white">规则执行强化</span>
              <span className="text-xs bg-[#4a5e80]/40 text-[#6b8ab5] px-2 py-0.5 rounded-lg">已归档</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#4a9eff]">特点：</span><span className="text-[#8ba3c7]">R库开始主导决策、输出出现「裁决式逻辑」、系统从建议型变成判断型</span></div>
              <div className="bg-[#1a2744] rounded-lg p-2.5 mt-2"><span className="font-medium text-[#4a9eff]">结论：</span><span className="text-[#8ba3c7]">R库可以让系统具备裁决能力，但裁决能力必须受P库和输出层控制</span></div>
            </div>
          </div>

          {/* V5 */}
          <div className={`${sectionBg} p-5 border-red-900/40`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-red-400">V5</span>
              <span className="text-sm font-semibold text-white">规则强制裁决版</span>
              <span className="text-xs bg-red-900/40 text-red-400 px-2 py-0.5 rounded-lg">基线 · 61分</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#4a9eff]">核心改造：</span><span className="text-[#8ba3c7]">R库按维度拆分+分层（L1/L2/L3）、C库升级为行为模式识别、K库约束为只解释不决策、P库成为系统逻辑边界</span></div>
              <div><span className="font-medium text-[#4a9eff]">特点：</span><span className="text-[#8ba3c7]">R库开始「强制裁决」、L1类规则开始具备不可覆盖属性</span></div>
              <div className="bg-red-900/20 rounded-lg p-2.5 mt-2"><span className="font-medium text-red-400">结论：</span><span className="text-[#8ba3c7]">R库强制裁决是必要的，系统必须进入可评估、可审计、可修复阶段</span></div>
            </div>
          </div>

          {/* V6 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-amber-400">V6</span>
              <span className="text-sm font-semibold text-white">评分评估与系统修复版</span>
              <span className="text-xs bg-amber-900/40 text-amber-400 px-2 py-0.5 rounded-lg">已完成</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#4a9eff]">核心变化：</span><span className="text-[#8ba3c7]">建立评分评估体系、引入双轨评分制（1.0系统合规性+2.0用户满意度）、系统质量可量化可追踪</span></div>
              <div><span className="font-medium text-[#4a9eff]">关键进展：</span><span className="text-[#8ba3c7]">建立战略控制层、评分系统驱动问题识别、修复方向从「凭感觉」进入「数据驱动」</span></div>
              <div className="bg-amber-900/20 rounded-lg p-2.5 mt-2"><span className="font-medium text-amber-400">结论：</span><span className="text-[#8ba3c7]">评分评估让系统进入可量化阶段，自动修复闭环成为可能</span></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  const sectionBg = "bg-[#141d33] border border-[#2a3a5c] rounded-xl";
  const label = "text-xs font-medium text-[#6b8ab5]";
  const body = "text-sm text-[#8ba3c7]";
  const head = "text-base font-semibold text-white";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">产品线路图</h1>
        <p className="text-[#8ba3c7]">四库系统全流程设计 → 测试版本演化 → 完整闭环</p>
      </div>

      {/* 一、系统设计全流程图 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">一、系统设计全流程图</h2>
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

      {/* 二、测试版本演化 */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6">二、测试版本演化</h2>
        <div className="space-y-4">

          {/* V1 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#4a9eff]">V1</span>
              <span className="text-sm font-semibold text-white">规则雏形</span>
              <span className="text-xs bg-[#4a5e80]/40 text-[#6b8ab5] px-2 py-0.5 rounded-lg">已归档</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#4a9eff]">系统形态：</span><span className="text-[#8ba3c7]">主要依赖K库解释，偏科普型</span></div>
              <div><span className="font-medium text-[#4a9eff]">当时特点：</span><span className="text-[#8ba3c7]">基本依赖K库解释、无规则优先级、输出偏「科普型建议」、能解释但不能裁决</span></div>
              <div><span className="font-medium text-[#4a9eff]">暴露问题：</span><span className="text-[#8ba3c7]">无真正决策机制、无收敛能力、容易把所有可能性都列出、用户看完仍不知道先做什么</span></div>
              <div className="bg-[#1a2744] rounded-lg p-2.5 mt-2"><span className="font-medium text-[#4a9eff]">版本结论：</span><span className="text-[#8ba3c7]">K库可以解释增重失败，但只靠知识解释无法形成动态增重系统</span></div>
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
              <div><span className="font-medium text-[#4a9eff]">系统形态：</span><span className="text-[#8ba3c7]">引入C库用失败案例辅助识别用户问题</span></div>
              <div><span className="font-medium text-[#4a9eff]">当时特点：</span><span className="text-[#8ba3c7]">引入失败案例分类、可识别「吃很多但不长」、C库开始辅助判断</span></div>
              <div><span className="font-medium text-[#4a9eff]">暴露问题：</span><span className="text-[#8ba3c7]">仍然容易「贴案例」、没有真正决策逻辑、C库只能识别模式不能决定动作</span></div>
              <div className="bg-[#1a2744] rounded-lg p-2.5 mt-2"><span className="font-medium text-[#4a9eff]">版本结论：</span><span className="text-[#8ba3c7]">C库必须存在但C库不能替代R库，案例匹配不等于规则裁决</span></div>
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
              <div><span className="font-medium text-[#4a9eff]">系统形态：</span><span className="text-[#8ba3c7]">引入R库，系统从「解释问题」进入「规则化判断」</span></div>
              <div>
                <span className="font-medium text-[#4a9eff]">规则：</span>
                <span className="text-[#8ba3c7]">R001睡眠不足6h→降低训练量优先恢复、R002连续疲劳评分过高→增加休息日、R003恢复评分低于压力评分→暂停增加训练负荷</span>
              </div>
              <div><span className="font-medium text-[#4a9eff]">暴露问题：</span><span className="text-[#8ba3c7]">规则未分层、多主因混乱、R库规则数量少、摄入/吸收/训练维度仍然空白</span></div>
              <div className="bg-[#1a2744] rounded-lg p-2.5 mt-2"><span className="font-medium text-[#4a9eff]">版本结论：</span><span className="text-[#8ba3c7]">R库是动态增重系统的核心，但R库不能只是规则列表必须结构化</span></div>
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
              <div><span className="font-medium text-[#4a9eff]">系统形态：</span><span className="text-[#8ba3c7]">R库开始主导决策，输出出现问题分类、唯一主因、规则依据、执行方案、记录数据、7天后修正机制</span></div>
              <div><span className="font-medium text-[#4a9eff]">当时特点：</span><span className="text-[#8ba3c7]">R库主导决策、输出出现「裁决式逻辑」、系统从建议型变成判断型</span></div>
              <div><span className="font-medium text-[#4a9eff]">暴露问题：</span><span className="text-[#8ba3c7]">仍可能过度依赖规则、K库解释过重、用户层与系统层混在一起、系统容易暴露内部逻辑</span></div>
              <div className="bg-[#1a2744] rounded-lg p-2.5 mt-2"><span className="font-medium text-[#4a9eff]">版本结论：</span><span className="text-[#8ba3c7]">R库可以让系统具备裁决能力，但裁决能力必须受P库和输出层控制</span></div>
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
              <div><span className="font-medium text-[#4a9eff]">系统形态：</span><span className="text-[#8ba3c7]">R库开始「强制裁决」、输出结构稳定（分类→规则→K解释→方案）、出现「恢复优先」稳定逻辑</span></div>
              <div><span className="font-medium text-[#4a9eff]">核心改造：</span><span className="text-[#8ba3c7]">R库按维度拆分+分层（L1/L2/L3）、C库升级为行为模式识别、K库约束为只解释不决策、P库成为系统逻辑边界</span></div>
              <div><span className="font-medium text-[#4a9eff]">暴露问题：</span><span className="text-[#8ba3c7]">输出未分层系统术语泄漏、行动方案靠后、报告语气生硬、吸收维度空白、K库触发词遗漏、路由B无质量检查、R002缺量化标准</span></div>
              <div className="bg-red-900/20 rounded-lg p-2.5 mt-2"><span className="font-medium text-red-400">版本结论：</span><span className="text-[#8ba3c7]">决策层结构已稳定，但输出层和稳定性需要全面改造</span></div>
            </div>
          </div>

          {/* V6 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-amber-400">V6</span>
              <span className="text-sm font-semibold text-white">决策层改造</span>
              <span className="text-xs bg-amber-900/40 text-amber-400 px-2 py-0.5 rounded-lg">已完成 · 88.5分</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#4a9eff]">核心变化：</span><span className="text-[#8ba3c7]">R003升级为L1硬约束、路由协议建立、C库强制调用、评分框架升级为产品级</span></div>
              <div><span className="font-medium text-[#4a9eff]">维度均分：</span><span className="text-[#8ba3c7]">R库37.3/40 · K库13.5/15 · C库9.7/10 · 输出21.0/25 · 稳定性7.8/10</span></div>
              <div><span className="font-medium text-[#4a9eff]">残留问题：</span><span className="text-[#8ba3c7]">8项未修复——输出未分层系统术语泄漏(阻断)、行动方案靠后(阻断)、报告语气生硬(阻断)等</span></div>
            </div>
          </div>

          {/* V6.1 */}
          <div className="bg-[#141d33] border-2 border-[#4a9eff]/40 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-emerald-400">V6.1</span>
              <span className="text-sm font-semibold text-white">输出层改造</span>
              <span className="text-xs bg-emerald-900/40 text-emerald-400 px-2 py-0.5 rounded-lg">当前最高分 · 95分</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#4a9eff]">核心变化：</span><span className="text-[#8ba3c7]">11项输出层改造——双层输出架构、PC-9约束、R010吸收规则、主动恢复模板、K库触发词映射、路由B转译、自检清单扩展等</span></div>
              <div><span className="font-medium text-[#4a9eff]">维度均分：</span><span className="text-[#8ba3c7]">R库38.2/40 · K库14.3/15 · C库9.8/10 · 输出23.3/25 · 稳定性9.5/10</span></div>
              <div className="bg-emerald-900/20 rounded-lg p-2.5 mt-2"><span className="font-medium text-emerald-400">修复状态：</span><span className="text-[#8ba3c7]">8/8 全部修复 ✅ · V6→V6.1提升 +6.5分</span></div>
            </div>
          </div>

          {/* V6.2 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-amber-400">V6.2</span>
              <span className="text-sm font-semibold text-white">待执行</span>
              <span className="text-xs bg-amber-900/40 text-amber-400 px-2 py-0.5 rounded-lg">待执行</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#4a9eff]">4项修复计划：</span></div>
              <ol className="space-y-1.5 text-[#8ba3c7] ml-4">
                <li><span className="text-[#4a9eff] font-medium">1.</span> PC-10路由B质量检查正式化</li>
                <li><span className="text-[#4a9eff] font-medium">2.</span> CM005补剂场景强制扫描</li>
                <li><span className="text-[#4a9eff] font-medium">3.</span> PC-2数值模糊化</li>
                <li><span className="text-[#4a9eff] font-medium">4.</span> 比喻篇幅压缩规范</li>
              </ol>
            </div>
          </div>

          {/* V7 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#6b8ab5]">V7</span>
              <span className="text-sm font-semibold text-white">上线后迭代</span>
              <span className="text-xs bg-[#4a5e80]/40 text-[#6b8ab5] px-2 py-0.5 rounded-lg">规划中</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#4a9eff]">方向：</span><span className="text-[#8ba3c7]">数据驱动——R002疲劳量化、K库实操条目、用户反馈闭环</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 九、四库整理流程调整 */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-white mb-6">九、2026-06-21 四库整理流程调整</h2>
        <div className="space-y-4">

          {/* 1. 本阶段定位 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-[#4a9eff] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h3 className={head}>本阶段定位</h3>
            </div>
            <div className={body}>本阶段不记录具体新增知识，只记录四库整理流程和架构调整。</div>
          </div>

          {/* 2. K库定位调整 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">2</span>
              <h3 className={head}>K库定位调整</h3>
            </div>
            <div className={body}>K库不再只服务增肌解释。之后K库知识应尽量同时考虑：增肌、减脂、训练表现、恢复状态、健康边界。</div>
          </div>

          {/* 3. 跨库联动规则 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-violet-600 text-white text-xs font-bold flex items-center justify-center">3</span>
              <h3 className={head}>跨库联动规则</h3>
            </div>
            <div className={body}>每次录入K库知识时，必须即时判断是否需要同步更新：R库、C库、P库、PC库。</div>
          </div>

          {/* 4. 五条复审机制 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-white text-xs font-bold flex items-center justify-center">4</span>
              <h3 className={head}>五条复审机制</h3>
            </div>
            <div className={body}>每连续录入5条K库内容后，必须复审是否产生新的规则、案例、原则或输出控制。</div>
          </div>

          {/* 5. 入库格式要求 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white text-xs font-bold flex items-center justify-center">5</span>
              <h3 className={head}>入库格式要求</h3>
            </div>
            <div className={body}>所有入库内容必须严格遵守对应库格式。规则类内容必须用代码块作为完整整体记录。发送前必须检查：编号、库别、格式、代码块完整性、是否重复、是否遗漏。</div>
          </div>

          {/* 6. 重复知识处理 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">6</span>
              <h3 className={head}>重复知识处理</h3>
            </div>
            <div className={body}>如果用户输入重复知识，必须提醒，并判断是补充、修正，还是新建编号。</div>
          </div>

          {/* 7. RAG适配意识 */}
          <div className={`${sectionBg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-teal-600 text-white text-xs font-bold flex items-center justify-center">7</span>
              <h3 className={head}>RAG适配意识</h3>
            </div>
            <div className={body}>四库格式本身就是未来RAG质量的基础。四库记录必须服务于后续检索、调用、审计和回写。</div>
          </div>

          {/* 8. 阶段结论 */}
          <div className="bg-gradient-to-r from-[#4a9eff]/20 to-[#141d33] border border-[#4a9eff]/30 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-[#4a9eff] text-white text-xs font-bold flex items-center justify-center">8</span>
              <h3 className="text-base font-semibold text-white">阶段结论</h3>
            </div>
            <div className="text-sm text-[#8ba3c7]">
              四库系统从<span className="text-white font-medium">「边整理边记录」</span>，升级为<span className="text-[#4a9eff] font-medium">「边整理知识，边提取规则，边识别案例，边结构化准备」</span>。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

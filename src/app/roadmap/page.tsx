export default function RoadmapPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-[#1e293b] mb-2">产品线路图</h1>
        <p className="text-[#64748b] text-sm">四库系统全流程设计 → 测试版本演化 → 完整闭环</p>
      </div>

      {/* 一、系统设计全流程图 */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-[#1e293b] mb-5">一、系统设计全流程图</h2>
        <div className="space-y-4">

          {/* ① 系统设计层 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded bg-blue-600 text-white text-xs font-bold flex items-center justify-center">①</span>
              <h3 className="text-base font-semibold text-[#1a365d]">系统设计层（Concept Design）</h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="bg-[#f0f4f8] rounded px-3 py-1.5">目标定义</span>
              <span className="text-[#64748b]">→</span>
              <span className="bg-[#1a365d] text-white rounded px-3 py-1.5">AI增肌教练系统（解决增肌失败问题）</span>
              <span className="text-[#64748b]">→</span>
              <span className="bg-[#f0f4f8] rounded px-3 py-1.5">问题拆解：为什么不长肌肉？</span>
              <span className="text-[#64748b]">→</span>
              <span className="bg-[#f0f4f8] rounded px-3 py-1.5">拆分维度：摄入 / 吸收 / 训练 / 恢复</span>
              <span className="text-[#64748b]">→</span>
              <span className="bg-[#f0f4f8] rounded px-3 py-1.5">抽象系统结构</span>
              <span className="text-[#64748b]">→</span>
              <span className="bg-blue-100 text-blue-800 rounded px-3 py-1.5 font-medium">四大库框架诞生</span>
            </div>
          </div>

          {/* ② 四库初始结构层 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded bg-green-600 text-white text-xs font-bold flex items-center justify-center">②</span>
              <h3 className="text-base font-semibold text-[#1a365d]">四库初始结构层（V1设计）</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-3">
              <div className="bg-[#f0f4f8] rounded p-3 text-center">
                <div className="font-semibold text-[#1a365d]">K库（知识）</div>
                <div className="text-[#64748b] text-xs mt-1">生理学/营养学/训练原理</div>
              </div>
              <div className="bg-[#f0f4f8] rounded p-3 text-center">
                <div className="font-semibold text-[#1a365d]">C库（案例）</div>
                <div className="text-[#64748b] text-xs mt-1">增肌失败现象集合</div>
              </div>
              <div className="bg-[#f0f4f8] rounded p-3 text-center">
                <div className="font-semibold text-[#1a365d]">R库（规则）</div>
                <div className="text-[#64748b] text-xs mt-1">简单判断逻辑（未分层）</div>
              </div>
              <div className="bg-[#f0f4f8] rounded p-3 text-center">
                <div className="font-semibold text-[#1a365d]">P库（原则）</div>
                <div className="text-[#64748b] text-xs mt-1">基础认知（热量、恢复等）</div>
              </div>
            </div>
            <div className="text-sm text-[#64748b]">输出：经验型AI教练（解释为主）</div>
          </div>

          {/* ③ 测试与问题暴露层 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded bg-yellow-500 text-white text-xs font-bold flex items-center justify-center">③</span>
              <h3 className="text-base font-semibold text-[#1a365d]">测试与问题暴露层（V2-V4）</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-[#1e293b] mb-2">输入 → 输出 → 问题暴露：</div>
                <ol className="space-y-1.5 text-[#1e293b]">
                  <li><span className="text-[#1a365d] font-medium">1.</span> K库过度解释（无决策）</li>
                  <li><span className="text-[#1a365d] font-medium">2.</span> C库只是贴标签</li>
                  <li><span className="text-[#1a365d] font-medium">3.</span> R库没有优先级</li>
                  <li><span className="text-[#1a365d] font-medium">4.</span> 多因素混乱（无主因）</li>
                  <li><span className="text-[#1a365d] font-medium">5.</span> 输出不可执行</li>
                </ol>
              </div>
              <div className="flex items-center">
                <span className="bg-red-100 text-red-800 rounded px-3 py-2 font-medium text-sm">→ 系统失效模式确认</span>
              </div>
            </div>
          </div>

          {/* ④ 关键升级层 */}
          <div className="bg-white rounded-lg border-2 border-red-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded bg-red-600 text-white text-xs font-bold flex items-center justify-center">④</span>
              <h3 className="text-base font-semibold text-[#1a365d]">关键升级层（V5重构）</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex gap-2">
                <span className="text-[#1a365d] font-medium shrink-0">R库升级</span>
                <span>按维度拆分（摄入/吸收/训练/恢复）、分层结构（L1/L2/L3）</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#1a365d] font-medium shrink-0">C库升级</span>
                <span>从「现象」→「行为模式」</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#1a365d] font-medium shrink-0">K库约束</span>
                <span>只能解释，不能决策</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#1a365d] font-medium shrink-0">P库强化</span>
                <span>成为系统逻辑边界</span>
              </div>
            </div>
            <div className="mt-3 text-sm font-medium text-[#1a365d]">系统进入：分层决策AI</div>
          </div>

          {/* ⑤ 战略控制层 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded bg-purple-600 text-white text-xs font-bold flex items-center justify-center">⑤</span>
              <h3 className="text-base font-semibold text-[#1a365d]">战略控制层（新增）</h3>
            </div>
            <div className="text-sm mb-3 text-[#1e293b]">执行AI输出 → 战略AI评估：</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs mb-3">
              <div className="bg-purple-50 border border-purple-200 rounded p-2 text-center">R库是否正确触发</div>
              <div className="bg-purple-50 border border-purple-200 rounded p-2 text-center">K库是否滥用</div>
              <div className="bg-purple-50 border border-purple-200 rounded p-2 text-center">C库是否误匹配</div>
              <div className="bg-purple-50 border border-purple-200 rounded p-2 text-center">是否可执行</div>
              <div className="bg-purple-50 border border-purple-200 rounded p-2 text-center">是否系统收敛</div>
            </div>
            <div className="text-sm">
              <span className="text-[#64748b]">→</span> 评分系统（0-100）<span className="text-[#64748b]">→</span> 系统质量量化
            </div>
          </div>

          {/* ⑥ 自动修复层 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded bg-orange-500 text-white text-xs font-bold flex items-center justify-center">⑥</span>
              <h3 className="text-base font-semibold text-[#1a365d]">自动修复层（V6目标）</h3>
            </div>
            <div className="text-sm mb-3 text-[#1e293b]">战略AI输出 → 问题识别 → 自动修复建议：</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3">
              <div className="bg-orange-50 border border-orange-200 rounded p-2 text-center">R库规则冲突修复</div>
              <div className="bg-orange-50 border border-orange-200 rounded p-2 text-center">权重调整</div>
              <div className="bg-orange-50 border border-orange-200 rounded p-2 text-center">结构重排</div>
              <div className="bg-orange-50 border border-orange-200 rounded p-2 text-center">C库行为模式优化</div>
            </div>
            <div className="text-sm">
              <span className="text-[#64748b]">→</span> 反馈回系统设计层 <span className="text-[#64748b]">→</span> 形成闭环
            </div>
          </div>

          {/* ⑦ 完整闭环系统 */}
          <div className="bg-[#1a365d] rounded-lg p-5 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded bg-white text-[#1a365d] text-xs font-bold flex items-center justify-center">⑦</span>
              <h3 className="text-base font-semibold">完整闭环系统（最终形态）</h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="bg-white/20 rounded px-3 py-1.5">用户问题</span>
              <span className="text-blue-200">→</span>
              <span className="bg-white/20 rounded px-3 py-1.5">执行AI（教练）</span>
              <span className="text-blue-200">→</span>
              <span className="bg-white/20 rounded px-3 py-1.5">四库决策（K/C/R/P）</span>
              <span className="text-blue-200">→</span>
              <span className="bg-white/20 rounded px-3 py-1.5">输出答案</span>
              <span className="text-blue-200">→</span>
              <span className="bg-white/20 rounded px-3 py-1.5">战略AI评分</span>
              <span className="text-blue-200">→</span>
              <span className="bg-white/20 rounded px-3 py-1.5">自动修复</span>
              <span className="text-blue-200">→</span>
              <span className="bg-white/30 rounded px-3 py-1.5 font-medium">回流优化四库</span>
              <span className="text-blue-200">→</span>
              <span className="bg-white/30 rounded px-3 py-1.5 font-medium">系统升级</span>
              <span className="text-blue-200">→</span>
              <span className="bg-white/40 rounded px-3 py-1.5 font-semibold">下一轮更稳定输出</span>
            </div>
          </div>
        </div>
      </div>

      {/* 二、测试版本演化 */}
      <div>
        <h2 className="text-lg font-semibold text-[#1e293b] mb-5">二、测试版本演化</h2>
        <div className="space-y-5">

          {/* V1 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#1a365d]">V1</span>
              <span className="text-sm font-semibold text-[#1e293b]">规则雏形</span>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">已归档</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#1a365d]">系统形态：</span><span className="text-[#1e293b]">主要依赖K库解释，偏科普型</span></div>
              <div><span className="font-medium text-[#1a365d]">当时特点：</span><span className="text-[#1e293b]">基本依赖K库解释、无规则优先级、输出偏「科普型建议」、能解释但不能裁决</span></div>
              <div><span className="font-medium text-[#1a365d]">暴露问题：</span><span className="text-[#1e293b]">无真正决策机制、无收敛能力、容易把所有可能性都列出、用户看完仍不知道先做什么</span></div>
              <div className="bg-[#f0f4f8] rounded p-2.5 mt-2"><span className="font-medium text-[#1a365d]">版本结论：</span><span className="text-[#1e293b]">K库可以解释增重失败，但只靠知识解释无法形成动态增重系统</span></div>
            </div>
          </div>

          {/* V2 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#1a365d]">V2</span>
              <span className="text-sm font-semibold text-[#1e293b]">引入C库</span>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">已归档</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#1a365d]">系统形态：</span><span className="text-[#1e293b]">引入C库用失败案例辅助识别用户问题</span></div>
              <div><span className="font-medium text-[#1a365d]">当时特点：</span><span className="text-[#1e293b]">引入失败案例分类、可识别「吃很多但不长」、C库开始辅助判断</span></div>
              <div><span className="font-medium text-[#1a365d]">暴露问题：</span><span className="text-[#1e293b]">仍然容易「贴案例」、没有真正决策逻辑、C库只能识别模式不能决定动作</span></div>
              <div className="bg-[#f0f4f8] rounded p-2.5 mt-2"><span className="font-medium text-[#1a365d]">版本结论：</span><span className="text-[#1e293b]">C库必须存在但C库不能替代R库，案例匹配不等于规则裁决</span></div>
            </div>
          </div>

          {/* V3 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#1a365d]">V3</span>
              <span className="text-sm font-semibold text-[#1e293b]">引入R库</span>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">已归档</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#1a365d]">系统形态：</span><span className="text-[#1e293b]">引入R库，系统从「解释问题」进入「规则化判断」</span></div>
              <div>
                <span className="font-medium text-[#1a365d]">规则：</span>
                <span className="text-[#1e293b]">R001睡眠不足6h→降低训练量优先恢复、R002连续疲劳评分过高→增加休息日、R003恢复评分低于压力评分→暂停增加训练负荷</span>
              </div>
              <div><span className="font-medium text-[#1a365d]">暴露问题：</span><span className="text-[#1e293b]">规则未分层、多主因混乱、R库规则数量少、摄入/吸收/训练维度仍然空白</span></div>
              <div className="bg-[#f0f4f8] rounded p-2.5 mt-2"><span className="font-medium text-[#1a365d]">版本结论：</span><span className="text-[#1e293b]">R库是动态增重系统的核心，但R库不能只是规则列表必须结构化</span></div>
            </div>
          </div>

          {/* V4 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#1a365d]">V4</span>
              <span className="text-sm font-semibold text-[#1e293b]">规则执行强化</span>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">已归档</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#1a365d]">系统形态：</span><span className="text-[#1e293b]">R库开始主导决策，输出出现问题分类、唯一主因、规则依据、执行方案、记录数据、7天后修正机制</span></div>
              <div><span className="font-medium text-[#1a365d]">当时特点：</span><span className="text-[#1e293b]">R库主导决策、输出出现「裁决式逻辑」、系统从建议型变成判断型</span></div>
              <div><span className="font-medium text-[#1a365d]">暴露问题：</span><span className="text-[#1e293b]">仍可能过度依赖规则、K库解释过重、用户层与系统层混在一起、系统容易暴露内部逻辑</span></div>
              <div className="bg-[#f0f4f8] rounded p-2.5 mt-2"><span className="font-medium text-[#1a365d]">版本结论：</span><span className="text-[#1e293b]">R库可以让系统具备裁决能力，但裁决能力必须受P库和输出层控制</span></div>
            </div>
          </div>

          {/* V5 */}
          <div className="bg-white rounded-lg border border-red-200 p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#1a365d]">V5</span>
              <span className="text-sm font-semibold text-[#1e293b]">规则强制裁决版</span>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">基线 · 61分</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#1a365d]">系统形态：</span><span className="text-[#1e293b]">R库开始「强制裁决」、输出结构稳定（分类→规则→K解释→方案）、出现「恢复优先」稳定逻辑</span></div>
              <div>
                <span className="font-medium text-[#1a365d]">核心改造：</span>
                <span className="text-[#1e293b]">R库按维度拆分+分层（L1/L2/L3）、C库升级为行为模式识别、K库约束为只解释不决策、P库成为系统逻辑边界</span>
              </div>
              <div><span className="font-medium text-[#1a365d]">暴露问题：</span><span className="text-[#1e293b]">输出未分层系统术语泄漏、行动方案靠后、报告语气生硬、吸收维度空白、K库触发词遗漏、路由B无质量检查、R002缺量化标准</span></div>
              <div className="bg-red-50 rounded p-2.5 mt-2"><span className="font-medium text-red-700">版本结论：</span><span className="text-[#1e293b]">决策层结构已稳定，但输出层和稳定性需要全面改造</span></div>
            </div>
          </div>

          {/* V6 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#1a365d]">V6</span>
              <span className="text-sm font-semibold text-[#1e293b]">决策层改造</span>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">已完成 · 88.5分</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#1a365d]">核心变化：</span><span className="text-[#1e293b]">R003升级为L1硬约束、路由协议建立、C库强制调用、评分框架升级为产品级</span></div>
              <div>
                <span className="font-medium text-[#1a365d]">维度均分：</span>
                <span className="text-[#1e293b]">R库37.3/40 · K库13.5/15 · C库9.7/10 · 输出21.0/25 · 稳定性7.8/10</span>
              </div>
              <div><span className="font-medium text-[#1a365d]">残留问题：</span><span className="text-[#1e293b]">8项未修复——输出未分层系统术语泄漏(阻断)、行动方案靠后(阻断)、报告语气生硬(阻断)、吸收维度空白(重要)、触发后只说少练执行真空(重要)、K库触发词遗漏(重要)、路由B无质量检查(一般)、R002缺量化标准(一般)</span></div>
            </div>
          </div>

          {/* V6.1 */}
          <div className="bg-white rounded-lg border-2 border-[#1a365d] p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#1a365d]">V6.1</span>
              <span className="text-sm font-semibold text-[#1e293b]">输出层改造</span>
              <span className="text-xs bg-[#1a365d] text-white px-2 py-0.5 rounded">当前最高分 · 95分</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#1a365d]">核心变化：</span><span className="text-[#1e293b]">11项输出层改造——双层输出架构、PC-9约束、R010吸收规则、主动恢复模板、K库触发词映射、路由B转译、自检清单扩展等</span></div>
              <div>
                <span className="font-medium text-[#1a365d]">维度均分：</span>
                <span className="text-[#1e293b]">R库38.2/40 · K库14.3/15 · C库9.8/10 · 输出23.3/25 · 稳定性9.5/10</span>
              </div>
              <div className="bg-green-50 rounded p-2.5 mt-2"><span className="font-medium text-green-700">修复状态：</span><span className="text-[#1e293b]">8/8 全部修复 ✅ · V6→V6.1提升 +6.5分</span></div>
            </div>
          </div>

          {/* V6.2 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#1a365d]">V6.2</span>
              <span className="text-sm font-semibold text-[#1e293b]">待执行</span>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">待执行</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#1a365d]">4项修复计划：</span></div>
              <ol className="space-y-1.5 text-[#1e293b] ml-4">
                <li><span className="text-[#1a365d] font-medium">1.</span> PC-10路由B质量检查正式化</li>
                <li><span className="text-[#1a365d] font-medium">2.</span> CM005补剂场景强制扫描</li>
                <li><span className="text-[#1a365d] font-medium">3.</span> PC-2数值模糊化</li>
                <li><span className="text-[#1a365d] font-medium">4.</span> 比喻篇幅压缩规范</li>
              </ol>
            </div>
          </div>

          {/* V7 */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-[#1a365d]">V7</span>
              <span className="text-sm font-semibold text-[#1e293b]">上线后迭代</span>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">规划中</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-[#1a365d]">方向：</span><span className="text-[#1e293b]">数据驱动——R002疲劳量化、K库实操条目、用户反馈闭环</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PhilosophyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* 页面标题 */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-3">产品理念</h1>
        <p className="text-[#8bb4e8] text-base">Coach教练 — 面向体型管理受阻用户的体型管理决策系统</p>
      </div>

      {/* 第一板块：产品定位 */}
      <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-8 mb-8">
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-6">第一板块 · 产品定位</div>
        <div className="space-y-6">
          <div>
            <div className="text-sm text-[#6b8ab5] mb-1">产品名称</div>
            <div className="text-xl font-bold text-white">Coach教练</div>
          </div>
          <div>
            <div className="text-sm text-[#6b8ab5] mb-2">产品定位</div>
            <p className="text-white font-semibold text-lg leading-relaxed">
              Coach教练不是通用健身建议工具，而是一个体型管理决策系统。
            </p>
          </div>
          <div>
            <div className="text-sm text-[#6b8ab5] mb-2">产品定位说明</div>
            <p className="text-[#8ba3c7] leading-relaxed">
              它基于用户的训练、营养、恢复和行为执行数据，识别当前最主要的体型管理卡点，并把复杂的训练与营养逻辑，转化为可执行、可反馈、可迭代的下一步行动。
            </p>
          </div>
        </div>
      </div>

      {/* 第二板块：服务对象 */}
      <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-8 mb-8">
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-6">第二板块 · 服务对象</div>
        <div className="space-y-5">
          <p className="text-white font-semibold text-lg">Coach教练服务于体型管理受阻用户。</p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-[#4a9eff] font-bold shrink-0">1.</span>
              <p className="text-[#8ba3c7] leading-relaxed">当前阶段优先服务增重、增肌、体型增长受阻人群；后续可扩展至减脂、塑形、训练表现和恢复管理场景。</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#4a9eff] font-bold shrink-0">2.</span>
              <p className="text-[#8ba3c7] leading-relaxed">当前版本不追求覆盖所有健身需求，而是先打透体型增长受阻这一高痛点场景。</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#4a9eff] font-bold shrink-0">3.</span>
              <p className="text-[#8ba3c7] leading-relaxed">服务对象不只是「瘦子」，而是所有在体型管理上遇到卡点的用户。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 第三板块：核心理念 */}
      <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-8 mb-8">
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-6">第三板块 · 核心理念</div>
        <div className="space-y-5">
          <p className="text-white font-semibold text-lg leading-relaxed">
            体型变化不是单靠更努力完成的，而是训练刺激、营养原料、恢复能力和行为执行共同作用的结果。
          </p>
          <div>
            <div className="text-sm text-[#6b8ab5] mb-2">核心理念说明</div>
            <p className="text-[#8ba3c7] leading-relaxed">
              Coach不会只给「多吃一点、练狠一点、少吃一点」这类泛建议，而是先判断真正限制用户进步的因素，再给出最低可行的调整方案。
            </p>
          </div>
        </div>
      </div>

      {/* 第四板块：产品核心 */}
      <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border-2 border-[#4a9eff]/30 p-8 mb-8">
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-6">第四板块 · 产品核心</div>
        <div className="space-y-6">
          <p className="text-white font-semibold text-lg leading-relaxed">
            Coach不是一次性计划生成器，而是可跟踪、可反馈、可迭代的体型管理教练。
          </p>
          <div>
            <div className="text-sm text-[#6b8ab5] mb-2">产品核心说明</div>
            <p className="text-[#8ba3c7] leading-relaxed">
              它通过用户记录、用户描述和持续反馈，不断判断用户当前为什么卡住，并动态调整饮食、训练和恢复方案。
            </p>
          </div>
          <div>
            <div className="text-sm text-[#6b8ab5] mb-3">一次有效回答的三件事</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#141d33] rounded-lg border border-[#2a3a5c] p-4 text-center">
                <div className="text-2xl font-bold text-[#4a9eff] mb-2">1</div>
                <p className="text-sm text-white font-medium">现在先做什么</p>
              </div>
              <div className="bg-[#141d33] rounded-lg border border-[#2a3a5c] p-4 text-center">
                <div className="text-2xl font-bold text-[#4a9eff] mb-2">2</div>
                <p className="text-sm text-white font-medium">为什么先做这个</p>
              </div>
              <div className="bg-[#141d33] rounded-lg border border-[#2a3a5c] p-4 text-center">
                <div className="text-2xl font-bold text-[#4a9eff] mb-2">3</div>
                <p className="text-sm text-white font-medium">接下来观察什么信号来判断是否需要调整</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 第五板块：核心模块 */}
      <div className="mb-8">
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-6">第五板块 · 核心模块</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1. 营养管理区 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#2a3a5c] text-[#4a9eff] text-sm font-bold flex items-center justify-center">1</span>
              <h3 className="text-base font-semibold text-white">营养管理区</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              记录饮食、热量、蛋白质、餐次、食欲、完成率和消化状态，为判断摄入不足、执行断档、食物选择不合适或胃肠耐受失败提供数据。
            </p>
          </div>

          {/* 2. 动态教练系统 */}
          <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border-2 border-[#4a9eff]/40 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#4a9eff] text-white text-sm font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">动态教练系统</h3>
              <span className="text-xs bg-[#4a9eff] text-white px-2 py-0.5 rounded-full font-medium">核心</span>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              根据用户记录和反馈，匹配四库（规则库、知识库、案例库、原则库），判断当前体型管理卡点，给出对应行动方案。重点处理吃不下、漏餐、消化差、训练停滞、睡眠不足、体重波动、恢复不足和执行困难等问题。
            </p>
          </div>

          {/* 3. 训练计划区 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#2a3a5c] text-[#4a9eff] text-sm font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">训练计划区</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              展示适合用户当前阶段的训练方案，并根据用户反馈调整训练频率、训练量、恢复安排和训练重点。
            </p>
          </div>

          {/* 4. 睡眠与恢复管理区 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#2a3a5c] text-[#4a9eff] text-sm font-bold flex items-center justify-center">4</span>
              <h3 className="text-base font-semibold text-white">睡眠与恢复管理区</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              记录睡眠时长、睡眠质量、疲劳状态和压力状态，为训练调整、食欲判断、恢复评分和阶段复盘提供依据。
            </p>
          </div>

          {/* 5. 烹饪细节区 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#2a3a5c] text-[#4a9eff] text-sm font-bold flex items-center justify-center">5</span>
              <h3 className="text-base font-semibold text-white">烹饪细节区</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              根据用户食谱提供可执行的烹饪方式，包括食材处理、替代食材、低成本做法，以及宿舍、便利店、外卖等真实生活场景适配。
            </p>
          </div>
        </div>
      </div>

      {/* 第六板块：阶段路线 */}
      <div className="mb-8">
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-6">第六板块 · 阶段路线</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 第一阶段 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold bg-[#4a9eff] text-white px-3 py-1 rounded-full">第一阶段</span>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              Coach优先做好增重、增肌和体型增长受阻场景，积累真实用户数据和失败案例。
            </p>
          </div>

          {/* 第二阶段 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold bg-[#6b8ab5] text-white px-3 py-1 rounded-full">第二阶段</span>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              在动态教练系统稳定后，逐步扩展到减脂、塑形、训练表现和更复杂的体型管理目标。
            </p>
          </div>
        </div>
      </div>

      {/* 一句话表达 */}
      <div className="bg-[#141d33] rounded-xl p-6 border border-[#2a3a5c]">
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-3">一句话表达</div>
        <p className="text-white font-medium leading-relaxed text-lg">
          Coach教练是面向体型管理受阻用户的体型管理决策系统，通过记录、判断和动态调整，帮助用户持续解决体型管理过程中的卡点。
        </p>
      </div>
    </div>
  );
}

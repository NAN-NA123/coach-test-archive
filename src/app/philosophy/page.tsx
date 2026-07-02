export default function PhilosophyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* 页面标题 */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-3">Coach教练｜产品理念</h1>
      </div>

      {/* 产品定位 */}
      <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-5">产品定位</h2>
        <div className="space-y-5">
          <p className="text-white font-semibold text-lg leading-relaxed">
            Coach教练不是通用健身建议工具，而是一个体型管理决策系统。
          </p>
          <p className="text-[#8ba3c7] leading-relaxed">
            它基于用户的训练、营养、恢复和行为执行数据，识别当前最主要的体型管理卡点，并把复杂的训练与营养逻辑，转化为可执行、可反馈、可迭代的下一步行动。
          </p>
        </div>
      </div>

      {/* 服务对象 */}
      <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-5">服务对象</h2>
        <div className="space-y-4">
          <p className="text-white font-semibold text-lg">Coach教练服务于体型管理受阻用户。</p>
          <p className="text-[#8ba3c7] leading-relaxed">
            当前阶段优先服务增重、增肌、体型增长受阻人群；后续可扩展至减脂、塑形、训练表现和恢复管理场景。
          </p>
          <p className="text-[#8ba3c7] leading-relaxed">
            当前版本不追求覆盖所有健身需求，而是先打透体型增长受阻这一高痛点场景。
          </p>
        </div>
      </div>

      {/* 核心理念 */}
      <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-5">核心理念</h2>
        <div className="space-y-5">
          <p className="text-white font-semibold text-lg leading-relaxed">
            体型变化不是单靠更努力完成的，而是训练刺激、营养原料、恢复能力和行为执行共同作用的结果。
          </p>
          <p className="text-[#8ba3c7] leading-relaxed">
            Coach不会只给「多吃一点、练狠一点、少吃一点」这类泛建议，而是先判断真正限制用户进步的因素，再给出最低可行的调整方案。
          </p>
        </div>
      </div>

      {/* 产品核心 */}
      <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border-2 border-[#4a9eff]/30 p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-5">产品核心</h2>
        <div className="space-y-6">
          <p className="text-white font-semibold text-lg leading-relaxed">
            Coach不是一次性计划生成器，而是可跟踪、可反馈、可迭代的体型管理教练。
          </p>
          <p className="text-[#8ba3c7] leading-relaxed">
            它通过用户记录、用户描述和持续反馈，不断判断用户当前为什么卡住，并动态调整饮食、训练和恢复方案。
          </p>
          <div>
            <p className="text-[#8ba3c7] leading-relaxed mb-4">
              一次有效回答，至少要让用户知道三件事：
            </p>
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

      {/* 核心模块 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-6">核心模块</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1. 营养管理区 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#2a3a5c] text-[#4a9eff] text-sm font-bold flex items-center justify-center">1</span>
              <h3 className="text-base font-semibold text-white">营养管理区</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed mb-3">
              营养管理区不是单纯的热量查询表，也不是营养百科。
            </p>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              它负责记录用户的饮食、热量、蛋白质、餐次、食欲、完成率和消化状态，并维护食物库、添加、计算、汇总等底层能力，为Coach判断摄入不足、执行断档、食物选择不合适或胃肠耐受失败提供数据。
            </p>
          </div>

          {/* 2. 动态教练系统 */}
          <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border-2 border-[#4a9eff]/40 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#4a9eff] text-white text-sm font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">动态教练系统</h3>
              <span className="text-xs bg-[#4a9eff] text-white px-2 py-0.5 rounded-full font-medium">核心</span>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed mb-3">
              动态教练系统负责根据用户记录和反馈，匹配规则库、知识库、案例库和原则库，判断当前体型管理卡点，并给出对应行动方案。
            </p>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              它重点处理吃不下、漏餐、消化差、训练停滞、睡眠不足、体重波动、恢复不足和执行困难等问题。
            </p>
          </div>

          {/* 3. 训练计划区 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#2a3a5c] text-[#4a9eff] text-sm font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">训练计划区</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              训练计划区用于展示适合用户当前阶段的训练方案，并根据用户反馈调整训练频率、训练量、恢复安排和训练重点。
            </p>
          </div>

          {/* 4. 睡眠与恢复管理区 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#2a3a5c] text-[#4a9eff] text-sm font-bold flex items-center justify-center">4</span>
              <h3 className="text-base font-semibold text-white">睡眠与恢复管理区</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              睡眠与恢复管理区记录睡眠时长、睡眠质量、疲劳状态和压力状态，为训练调整、食欲判断、恢复评分和阶段复盘提供依据。
            </p>
          </div>

          {/* 5. 烹饪细节区 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#2a3a5c] text-[#4a9eff] text-sm font-bold flex items-center justify-center">5</span>
              <h3 className="text-base font-semibold text-white">烹饪细节区</h3>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              烹饪细节区根据用户食谱提供可执行的烹饪方式，包括食材处理、替代食材、低成本做法，以及宿舍、便利店、外卖等真实生活场景适配。
            </p>
          </div>
        </div>
      </div>

      {/* 营养库与Coach分层 */}
      <div className="bg-[#141d33] rounded-xl border border-[#49d6a9]/35 p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-5">营养库与Coach分层</h2>
        <div className="space-y-4">
          <p className="text-white font-semibold text-lg leading-relaxed">
            Coach的数据底座和Coach的决策表达必须分层。
          </p>
          <p className="text-[#8ba3c7] leading-relaxed">
            营养库负责记录、计算、来源、审核和API；Coach负责在用户真实生活场景中调用这些数据做判断。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-[#0f1729] border border-[#2a3a5c] p-4">
              <div className="text-sm font-semibold text-[#49d6a9] mb-2">营养库优先做什么</div>
              <p className="text-sm text-[#8ba3c7] leading-relaxed">
                食物库、用户添加、包装标签候选、热量和营养计算、每日汇总，以及同步给Coach的结构化数据。
              </p>
            </div>
            <div className="rounded-lg bg-[#0f1729] border border-[#2a3a5c] p-4">
              <div className="text-sm font-semibold text-[#4a9eff] mb-2">Coach负责什么</div>
              <p className="text-sm text-[#8ba3c7] leading-relaxed">
                在便利店、外卖、训练后补充等真实场景中，调用营养数据判断下一步行动，而不是让营养库自己变成聊天首页。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 阶段路线 */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6">阶段路线</h2>
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
    </div>
  );
}

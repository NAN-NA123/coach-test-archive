export default function PhilosophyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* 页面标题 */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-3">产品理念</h1>
        <p className="text-[#8bb4e8] text-base">Coach教练 — 瘦子增重动态系统的设计哲学</p>
      </div>

      {/* 产品本质 */}
      <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-8 mb-8">
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-4">产品本质</div>
        <p className="text-xl font-bold text-white mb-4">围绕瘦子增重问题建立的动态增重系统</p>
        <p className="text-[#8ba3c7] leading-relaxed">
          不是单次生成饮食计划，而是通过用户记录、用户描述和持续反馈，不断判断用户为什么增重失败，并灵活给出对应解决方案。
        </p>
      </div>

      {/* 两大核心区块 */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-white mb-6">两大核心区块</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 营养管理区 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-lg bg-[#2a3a5c] text-[#4a9eff] text-sm font-bold flex items-center justify-center">1</span>
              <h3 className="text-lg font-semibold text-white">营养管理区</h3>
            </div>
            <ul className="space-y-3 text-sm text-[#8ba3c7]">
              <li className="flex gap-2">
                <span className="text-white font-medium shrink-0">记录饮食</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#4a5e80] shrink-0">→</span>
                <span>记录热量、蛋白质、餐次、食欲、完成率</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white font-medium shrink-0">收集用户描述</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#4a5e80] shrink-0">→</span>
                <span>发现饮食执行问题</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#4a5e80] shrink-0">→</span>
                <span>为动态增重系统提供判断数据</span>
              </li>
            </ul>
          </div>

          {/* 动态增重系统 */}
          <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border-2 border-[#4a9eff]/40 p-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-lg bg-[#4a9eff] text-white text-sm font-bold flex items-center justify-center">2</span>
              <h3 className="text-lg font-semibold text-white">动态增重系统</h3>
              <span className="text-xs bg-[#4a9eff] text-white px-2 py-0.5 rounded-full font-medium">核心</span>
            </div>
            <ul className="space-y-3 text-sm text-[#8ba3c7]">
              <li>判断用户当前增重失败原因</li>
              <li>匹配 R / K / C / P 四库</li>
              <li>根据用户问题动态调整方案</li>
              <li>处理吃不下、漏餐、消化差、训练停滞、睡眠不足、体重波动等问题</li>
              <li className="font-medium text-white">让用户持续执行，而不是只拿到一份计划</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 流程图示 */}
      <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-8 mb-10">
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-6">核心流程</div>
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <div className="bg-[#1a2744] rounded-lg px-5 py-4 text-center border border-[#2a3a5c]">
            <div className="font-semibold text-white">用户记录</div>
            <div className="text-[#6b8ab5] text-xs mt-1">饮食/体重/睡眠</div>
          </div>
          <span className="text-[#4a9eff] font-bold text-lg">→</span>
          <div className="bg-[#1a2744] rounded-lg px-5 py-4 text-center border border-[#2a3a5c]">
            <div className="font-semibold text-white">营养管理区</div>
            <div className="text-[#6b8ab5] text-xs mt-1">收集+发现问题</div>
          </div>
          <span className="text-[#4a9eff] font-bold text-lg">→</span>
          <div className="bg-gradient-to-r from-[#4a9eff] to-[#3b82f6] rounded-lg px-5 py-4 text-center">
            <div className="font-semibold text-white">动态增重系统</div>
            <div className="text-blue-200 text-xs mt-1">R/K/C/P四库决策</div>
          </div>
          <span className="text-[#4a9eff] font-bold text-lg">→</span>
          <div className="bg-[#1a2744] rounded-lg px-5 py-4 text-center border border-[#2a3a5c]">
            <div className="font-semibold text-white">可执行方案</div>
            <div className="text-[#6b8ab5] text-xs mt-1">持续调整</div>
          </div>
        </div>
      </div>

      {/* 三个副区域 */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-white mb-6">三个副区域</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <h3 className="text-base font-semibold text-white mb-3">训练计划区</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              展示适合用户的训练方案。同时根据动态增重系统反馈，调整训练频率、训练量、恢复安排和训练重点。
            </p>
          </div>
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <h3 className="text-base font-semibold text-white mb-3">烹饪细节区</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              根据用户食谱自动提出合理烹饪方式。包括食材处理、烹饪步骤、替代食材、低成本做法、宿舍/便利店/外卖适配。
            </p>
          </div>
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <h3 className="text-base font-semibold text-white mb-3">睡眠管理区</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              记录睡眠时长和睡眠质量。为恢复评分、压力评分、训练调整、食欲判断提供数据支持。
            </p>
          </div>
        </div>
      </div>

      {/* 未来设计路线 */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6">未来设计路线</h2>
        <div className="space-y-6">
          {/* 第一阶段 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold bg-[#4a9eff] text-white px-3 py-1 rounded-full">第一阶段</span>
              <span className="text-base font-semibold text-white">只做增重区</span>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              核心目标是收集瘦子增重失败案例，帮助瘦子持续增重。
            </p>
          </div>

          {/* 第二阶段 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold bg-[#6b8ab5] text-white px-3 py-1 rounded-full">第二阶段</span>
              <span className="text-base font-semibold text-white">扩展更多人群和目标</span>
            </div>
            <p className="text-sm text-[#8ba3c7] leading-relaxed mb-4">
              依靠用户数据和动态增重系统，扩展更多人群和目标。可能扩展方向：
            </p>
            <ol className="space-y-2.5 text-sm text-[#8ba3c7]">
              <li className="flex gap-2">
                <span className="text-[#4a9eff] font-medium shrink-0">1.</span>
                <span>减脂教练</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#4a9eff] font-medium shrink-0">2.</span>
                <span>高级训练/营养教练</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#4a9eff] font-medium shrink-0">3.</span>
                <span>面向更专业用户的高级决策系统</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#4a9eff] font-medium shrink-0">4.</span>
                <span>能处理更复杂训练、营养、恢复问题的专业版教练</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

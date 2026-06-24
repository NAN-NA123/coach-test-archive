export default function PhilosophyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* 页面标题 */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-3">产品理念</h1>
        <p className="text-[#8bb4e8] text-base">Coach教练 — 面向体型管理受阻用户的私人定制AI教练</p>
      </div>

      {/* 第一板块：产品定义 */}
      <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border border-[#2a3a5c] p-8 mb-8">
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-4">第一板块 · 产品定义</div>
        <div className="mb-6">
          <div className="text-sm text-[#6b8ab5] mb-1">产品名称</div>
          <div className="text-xl font-bold text-white">Coach教练</div>
        </div>
        <div className="mb-6">
          <div className="text-sm text-[#6b8ab5] mb-1">产品本质</div>
          <div className="text-base text-white font-medium">围绕瘦子增重问题建立的动态增重系统</div>
        </div>
        <div className="mb-6">
          <div className="text-sm text-[#6b8ab5] mb-2">产品核心</div>
          <p className="text-[#8ba3c7] leading-relaxed">
            不是单次生成饮食计划，<br />
            而是通过用户记录、用户描述和持续反馈，<br />
            不断判断用户为什么增重失败，<br />
            并灵活给出对应解决方案。
          </p>
        </div>

        {/* 两大核心区块 */}
        <div className="text-sm text-[#6b8ab5] mb-4">两大核心区块</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
          {/* 营养管理区 */}
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#2a3a5c] text-[#4a9eff] text-sm font-bold flex items-center justify-center">1</span>
              <h3 className="text-base font-semibold text-white">营养管理区</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-[#8ba3c7]">
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">1.</span><span>记录饮食</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">2.</span><span>记录热量、蛋白质、餐次、食欲、完成率</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">3.</span><span>收集用户描述</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">4.</span><span>发现饮食执行问题</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">5.</span><span>为动态增重系统提供判断数据</span></li>
            </ul>
          </div>

          {/* 动态增重系统 */}
          <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border-2 border-[#4a9eff]/40 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#4a9eff] text-white text-sm font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">动态增重系统</h3>
              <span className="text-xs bg-[#4a9eff] text-white px-2 py-0.5 rounded-full font-medium">核心</span>
            </div>
            <ul className="space-y-2.5 text-sm text-[#8ba3c7]">
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">1.</span><span>判断用户当前增重失败原因</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">2.</span><span>匹配R / K / C / P四库</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">3.</span><span>根据用户问题动态调整方案</span></li>
              <li className="flex gap-2"><span className="text-[#4a9eff] shrink-0">4.</span><span>处理吃不下、漏餐、消化差、训练停滞、睡眠不足、体重波动等问题</span></li>
              <li className="flex gap-2 font-medium text-white"><span className="text-[#4a9eff] shrink-0">5.</span><span>让用户持续执行，而不是只拿到一份计划</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 第二板块：产品定位更新 */}
      <div className="bg-gradient-to-br from-[#1a2744] to-[#141d33] rounded-xl border-2 border-[#4a9eff]/30 p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider">第二板块 · 产品定位更新</div>
          <span className="text-xs bg-[#4a9eff] text-white px-2 py-0.5 rounded-full">2026-06-21</span>
        </div>

        <div className="space-y-6">
          <div>
            <div className="text-base font-semibold text-white mb-2">新定位</div>
            <p className="text-[#8ba3c7] leading-relaxed">
              Coach教练不再只定位为「瘦子增重工具」，<br />
              而是定位为<span className="text-white font-semibold">「AI时代的私人定制AI教练」</span>。
            </p>
          </div>

          <div>
            <div className="text-base font-semibold text-white mb-2">服务对象</div>
            <p className="text-[#8ba3c7] leading-relaxed">
              不再统一称为「瘦子」。<br />
              新的用户总称：<span className="text-white font-semibold">体型管理受阻用户</span>
            </p>
            <p className="text-sm text-[#6b8ab5] mt-2 leading-relaxed">
              当前阶段优先服务增重、增肌、体型增长受阻人群，后续可扩展至减脂、塑形、训练表现和恢复管理场景。
            </p>
          </div>

          <div>
            <div className="text-base font-semibold text-white mb-2">产品核心</div>
            <p className="text-[#8ba3c7] leading-relaxed">
              不是生成一次性计划，<br />
              而是根据用户记录和反馈，<br />
              持续判断问题、动态调整方案。
            </p>
          </div>

          <div>
            <div className="text-base font-semibold text-white mb-3">核心功能</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { num: "1", text: "制定训练计划" },
                { num: "2", text: "每天提醒打卡" },
                { num: "3", text: "记录营养摄入" },
                { num: "4", text: "记录体重、围度、训练、睡眠、食欲、消化状态" },
                { num: "5", text: "根据反馈动态调整饮食、训练和恢复方案" },
                { num: "6", text: "判断增肌/增重失败原因" },
                { num: "7", text: "降低执行难度" },
                { num: "8", text: "阶段性复盘" },
                { num: "9", text: "风险边界提醒" },
              ].map((item) => (
                <div key={item.num} className="bg-[#141d33] rounded-lg border border-[#2a3a5c] p-3 flex items-start gap-2">
                  <span className="text-[#4a9eff] font-bold text-sm shrink-0">{item.num}.</span>
                  <span className="text-sm text-[#8ba3c7]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#141d33] rounded-lg p-5 border border-[#2a3a5c]">
            <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-2">一句话表达</div>
            <p className="text-white font-medium leading-relaxed">
              Coach教练是面向体型管理受阻用户的私人定制AI教练，<br />
              通过记录、判断和动态调整，帮助用户持续解决增肌/增重过程中的问题。
            </p>
          </div>
        </div>
      </div>

      {/* 第三板块：副区域定义 */}
      <div className="mb-8">
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-4">第三板块 · 副区域定义</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <h3 className="text-base font-semibold text-white mb-3">训练计划区</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              展示适合用户的训练方案。<br />
              同时根据动态增重系统反馈，调整训练频率、训练量、恢复安排和训练重点。
            </p>
          </div>
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <h3 className="text-base font-semibold text-white mb-3">烹饪细节区</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              根据用户食谱自动提出合理烹饪方式。<br />
              包括食材处理、烹饪步骤、替代食材、低成本做法、宿舍/便利店/外卖适配。
            </p>
          </div>
          <div className="bg-[#141d33] rounded-xl border border-[#2a3a5c] p-6">
            <h3 className="text-base font-semibold text-white mb-3">睡眠管理区</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              记录睡眠时长和睡眠质量。<br />
              为恢复评分、压力评分、训练调整、食欲判断提供数据支持。
            </p>
          </div>
        </div>
      </div>

      {/* 第四板块：未来设计路线 */}
      <div>
        <div className="text-xs font-semibold text-[#4a9eff] uppercase tracking-wider mb-4">第四板块 · 未来设计路线</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              依靠用户数据和动态增重系统，扩展更多人群和目标。
            </p>
            <div className="space-y-2">
              <div className="text-sm text-[#8ba3c7] flex gap-2">
                <span className="text-[#4a9eff] shrink-0">1.</span><span>减脂教练</span>
              </div>
              <div className="text-sm text-[#8ba3c7] flex gap-2">
                <span className="text-[#4a9eff] shrink-0">2.</span><span>高级训练/营养教练</span>
              </div>
              <div className="text-sm text-[#8ba3c7] flex gap-2">
                <span className="text-[#4a9eff] shrink-0">3.</span><span>面向更专业用户的高级决策系统</span>
              </div>
              <div className="text-sm text-[#8ba3c7] flex gap-2">
                <span className="text-[#4a9eff] shrink-0">4.</span><span>能处理更复杂训练、营养、恢复问题的专业版教练</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

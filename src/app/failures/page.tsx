export default function FailuresPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">失败案例库</h1>
        <p className="text-[#8ba3c7] mb-2">AI增肌教练系统 — 产品失败案例库（C库升级版）</p>
        <p className="text-xs text-[#4a5c7a]">
          来源：基于2026-06-19~22 执行AI（"教练"AI）V1-V6.2多轮测试实录提取<br />
          编号规则：F = Failure，从F002开始 | 用途：供战略AI审计与系统迭代参考
        </p>
      </div>

      {/* 失败案例总览 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-5">失败案例总览</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-[#1a2744]">
                <th className="text-left px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">编号</th>
                <th className="text-left px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">失败名称</th>
                <th className="text-center px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">严重度</th>
                <th className="text-left px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">发现版本</th>
                <th className="text-left px-3 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">修复状态</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "F002", name: "K库越权决策 — 编造精确数值", severity: "🔴 高", found: "V1", status: "✅ V5已修复" },
                { id: "F003", name: "R库覆盖面缺失 — 系统退化为自由解释", severity: "🔴 最高", found: "V1-V4", status: "🔄 持续补充" },
                { id: "F004", name: "同类问题输出结构不一致 — 规则漂移", severity: "🟡 中", found: "V1-V4", status: "✅ V5已修复" },
                { id: "F005", name: "C库被边缘化后消失", severity: "🟡 中", found: "V5", status: "✅ V6已修复" },
                { id: "F006", name: "多假设并列 — 违反唯一主因原则", severity: "🟡 中", found: "V3", status: "✅ V5已修复" },
                { id: "F007", name: "K库解释冗长 — 知识堆砌替代决策", severity: "🟢 低", found: "V2", status: "✅ V6已修复" },
                { id: "F008", name: "决策来源不可追溯", severity: "🟡 中", found: "全版本", status: "✅ V6已修复" },
                { id: "F009", name: "L1/L2/L3分层未实现", severity: "🟡 中", found: "V1-V4", status: "✅ V5已修复" },
                { id: "F010", name: "系统依赖用户手动修正", severity: "🔴 高", found: "全版本", status: "✅ V6已修复" },
                { id: "F011", name: "错误归因风险 — \"体质问题\"未被拦截", severity: "🟡 中", found: "V2", status: "✅ V6已修复" },
                { id: "F012", name: "系统语言泄漏 — 内部审计内容直接暴露", severity: "🔴 阻断", found: "V6", status: "✅ V6.1已修复" },
                { id: "F013", name: "行动方案位置过深", severity: "🔴 阻断", found: "V6", status: "✅ V6.1已修复" },
                { id: "F014", name: "R002待量化标记缺失", severity: "🟠 一般", found: "V5-V6.1", status: "✅ V6.1已修复" },
                { id: "F015", name: "K库实操量化缺失", severity: "🟡 中", found: "V6.1", status: "⬜ 未修复" },
                { id: "F016", name: "K库餐具换算缺失", severity: "🟡 中", found: "V6.1", status: "⬜ 未修复" },
                { id: "F017", name: "K库比喻篇幅失控", severity: "🟡 中", found: "V6.1", status: "🔄 V6.2修复中" },
                { id: "F018", name: "C库CM005补剂场景匹配盲区", severity: "🟡 中", found: "V6.1", status: "🔄 V6.2修复中" },
                { id: "F019", name: "PC-2数值模糊化未彻底落地", severity: "🟡 中", found: "V6.1", status: "🔄 V6.2修复中" },
                { id: "F020", name: "PC-10路由B无强制质检", severity: "🟡 中", found: "V6.1", status: "🔄 V6.2修复中" },
                { id: "F021", name: "规则触发状态误标", severity: "🔴 高", found: "V6.1", status: "⬜ 待修正" },
                { id: "F022", name: "用户增重构成疑虑未回应", severity: "🟡 中", found: "V6.1真实测试", status: "📋 有修复方案" },
                { id: "F023", name: "R007未考虑食物不耐受风险", severity: "🟡 中", found: "V6.1真实测试", status: "📋 已有修复方案" },
                { id: "F024", name: "用户情感信号被过滤", severity: "🔴 高", found: "V6.2", status: "⬜ 未修复" },
                { id: "F025", name: "主因优先级偏移 — 极瘦用户\"先练后吃\"", severity: "🔴 高", found: "V6.2", status: "⬜ 未修复" },
                { id: "F026", name: "追问深度不足 — 7成识别就出方案", severity: "🟠 一般", found: "V6.2", status: "⬜ 未修复" },
                { id: "F027", name: "方案个性化不足 — 通用方案替代个体方案", severity: "🟠 一般", found: "V6.2", status: "⬜ 未修复" },
                { id: "F028", name: "格式崩塌 — 输出结构完全瓦解", severity: "🔴 阻断", found: "V6.2", status: "⬜ 未修复" },
                { id: "F029", name: "产品定位与输出矛盾 — 蛋白粉一刀切否定", severity: "🟠 一般", found: "V6.2", status: "⬜ 未修复" },
                { id: "F030", name: "信息不足场景只做本分 — 追问无动机无微行动", severity: "🟠 一般", found: "V6.2", status: "⬜ 未修复" },
                { id: "F031", name: "7天后闭环缺失 — 用户不知如何返回", severity: "🟡 中", found: "V6.2", status: "⬜ 未修复" },
                { id: "F032", name: "BMI偏瘦未触发安全边界", severity: "🟡 中", found: "V6.2", status: "⬜ 未修复" },
              ].map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-b border-[#1a2744] ${i % 2 === 1 ? "bg-[#0d1525]/40" : ""}`}
                >
                  <td className="px-3 py-2 font-mono font-bold text-[#4a9eff]">{c.id}</td>
                  <td className="px-3 py-2 text-[#c8d6e5]">{c.name}</td>
                  <td className="px-3 py-2 text-center whitespace-nowrap">{c.severity}</td>
                  <td className="px-3 py-2 text-[#8ba3c7] whitespace-nowrap">{c.found}</td>
                  <td className="px-3 py-2 text-[#8ba3c7] whitespace-nowrap">{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 失败模式聚类 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-5">失败模式聚类</h2>
        <div className="space-y-4">

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">聚类A：K库越权与规则缺失（F002 / F003 / F009 / F011）</h3>
            <p className="text-sm text-[#8ba3c7]">→ 状态：V5-V6已修复核心问题，R库持续补充中</p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">聚类B：输出不可控（F004 / F006 / F007）</h3>
            <p className="text-sm text-[#8ba3c7]">→ 状态：V5-V6已修复</p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">聚类C：系统无自检能力（F005 / F008 / F010）</h3>
            <p className="text-sm text-[#8ba3c7]">→ 状态：V6已修复</p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">聚类D：评估层缺失（F014）</h3>
            <p className="text-sm text-[#8ba3c7]">→ 状态：V6.1已修复</p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">聚类E：输出层与用户层未分离（F012 / F013）</h3>
            <p className="text-sm text-[#8ba3c7]">→ 状态：V6.1已修复（PC-9双层输出架构）</p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">聚类F：四库内容实操性不足（F015 / F016 / F017）</h3>
            <p className="text-sm text-[#8ba3c7]">→ 状态：F017由V6.2修复；F015/F016待四库补充</p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">聚类G：规则/约束执行不彻底（F018 / F019 / F020）</h3>
            <p className="text-sm text-[#8ba3c7]">→ 状态：V6.2测试验证修复中</p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">聚类H：评估层系统性误判（F021）</h3>
            <p className="text-sm text-[#8ba3c7]">→ 状态：待修正</p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">聚类I：真实场景盲区（F022 / F023）</h3>
            <p className="text-sm text-[#8ba3c7]">→ 状态：F023已修复；F022未修复</p>
            <p className="text-sm text-[#6b8ab5] mt-1">→ 启示：真实用户测试暴露了合成测试的结构性盲区</p>
          </div>

          <div className="bg-[#1a2744] border-2 border-amber-700/40 rounded-xl p-5">
            <h3 className="text-sm font-bold text-amber-300 mb-2">聚类J：系统合规但用户不满意（F024 / F026 / F027 / F030 / F031）</h3>
            <p className="text-sm text-[#8ba3c7] mb-1">根因：1.0均分80.8 vs 2.0均分71.8，差值9分=合规与满意的系统性落差</p>
            <p className="text-sm text-[#8ba3c7]">→ 状态：⬜ 未修复 — V6.3需系统性修复</p>
            <p className="text-sm text-[#6b8ab5] mt-1">→ 启示：后续所有修改必须同时通过1.0和2.0两套标准验证</p>
          </div>

          <div className="bg-[#1a2744] border-2 border-purple-700/40 rounded-xl p-5">
            <h3 className="text-sm font-bold text-purple-300 mb-2">聚类K：产品定位与系统输出冲突（F029 / F032）</h3>
            <p className="text-sm text-[#8ba3c7] mb-1">根因：P库写的是"原则"但没有"执行强制力"</p>
            <p className="text-sm text-[#8ba3c7]">→ 状态：⬜ 未修复</p>
            <p className="text-sm text-[#6b8ab5] mt-1">→ 修复关键：P库约束必须"硬传导"到R库和C库</p>
          </div>

        </div>
      </div>

      {/* 版本间失败模式迁移趋势 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-5">版本间失败模式迁移趋势</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1a2744]">
                <th className="text-left px-4 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">版本阶段</th>
                <th className="text-left px-4 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">主要失败模式</th>
                <th className="text-left px-4 py-2.5 text-[#8ba3c7] font-semibold border-b border-[#2a3a5c]">核心特征</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1a2744]">
                <td className="px-4 py-3 text-white font-medium">V1-V5</td>
                <td className="px-4 py-3 text-[#8ba3c7]">聚类A/B/C/D</td>
                <td className="px-4 py-3 text-[#c8d6e5] font-semibold">系统骨架缺失</td>
              </tr>
              <tr className="border-b border-[#1a2744] bg-[#0d1525]/40">
                <td className="px-4 py-3 text-white font-medium">V6</td>
                <td className="px-4 py-3 text-[#8ba3c7]">聚类E</td>
                <td className="px-4 py-3 text-[#c8d6e5] font-semibold">决策层通过、输出层阻断</td>
              </tr>
              <tr className="border-b border-[#1a2744]">
                <td className="px-4 py-3 text-white font-medium">V6.1</td>
                <td className="px-4 py-3 text-[#8ba3c7]">聚类F/G/H</td>
                <td className="px-4 py-3 text-[#c8d6e5] font-semibold">输出层打磨、四库内容成瓶颈</td>
              </tr>
              <tr className="border-b border-[#1a2744] bg-[#1a2744]/60">
                <td className="px-4 py-3 text-amber-300 font-bold">V6.2</td>
                <td className="px-4 py-3 text-amber-200">聚类J/K</td>
                <td className="px-4 py-3 text-amber-200 font-semibold">系统合规但用户不满意</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 bg-[#141d33] border border-[#4a9eff]/20 rounded-xl p-4">
          <p className="text-sm text-[#8ba3c7] leading-relaxed">
            <span className="text-[#4a9eff] font-semibold">趋势判断：</span>
            失败模式从"系统架构缺失"→"输出体验阻断"→"四库内容实操性"→"真实场景交互缺口"→"系统合规但用户不满意"逐层深入。
            1.0均分80.8/2.0均分71.8的9分差值=合规与满意的系统性落差。
          </p>
        </div>
      </div>

      {/* V6.2新增案例详情 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-5">V6.2新增案例详情（F024-F032）</h2>
        <div className="space-y-3">

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">F024 【用户情感信号被过滤】</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              用户说"怕副作用"教练完全未回应。系统没有情感信号识别环节。修复：输出层新增"情感信号回显"机制。
            </p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">F025 【主因优先级偏移 — 极瘦用户"先练后吃"】</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              55kg/172cm用户教练判断主因为"训练不足"而非"摄入不足"。修复：R库新增极瘦用户优先级约束。
            </p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">F026 【追问深度不足】</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              识别到7成深度就出方案，少问关键一句。修复：输出层增加"识别深度自检"。
            </p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">F027 【方案个性化不足】</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              方案方向对但像"网上搜来的通用答案"。修复：方案输出前增加"个性化校验"。
            </p>
          </div>

          <div className="bg-[#141d33] border border-red-900/40 rounded-xl p-5">
            <h3 className="text-sm font-bold text-red-300 mb-2">F028 【格式崩塌】</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              F012在V6.1已修复但Q7回归，PC-9双层分离机制存在覆盖漏洞。1.0=30/2.0=26。修复：增加"用户层清洁度自检"。
            </p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">F029 【蛋白粉一刀切否定】</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              CM005只看关键词不区分"依赖"和"需要"，与产品定位矛盾。修复：CM005增加场景区分。
            </p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">F030 【追问无动机无微行动】</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              信息不足场景只追问不解释为什么问。修复：追问+为什么问+等回答期间微行动。
            </p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">F031 【7天后闭环缺失】</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              9/12题用户不知道7天后怎么回来。修复：7天方案末尾增加"7天后怎么回来"引导语。
            </p>
          </div>

          <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2">F032 【BMI偏瘦未触发安全边界】</h3>
            <p className="text-sm text-[#8ba3c7] leading-relaxed">
              BMI=17.6未提示健康风险。修复：R库新增用户状态安全检查规则。
            </p>
          </div>

        </div>
      </div>

      {/* 更新记录 */}
      <div className="border-t border-[#2a3a5c] pt-6">
        <div className="text-xs text-[#4a5c7a] space-y-1">
          <p>更新记录：</p>
          <p>- 2026-06-19：初版，F002-F011</p>
          <p>- 2026-06-20：第一次更新，F012-F021</p>
          <p>- 2026-06-21：第二次更新，F022-F023</p>
          <p>- 2026-06-22：第三次更新，F024-F032 + 聚类J/K + 趋势更新</p>
        </div>
      </div>
    </div>
  );
}

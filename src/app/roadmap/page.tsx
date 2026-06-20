import Link from "next/link";

interface Milestone {
  version: string;
  title: string;
  status: "已完成" | "进行中" | "计划中" | "远期";
  score: string | null;
  description: string;
  achievements: string[];
  nextSteps: string[];
}

const milestones: Milestone[] = [
  {
    version: "V1",
    title: "规则雏形",
    status: "已完成",
    score: null,
    description: "基本依赖K库解释，无规则优先级，输出偏科普型建议。系统能对话但缺乏决策能力。",
    achievements: [
      "K库基础知识框架建立",
      "四维度排查表（摄入/吸收/训练/恢复）",
      "初步的问题分类能力",
    ],
    nextSteps: [],
  },
  {
    version: "V2",
    title: "引入C库",
    status: "已完成",
    score: null,
    description: "引入失败案例分类，可以识别「吃很多但不长」。但仍然是贴案例式输出，没有真正的决策逻辑。",
    achievements: [
      "C库失败案例分类建立",
      "假设性诊断机制",
      "7天实验方案雏形",
    ],
    nextSteps: [],
  },
  {
    version: "V3",
    title: "引入R库",
    status: "已完成",
    score: null,
    description: "开始规则化判断，引入睡眠/恢复/训练规则。但规则未分层，多主因混乱导致用户无法判断优先级。",
    achievements: [
      "R库规则框架建立（R001-R003）",
      "四大库完整检索",
      "6步闭环流程",
    ],
    nextSteps: [],
  },
  {
    version: "V4",
    title: "规则执行强化",
    status: "已完成",
    score: null,
    description: "R库开始主导决策，输出出现裁决式逻辑。但可能过度依赖规则，K库解释仍然过重。",
    achievements: [
      "R库裁决式决策初现",
      "主因唯一化（不再多假设并列）",
      "排除法逻辑链",
    ],
    nextSteps: [],
  },
  {
    version: "V5",
    title: "基线评估",
    status: "已完成",
    score: "61",
    description: "首次建立评分体系，R库强制裁决，输出结构稳定。暴露出系统核心缺陷清单。",
    achievements: [
      "首次100分制评估（61/100）",
      "R库强制裁决机制",
      "「恢复优先」稳定逻辑确立",
      "8项核心缺陷清单",
    ],
    nextSteps: [],
  },
  {
    version: "V6",
    title: "决策层改造",
    status: "已完成",
    score: "88.5",
    description: "R003升级为L1硬约束，建立路由协议，C库强制调用，评分框架升级为产品级。决策质量质的飞跃。",
    achievements: [
      "R库规则扩展至R010",
      "L1/L2/L3层级体系建立",
      "路由协议正式化",
      "C库从边缘化到强制调用",
      "8项问题追踪（8项未修复）",
    ],
    nextSteps: [],
  },
  {
    version: "V6.1",
    title: "输出层改造",
    status: "已完成",
    score: "95",
    description: "11项输出层改造，双层输出架构解决系统语言泄漏，行动前置解决用户流失，8项未修复问题全部清零。",
    achievements: [
      "PC-9双层输出架构",
      "15组转译映射表",
      "R010吸收规则",
      "主动恢复模板",
      "8/8问题全部修复",
      "评分从88.5提升至95",
    ],
    nextSteps: [],
  },
  {
    version: "V6.2",
    title: "精细化补丁",
    status: "进行中",
    score: null,
    description: "针对V6.1残留的扣分项进行精细化修复，补齐路由B质量检查和补剂场景扫描。",
    achievements: [],
    nextSteps: [
      "PC-10路由B质量检查正式化",
      "CM005补剂场景强制扫描",
      "PC-2数值模糊化规范",
      "比喻篇幅压缩规范",
    ],
  },
  {
    version: "V7",
    title: "数据驱动迭代",
    status: "计划中",
    score: null,
    description: "从规则驱动转向数据驱动，引入疲劳量化、K库实操条目扩充、用户反馈闭环机制。",
    achievements: [],
    nextSteps: [
      "R002疲劳量化评分机制",
      "K库实操条目扩充",
      "用户反馈闭环",
    ],
  },
];

const statusColor: Record<string, string> = {
  "已完成": "bg-[#16a34a]",
  "进行中": "bg-[#ea580c]",
  "计划中": "bg-[#1a365d]",
  "远期": "bg-[#64748b]",
};

const statusTextColor: Record<string, string> = {
  "已完成": "text-[#16a34a]",
  "进行中": "text-[#ea580c]",
  "计划中": "text-[#1a365d]",
  "远期": "text-[#64748b]",
};

export default function RoadmapPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-[#1e293b] mb-2">产品线路图</h1>
        <p className="text-[#64748b] text-sm">从规则雏形到数据驱动，每一步都在让系统更可靠</p>
      </div>

      {/* 时间线 */}
      <div className="relative">
        {/* 竖线 */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#e2e8f0]" />

        <div className="space-y-8">
          {milestones.map((m) => (
            <div key={m.version} className="relative pl-16">
              {/* 节点圆点 */}
              <div className={`absolute left-4 w-5 h-5 rounded-full border-2 border-white shadow ${statusColor[m.status]} z-10`} />

              {/* 版本号标签 */}
              <div className="absolute left-0 top-0 -translate-x-full pr-2 text-right" style={{ left: "28px" }}>
                <span className="text-xs font-mono font-bold text-[#64748b]">{m.version}</span>
              </div>

              {/* 卡片 */}
              <div className="bg-white rounded-lg border border-[#e2e8f0] overflow-hidden">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-base font-semibold text-[#1e293b]">{m.title}</h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${statusTextColor[m.status]} bg-opacity-10`} style={{ backgroundColor: m.status === "已完成" ? "#16a34a15" : m.status === "进行中" ? "#ea580c15" : m.status === "计划中" ? "#1a365d15" : "#64748b15" }}>
                      {m.status}
                    </span>
                    {m.score && (
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#1a365d] text-white font-mono">
                        {m.score}分
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#64748b] mb-3">{m.description}</p>

                  {/* 成就 */}
                  {m.achievements.length > 0 && (
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-[#16a34a] mb-1.5">核心成就</div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.achievements.map((a, i) => (
                          <span key={i} className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs bg-[#16a34a]/10 text-[#16a34a]">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 下一步 */}
                  {m.nextSteps.length > 0 && (
                    <div>
                      <div className="text-xs font-semibold text-[#ea580c] mb-1.5">待执行</div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.nextSteps.map((s, i) => (
                          <span key={i} className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs bg-[#ea580c]/10 text-[#ea580c]">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部导航 */}
      <div className="mt-12 pt-8 border-t border-[#e2e8f0] flex gap-3">
        <Link
          href="/philosophy"
          className="px-4 py-2 rounded-lg bg-[#1a365d] text-white text-sm font-medium hover:bg-[#1a365d]/90 transition-colors"
        >
          了解产品理念
        </Link>
        <Link
          href="/failures"
          className="px-4 py-2 rounded-lg border border-[#1a365d] text-[#1a365d] text-sm font-medium hover:bg-[#1a365d]/5 transition-colors"
        >
          查看失败案例库
        </Link>
      </div>
    </div>
  );
}

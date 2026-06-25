import failuresData from '@/data/failures.json';

const severityEmoji: Record<string, string> = {
  '最高': '🔴 最高',
  '高': '🔴 高',
  '阻断': '🔴 阻断',
  '一般': '🟠 一般',
  '中': '🟡 中',
  '低': '🟢 低',
};

const clusterColors: Record<string, string> = {
  'A': 'border-red-800/40',
  'B': 'border-orange-800/40',
  'C': 'border-yellow-800/40',
  'D': 'border-green-800/40',
  'E': 'border-purple-800/40',
  'F': 'border-blue-800/40',
  'G': 'border-cyan-800/40',
  'H': 'border-pink-800/40',
  'I': 'border-violet-800/40',
  'J': 'border-amber-700/40',
  'K': 'border-purple-700/40',
};

const clusterTextColors: Record<string, string> = {
  'A': 'text-red-300',
  'B': 'text-orange-300',
  'C': 'text-yellow-300',
  'D': 'text-green-300',
  'E': 'text-purple-300',
  'F': 'text-blue-300',
  'G': 'text-cyan-300',
  'H': 'text-pink-300',
  'I': 'text-violet-300',
  'J': 'text-amber-300',
  'K': 'text-purple-300',
};

function getStatusColor(status: string): string {
  if (status.includes('已修复')) return 'text-green-400';
  if (status.includes('部分修复')) return 'text-amber-400';
  if (status.includes('修复中') || status.includes('Prompt已补') || status.includes('待回测')) return 'text-blue-400';
  if (status.includes('待修正') || status.includes('待写入')) return 'text-orange-400';
  if (status.includes('未修复')) return 'text-red-400';
  if (status.includes('持续补充')) return 'text-cyan-400';
  return 'text-[#8ba3c7]';
}

export default function FailuresPage() {
  const cases = failuresData.cases;

  // Group cases by cluster
  const clusterGroups: Record<string, typeof cases> = {};
  for (const c of cases) {
    const key = c.cluster || 'Z';
    if (!clusterGroups[key]) clusterGroups[key] = [];
    clusterGroups[key].push(c);
  }
  const sortedClusters = Object.keys(clusterGroups).sort();

  // Compute stats
  const fixedCount = cases.filter(c => c.fixStatus.includes('已修复') && !c.fixStatus.includes('部分修复')).length;
  const partialCount = cases.filter(c => c.fixStatus.includes('部分修复')).length;
  const pendingCount = cases.filter(c => c.fixStatus.includes('未修复') || c.fixStatus.includes('待修正')).length;
  const inProgressCount = cases.filter(c => c.fixStatus.includes('修复中') || c.fixStatus.includes('Prompt已补') || c.fixStatus.includes('待回测') || c.fixStatus.includes('待写入')).length;
  const continuousCount = cases.filter(c => c.fixStatus.includes('持续补充')).length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* 页面标题 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">产品失败案例库</h1>
        <p className="text-xs text-[#4a5c7a] leading-relaxed">
          来源：基于V1-V6.1多轮测试实录 + V6.2全量双轨测试 + V6.3.6~V6.3.7b回测提取<br />
          编号规则：F = Failure，从F002开始 | 用途：供战略AI审计与系统迭代参考
        </p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
        <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white">{cases.length}</div>
          <div className="text-xs text-[#6b8ab5] mt-1">总案例</div>
        </div>
        <div className="bg-[#141d33] border border-green-900/40 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-green-400">{fixedCount}</div>
          <div className="text-xs text-[#6b8ab5] mt-1">已修复</div>
        </div>
        <div className="bg-[#141d33] border border-amber-900/40 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-amber-400">{partialCount}</div>
          <div className="text-xs text-[#6b8ab5] mt-1">部分修复</div>
        </div>
        <div className="bg-[#141d33] border border-red-900/40 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{pendingCount}</div>
          <div className="text-xs text-[#6b8ab5] mt-1">未修复</div>
        </div>
        <div className="bg-[#141d33] border border-blue-900/40 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">{inProgressCount + continuousCount}</div>
          <div className="text-xs text-[#6b8ab5] mt-1">修复中/待验证</div>
        </div>
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
              {cases.map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-b border-[#1a2744] ${i % 2 === 1 ? "bg-[#0d1525]/40" : ""}`}
                >
                  <td className="px-3 py-2 font-mono font-bold text-[#4a9eff]">{c.id}</td>
                  <td className="px-3 py-2 text-[#c8d6e5]">{c.name}</td>
                  <td className="px-3 py-2 text-center whitespace-nowrap">{severityEmoji[c.severity] || c.severity}</td>
                  <td className="px-3 py-2 text-[#8ba3c7] whitespace-nowrap">{c.foundVersion}</td>
                  <td className={`px-3 py-2 whitespace-nowrap ${getStatusColor(c.fixStatus)}`}>{c.fixStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 失败模式聚类 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-5">失败模式聚类</h2>
        <div className="space-y-3">
          {sortedClusters.map(cluster => {
            const clusterCases = clusterGroups[cluster];
            const clusterName = clusterCases[0]?.clusterName || '未分类';
            const ids = clusterCases.map(c => c.id).join(' / ');
            const borderClass = clusterColors[cluster] || 'border-[#2a3a5c]';
            const textClass = clusterTextColors[cluster] || 'text-white';
            const isHighlight = cluster === 'J' || cluster === 'K';

            return (
              <div
                key={cluster}
                className={`bg-[#141d33] ${isHighlight ? 'bg-[#1a2744]' : ''} border ${isHighlight ? 'border-2' : ''} ${borderClass} rounded-xl p-5`}
              >
                <h3 className={`text-sm font-bold ${textClass} mb-1`}>
                  聚类{cluster}：{clusterName}（{ids}）
                </h3>
                <div className="text-sm text-[#8ba3c7] space-y-1">
                  {clusterCases.map(c => (
                    <div key={c.id} className="flex items-start gap-2">
                      <span className="font-mono text-[#4a9eff] shrink-0">{c.id}</span>
                      <span className="text-[#8ba3c7]">{c.name}</span>
                      <span className={`shrink-0 ml-auto ${getStatusColor(c.fixStatus)}`}>{c.fixStatus}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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
                <td className="px-4 py-3 text-[#8ba3c7]">聚类F/G/H/I</td>
                <td className="px-4 py-3 text-[#c8d6e5] font-semibold">输出层打磨、四库内容成瓶颈</td>
              </tr>
              <tr className="border-b border-[#1a2744] bg-[#1a2744]/60">
                <td className="px-4 py-3 text-amber-300 font-bold">V6.2</td>
                <td className="px-4 py-3 text-amber-200">聚类J/K</td>
                <td className="px-4 py-3 text-amber-200 font-semibold">系统合规但用户不满意</td>
              </tr>
              <tr className="border-b border-[#1a2744]">
                <td className="px-4 py-3 text-white font-medium">V6.3.6~V6.3.7b</td>
                <td className="px-4 py-3 text-[#8ba3c7]">聚类J/H/D（回归）</td>
                <td className="px-4 py-3 text-[#c8d6e5] font-semibold">追问纸上谈兵、术语泄露回归、公式计算盲区</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 bg-[#141d33] border border-[#4a9eff]/20 rounded-xl p-4">
          <p className="text-sm text-[#8ba3c7] leading-relaxed">
            <span className="text-[#4a9eff] font-semibold">趋势判断：</span>
            失败模式从"系统架构缺失"→"输出体验阻断"→"四库内容实操性"→"真实场景交互缺口"→"系统合规但用户不满意"逐层深入。
            V6.3.6~V6.3.7b回测暴露追问纸上谈兵和术语泄露回归问题。
          </p>
        </div>
      </div>

      {/* 全量案例详情 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-5">全量案例详情</h2>
        <div className="space-y-6">
          {cases.map(c => {
            const isBlocking = c.severity === '阻断';
            const isHigh = c.severity === '高' || c.severity === '最高';
            const borderClass = isBlocking
              ? 'border-red-900/50 bg-[#1a1015]'
              : isHigh
                ? 'border-red-900/30 bg-[#141d33]'
                : 'border-[#2a3a5c] bg-[#141d33]';

            return (
              <div key={c.id} className={`${borderClass} border rounded-xl p-5`}>
                {/* 标题行 */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="font-mono font-bold text-[#4a9eff] text-sm shrink-0">{c.id}</span>
                  <h3 className="text-sm font-bold text-white flex-1">
                    {c.name}
                  </h3>
                  <span className="text-xs shrink-0">{severityEmoji[c.severity] || c.severity}</span>
                </div>

                {/* 详情表格 */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <tbody>
                      <tr className="border-b border-[#1a2744]">
                        <td className="px-3 py-2 text-[#6b8ab5] font-semibold whitespace-nowrap w-24 align-top">发现版本</td>
                        <td className="px-3 py-2 text-[#c8d6e5]">{c.foundVersion}</td>
                      </tr>
                      {c.fixVersion && c.fixVersion !== '-' && (
                        <tr className="border-b border-[#1a2744]">
                          <td className="px-3 py-2 text-[#6b8ab5] font-semibold whitespace-nowrap align-top">修复版本</td>
                          <td className="px-3 py-2 text-[#c8d6e5]">{c.fixVersion}</td>
                        </tr>
                      )}
                      <tr className="border-b border-[#1a2744]">
                        <td className="px-3 py-2 text-[#6b8ab5] font-semibold whitespace-nowrap align-top">影响组件</td>
                        <td className="px-3 py-2 text-[#c8d6e5]">{c.components.join(' / ')}</td>
                      </tr>
                      <tr className="border-b border-[#1a2744]">
                        <td className="px-3 py-2 text-[#6b8ab5] font-semibold whitespace-nowrap align-top">错误归因</td>
                        <td className="px-3 py-2 text-[#c8d6e5]">{c.errorType}</td>
                      </tr>
                      <tr className="border-b border-[#1a2744]">
                        <td className="px-3 py-2 text-[#6b8ab5] font-semibold whitespace-nowrap align-top">修复状态</td>
                        <td className={`px-3 py-2 ${getStatusColor(c.fixStatus)}`}>{c.fixStatus}</td>
                      </tr>
                      <tr className="border-b border-[#1a2744]">
                        <td className="px-3 py-2 text-[#6b8ab5] font-semibold whitespace-nowrap align-top">聚类</td>
                        <td className="px-3 py-2">
                          <span className={`font-semibold ${clusterTextColors[c.cluster] || 'text-white'}`}>
                            {c.cluster}：{c.clusterName}
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-[#1a2744]">
                        <td className="px-3 py-2 text-[#6b8ab5] font-semibold whitespace-nowrap align-top">现象与本质</td>
                        <td className="px-3 py-2 text-[#c8d6e5] leading-relaxed">{c.description}</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-[#6b8ab5] font-semibold whitespace-nowrap align-top">修复方向</td>
                        <td className="px-3 py-2 text-[#4a9eff] leading-relaxed">{c.fixDirection}</td>
                      </tr>
                      {c.fixNote && (
                        <tr>
                          <td className="px-3 py-2 text-[#6b8ab5] font-semibold whitespace-nowrap align-top">修复备注</td>
                          <td className="px-3 py-2 text-[#6b8ab5] leading-relaxed">{c.fixNote}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
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
          <p>- 2026-06-25：第四次更新，F033-F037 + 修复状态更新 + V6.3.6~V6.3.7b趋势</p>
        </div>
      </div>
    </div>
  );
}

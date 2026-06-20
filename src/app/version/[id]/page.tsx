"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getVersionById, getAllVersions, getScoreColor, getScoreBg, getScoreBorder, getStatusBadge } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { VersionRadarChart } from "@/components/VersionRadarChart";

export default function VersionDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const version = getVersionById(id);
  const allVersions = getAllVersions();

  if (!version) {
    return (
      <div className="min-h-screen bg-[#f7fafc]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-2xl font-bold text-[#1a365d]">版本未找到</h1>
          <Link href="/" className="text-[#2563eb] mt-4 inline-block hover:underline">返回首页</Link>
        </div>
      </div>
    );
  }

  const prevVersion = allVersions[allVersions.findIndex((v) => v.id === id) - 1];
  const hasScore = version.totalScore !== null;
  const isPending = version.status === "待执行" || version.status === "规划中";

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-[#64748b]">
          <Link href="/" className="hover:text-[#1a365d]">首页</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1a365d] font-medium">{version.fullName}</span>
        </nav>

        {/* Version Overview */}
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-[#1a365d]">{version.fullName}</h1>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getStatusBadge(version.status).bg} ${getStatusBadge(version.status).text}`}>
                  {version.status}
                </span>
              </div>
              <p className="text-[#475569] mt-2">{version.coreChange}</p>
              <div className="flex items-center gap-4 mt-3 text-sm text-[#64748b]">
                {version.testRounds !== null && (
                  <span>测试轮次：{version.testRounds}</span>
                )}
                {version.improvement && (
                  <span className="text-emerald-600 font-medium">
                    较上版本 +{version.improvement.total}分
                  </span>
                )}
              </div>
            </div>
            {hasScore ? (
              <div className={`text-center px-6 py-3 rounded-lg ${getScoreBg(version.totalScore)} ${getScoreBorder(version.totalScore)} border`}>
                <div className={`text-4xl font-mono font-bold ${getScoreColor(version.totalScore)}`}>
                  {version.totalScore}
                </div>
                <div className="text-xs text-[#64748b] mt-1">/100</div>
              </div>
            ) : isPending ? (
              <div className="text-center px-6 py-3 rounded-lg bg-amber-50 border border-amber-200">
                <div className="text-2xl font-bold text-amber-600">
                  {version.status === "待执行" ? "待测" : "规划中"}
                </div>
                <div className="text-xs text-[#64748b] mt-1">尚未测试</div>
              </div>
            ) : null}
          </div>

          {/* Dimension Scores - only for scored versions */}
          {hasScore && (
            <div className="mt-6 pt-6 border-t border-[#e2e8f0]">
              <div className="grid grid-cols-5 gap-4">
                {Object.entries(version.dimensions).map(([key, dim]) => {
                  const pct = dim.score !== null ? Math.round((dim.score / dim.max) * 100) : 0;
                  return (
                    <div key={key} className="text-center">
                      <div className="text-xs text-[#64748b] mb-1">{dim.label}({dim.max})</div>
                      <div className={`text-xl font-mono font-bold ${getScoreColor(dim.score)}`}>
                        {dim.score ?? "—"}
                      </div>
                      <div className="mt-2 h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            pct >= 90 ? "bg-emerald-500" : pct >= 80 ? "bg-orange-500" : "bg-red-500"
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Radar Chart - only for scored versions */}
          {hasScore && (
            <div className="mt-6 flex justify-center">
              <VersionRadarChart version={version} />
            </div>
          )}
        </div>

        {/* For pending/planned versions: show simplified layout */}
        {isPending ? (
          <>
            {/* Planned Issues / Iteration Directions */}
            {version.issues.length > 0 && (
              <Section title={version.status === "待执行" ? "计划修复项" : "迭代方向"}>
                <div className="space-y-3">
                  {version.issues.map((issue) => (
                    <div key={issue.id} className="flex items-start gap-3 p-4 bg-[#f0f4f8] rounded-lg">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a365d] text-white text-xs flex items-center justify-center font-bold">
                        {issue.id}
                      </span>
                      <div className="flex-1">
                        <div className="font-medium text-[#1a365d]">{issue.desc}</div>
                        {issue.fix && (
                          <div className="text-sm text-[#475569] mt-1">方案：{issue.fix}</div>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-xs font-medium ${
                            issue.severity.includes("阻断") ? "text-red-600" :
                            issue.severity.includes("重要") ? "text-amber-600" :
                            issue.severity.includes("一般") ? "text-orange-600" :
                            "text-emerald-600"
                          }`}>
                            {issue.severity}
                          </span>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            issue.status === "计划中"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-blue-50 text-blue-700"
                          }`}>
                            {issue.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Next Steps for pending versions */}
            {version.nextSteps.length > 0 && (
              <Section title="下一步说明">
                <div className="space-y-4">
                  {version.nextSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#f0f4f8] rounded-lg">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a365d] text-white text-xs flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <div className="font-medium text-[#1a365d]">{step.phase}</div>
                        <div className="text-sm text-[#475569] mt-1">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}
          </>
        ) : (
          <>
            {/* Test Matrix */}
            {version.rounds.length > 0 && version.rounds[0].target !== "待定" && (
              <Section title="六轮测试矩阵">
                <div className="overflow-x-auto">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>轮次</th>
                        <th>压测目标</th>
                        <th>场景描述</th>
                        <th>R库触发</th>
                        <th>核心验证点</th>
                        <th>得分</th>
                      </tr>
                    </thead>
                    <tbody>
                      {version.rounds.map((r) => (
                        <tr key={r.id}>
                          <td className="font-mono font-bold text-[#1a365d]">{r.id}</td>
                          <td className="max-w-[200px]">{r.target}</td>
                          <td className="max-w-[240px] text-[#475569]">{r.scenario}</td>
                          <td>
                            <span className={`text-xs font-mono ${
                              r.rTriggers.includes("✅") ? "text-emerald-600" :
                              r.rTriggers.includes("⚠️") ? "text-orange-600" :
                              r.rTriggers.includes("❌") ? "text-red-600" :
                              "text-[#64748b]"
                            }`}>
                              {r.rTriggers}
                            </span>
                          </td>
                          <td className="max-w-[200px] text-[#475569]">{r.keyPoints}</td>
                          <td>
                            <span className={`score-badge ${getScoreBg(r.score)} ${getScoreColor(r.score)}`}>
                              {r.score}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>
            )}

            {/* Dimension Details */}
            {version.dimensionDetails.length > 0 && (
              <Section title="维度评分明细">
                <div className="overflow-x-auto">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>轮次</th>
                        <th>R库({version.dimensions.rLibrary.max})</th>
                        <th>K库({version.dimensions.kLibrary.max})</th>
                        <th>C库({version.dimensions.cLibrary.max})</th>
                        <th>输出({version.dimensions.output.max})</th>
                        <th>稳定性({version.dimensions.stability.max})</th>
                      </tr>
                    </thead>
                    <tbody>
                      {version.dimensionDetails.map((d, i) => (
                        <tr key={i}>
                          <td className="font-mono font-bold text-[#1a365d]">{d.round}</td>
                          <td className="font-mono">{d.rLibrary}</td>
                          <td className="font-mono">{d.kLibrary}</td>
                          <td className="font-mono">{d.cLibrary}</td>
                          <td className="font-mono">{d.output}</td>
                          <td className="font-mono">{d.stability}</td>
                        </tr>
                      ))}
                      {version.dimensionDetails.length > 0 && (
                        <tr className="font-bold bg-[#f0f4f8]">
                          <td className="text-[#1a365d]">均分</td>
                          <td className={`font-mono ${getScoreColor(version.dimensions.rLibrary.score)}`}>
                            {version.dimensions.rLibrary.score}
                          </td>
                          <td className={`font-mono ${getScoreColor(version.dimensions.kLibrary.score)}`}>
                            {version.dimensions.kLibrary.score}
                          </td>
                          <td className={`font-mono ${getScoreColor(version.dimensions.cLibrary.score)}`}>
                            {version.dimensions.cLibrary.score}
                          </td>
                          <td className={`font-mono ${getScoreColor(version.dimensions.output.score)}`}>
                            {version.dimensions.output.score}
                          </td>
                          <td className={`font-mono ${getScoreColor(version.dimensions.stability.score)}`}>
                            {version.dimensions.stability.score}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </Section>
            )}

            {/* Version Comparison */}
            {version.improvement && prevVersion && prevVersion.totalScore !== null && (
              <Section title={`版本对比：${prevVersion.name} → ${version.name}`}>
                <div className="overflow-x-auto">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>维度</th>
                        <th>{prevVersion.name}</th>
                        <th>{version.name}</th>
                        <th>提升</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="font-bold">
                        <td>总分</td>
                        <td className="font-mono">{prevVersion.totalScore}</td>
                        <td className="font-mono">{version.totalScore}</td>
                        <td className="font-mono text-emerald-600">+{version.improvement.total}</td>
                      </tr>
                      <tr>
                        <td>R库</td>
                        <td className="font-mono">{prevVersion.dimensions.rLibrary.score}</td>
                        <td className="font-mono">{version.dimensions.rLibrary.score}</td>
                        <td className="font-mono text-emerald-600">+{version.improvement.rLibrary}</td>
                      </tr>
                      <tr>
                        <td>K库</td>
                        <td className="font-mono">{prevVersion.dimensions.kLibrary.score}</td>
                        <td className="font-mono">{version.dimensions.kLibrary.score}</td>
                        <td className="font-mono text-emerald-600">+{version.improvement.kLibrary}</td>
                      </tr>
                      <tr>
                        <td>C库</td>
                        <td className="font-mono">{prevVersion.dimensions.cLibrary.score}</td>
                        <td className="font-mono">{version.dimensions.cLibrary.score}</td>
                        <td className="font-mono text-emerald-600">+{version.improvement.cLibrary}</td>
                      </tr>
                      <tr>
                        <td>输出</td>
                        <td className="font-mono">{prevVersion.dimensions.output.score}</td>
                        <td className="font-mono">{version.dimensions.output.score}</td>
                        <td className="font-mono text-emerald-600">+{version.improvement.output}</td>
                      </tr>
                      <tr>
                        <td>稳定性</td>
                        <td className="font-mono">{prevVersion.dimensions.stability.score}</td>
                        <td className="font-mono">{version.dimensions.stability.score}</td>
                        <td className="font-mono text-emerald-600">+{version.improvement.stability}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Section>
            )}

            {/* Issue Tracking */}
            {version.issues.length > 0 && (
              <Section title="问题修复追踪">
                <div className="overflow-x-auto">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>编号</th>
                        <th>问题描述</th>
                        <th>严重等级</th>
                        <th>修复手段</th>
                        <th>状态</th>
                      </tr>
                    </thead>
                    <tbody>
                      {version.issues.map((issue) => (
                        <tr key={issue.id}>
                          <td className="font-mono text-[#64748b]">#{issue.id}</td>
                          <td className="max-w-[280px]">{issue.desc}</td>
                          <td>
                            <span className={`text-xs font-medium ${
                              issue.severity.includes("阻断") ? "text-red-600" :
                              issue.severity.includes("重要") ? "text-amber-600" :
                              issue.severity.includes("一般") ? "text-orange-600" :
                              "text-emerald-600"
                            }`}>
                              {issue.severity}
                            </span>
                          </td>
                          <td className="max-w-[280px] text-[#475569]">{issue.fix}</td>
                          <td>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              issue.status.includes("已修复")
                                ? "bg-emerald-50 text-emerald-700"
                                : issue.status === "未修复"
                                ? "bg-red-50 text-red-700"
                                : issue.status === "计划中"
                                ? "bg-amber-50 text-amber-700"
                                : "bg-blue-50 text-blue-700"
                            }`}>
                              {issue.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>
            )}

            {/* Refactor List */}
            {version.refactorList.length > 0 && (
              <Section title="核心改造清单">
                <div className="overflow-x-auto">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>改造项</th>
                        <th>改造内容</th>
                        <th>影响范围</th>
                        <th>验证轮次</th>
                      </tr>
                    </thead>
                    <tbody>
                      {version.refactorList.map((item, i) => (
                        <tr key={i}>
                          <td className="font-medium text-[#1a365d]">{item.item}</td>
                          <td className="max-w-[320px] text-[#475569]">{item.content}</td>
                          <td className="text-[#475569]">{item.scope}</td>
                          <td className="font-mono text-[#64748b]">{item.round}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>
            )}

            {/* Deduction Items */}
            {version.deductionItems.length > 0 && (
              <Section title="残留扣分项明细">
                <div className="overflow-x-auto">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>轮次</th>
                        <th>扣分项</th>
                        <th>扣分值</th>
                        <th>归属维度</th>
                      </tr>
                    </thead>
                    <tbody>
                      {version.deductionItems.map((item, i) => (
                        <tr key={i}>
                          <td className="font-mono font-bold text-[#1a365d]">{item.round}</td>
                          <td className="text-[#475569]">{item.item}</td>
                          <td className="font-mono text-red-600">{item.value}</td>
                          <td className="text-[#64748b]">{item.dimension}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>
            )}

            {/* Next Steps */}
            {version.nextSteps.length > 0 && (
              <Section title="下一步建议">
                <div className="space-y-4">
                  {version.nextSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#f0f4f8] rounded-lg">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a365d] text-white text-xs flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <div className="font-medium text-[#1a365d]">{step.phase}</div>
                        <div className="text-sm text-[#475569] mt-1">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}
          </>
        )}

        {/* Version Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-[#e2e8f0]">
          {prevVersion ? (
            <Link
              href={`/version/${prevVersion.id}`}
              className="text-[#2563eb] hover:underline text-sm"
            >
              ← {prevVersion.fullName}
            </Link>
          ) : (
            <div />
          )}
          {(() => {
            const nextIdx = allVersions.findIndex((v) => v.id === id) + 1;
            const nextVersion = nextIdx < allVersions.length ? allVersions[nextIdx] : null;
            return nextVersion ? (
              <Link
                href={`/version/${nextVersion.id}`}
                className="text-[#2563eb] hover:underline text-sm"
              >
                {nextVersion.fullName} →
              </Link>
            ) : (
              <div />
            );
          })()}
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 mb-6">
      <h2 className="text-lg font-semibold text-[#1a365d] mb-4">{title}</h2>
      {children}
    </div>
  );
}

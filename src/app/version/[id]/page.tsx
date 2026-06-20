import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllVersions, getVersionById, getScoreColor, getStatusBadge } from "@/lib/data";
import { VersionRadarChart } from "@/components/VersionRadarChart";

export function generateStaticParams() {
  return getAllVersions().map((v) => ({ id: v.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then((p) => {
    const version = getVersionById(p.id);
    if (!version) return { title: "未找到版本" };
    return {
      title: `${version.fullName} - Coach教练测试档案`,
      description: `${version.fullName}测试评估结果：总分${version.totalScore ?? "待测"}`,
    };
  });
}

export default async function VersionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const version = getVersionById(id);
  if (!version) notFound();

  const allVersions = getAllVersions();
  const currentIdx = allVersions.findIndex((v) => v.id === id);
  const prevVersion = currentIdx > 0 ? allVersions[currentIdx - 1] : null;

  const hasScore = version.totalScore !== null;
  const isPending = version.status === "待执行" || version.status === "规划中" || version.status === "上线后迭代";
  const isArchived = version.status === "已归档";

  return (
    <div className="min-h-screen" style={{ background: "#0a0f1e" }}>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6b8ab5] mb-8">
          <Link href="/test-archive" className="hover:text-[#4a9eff] transition-colors">测试档案</Link>
          <span>/</span>
          <span className="text-white">{version.fullName}</span>
        </nav>

        {/* Version Overview Card */}
        <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">{version.fullName}</h1>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getStatusBadge(version.status).bg} ${getStatusBadge(version.status).text}`}>
                  {version.status}
                </span>
              </div>
              <p className="text-[#8ba3c7] mt-2">{version.coreChange}</p>
              <div className="flex items-center gap-4 mt-3 text-sm text-[#6b8ab5]">
                {version.testRounds !== null && (
                  <span>测试轮次：{version.testRounds}</span>
                )}
                {version.improvement && (
                  <span className="text-emerald-400 font-medium">
                    较上版本 +{version.improvement.total}分
                  </span>
                )}
              </div>
            </div>
            {hasScore ? (
              <div className="text-center px-6 py-3 rounded-lg bg-[#1a2744] border border-[#2a3a5c]">
                <div className={`text-4xl font-mono font-bold ${getScoreColor(version.totalScore)}`}>
                  {version.totalScore}
                </div>
                <div className="text-xs text-[#6b8ab5] mt-1">/100</div>
              </div>
            ) : isPending ? (
              <div className="text-center px-6 py-3 rounded-lg bg-[#1a2744] border border-amber-500/30">
                <div className="text-2xl font-bold text-amber-400">
                  {version.status === "待执行" ? "待测" : "规划中"}
                </div>
                <div className="text-xs text-[#6b8ab5] mt-1">尚未测试</div>
              </div>
            ) : isArchived ? (
              <div className="text-center px-6 py-3 rounded-lg bg-[#1a2744] border border-[#2a3a5c]">
                <div className="text-2xl font-bold text-[#4a5e80]">
                  未评分
                </div>
                <div className="text-xs text-[#6b8ab5] mt-1">早期版本</div>
              </div>
            ) : null}
          </div>

          {/* Dimension Scores - only for scored versions */}
          {hasScore && (
            <div className="mt-6 pt-6 border-t border-[#2a3a5c]">
              <div className="grid grid-cols-5 gap-4">
                {Object.entries(version.dimensions).map(([key, dim]) => {
                  const pct = dim.score !== null ? Math.round((dim.score / dim.max) * 100) : 0;
                  return (
                    <div key={key} className="text-center">
                      <div className="text-xs text-[#6b8ab5] mb-1">{dim.label}({dim.max})</div>
                      <div className={`text-xl font-mono font-bold ${getScoreColor(dim.score)}`}>
                        {dim.score ?? "—"}
                      </div>
                      <div className="mt-2 h-1.5 bg-[#2a3a5c] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            pct >= 90 ? "bg-emerald-500" : pct >= 80 ? "bg-amber-500" : "bg-red-500"
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

        {/* For archived versions: show core issues + QA + next steps */}
        {isArchived ? (
          <>
            {version.coreIssues && version.coreIssues.length > 0 && (
              <Section title="核心问题">
                <div className="space-y-3">
                  {version.coreIssues.map((issue, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#1a2744] rounded-lg border border-[#2a3a5c]">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4a5e80] text-white text-xs flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <div className="font-medium text-[#e0e6f0]">{issue}</div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {version.qaRecords.length > 0 && (
              <Section title="测试问答记录">
                <div className="space-y-4">
                  {version.qaRecords.map((qa, i) => (
                    <div key={i} className="p-4 bg-[#1a2744] rounded-lg border border-[#2a3a5c] space-y-3">
                      <div className="flex items-center gap-2 text-sm text-[#6b8ab5]">
                        <span className="font-mono font-bold text-[#4a9eff]">{qa.round}</span>
                        <span>·</span>
                        <span>{qa.pressurePoint}</span>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#6b8ab5] mb-1">测试问题</div>
                        <div className="text-[#e0e6f0]">{qa.question}</div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#4a9eff] mb-1">教练回答（摘要）</div>
                        <div className="text-[#8ba3c7]">{qa.coachAnswer}</div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-rose-400 mb-1">审计层记录</div>
                        <div className="text-[#6b8ab5] text-sm">{qa.auditNote}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {version.nextSteps.length > 0 && (
              <Section title="演进方向">
                <div className="space-y-4">
                  {version.nextSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#1a2744] rounded-lg border border-[#2a3a5c]">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4a9eff] text-white text-xs flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <div className="font-medium text-[#4a9eff]">{step.phase}</div>
                        <div className="text-sm text-[#8ba3c7] mt-1">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}
          </>
        ) : isPending ? (
          <>
            {version.issues.length > 0 && (
              <Section title={version.status === "待执行" ? "计划修复项" : "迭代方向"}>
                <div className="space-y-3">
                  {version.issues.map((issue) => (
                    <div key={issue.id} className="flex items-start gap-3 p-4 bg-[#1a2744] rounded-lg border border-[#2a3a5c]">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4a9eff] text-white text-xs flex items-center justify-center font-bold">
                        {issue.id}
                      </span>
                      <div className="flex-1">
                        <div className="font-medium text-[#e0e6f0]">{issue.desc}</div>
                        {issue.fix && (
                          <div className="text-sm text-[#8ba3c7] mt-1">方案：{issue.fix}</div>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-xs font-medium ${
                            issue.severity.includes("阻断") ? "text-red-400" :
                            issue.severity.includes("重要") ? "text-amber-400" :
                            issue.severity.includes("一般") ? "text-orange-400" :
                            "text-emerald-400"
                          }`}>
                            {issue.severity}
                          </span>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            issue.status === "计划中"
                              ? "bg-amber-500/10 text-amber-400"
                              : "bg-[#4a9eff]/10 text-[#4a9eff]"
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

            {version.nextSteps.length > 0 && (
              <Section title="下一步说明">
                <div className="space-y-4">
                  {version.nextSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#1a2744] rounded-lg border border-[#2a3a5c]">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4a9eff] text-white text-xs flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <div className="font-medium text-[#4a9eff]">{step.phase}</div>
                        <div className="text-sm text-[#8ba3c7] mt-1">{step.desc}</div>
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
                          <td className="font-mono font-bold text-[#4a9eff]">{r.id}</td>
                          <td className="max-w-[200px] text-[#e0e6f0]">{r.target}</td>
                          <td className="max-w-[240px] text-[#8ba3c7]">{r.scenario}</td>
                          <td>
                            <span className={`text-xs font-mono ${
                              r.rTriggers.includes("✅") ? "text-emerald-400" :
                              r.rTriggers.includes("⚠️") ? "text-amber-400" :
                              r.rTriggers.includes("❌") ? "text-red-400" :
                              "text-[#6b8ab5]"
                            }`}>
                              {r.rTriggers}
                            </span>
                          </td>
                          <td className="max-w-[200px] text-[#8ba3c7]">{r.keyPoints}</td>
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
                          <td className="font-mono font-bold text-[#4a9eff]">{d.round}</td>
                          <td className="font-mono text-[#e0e6f0]">{d.rLibrary}</td>
                          <td className="font-mono text-[#e0e6f0]">{d.kLibrary}</td>
                          <td className="font-mono text-[#e0e6f0]">{d.cLibrary}</td>
                          <td className="font-mono text-[#e0e6f0]">{d.output}</td>
                          <td className="font-mono text-[#e0e6f0]">{d.stability}</td>
                        </tr>
                      ))}
                      {version.dimensionDetails.length > 0 && (
                        <tr className="font-bold bg-[#1a2744]">
                          <td className="text-[#4a9eff]">均分</td>
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
                        <td className="text-[#e0e6f0]">总分</td>
                        <td className="font-mono text-[#e0e6f0]">{prevVersion.totalScore}</td>
                        <td className="font-mono text-[#e0e6f0]">{version.totalScore}</td>
                        <td className="font-mono text-emerald-400">+{version.improvement.total}</td>
                      </tr>
                      <tr>
                        <td className="text-[#e0e6f0]">R库</td>
                        <td className="font-mono text-[#8ba3c7]">{prevVersion.dimensions.rLibrary.score}</td>
                        <td className="font-mono text-[#8ba3c7]">{version.dimensions.rLibrary.score}</td>
                        <td className="font-mono text-emerald-400">+{version.improvement.rLibrary}</td>
                      </tr>
                      <tr>
                        <td className="text-[#e0e6f0]">K库</td>
                        <td className="font-mono text-[#8ba3c7]">{prevVersion.dimensions.kLibrary.score}</td>
                        <td className="font-mono text-[#8ba3c7]">{version.dimensions.kLibrary.score}</td>
                        <td className="font-mono text-emerald-400">+{version.improvement.kLibrary}</td>
                      </tr>
                      <tr>
                        <td className="text-[#e0e6f0]">C库</td>
                        <td className="font-mono text-[#8ba3c7]">{prevVersion.dimensions.cLibrary.score}</td>
                        <td className="font-mono text-[#8ba3c7]">{version.dimensions.cLibrary.score}</td>
                        <td className="font-mono text-emerald-400">+{version.improvement.cLibrary}</td>
                      </tr>
                      <tr>
                        <td className="text-[#e0e6f0]">输出</td>
                        <td className="font-mono text-[#8ba3c7]">{prevVersion.dimensions.output.score}</td>
                        <td className="font-mono text-[#8ba3c7]">{version.dimensions.output.score}</td>
                        <td className="font-mono text-emerald-400">+{version.improvement.output}</td>
                      </tr>
                      <tr>
                        <td className="text-[#e0e6f0]">稳定性</td>
                        <td className="font-mono text-[#8ba3c7]">{prevVersion.dimensions.stability.score}</td>
                        <td className="font-mono text-[#8ba3c7]">{version.dimensions.stability.score}</td>
                        <td className="font-mono text-emerald-400">+{version.improvement.stability}</td>
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
                          <td className="font-mono text-[#6b8ab5]">#{issue.id}</td>
                          <td className="max-w-[280px] text-[#e0e6f0]">{issue.desc}</td>
                          <td>
                            <span className={`text-xs font-medium ${
                              issue.severity.includes("阻断") ? "text-red-400" :
                              issue.severity.includes("重要") ? "text-amber-400" :
                              issue.severity.includes("一般") ? "text-orange-400" :
                              "text-emerald-400"
                            }`}>
                              {issue.severity}
                            </span>
                          </td>
                          <td className="max-w-[280px] text-[#8ba3c7]">{issue.fix}</td>
                          <td>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              issue.status.includes("已修复")
                                ? "bg-emerald-500/10 text-emerald-400"
                                : issue.status === "未修复"
                                ? "bg-red-500/10 text-red-400"
                                : issue.status === "计划中"
                                ? "bg-amber-500/10 text-amber-400"
                                : "bg-[#4a9eff]/10 text-[#4a9eff]"
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
                          <td className="font-medium text-[#4a9eff]">{item.item}</td>
                          <td className="max-w-[320px] text-[#8ba3c7]">{item.content}</td>
                          <td className="text-[#8ba3c7]">{item.scope}</td>
                          <td className="font-mono text-[#6b8ab5]">{item.round}</td>
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
                          <td className="font-mono font-bold text-[#4a9eff]">{item.round}</td>
                          <td className="text-[#8ba3c7]">{item.item}</td>
                          <td className="font-mono text-red-400">{item.value}</td>
                          <td className="text-[#6b8ab5]">{item.dimension}</td>
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
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#1a2744] rounded-lg border border-[#2a3a5c]">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4a9eff] text-white text-xs flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <div className="font-medium text-[#4a9eff]">{step.phase}</div>
                        <div className="text-sm text-[#8ba3c7] mt-1">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}
          </>
        )}

        {/* Version Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-[#2a3a5c]">
          {prevVersion ? (
            <Link
              href={`/version/${prevVersion.id}`}
              className="text-[#4a9eff] hover:text-[#7bb8ff] transition-colors text-sm"
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
                className="text-[#4a9eff] hover:text-[#7bb8ff] transition-colors text-sm"
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
    <div className="bg-[#141d33] border border-[#2a3a5c] rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
      {children}
    </div>
  );
}

function getScoreBg(score: number | null): string {
  if (score === null) return "bg-[#1a2744]";
  if (score >= 90) return "bg-emerald-500/10";
  if (score >= 80) return "bg-amber-500/10";
  return "bg-red-500/10";
}

export interface VersionData {
  id: string;
  name: string;
  fullName: string;
  status: string;
  totalScore: number | null;
  /** 2.0用户满意度均分（V6.2起有值，之前版本为null） */
  totalScore2?: number | null;
  testRounds: number | null;
  coreChange: string;
  dimensions: {
    rLibrary: DimensionScore;
    kLibrary: DimensionScore;
    cLibrary: DimensionScore;
    output: DimensionScore;
    stability: DimensionScore;
  };
  /** 2.0维度评分（V6.2起有值） */
  dimensions2?: Dimensions2;
  improvement?: VersionImprovement;
  rounds: RoundData[];
  dimensionDetails: DimensionDetail[];
  issues: IssueData[];
  coreIssues?: string[];
  refactorList: RefactorItem[];
  deductionItems: DeductionItem[];
  nextSteps: NextStep[];
  qaRecords: QARecord[];
}

export interface DimensionScore {
  score: number | null;
  max: number;
  label: string;
}

/** 2.0评分维度 */
export interface Dimensions2 {
  needIdent: DimensionScore;   // 需求识别 20
  libQuality: DimensionScore;  // 四库质量 20
  rootCause: DimensionScore;   // 主因判断 15
  feasibility: DimensionScore; // 可执行性 15
  expression: DimensionScore;  // 表达舒适 15
  safety: DimensionScore;      // 安全边界 10
  feedback: DimensionScore;    // 反馈闭环 5
  conciseness: DimensionScore; // 简洁度 5
}

export interface VersionImprovement {
  total: number;
  rLibrary: number;
  kLibrary: number;
  cLibrary: number;
  output: number;
  stability: number;
}

export interface RoundData {
  id: string;
  target: string;
  scenario: string;
  rTriggers: string;
  keyPoints: string;
  score: number;
  /** 2.0评分（V6.2起有值） */
  score2?: number;
}

export interface DimensionDetail {
  round: string;
  rLibrary: number;
  kLibrary: number;
  cLibrary: number;
  output: number;
  stability: number;
}

export interface IssueData {
  id: string;
  desc: string;
  severity: string;
  fix: string;
  status: string;
}

export interface RefactorItem {
  item: string;
  content: string;
  scope: string;
  round: string;
}

export interface DeductionItem {
  round: string;
  item: string;
  value: number;
  dimension: string;
}

export interface NextStep {
  phase: string;
  desc: string;
}

export interface QARecord {
  round: string;
  question: string;
  pressurePoint: string;
  rTrigger?: string;
  score: number;
  /** 2.0评分（V6.2起有值） */
  score2?: number;
  coachAnswer: string;
  auditNote: string;
  auditConclusion?: string;
}

export interface AllVersionsData {
  versions: VersionData[];
}

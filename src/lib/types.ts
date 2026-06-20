export interface VersionData {
  id: string;
  name: string;
  fullName: string;
  status: string;
  totalScore: number | null;
  testRounds: number | null;
  coreChange: string;
  dimensions: {
    rLibrary: DimensionScore;
    kLibrary: DimensionScore;
    cLibrary: DimensionScore;
    output: DimensionScore;
    stability: DimensionScore;
  };
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
  score: number;
  coachAnswer: string;
  auditNote: string;
}

export interface AllVersionsData {
  versions: VersionData[];
}

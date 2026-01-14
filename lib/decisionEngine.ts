import knowledge from "../data/knowledge.json";

type DecisionInput = {
  subject: string;
  grade: string;
  problem: string;
};

/**
 * 🔑 Natural language → problem key mapping
 * Deterministic, explainable, offline-safe
 */
const problemMatchers: Record<string, string[]> = {
  conceptual_confusion: [
    "confused",
    "confusion",
    "not understanding",
    "zero",
    "subtraction",
    "concept",
    "abstract"
  ],

  number_recognition: [
    "recognizing numbers",
    "not recognizing numbers",
    "number recognition",
    "identify numbers",
    "numbers confusion",
    "cannot recognize numbers"
  ],

  calculation_errors: [
    "wrong answer",
    "calculation error",
    "mistake",
    "incorrect calculation"
  ],

  student_disengagement: [
    "not interested",
    "bored",
    "disengaged",
    "not participating"
  ],

  reading_difficulty: [
    "reading difficulty",
    "cannot read",
    "struggling to read",
    "reading problem"
  ],

  grammar_confusion: [
    "grammar",
    "sentence structure",
    "tense confusion"
  ]
};

function normalizeProblem(problemText: string): string | null {
  const text = problemText.toLowerCase();

  for (const key in problemMatchers) {
    if (problemMatchers[key].some(keyword => text.includes(keyword))) {
      return key;
    }
  }

  return null;
}

export function getGuidance(input: DecisionInput) {
  const subjectData = (knowledge as any)[input.subject];
  if (!subjectData) return null;

  const gradeData = subjectData[input.grade];
  if (!gradeData) return null;

  // Exact key OR normalized match
  const problemKey =
    gradeData[input.problem]
      ? input.problem
      : normalizeProblem(input.problem);

  if (!problemKey) return null;

  const response = gradeData[problemKey];
  if (!response) return null;

  return {
    immediateAction: response.now,
    reasoning: response.why,
    nextStep: response.next
  };
}
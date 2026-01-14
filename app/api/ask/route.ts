import { NextResponse } from "next/server";
import { getGuidance } from "@/lib/decisionEngine";

export async function POST(req: Request) {
  const body = await req.json();

  const { subject, grade, problem } = body;

  const result = getGuidance({
    subject,
    grade,
    problem
  });

  if (!result) {
    return NextResponse.json({
      error: "No matching guidance found."
    });
  }

  return NextResponse.json(result);
}
"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [problem, setProblem] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // 🎤 Voice recognition reference
  const recognitionRef = useRef<any>(null);

  function startVoiceInput() {
    if (typeof window === "undefined") return;

    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice input not supported in this browser. Please use Chrome.");
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setProblem(transcript);
    };

    recognition.onerror = () => {
      alert("Voice recognition failed. Please try again.");
    };

    recognition.start();
    recognitionRef.current = recognition;
  }

  async function handleSubmit() {
    if (!grade || !subject || !problem) return;

    setLoading(true);
    setResponse(null);

    const cacheKey = `${grade}_${subject}_${problem}`;

    // 1️⃣ Try offline cache first
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        setResponse(JSON.parse(cached));
        setLoading(false);
        return;
      }
    }

    try {
      // 2️⃣ Call API
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grade,
          subject,
          problem,
        }),
      });

      const data = await res.json();

      // 3️⃣ Save successful response to cache
      if (!data.error && typeof window !== "undefined") {
        localStorage.setItem(cacheKey, JSON.stringify(data));
      }

      setResponse(data);
    } catch (error) {
      // 4️⃣ Offline fallback
      setResponse({
        error: "Offline mode: No cached guidance available yet.",
      });
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8">

        {/* Offline Indicator */}
        <p className="text-sm text-green-600 mb-2">
          Offline-First Enabled • Cached responses available
        </p>

        {/* Header */}
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          GuruPulse
        </h1>
        <p className="text-slate-600 mb-6">
          Offline-first AI classroom copilot for just-in-time teacher support
        </p>

        {/* Context Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <select
            className="border border-slate-300 rounded-lg p-3 text-slate-700"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="">Select Grade</option>
            <option value="grade1-2">Grade 1–2</option>
            <option value="grade3-5">Grade 3–5</option>
            <option value="grade6-8">Grade 6–8</option>
          </select>

          <select
            className="border border-slate-300 rounded-lg p-3 text-slate-700"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            <option value="math">Math</option>
            <option value="language">Language</option>
            <option value="science">Science</option>
          </select>
        </div>

        {/* Problem Input + Voice */}
        <div className="mb-4">
          <textarea
            placeholder="Describe your classroom challenge (or tap 🎤 and speak)"
            className="w-full border border-slate-300 rounded-lg p-4 mb-2 text-slate-700"
            rows={4}
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />

          <button
            onClick={startVoiceInput}
            type="button"
            className="text-sm text-blue-600 hover:underline"
          >
            🎤 Speak instead of typing
          </button>
        </div>

        {/* Action Button */}
        <button
          onClick={handleSubmit}
          disabled={!grade || !subject || !problem}
          className={`w-full font-semibold py-3 rounded-lg transition ${
            !grade || !subject || !problem
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {loading ? "Thinking..." : "Get Classroom Help"}
        </button>

        {/* Response */}
        {response && !response.error && (
          <div className="mt-8 space-y-4 border-t pt-6">
            <div>
              <h3 className="font-semibold text-slate-800">What to do now</h3>
              <p className="text-slate-600">{response.immediateAction}</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">Why this works</h3>
              <p className="text-slate-600">{response.reasoning}</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">Next step</h3>
              <p className="text-slate-600">{response.nextStep}</p>
            </div>
          </div>
        )}

        {response?.error && (
          <p className="mt-6 text-red-600">
            {response.error}
          </p>
        )}

        {/* Reliability Proof */}
        <div className="mt-10 text-sm text-slate-500">
          <p>✔ Responses are generated using verified pedagogical strategies.</p>
          <p>✔ Cached locally for offline classroom use.</p>
          <p>✔ No student data stored.</p>
        </div>

      </div>
    </main>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    question: "Which activity do you enjoy most?",
    options: [
      "Solving logic puzzles or math problems",
      "Writing stories, essays, or articles",
      "Drawing, designing, or making things",
      "Helping or teaching other people",
    ],
  },
  {
    id: 2,
    question: "What kind of work environment appeals to you?",
    options: [
      "Fast-paced startup or tech company",
      "Stable government or PSU job",
      "Work from home / freelance",
      "Research lab or university",
    ],
  },
  {
    id: 3,
    question: "What is your current education level?",
    options: [
      "Class 10–12 (school student)",
      "B.Tech / B.E. (engineering student)",
      "B.Sc / B.Com / B.A. (graduate)",
      "Working professional",
    ],
  },
  {
    id: 4,
    question: "Which subject do you enjoy most?",
    options: [
      "Mathematics or computer science",
      "Biology or chemistry",
      "Social science or economics",
      "Art, design, or literature",
    ],
  },
  {
    id: 5,
    question: "What is your biggest career goal right now?",
    options: [
      "Get into a top college (IIT, NIT, AIIMS)",
      "Land a high-paying tech job",
      "Start my own business",
      "Work in government or civil services",
    ],
  },
];

const results: Record<number, { title: string; description: string; skills: string[]; nextStep: string }> = {
  0: {
    title: "Software & Data Engineering",
    description: "You have a strong analytical mind — a great fit for India's booming tech sector.",
    skills: ["Python", "DSA", "SQL", "System Design"],
    nextStep: "Start Python on freeCodeCamp (free, 6 hours) this weekend.",
  },
  1: {
    title: "Civil Services & Public Policy",
    description: "Your interest in society and governance makes UPSC a natural fit.",
    skills: ["Current Affairs", "Essay Writing", "Indian Polity", "Economics"],
    nextStep: "Start reading NCERT books from Class 6 and subscribe to The Hindu.",
  },
  2: {
    title: "UI/UX & Product Design",
    description: "Your creative thinking makes you ideal for designing products Indians will love.",
    skills: ["Figma", "User Research", "Prototyping", "Visual Design"],
    nextStep: "Install Figma (free) and complete Google's UX Design course on Coursera.",
  },
  3: {
    title: "Healthcare & Life Sciences",
    description: "Your love for biology points towards a rewarding career in medicine or biotech.",
    skills: ["Biology", "Chemistry", "NEET prep", "Communication"],
    nextStep: "Download the NEET 2025 syllabus from NTA's official website.",
  },
};

export default function AssessmentPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);

    if (current + 1 === questions.length) {
      setShowResult(true);
    } else {
      setCurrent(current + 1);
    }
  }

  // Simple result calculation
  const resultKey = answers[3] ?? 0; // based on subject question
  const result = results[resultKey] ?? results[0];

  if (showResult) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h1 className="text-2xl font-bold mb-2">Assessment Complete!</h1>
        <p className="text-gray-500 text-sm mb-8">Based on your answers, we recommend:</p>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 text-left mb-6">
          <div className="inline-block bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
            Recommended Career Path
          </div>
          <h2 className="text-xl font-bold text-green-700 mb-3">{result.title}</h2>
          <p className="text-sm text-gray-600 mb-5">{result.description}</p>

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Key skills to develop</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {result.skills.map((skill) => (
              <span key={skill} className="bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>

          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-green-800 mb-1">Your next step (do this today):</p>
            <p className="text-sm text-green-700">{result.nextStep}</p>
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <Link href="/skills" className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2.5 rounded-xl transition-colors">
            View my skill roadmap →
          </Link>
          <Link href="/chat" className="border border-gray-200 hover:bg-gray-100 text-gray-700 font-medium px-5 py-2.5 rounded-xl transition-colors">
            Ask AI Mentor
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-1">Career Assessment</h1>
        <p className="text-sm text-gray-500">5 questions · takes about 3 minutes</p>
      </div>

      {/* Progress bar */}
      <div className="flex gap-2 mb-8">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i < current ? "bg-green-500" : i === current ? "bg-green-300" : "bg-gray-100"
            }`}
          />
        ))}
      </div>

      {/* Question card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">
          Question {current + 1} of {questions.length}
        </p>
        <h2 className="text-lg font-semibold mb-6">{q.question}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options.map((option, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`p-4 rounded-xl border text-sm text-left transition-all ${
                selected === i
                  ? "border-green-500 bg-green-50 text-green-800 font-medium"
                  : "border-gray-200 bg-gray-50 text-gray-700 hover:border-green-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="bg-green-600 hover:bg-green-700 disabled:opacity-40 text-white font-medium px-6 py-2.5 rounded-xl transition-colors"
        >
          {current + 1 === questions.length ? "See my results" : "Next →"}
        </button>
      </div>
    </div>
  );
}
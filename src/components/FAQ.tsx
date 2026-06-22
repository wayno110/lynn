"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What ages / levels do you teach?",
    a: "Primary 3 to Secondary 4 — including PSLE prep, Express stream, and O-Level Chinese (Standard and Higher).",
  },
  {
    q: "In-person or online — which is better?",
    a: "Honestly, both work. In-person is great for younger kids who need more interaction; online suits busy secondary students juggling CCAs and other tuition. Many students do a mix.",
  },
  {
    q: "Where is your home studio?",
    a: "In Singapore — I'll share the exact address once we confirm a trial lesson.",
  },
  {
    q: "How long is each lesson?",
    a: "1.5 hours by default. We can do shorter (1 hr) for revision or longer (2 hr) for intensive exam prep periods.",
  },
  {
    q: "What if my child needs to reschedule?",
    a: "Just WhatsApp me at least 24 hours in advance. Makeup classes are easy to arrange — I'll never charge you for a missed lesson if you give notice.",
  },
  {
    q: "How do I pay?",
    a: "Monthly via PayNow or bank transfer. Invoice goes out through the student portal at the start of each month.",
  },
  {
    q: "Do you offer small group lessons?",
    a: "Yes — small groups of up to 4 students for in-person sessions. Online is 1-to-1 only.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-jade-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-ink hover:bg-jade-50 transition"
              >
                <span>{f.q}</span>
                <ChevronDown
                  size={18}
                  className={`transition ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-ink/70 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

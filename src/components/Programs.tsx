import { Mic, PenTool, BookOpen, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Primary Chinese (P3–P6)",
    cn: "小学华文 · PSLE 备考",
    desc: "Building strong foundations: 听力, 口试, 作文 and 理解. Lots of games, flashcards and confidence-building for younger learners.",
    badge: "PSLE",
  },
  {
    icon: Mic,
    title: "Lower Secondary (Sec 1–2)",
    cn: "中学华文基础",
    desc: "Strengthen vocabulary, grammar, and writing fluency. Bridge the gap between primary and O-Level expectations.",
    badge: "Foundation",
  },
  {
    icon: PenTool,
    title: "O-Level Prep (Sec 3–4)",
    cn: "O水准 · 口试 / 作文 / 综合",
    desc: "Targeted prep for 口试, 作文 and 综合填空. Past-year drills, model essays, and exam strategy.",
    badge: "O-Level",
  },
  {
    icon: BookOpen,
    title: "Higher Chinese",
    cn: "高级华文",
    desc: "For students taking Higher Chinese. Deeper text analysis, literary appreciation, and advanced composition.",
    badge: "Optional",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink text-center mb-4">
          Programs <span className="chinese-heading text-jade-600">/ 课程</span>
        </h2>
        <p className="text-center text-ink/70 mb-12 max-w-2xl mx-auto">
          Every plan is personalised to the student's grade level and weak areas — no two
          students get the same worksheets.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-jade-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-jade-100 text-jade-700 flex items-center justify-center">
                  <p.icon size={20} />
                </div>
                <span className="text-xs font-semibold bg-seal/10 text-seal px-2 py-1 rounded-full">
                  {p.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink">{p.title}</h3>
              <div className="chinese-heading text-jade-600 text-sm mb-3">{p.cn}</div>
              <p className="text-ink/70 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-ink/60 text-sm">
            Lesson rates vary by level and format. <a href="#book" className="text-jade-600 font-semibold hover:underline">Message 刘老师 for current rates →</a>
          </p>
        </div>
      </div>
    </section>
  );
}

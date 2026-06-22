export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
            Meet <span className="chinese-heading text-jade-600">刘老师</span>
          </h2>
          <p className="text-lg text-ink/80 leading-relaxed">
            Hi, I'm <strong>Lynn</strong> — my students call me{" "}
            <span className="chinese-heading">刘老师</span>. I'm a Chinese tutor based in
            Singapore, teaching primary and secondary students in person at my home studio and
            online over Zoom.
          </p>
          <p className="mt-4 text-lg text-ink/80 leading-relaxed">
            My students will tell you I'm <em>not</em> the strict, scary Chinese teacher 😅
            I believe kids learn fastest when they're laughing — which is why my classroom has
            silly masks, themed lesson games, and a strict <em>no-boring-textbook-drills</em> rule.
            But underneath the fun, my lessons are tightly aligned with the{" "}
            <strong>SEAB syllabus</strong>, and my students consistently move up 2–3 grades.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { num: "5+", label: "Years teaching" },
              { num: "50+", label: "Students mentored" },
              { num: "P3–Sec 4", label: "Grade levels" },
            ].map((s) => (
              <div key={s.label} className="bg-jade-50 border border-jade-100 rounded-2xl p-4 text-center">
                <div className="text-xl md:text-2xl font-extrabold text-jade-700">{s.num}</div>
                <div className="text-xs text-ink/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <img
            src="/photos/photo1.jpg"
            alt="Lynn in her signature playful smile mask"
            className="rounded-2xl shadow-md w-full"
          />
          <div className="text-center text-sm text-ink/50 italic">
            The smile masks are kind of a thing now 😄
          </div>
        </div>
      </div>
    </section>
  );
}

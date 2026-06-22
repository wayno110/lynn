const reviews = [
  {
    name: "Nataliee",
    grade: "Sec 4",
    text: "刘老师 makes 口试 actually fun. I went from C6 to A2 in one year. The vocab booklets she gives are gold.",
  },
  {
    name: "Yi Sheng",
    grade: "Sec 4",
    text: "I used to hate 作文. Now I have a clear structure for every prompt. She's super patient with rescheduling too.",
  },
  {
    name: "Mrs Tan (parent)",
    grade: "P5 parent",
    text: "My son used to dread Chinese class. Now he asks when his next lesson with 刘老师 is. That's a miracle.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink text-center mb-12">
          What students &amp; parents say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-7 border border-jade-100">
              <div className="text-jade-500 mb-3">★★★★★</div>
              <p className="text-ink/80 leading-relaxed italic">"{r.text}"</p>
              <div className="mt-5 pt-4 border-t border-ink/10">
                <div className="font-bold text-ink">{r.name}</div>
                <div className="text-sm text-ink/60">{r.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

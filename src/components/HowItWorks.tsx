import { Home, Video } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink text-center mb-4">
          Two ways to learn with 刘老师
        </h2>
        <p className="text-center text-ink/70 mb-12 max-w-2xl mx-auto">
          Most students mix both — in-person when schedules allow, Zoom when they can't travel.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gradient-to-br from-jade-50 to-cream border border-jade-100 rounded-3xl p-8">
            <div className="w-14 h-14 rounded-2xl bg-jade-500 text-white flex items-center justify-center mb-5">
              <Home size={26} />
            </div>
            <h3 className="text-2xl font-bold text-ink mb-2">In-Person 🏠</h3>
            <div className="chinese-heading text-jade-600 mb-3">面对面授课</div>
            <p className="text-ink/70 leading-relaxed">
              Small-group or 1-to-1 lessons at my <strong>home studio</strong> in Singapore.
              Bright, modern classroom with desks, whiteboards, and yes — silly mask sessions to
              keep things fun.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li>✓ Up to 4 students per group</li>
              <li>✓ All materials provided</li>
              <li>✓ Snacks &amp; drinks on the house 🧃</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cream to-white border border-jade-100 rounded-3xl p-8">
            <div className="w-14 h-14 rounded-2xl bg-seal text-white flex items-center justify-center mb-5">
              <Video size={26} />
            </div>
            <h3 className="text-2xl font-bold text-ink mb-2">Online via Zoom 💻</h3>
            <div className="chinese-heading text-seal mb-3">线上一对一</div>
            <p className="text-ink/70 leading-relaxed">
              1-to-1 lessons over Zoom — perfect for busy students or those overseas.{" "}
              <strong>Same Zoom link every week</strong>, saved in your student portal. No
              hunting through old WhatsApp messages.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li>✓ Permanent Zoom link in your portal</li>
              <li>✓ Materials &amp; homework delivered digitally</li>
              <li>✓ Lesson recordings on request</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-ink text-center mb-10">How it works</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: "1", t: "Free Trial", d: "30-minute trial. We see if we click and identify weak areas." },
            { n: "2", t: "Custom Plan", d: "Lynn designs your weekly schedule and materials." },
            { n: "3", t: "Weekly Lessons", d: "In-person, online, or mix &amp; match. Always same time, same teacher." },
            { n: "4", t: "Student Portal", d: "Homework, PDFs, schedule, and Zoom link — all in one place." },
          ].map((s) => (
            <div key={s.n}>
              <div className="w-12 h-12 rounded-full bg-jade-500 text-white font-bold text-lg flex items-center justify-center mb-4">
                {s.n}
              </div>
              <h4 className="font-bold text-ink mb-2">{s.t}</h4>
              <p className="text-sm text-ink/70 leading-relaxed" dangerouslySetInnerHTML={{__html: s.d}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

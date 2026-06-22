import { Calendar, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-jade-100 text-jade-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
            🇸🇬 Singapore · Primary &amp; Secondary · MOE-aligned
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-ink">
            你好，我是<span className="text-jade-600 chinese-heading"> 刘老师</span> 👋
          </h1>
          <p className="mt-4 text-2xl text-ink/80 font-medium">
            Chinese tuition that students <em>actually look forward to.</em>
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-lg">
            1-to-1 and small-group lessons for <strong>P3 to Sec 4</strong> students — in person at my
            home studio in Singapore, or online over Zoom. Specialising in <strong>口试, 作文</strong> and{" "}
            <strong>综合填空</strong>, with a teaching style that's fun, interactive, and (occasionally)
            involves silly masks 😄
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 bg-jade-500 hover:bg-jade-600 text-white font-semibold px-6 py-3 rounded-full shadow-sm transition"
            >
              <Calendar size={18} /> Book a Free Trial
            </a>
            <a
              href="https://wa.me/6500000000"
              className="inline-flex items-center justify-center gap-2 border border-jade-500 text-jade-700 hover:bg-jade-50 font-semibold px-6 py-3 rounded-full transition"
            >
              <MessageCircle size={18} /> WhatsApp 刘老师
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-ink/60">
            <div><span className="font-bold text-ink">50+</span> students taught</div>
            <div><span className="font-bold text-ink">PSLE + O-Level</span> ready</div>
            <div><span className="font-bold text-ink">In-person</span> + <span className="font-bold text-ink">Online</span></div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-jade-100 rounded-3xl rotate-3" />
          <img
            src="/photos/hero_illustration.jpg"
            alt="Illustration of Lynn (刘老师), a Chinese tutor wearing her signature playful smile mask, in her home studio"
            className="relative rounded-3xl shadow-xl -rotate-1 w-full"
          />
        </div>
      </div>
    </section>
  );
}

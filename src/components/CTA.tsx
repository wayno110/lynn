import { Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section id="book" className="py-20 bg-gradient-to-br from-jade-500 to-jade-700 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to bring up your Chinese grade?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Book a <strong>free 30-minute trial lesson</strong> with 刘老师. No pressure, no commitment —
          let's just see if we click.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://calendly.com/teacher-lynn/trial"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-jade-700 font-bold px-7 py-3 rounded-full hover:bg-cream transition"
          >
            <Calendar size={18} /> Book Free Trial
          </a>
          <a
            href="https://wa.me/6500000000"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-7 py-3 rounded-full hover:bg-white/10 transition"
          >
            WhatsApp 刘老师
          </a>
        </div>
        <p className="mt-6 text-sm text-white/70">
          Existing student?{" "}
          <a
            href="https://teacher-lynn.softr.app"
            className="underline font-semibold hover:text-white"
          >
            Sign in to your portal →
          </a>
        </p>
      </div>
    </section>
  );
}

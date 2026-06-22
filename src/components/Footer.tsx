export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="seal w-9 h-9 text-lg">刘</span>
          <div>
            <div className="font-bold text-cream">Teacher Lynn</div>
            <div className="text-xs">刘老师中文 · Singapore</div>
          </div>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} Teacher Lynn. All rights reserved.</div>
        <div className="text-sm flex gap-4">
          <a href="https://wa.me/6500000000" className="hover:text-cream">WhatsApp</a>
          <a href="mailto:hello@teacherlynn.sg" className="hover:text-cream">Email</a>
          <a href="https://teacher-lynn.softr.app" className="hover:text-cream">Student Portal</a>
        </div>
      </div>
      {/* Tiny hidden love note 💚 */}
      <div className="text-center text-xs text-cream/30 mt-6">
        Built with 💚 for 刘老师
      </div>
    </footer>
  );
}

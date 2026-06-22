"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About / 关于", href: "#about" },
    { label: "Programs / 课程", href: "#programs" },
    { label: "How it Works", href: "#how" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur border-b border-jade-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="seal w-10 h-10 text-xl">刘</span>
          <div className="leading-tight">
            <div className="font-bold text-ink">Teacher Lynn</div>
            <div className="text-xs text-jade-600 chinese-heading">刘老师中文</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-ink/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-jade-600 transition">
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="bg-jade-500 hover:bg-jade-600 text-white px-4 py-2 rounded-full transition shadow-sm"
          >
            Book Free Trial
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-jade-100 bg-cream px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-ink/80">
              {l.label}
            </a>
          ))}
          <a href="#book" className="block bg-jade-500 text-white text-center px-4 py-2 rounded-full">
            Book Free Trial
          </a>
        </div>
      )}
    </nav>
  );
}

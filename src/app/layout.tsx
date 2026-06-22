import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teacher Lynn (刘老师) — O-Level Chinese Tuition Singapore",
  description:
    "1-to-1 O-Level Chinese tuition by 刘老师. Specialising in 口试, 作文 and 综合填空. Singapore MOE-aligned. Book a free trial today.",
  keywords: [
    "O-Level Chinese tuition",
    "Singapore Chinese tutor",
    "刘老师",
    "Chinese oral exam",
    "华文补习",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

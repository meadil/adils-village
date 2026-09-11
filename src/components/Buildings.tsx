"use client";

import { motion } from "framer-motion";
import { luckiestGuy } from "@/lib/fonts";

const projects = [
  {
    name: "Book Summarizer",
    level: "v1",
    stack: "Gemini API · Render",
    blurb:
      "Extracts the core ideas from a book before I commit to reading it — so fluff and generic advice get skipped, not endured.",
  },
  {
    name: "Book Bot Automation",
    level: "v1",
    stack: "Telegram · Vercel",
    blurb:
      "An automated workflow that posts book summaries to a Telegram channel, paired with a file-hosting site for the books themselves. Built and shipped in under a day.",
  },
  {
    name: "Plan Tomorrow",
    level: "v1",
    stack: "Personal tool",
    blurb:
      "Solves 'I don't know what to do tomorrow' by planning the night before, instead of waking up without a plan.",
  },
];

export default function Buildings() {
  return (
    <section id="buildings" className="py-16 sm:py-24 px-6 bg-base">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${luckiestGuy.className} text-3xl md:text-4xl text-ink mb-2`}>
          Buildings
        </h2>
        <p className="text-muted mb-10 sm:mb-12">Things I&apos;ve built and shipped.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-surface border border-black/5 p-6 shadow-sm flex flex-col gap-3"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                <span className="text-xs font-medium text-gold bg-gold/10 rounded-full px-2 py-1 whitespace-nowrap">
                  {p.level}
                </span>
              </div>
              <p className="text-sm text-muted">{p.stack}</p>
              <p className="text-sm text-ink/80 leading-relaxed">{p.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { luckiestGuy } from "@/lib/fonts";

const trophies = [
  {
    title: "First Real Ship",
    detail:
      "Published the Book Summarizer live — after a long streak of building things locally and quietly deleting them.",
  },
  {
    title: "First Build",
    detail:
      "An age calculator, built with Claude. I gave the idea, watched it come to life — the first time it felt like I'd actually built something.",
  },
  {
    title: "The AI Leap",
    detail:
      "Used to be wary of AI. Decided to stop overthinking it and just use it for everything. Everything since traces back to this.",
  },
];

export default function TrophyShelf() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-base">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${luckiestGuy.className} text-3xl md:text-4xl text-ink mb-2`}>
          Trophy Shelf
        </h2>
        <p className="text-muted mb-10 sm:mb-12">Milestones, not resume lines.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trophies.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-surface border border-black/5 p-6 shadow-sm flex flex-col gap-3"
            >
              <div className="h-10 w-10 rounded-full bg-gold/15 flex items-center justify-center text-gold font-semibold">
                🏆
              </div>
              <h3 className="text-lg font-semibold text-ink">{t.title}</h3>
              <p className="text-sm text-ink/80 leading-relaxed">{t.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
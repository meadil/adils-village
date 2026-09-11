"use client";

import { motion } from "framer-motion";
import { luckiestGuy } from "@/lib/fonts";

const log = [
  {
    when: "Early days",
    what: "Built an age calculator and a newsletter automation in the same month. Felt like magic.",
  },
  {
    when: "9 months",
    what: "Stepped away almost entirely for a major exam. Nearly gave up the interest altogether.",
  },
  {
    when: "The comeback",
    what: "Decided building mattered more than titles. Planned a self-taught curriculum: \"The Builder Stack.\"",
  },
  {
    when: "Manual phase",
    what: "Learned Python and SQL the slow way, through W3Schools — the same patient way I first learned JS.",
  },
  {
    when: "The shift",
    what: "Got tired of reading docs. Spent a full day asking Claude everything about deployment instead.",
  },
  {
    when: "Recently",
    what: "Stopped deleting projects after building them. Started pushing to GitHub and iterating instead.",
  },
];

export default function WarLog() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <h2 className={`${luckiestGuy.className} text-3xl md:text-4xl text-ink mb-2`}>
          Clan War Log
        </h2>
        <p className="text-muted mb-10 sm:mb-12">The timeline so far.</p>

        <div className="relative border-l border-black/10 pl-6 flex flex-col gap-10">
          {log.map((entry, i) => (
            <motion.div
              key={entry.when}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-gems" />
              <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-1">
                {entry.when}
              </p>
              <p className="text-ink/90 leading-relaxed">{entry.what}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
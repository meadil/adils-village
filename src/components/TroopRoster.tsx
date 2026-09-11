"use client";

import { motion } from "framer-motion";
import { luckiestGuy } from "@/lib/fonts";

const roster = [
  {
    tier: "High Level",
    color: "bg-gold",
    troops: ["Python", "JavaScript", "Claude", "VS Code", "Antigravity", "Gemini"],
  },
  {
    tier: "Mid Level",
    color: "bg-elixir",
    troops: ["n8n", "Docker", "Vercel", "Render", "Machine Learning"],
  },
  {
    tier: "Just Started",
    color: "bg-dark-elixir",
    troops: ["Devin"],
  },
];

export default function TroopRoster() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${luckiestGuy.className} text-3xl md:text-4xl text-ink mb-2`}>
          Troop Roster
        </h2>
        <p className="text-muted mb-10 sm:mb-12">Tools and languages, by how deep I&apos;ve leveled them up.</p>

        <div className="flex flex-col gap-10">
          {roster.map((group) => (
            <div key={group.tier}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-4">
                {group.tier}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.troops.map((troop, i) => (
                  <motion.span
                    key={troop}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.06 }}
                    className="flex items-center gap-2 rounded-full bg-base border border-black/5 px-4 py-2 text-sm font-medium text-ink shadow-sm"
                  >
                    <span className={`h-2 w-2 rounded-full ${group.color}`} />
                    {troop}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
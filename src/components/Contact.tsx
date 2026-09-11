"use client";

import { motion } from "framer-motion";
import { luckiestGuy } from "@/lib/fonts";

const links = [
  { label: "GitHub", href: "https://github.com/meadil" },
  { label: "Twitter", href: "https://x.com/adilthedev" },
  { label: "Telegram", href: "https://t.me/ceo_of_excuses" },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=me.iftekhar.adil@gmail.com&su=Hello%20Adil&body=Hi%20Adil,%0A%0A",
  },
];

export default function Contact() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-base">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className={`${luckiestGuy.className} text-3xl md:text-4xl text-ink`}>
          Join the Clan
        </h2>
        <p className="text-muted max-w-md">
          No clan started as a legend. Reach out, follow along, or just say hi.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-surface border border-black/5 px-5 py-2.5 text-sm font-medium text-ink shadow-sm"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
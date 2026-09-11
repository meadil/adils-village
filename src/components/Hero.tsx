"use client";

import { motion } from "framer-motion";
import { luckiestGuy } from "@/lib/fonts";
import { playPop } from "@/lib/sound";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/village-bg.webp')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 w-full max-w-2xl bg-surface/90 backdrop-blur-md rounded-3xl px-8 py-12 shadow-xl border border-black/5"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-base px-4 py-1.5 text-sm font-medium text-muted shadow-sm border border-black/5">
          <span className="h-2 w-2 rounded-full bg-gold" />
          Town Hall Level 5
        </span>

        <h1
          className={`${luckiestGuy.className} text-4xl sm:text-5xl md:text-7xl tracking-wide text-ink break-words`}
        >
          Adil&apos;s Village
        </h1>

        <p className="max-w-xl text-base sm:text-lg md:text-xl text-muted">
          I stopped asking if I could. I started asking how.
        </p>

        <motion.a
          href="#buildings"
          onClick={playPop}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-4 rounded-full bg-gold text-black px-6 py-3 text-sm font-semibold shadow-md"
        >
          Enter the Village
        </motion.a>
      </motion.div>
    </section>
  );
}
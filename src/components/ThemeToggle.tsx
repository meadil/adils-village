"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const isDark = stored === "dark";
        setDark(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    function toggle() {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    }

    return (
        <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-surface border border-black/10 shadow-md flex items-center justify-center text-lg"
        >
            {dark ? "🌙" : "☀️"}
        </button>
    );
}
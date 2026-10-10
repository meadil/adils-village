# Adil's Village

**A village you can walk around on the web.**

Not a portfolio. Not a landing page. A small place with buildings, residents, a
trophy shelf, and a war log — built because a personal site shouldn't have to be
one long scroll of "here's what I did."

---

## What's in the village

**The town hall.** The front door. Says what's here and where to go next.

**Buildings.** Each area of the site is a building. You can see what's inside
before you walk in.

**The residents.** The people who live here — the projects, the tools, whatever
belongs in the village.

**The trophy shelf.** Things worth showing off.

**The war log.** A record of what happened, when.

**Contact.** A way to get in touch.

---

## The details

It animates as you scroll — things fade and slide into place, there's a progress
bar, and a sound effect when you click. Light and dark mode both work. It's
fully responsive, so it's fine on a phone.

---

## Running it

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm start
```

---

## How it's built

**Next.js** — the React framework, so it renders fast and works well on slow
connections
**React + TypeScript**
**Tailwind CSS** for styling
**Framer Motion** for the animations

---

## Structure

```
src/
├── app/
│   ├── page.tsx        ← assembles the page
│   └── globals.css     ← colours, fonts, shared styles
├── components/
│   ├── Hero.tsx        ← the town hall
│   ├── Buildings.tsx
│   ├── TroopRoster.tsx
│   ├── TrophyShelf.tsx
│   ├── WarLog.tsx
│   ├── Contact.tsx
│   ├── ScrollProgress.tsx
│   └── ThemeToggle.tsx
└── lib/
    ├── fonts.ts
    └── sound.ts
```

---

## Status

Early. The structure and the feel are there; the content is what comes next.
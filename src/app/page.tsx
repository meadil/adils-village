import Hero from "@/components/Hero";
import Buildings from "@/components/Buildings";
import TroopRoster from "@/components/TroopRoster";
import TrophyShelf from "@/components/TrophyShelf";
import WarLog from "@/components/WarLog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Buildings />
      <TroopRoster />
      <TrophyShelf />
      <WarLog />
      <Contact />
    </main>
  );
}
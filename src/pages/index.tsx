import HeroSection from "@/components/Banners/HeroSection";
import GamerWorld from "@/components/GamerWorld/GamerWorld";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="bg-gray-100">
        <HeroSection />
        <GamerWorld />
      </main>
    </div>
  );
}

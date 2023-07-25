import HeroSection from "@/components/Banners/HeroSection";
import GamerWorld from "@/components/GamerWorld/GamerWorld";
import Header from "@/components/Header/Header";
import FlashSell from "../components/FlashSelll/index";
import TopSellingProducts from "@/components/TopSellingProducts/Index";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="bg-gray-100">
        <HeroSection />
        <GamerWorld />
        <FlashSell />
        <TopSellingProducts />
      </main>
    </div>
  );
}

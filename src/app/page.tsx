import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import WhyWrapping from "@/components/WhyWrapping";
import ReuseRefresh from "@/components/ReuseRefresh";
import KitchenSection from "@/components/KitchenSection";
import BookInstaller from "@/components/BookInstaller";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[120px]">
        <HeroSlider />
        <WhyWrapping />
        <ReuseRefresh />
        <KitchenSection />
        <BookInstaller />
        <Footer />
      </div>
      <CookieConsent />
    </main>
  );
}

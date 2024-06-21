import HeroSection from "../components/HomePage/HeroSection";
import InfoSection from "../components/HomePage/InfoSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import ClientSection from "../components/HomePage/ClientSection";
import Stats from "../components/ui/Stats";
import LogoMarquee from "../components/ui/LogoMarquee";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Stats />
      <InfoSection />
      <ServicesSection />
      <ClientSection />
      <LogoMarquee />
    </main>
  );
}

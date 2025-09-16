import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import StatsSection from "@/components/sections/StatsSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProcessSection from "@/components/sections/ProcessSection";
import DashboardSection from "@/components/sections/DashboardSection";
import CTASection from "@/components/sections/CTASection";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <ProblemSection />
        <StatsSection />
        <SolutionSection />
        <ProcessSection />
        <DashboardSection />
        <CTASection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

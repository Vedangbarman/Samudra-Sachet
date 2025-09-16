import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";
import responseTeamImage from "@/assets/response-team.jpg";

const CTASection = () => {
  return (
    <section 
      className="relative py-20 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 20, 50, 0.8), rgba(0, 20, 50, 0.9)), url(${responseTeamImage})`
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-extrabold sm:text-4xl animate-fade-in">
          Join the Network. Protect Our Coasts.
        </h2>
        <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto animate-fade-in-delay">
          Your contribution is vital. By reporting what you see, you help validate scientific models and empower authorities to act faster, potentially saving lives and property. Download the Samudra Sachet App today!
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
          <Button
            size="lg"
            className="inline-flex items-center bg-background text-foreground hover:bg-background/90 shadow-ocean transition-wave"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Get on Google Play
          </Button>
          <Button
            size="lg"
            className="inline-flex items-center bg-background text-foreground hover:bg-background/90 shadow-ocean transition-wave"
          >
            <Download className="w-5 h-5 mr-2" />
            Download on App Store
          </Button>
        </div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-wave"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-wave"></div>
      </div>
    </section>
  );
};

export default CTASection;
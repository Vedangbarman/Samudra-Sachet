import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coastline.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 20, 50, 0.7), rgba(0, 20, 50, 0.8)), url(${heroImage})`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight animate-fade-in">
          <span className="block">Your Eyes on the Coast:</span>
          <span className="block text-accent animate-wave">Be a Coastal Sentinel</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-blue-100 animate-fade-in-delay">
          An integrated platform empowering citizens and disaster managers to monitor, report, and respond to ocean hazards in real-time. Together, we can build a safer coastline for India.
        </p>
        <div id="report" className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-delay-2">
          <Button
            size="lg"
            className="w-full sm:w-auto gradient-ocean text-white font-bold py-4 px-8 text-lg shadow-glow hover:shadow-ocean transition-wave transform hover:scale-105"
          >
            View Live Hazard Map
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 font-bold py-4 px-8 text-lg transition-wave transform hover:scale-105"
          >
            Report an Observation
          </Button>
        </div>
      </div>
      
      {/* Animated Wave Overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-20 text-background animate-wave" 
          viewBox="0 0 1440 74" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 74L60 69.3C120 64.7 240 55.3 360 50.7C480 46 600 46 720 48.7C840 51.3 960 56.7 1080 58C1200 59.3 1320 56.7 1380 55.3L1440 54V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
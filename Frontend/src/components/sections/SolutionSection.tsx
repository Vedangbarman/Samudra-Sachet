import { Users, Monitor, Brain } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Users,
      title: "Citizen Reporting",
      description: "Submit geotagged reports, photos, and videos of unusual tides, flooding, or damage via our web and mobile app. Your observation is the first line of defense."
    },
    {
      icon: Monitor,
      title: "Live Monitoring Dashboard",
      description: "Visualize crowdsourced reports and social media trends on a dynamic, interactive map. See what's happening, where it's happening, as it happens."
    },
    {
      icon: Brain,
      title: "Smart Analytics",
      description: "Our NLP engine analyzes social media feeds to identify emerging threats, public sentiment, and keyword hotspots, providing deeper insights for agencies."
    }
  ];

  return (
    <section id="solution" className="py-16 sm:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">
            Our Solution
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
            A Unified Platform for Situational Awareness
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Samudra Sachet combines citizen science with advanced data analytics for a complete, real-time picture of our coastlines.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-background p-8 rounded-2xl shadow-card transition-wave border border-border hover:shadow-ocean hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg gradient-ocean text-primary-foreground mb-4 group-hover:scale-110 transition-smooth">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
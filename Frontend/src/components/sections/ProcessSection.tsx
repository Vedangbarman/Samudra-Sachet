const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Observe & Report",
      description: "Citizen submits a report with media via the app, even offline."
    },
    {
      number: "2", 
      title: "Aggregate & Process",
      description: "Platform collects data and scans social media for related keywords."
    },
    {
      number: "3",
      title: "Visualize & Analyze", 
      description: "Data appears on the live map; hotspots are generated automatically."
    },
    {
      number: "4",
      title: "Inform & Act",
      description: "Authorities get a real-time view to make faster, effective decisions."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple, effective process from observation to action.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center flex-1">
              {/* Step Content */}
              <div className="flex flex-col items-center text-center md:flex-1">
                <div className="w-16 h-16 rounded-full gradient-ocean flex items-center justify-center font-bold text-2xl text-primary-foreground shadow-glow animate-float group-hover:animate-wave transition-wave">
                  {step.number}
                </div>
                <h3 className="mt-4 font-bold text-lg text-foreground">{step.title}</h3>
                <p className="text-muted-foreground mt-2 max-w-xs">{step.description}</p>
              </div>
              
              {/* Connecting Line - Hidden on mobile, visible on desktop, hidden after last item */}
              {index < steps.length - 1 && (
                <div className="hidden md:block flex-1 max-w-24 mx-4">
                  <div className="h-0.5 gradient-ocean opacity-60 animate-shimmer"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
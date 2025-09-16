import { Clock, MessageCircle, CheckCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Delayed Field Reports",
      description: "Critical information from affected areas often faces delays, hindering a swift response."
    },
    {
      icon: MessageCircle,
      title: "Untapped Social Insights",
      description: "Valuable eyewitness accounts on social media are often lost in the noise of digital chatter."
    },
    {
      icon: CheckCircle,
      title: "Lack of Verified Citizen Data",
      description: "No unified system exists to collect and verify observations from the people who see events first."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Bridging the Gap in Coastal Safety
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            India's vast coastline is a lifeline for millions, but it's vulnerable. We're closing the information gap with your help.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-background border border-border rounded-xl shadow-card hover:shadow-ocean transition-wave transform hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto group-hover:bg-primary/20 transition-smooth">
                  <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-smooth" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{problem.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
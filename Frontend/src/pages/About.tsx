import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Users, Target, Globe, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-deep text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fade-in">
              Powering Coastal Resilience Through Community and Technology
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
              Samudra Sachet is more than a platform; it's a movement to unite citizens, scientists, and authorities in the collective mission to safeguard India's coastline.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Mission</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  To create a robust, real-time coastal hazard information network by bridging the gap between scientific forecasting and on-the-ground reality. We empower every citizen to become a sentinel for their community, transforming smartphones into vital tools for disaster risk reduction.
                </p>
              </div>
              <div className="gradient-subtle p-8 rounded-2xl border border-border animate-scale-in">
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                <p className="mt-3 text-lg text-muted-foreground">
                  A future where no coastal community faces the unknown alone. Where every wave, every tide, and every storm is met with preparedness, knowledge, and collective action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Core Values</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our mission to protect coastal communities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group hover-scale animate-fade-in">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  Every citizen's voice matters in coastal safety
                </p>
              </div>
              
              <div className="text-center group hover-scale animate-fade-in">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Precision</h3>
                <p className="text-muted-foreground">
                  Accurate, timely information saves lives
                </p>
              </div>
              
              <div className="text-center group hover-scale animate-fade-in">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Cutting-edge technology for coastal protection
                </p>
              </div>
              
              <div className="text-center group hover-scale animate-fade-in">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  Dependable systems when it matters most
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INCOIS Information */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">About INCOIS</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  The Indian National Centre for Ocean Information Services (INCOIS), operating under the administrative control of the Ministry of Earth Sciences, provides ocean information and advisory services to support disaster risk reduction and ensure maritime safety for coastal stakeholders.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our early warning services cover hazards such as tsunamis, storm surges, high waves, swell surges, and coastal currents, enabling authorities and communities to make informed decisions during ocean-related emergencies.
                </p>
              </div>
              <div className="gradient-subtle p-8 rounded-2xl border border-border animate-scale-in">
                <h3 className="text-2xl font-bold text-primary">Our Expertise</h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ocean state forecasting and monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Tsunami early warning systems
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Storm surge and high wave predictions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Coastal vulnerability assessments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
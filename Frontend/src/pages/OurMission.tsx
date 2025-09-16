import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Shield, Lightbulb, Users, Globe } from "lucide-react";

const OurMission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-deep text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fade-in">
              Our Mission & Vision
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
              Empowering coastal communities through technology, collaboration, and real-time information sharing
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-ocean">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Mission</h2>
            </div>
            
            <Card className="gradient-subtle border-2 border-primary/20 animate-fade-in">
              <CardContent className="p-8 md:p-12">
                <p className="text-xl text-center text-foreground leading-relaxed">
                  To create a robust, real-time coastal hazard information network by bridging the gap between scientific forecasting and on-the-ground reality. We empower every citizen to become a sentinel for their community, transforming smartphones into vital tools for disaster risk reduction and ensuring that no coastal community faces ocean hazards alone.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-ocean">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Vision</h2>
            </div>
            
            <Card className="gradient-subtle border-2 border-primary/20 animate-fade-in">
              <CardContent className="p-8 md:p-12">
                <p className="text-xl text-center text-foreground leading-relaxed">
                  A future where no coastal community faces the unknown alone. Where every wave, every tide, and every storm is met with preparedness, knowledge, and collective action. We envision a resilient coastal India where technology serves humanity, communities support each other, and lives are protected through the power of shared information.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Core Values</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every aspect of our work
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-scale animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Community First</h3>
                  <p className="text-muted-foreground">
                    Every citizen's voice matters in coastal safety. We prioritize community needs and ensure inclusive participation in our platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Precision & Accuracy</h3>
                  <p className="text-muted-foreground">
                    Lives depend on accurate information. We maintain the highest standards of data quality and verification processes.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We leverage cutting-edge technology to solve real-world problems and continuously improve our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Reliability</h3>
                  <p className="text-muted-foreground">
                    Our systems are built to perform when it matters most, with robust infrastructure and 24/7 monitoring.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Compassion</h3>
                  <p className="text-muted-foreground">
                    We understand the human impact of coastal hazards and approach our work with empathy and dedication.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Collaboration</h3>
                  <p className="text-muted-foreground">
                    We work hand-in-hand with communities, governments, and organizations to achieve our shared goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Goals */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Impact Goals</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Measurable outcomes we're working toward
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-fade-in">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Reduce Response Time</h3>
                    <p className="text-muted-foreground">
                      Cut emergency response time by 50% through real-time community reporting
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Increase Awareness</h3>
                    <p className="text-muted-foreground">
                      Educate 10 million coastal residents about ocean hazards and safety measures
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Save Lives</h3>
                    <p className="text-muted-foreground">
                      Prevent casualties through early warning and community preparedness
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-fade-in">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Build Resilience</h3>
                    <p className="text-muted-foreground">
                      Strengthen coastal communities' capacity to adapt and respond to hazards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Enhance Collaboration</h3>
                    <p className="text-muted-foreground">
                      Foster cooperation between citizens, scientists, and emergency responders
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Drive Innovation</h3>
                    <p className="text-muted-foreground">
                      Advance coastal monitoring technology through community insights
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurMission;
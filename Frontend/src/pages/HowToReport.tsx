import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, MapPin, Camera, Upload, AlertTriangle, CheckCircle, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HowToReport = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Access the Platform",
      description: "Use your smartphone, tablet, or computer to access Samudra Sachet",
      details: ["Visit the website or mobile app", "No account required for basic reporting", "Works offline - data syncs when connected"]
    },
    {
      icon: AlertTriangle,
      title: "Select Hazard Type",
      description: "Choose the type of ocean hazard you're observing",
      details: ["High waves", "Storm surge", "Flooding", "Unusual tides", "Tsunami", "Coastal erosion"]
    },
    {
      icon: MapPin,
      title: "Mark Location",
      description: "Provide precise location information",
      details: ["Use GPS for automatic location", "Manually enter address or landmark", "Mark location on interactive map"]
    },
    {
      icon: Camera,
      title: "Add Evidence",
      description: "Upload photos or videos to support your report",
      details: ["Take real-time photos/videos", "Upload existing media files", "Add descriptive captions"]
    },
    {
      icon: Upload,
      title: "Submit Report",
      description: "Send your report to INCOIS experts",
      details: ["Review all information", "Add emergency contact if needed", "Submit for immediate processing"]
    },
    {
      icon: CheckCircle,
      title: "Track Response",
      description: "Monitor the status of your report",
      details: ["Receive confirmation notification", "Track verification status", "Get updates on response actions"]
    }
  ];

  const hazardTypes = [
    { name: "High Waves", severity: "Variable", response: "2-5 minutes", color: "blue" },
    { name: "Storm Surge", severity: "High", response: "1-2 minutes", color: "red" },
    { name: "Flooding", severity: "High", response: "1-3 minutes", color: "red" },
    { name: "Unusual Tide", severity: "Medium", response: "5-10 minutes", color: "yellow" },
    { name: "Tsunami", severity: "Critical", response: "Immediate", color: "red" },
    { name: "Coastal Erosion", severity: "Low", response: "1-24 hours", color: "green" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-deep text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fade-in">
              How to Report Ocean Hazards
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
              Your observations are crucial for coastal safety. Learn how to effectively report ocean hazards to help protect your community.
            </p>
            <div className="mt-8">
              <Link to="/report">
                <Button size="lg" variant="secondary" className="shadow-ocean hover:shadow-glow transition-wave">
                  Start Reporting Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Step-by-Step Reporting Guide</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Follow these simple steps to submit an effective hazard report
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="animate-fade-in hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center shadow-ocean">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline" className="text-xs">
                            Step {index + 1}
                          </Badge>
                          <h3 className="text-xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        <ul className="grid md:grid-cols-3 gap-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hazard Types & Response Times */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Hazard Types & Response</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Different hazards have different urgency levels and response times
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hazardTypes.map((hazard, index) => (
                <Card key={index} className="animate-fade-in hover-scale">
                  <CardHeader>
                    <CardTitle className="text-lg">{hazard.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Severity:</span>
                        <Badge 
                          variant={hazard.color === 'red' ? 'destructive' : 
                                 hazard.color === 'yellow' ? 'secondary' : 'default'}
                        >
                          {hazard.severity}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Response Time:</span>
                        <span className="text-sm font-medium">{hazard.response}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-extrabold text-foreground mb-8">Reporting Best Practices</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Be Timely</h3>
                          <p className="text-muted-foreground">
                            Report hazards as soon as you observe them. Real-time information is most valuable for emergency response.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Camera className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Provide Visual Evidence</h3>
                          <p className="text-muted-foreground">
                            Photos and videos help experts verify conditions and assess severity. Capture multiple angles if safe to do so.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Be Specific</h3>
                          <p className="text-muted-foreground">
                            Provide exact locations, measurements when possible, and detailed descriptions of what you're observing.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-3xl font-extrabold text-foreground mb-8">Safety First</h2>
                
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <AlertTriangle className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-red-800 mb-4">Important Safety Guidelines</h3>
                        <ul className="space-y-3 text-red-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Never put yourself in danger to gather information
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Evacuate immediately if advised by authorities
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Stay away from unstable structures and flood waters
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Call emergency services (108/112) for immediate threats
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Community Support</h3>
                        <p className="text-muted-foreground">
                          Join our community of coastal sentinels. Share knowledge, learn from others, and help build a safer coastline for everyone.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your observations could save lives. Start reporting today and become part of India's coastal safety network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/report">
                <Button size="lg" className="shadow-ocean hover:shadow-glow transition-wave">
                  Submit a Report
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline">
                  View Live Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowToReport;
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, AlertTriangle, Eye, Users, MapPin, Clock, Phone, Heart } from "lucide-react";

const SafetyGuidelines = () => {
  const generalSafety = [
    {
      icon: AlertTriangle,
      title: "Never Endanger Yourself",
      description: "Your safety is the top priority. Never put yourself at risk to gather information or take photos.",
      level: "critical"
    },
    {
      icon: Eye,
      title: "Observe from Safe Distance",
      description: "Maintain a safe distance from hazardous areas. Use zoom features for photography if needed.",
      level: "important"
    },
    {
      icon: Users,
      title: "Inform Others",
      description: "Alert people around you about potential dangers before focusing on reporting.",
      level: "important"
    },
    {
      icon: Phone,
      title: "Emergency Services First",
      description: "Call 108/112 for immediate emergencies before using the reporting platform.",
      level: "critical"
    }
  ];

  const hazardSpecificGuidelines = [
    {
      hazard: "Tsunami",
      severity: "Critical",
      color: "red",
      guidelines: [
        "If you feel earthquake shaking, immediately move to higher ground",
        "If you see water receding unusually far, evacuate immediately",
        "Do not wait for official warnings - natural signs are your first alert",
        "Report only after reaching safety at least 100 feet above sea level",
        "Follow marked evacuation routes and never return until all-clear is given"
      ],
      emergencyAction: "EVACUATE IMMEDIATELY - Report after reaching safety"
    },
    {
      hazard: "High Waves",
      severity: "High",
      color: "orange",
      guidelines: [
        "Stay away from shoreline, jetties, and rocky coasts",
        "Avoid walking on wet rocks or near wave-splash zones",
        "Be aware that wave heights can change suddenly",
        "Report from elevated, stable positions inland",
        "Watch for sneaker waves that can appear without warning"
      ],
      emergencyAction: "Move inland before reporting - Waves can reach further than expected"
    },
    {
      hazard: "Storm Surge",
      severity: "High",
      color: "orange",
      guidelines: [
        "Move to higher ground immediately if water is rising",
        "Avoid driving through flooded roads - even shallow water is dangerous",
        "Stay away from power lines and electrical equipment",
        "Report from safe, elevated locations only",
        "Be prepared for rapid water level changes"
      ],
      emergencyAction: "Evacuate flood-prone areas before reporting"
    },
    {
      hazard: "Coastal Flooding",
      severity: "Moderate",
      color: "yellow",
      guidelines: [
        "Avoid walking or driving through flood water",
        "Be aware of contaminated water and debris",
        "Watch for unstable structures and undermined roads",
        "Report from dry, stable ground",
        "Help others evacuate if safe to do so"
      ],
      emergencyAction: "Stay on dry ground - Avoid contact with flood water"
    }
  ];

  const reportingSafety = [
    {
      title: "Location Safety",
      points: [
        "Choose stable, elevated reporting positions",
        "Avoid unstable cliffs, damaged structures, or flood zones",
        "Ensure you have safe evacuation routes",
        "Be aware of changing conditions around you"
      ]
    },
    {
      title: "Equipment Safety", 
      points: [
        "Keep devices dry and protected",
        "Have backup power sources if possible",
        "Use waterproof cases for phones in wet conditions",
        "Don't compromise safety for better photos/videos"
      ]
    },
    {
      title: "Communication Safety",
      points: [
        "Inform family/friends of your location and situation",
        "Keep emergency contacts readily available",
        "Have multiple communication methods if possible",
        "Follow official evacuation orders immediately"
      ]
    }
  ];

  const emergencyContacts = [
    { service: "National Emergency", number: "112", description: "All emergency services" },
    { service: "Police", number: "100", description: "Law enforcement" },
    { service: "Fire Department", number: "101", description: "Fire and rescue" },
    { service: "Ambulance", number: "108", description: "Medical emergency" },
    { service: "Disaster Management", number: "1078", description: "Natural disasters" },
    { service: "Coast Guard", number: "1554", description: "Maritime emergency" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-deep text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fade-in">
              Safety Guidelines
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
              Your safety is our highest priority. Follow these guidelines to report coastal hazards safely and effectively.
            </p>
          </div>
        </section>

        {/* Critical Safety Alert */}
        <section className="py-8 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Alert className="border-red-200 bg-red-50">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <AlertDescription className="text-red-800 font-medium">
                <strong>CRITICAL REMINDER:</strong> Never put yourself in danger to gather information. 
                Your life is more valuable than any report. Always prioritize personal safety and evacuation over data collection.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* General Safety Principles */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">General Safety Principles</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Universal safety rules that apply to all hazard reporting situations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {generalSafety.map((item, index) => (
                <Card key={index} className={`animate-fade-in hover-scale ${item.level === 'critical' ? 'border-red-200 bg-red-50/50' : 'border-yellow-200 bg-yellow-50/50'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${item.level === 'critical' ? 'bg-red-100' : 'bg-yellow-100'}`}>
                        <item.icon className={`h-6 w-6 ${item.level === 'critical' ? 'text-red-600' : 'text-yellow-600'}`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold mb-2 ${item.level === 'critical' ? 'text-red-800' : 'text-yellow-800'}`}>
                          {item.title}
                        </h3>
                        <p className={`${item.level === 'critical' ? 'text-red-700' : 'text-yellow-700'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hazard-Specific Guidelines */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Hazard-Specific Safety Guidelines</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tailored safety procedures for different types of coastal hazards
              </p>
            </div>

            <div className="space-y-8">
              {hazardSpecificGuidelines.map((hazard, index) => (
                <Card key={index} className="animate-fade-in">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{hazard.hazard}</CardTitle>
                      <Badge 
                        variant={hazard.color === 'red' ? 'destructive' : 
                               hazard.color === 'orange' ? 'secondary' : 'default'}
                      >
                        {hazard.severity} Risk
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Alert className={`mb-6 ${hazard.color === 'red' ? 'border-red-200 bg-red-50' : 
                                                hazard.color === 'orange' ? 'border-orange-200 bg-orange-50' : 
                                                'border-yellow-200 bg-yellow-50'}`}>
                      <AlertTriangle className={`h-4 w-4 ${hazard.color === 'red' ? 'text-red-600' : 
                                                           hazard.color === 'orange' ? 'text-orange-600' : 
                                                           'text-yellow-600'}`} />
                      <AlertDescription className={`font-medium ${hazard.color === 'red' ? 'text-red-800' : 
                                                                   hazard.color === 'orange' ? 'text-orange-800' : 
                                                                   'text-yellow-800'}`}>
                        {hazard.emergencyAction}
                      </AlertDescription>
                    </Alert>
                    
                    <ul className="space-y-3">
                      {hazard.guidelines.map((guideline, guidelineIndex) => (
                        <li key={guidelineIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reporting Safety Best Practices */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Safe Reporting Practices</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Best practices for collecting and submitting hazard information safely
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {reportingSafety.map((category, index) => (
                <Card key={index} className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Emergency Contact Numbers</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Keep these numbers handy - call immediately for life-threatening situations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="animate-fade-in hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{contact.service}</h3>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{contact.number}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Reminder */}
        <section className="py-16 gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-ocean">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Remember: You Are Valuable
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Every piece of information you provide helps save lives, but your own life is the most important. 
              Report safely, evacuate when necessary, and trust your instincts. Our coastal communities need you alive and well.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Alert className="max-w-md mx-auto border-primary/20 bg-primary/5">
                <Clock className="h-4 w-4 text-primary" />
                <AlertDescription className="text-primary">
                  When in doubt, evacuate first and report later. Emergency responders would rather have you safe than have perfect data.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SafetyGuidelines;
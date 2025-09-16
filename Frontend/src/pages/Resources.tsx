import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, Video, FileText, Users, Globe, Smartphone, AlertTriangle } from "lucide-react";

const Resources = () => {
  const educationalResources = [
    {
      title: "Ocean Hazard Identification Guide",
      description: "Learn to identify different types of coastal hazards and their warning signs",
      type: "Guide",
      icon: BookOpen,
      downloadable: true
    },
    {
      title: "Tsunami Safety Handbook",
      description: "Comprehensive guide on tsunami preparedness and response procedures",
      type: "Handbook",
      icon: FileText,
      downloadable: true
    },
    {
      title: "Mobile App Tutorial Videos",
      description: "Step-by-step video tutorials on using the Samudra Sachet mobile application",
      type: "Video",
      icon: Video,
      downloadable: false
    },
    {
      title: "Community Preparedness Toolkit",
      description: "Resources for community leaders to organize coastal safety initiatives",
      type: "Toolkit",
      icon: Users,
      downloadable: true
    }
  ];

  const technicalResources = [
    {
      title: "API Documentation",
      description: "Technical documentation for developers integrating with Samudra Sachet APIs",
      type: "Technical",
      icon: Globe
    },
    {
      title: "Data Standards Guide",
      description: "Guidelines for data collection, formatting, and submission standards",
      type: "Technical",
      icon: FileText
    },
    {
      title: "Mobile SDK",
      description: "Software development kit for building coastal monitoring applications",
      type: "SDK",
      icon: Smartphone
    }
  ];

  const emergencyResources = [
    {
      title: "Emergency Contact Numbers",
      description: "24/7 hotlines for different coastal regions and hazard types",
      contacts: [
        { region: "East Coast", number: "1800-425-3333" },
        { region: "West Coast", number: "1800-425-4444" },
        { region: "Tsunami Warning", number: "1800-425-5555" }
      ]
    },
    {
      title: "Evacuation Procedures",
      description: "Quick reference guide for evacuation during different hazard scenarios"
    },
    {
      title: "First Aid Guidelines",
      description: "Basic first aid procedures for coastal hazard situations"
    }
  ];

  const trainingPrograms = [
    {
      title: "Coastal Sentinel Training",
      duration: "2 hours",
      format: "Online",
      description: "Comprehensive training for community volunteers on hazard identification and reporting"
    },
    {
      title: "School Safety Program",
      duration: "1 day",
      format: "In-person",
      description: "Educational program for students on coastal safety and environmental awareness"
    },
    {
      title: "Emergency Responder Workshop",
      duration: "3 days",
      format: "Hybrid",
      description: "Advanced training for emergency responders on using crowdsourced data"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-deep text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fade-in">
              Resources & Training
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
              Access educational materials, technical documentation, emergency guidelines, and training programs to enhance coastal safety knowledge.
            </p>
          </div>
        </section>

        {/* Educational Resources */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Educational Resources</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Learn about coastal hazards, safety procedures, and platform usage
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {educationalResources.map((resource, index) => (
                <Card key={index} className="animate-fade-in hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
                        <resource.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg">{resource.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {resource.type}
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                      {resource.downloadable && (
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Resources */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Technical Resources</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Documentation and tools for developers and technical users
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {technicalResources.map((resource, index) => (
                <Card key={index} className="animate-fade-in hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                      <resource.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {resource.title}
                    </h3>
                    <Badge variant="outline" className="mb-3">
                      {resource.type}
                    </Badge>
                    <p className="text-muted-foreground text-sm mb-4">
                      {resource.description}
                    </p>
                    <Button size="sm">
                      Access
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Resources */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Emergency Resources</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Critical information for emergency situations
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {emergencyResources.map((resource, index) => (
                <Card key={index} className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <span>{resource.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    {resource.contacts && (
                      <div className="space-y-2">
                        {resource.contacts.map((contact, contactIndex) => (
                          <div key={contactIndex} className="flex justify-between items-center p-2 bg-muted/30 rounded">
                            <span className="text-sm font-medium">{contact.region}:</span>
                            <span className="text-sm text-primary font-semibold">{contact.number}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <Button size="sm" variant="outline" className="mt-4">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Training Programs</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Structured learning programs for different audiences
              </p>
            </div>

            <div className="space-y-8">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className="animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {program.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {program.description}
                        </p>
                        <div className="flex space-x-4">
                          <Badge variant="outline">
                            {program.duration}
                          </Badge>
                          <Badge variant="outline">
                            {program.format}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Button variant="outline">
                          Learn More
                        </Button>
                        <Button>
                          Enroll
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Download Center */}
        <section className="py-16 gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Download Center
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access all downloadable resources in one place
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-ocean hover:shadow-glow transition-wave">
                <Download className="h-5 w-5 mr-2" />
                Download All Resources
              </Button>
              <Button size="lg" variant="outline">
                Mobile App
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
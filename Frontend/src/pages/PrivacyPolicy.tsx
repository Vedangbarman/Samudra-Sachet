import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Database, Users, Lock, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Report Information",
          details: [
            "Location data (GPS coordinates, addresses, landmarks)",
            "Hazard descriptions and observations",
            "Photos and videos you choose to upload",
            "Time and date of observations",
            "Device information (type, operating system)"
          ]
        },
        {
          subtitle: "Optional Personal Information",
          details: [
            "Name and contact details (if you choose to provide them)",
            "Email address for account creation and notifications",
            "Phone number for emergency contact purposes"
          ]
        },
        {
          subtitle: "Technical Information",
          details: [
            "IP address and general location",
            "Browser type and version",
            "Usage patterns and app performance data",
            "Error logs and diagnostic information"
          ]
        }
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Emergency Response",
          details: [
            "Provide real-time hazard information to emergency responders",
            "Alert coastal authorities about potential threats",
            "Coordinate evacuation and rescue operations",
            "Verify and validate hazard reports"
          ]
        },
        {
          subtitle: "Scientific Research",
          details: [
            "Improve coastal hazard prediction models",
            "Enhance early warning systems",
            "Study coastal vulnerability patterns",
            "Advance ocean science research"
          ]
        },
        {
          subtitle: "Platform Improvement",
          details: [
            "Enhance user experience and app functionality",
            "Fix technical issues and bugs",
            "Develop new features based on user needs",
            "Monitor system performance and security"
          ]
        }
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Authorized Sharing",
          details: [
            "Emergency response agencies and disaster management authorities",
            "Coastal security forces and maritime authorities",
            "Scientific institutions for research purposes (anonymized data)",
            "International tsunami warning centers for cross-border hazards"
          ]
        },
        {
          subtitle: "Public Information",
          details: [
            "Anonymized hazard reports may be displayed on public dashboards",
            "Aggregated statistics and trends may be published in reports",
            "General location information (without personal details) may be shared publicly",
            "Historical hazard data for educational and research purposes"
          ]
        },
        {
          subtitle: "We Never Share",
          details: [
            "Personal contact information without explicit consent",
            "Precise location data linked to personal identity",
            "Individual user profiles or detailed personal information",
            "Information with commercial entities for marketing purposes"
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: "Data Security & Protection",
      content: [
        {
          subtitle: "Security Measures",
          details: [
            "End-to-end encryption for sensitive data transmission",
            "Secure cloud storage with regular backups",
            "Multi-factor authentication for administrative access",
            "Regular security audits and vulnerability assessments"
          ]
        },
        {
          subtitle: "Data Minimization",
          details: [
            "We collect only information necessary for coastal safety",
            "Anonymous reporting options available for all users",
            "Automatic deletion of temporary data after processing",
            "Regular review and cleanup of stored information"
          ]
        },
        {
          subtitle: "Access Controls",
          details: [
            "Role-based access for different types of users",
            "Audit logs for all data access and modifications",
            "Strict authentication requirements for sensitive operations",
            "Regular access reviews and permission updates"
          ]
        }
      ]
    }
  ];

  const userRights = [
    {
      right: "Access Your Data",
      description: "Request a copy of all personal information we have about you",
      action: "Contact support with verification details"
    },
    {
      right: "Correct Information",
      description: "Update or correct any inaccurate personal information",
      action: "Use account settings or contact support"
    },
    {
      right: "Delete Your Data",
      description: "Request deletion of your personal information (subject to legal requirements)",
      action: "Submit deletion request through support"
    },
    {
      right: "Limit Processing",
      description: "Restrict how we use your personal information in certain circumstances",
      action: "Contact support with specific requirements"
    },
    {
      right: "Data Portability",
      description: "Receive your data in a structured, machine-readable format",
      action: "Request data export through support"
    },
    {
      right: "Withdraw Consent",
      description: "Withdraw consent for optional data processing at any time",
      action: "Update preferences in account settings"
    }
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
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
              Your privacy is fundamental to our mission. Learn how we protect your personal information while using it to enhance coastal safety.
            </p>
            <p className="mt-4 text-sm text-blue-200">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Privacy Commitment</h2>
                <p className="text-muted-foreground mb-4">
                  The Indian National Centre for Ocean Information Services (INCOIS) is committed to protecting your privacy while operating the Samudra Sachet platform. This privacy policy explains how we collect, use, share, and protect your information when you use our coastal hazard reporting services.
                </p>
                <p className="text-muted-foreground mb-4">
                  As a government agency dedicated to coastal safety, we balance the need for timely hazard information with strong privacy protections. We only collect information necessary for emergency response and scientific research, and we implement robust security measures to protect your data.
                </p>
                <p className="text-muted-foreground">
                  By using Samudra Sachet, you agree to this privacy policy. We may update this policy periodically, and we will notify users of significant changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Sections */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <Card key={index} className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xl">{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.content.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {subsection.subtitle}
                        </h3>
                        <ul className="space-y-2">
                          {subsection.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* User Rights */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-foreground">Your Privacy Rights</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                You have the following rights regarding your personal information
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userRights.map((right, index) => (
                <Card key={index} className="animate-fade-in hover-scale">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {right.right}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {right.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {right.action}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <span>Legal Basis for Processing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Public Interest</h3>
                  <p className="text-muted-foreground text-sm">
                    Processing personal data for coastal safety and disaster risk reduction serves a vital public interest and is authorized under the Disaster Management Act, 2005 and related regulations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Legitimate Interests</h3>
                  <p className="text-muted-foreground text-sm">
                    INCOIS has a legitimate interest in collecting hazard information to fulfill its mandate of providing ocean information services and early warnings for coastal safety.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Consent</h3>
                  <p className="text-muted-foreground text-sm">
                    For non-essential features and marketing communications, we rely on your explicit consent, which you can withdraw at any time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vital Interests</h3>
                  <p className="text-muted-foreground text-sm">
                    In emergency situations, we may process data to protect the vital interests of individuals at risk from coastal hazards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Retention */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Data Retention Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Hazard Reports</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Retained for scientific and historical analysis
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Duration: Indefinitely (anonymized after 5 years)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Retained only as long as necessary for stated purposes
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Duration: 2 years after last activity (unless legally required)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Technical Logs</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      System logs for security and performance monitoring
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Duration: 1 year (automatically deleted)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Media Files</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Photos and videos for verification and research
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Duration: 5 years (or until purpose fulfilled)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Privacy Questions or Concerns?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our Data Protection Officer for any privacy-related questions
            </p>
            
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Data Protection Officer</h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      Email: privacy@incois.gov.in
                    </p>
                    <p className="text-muted-foreground text-sm mb-1">
                      Phone: +91-40-2389-5020
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Response time: Within 5 business days
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Postal Address</h3>
                    <p className="text-muted-foreground text-sm">
                      Data Protection Officer<br />
                      Indian National Centre for Ocean Information Services<br />
                      "Ocean Valley", Pragathi Nagar (BO)<br />
                      Nizampet (SO), Hyderabad - 500090
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileText, AlertTriangle, Shield, Users, Gavel, Globe } from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      icon: Users,
      title: "Platform Usage",
      content: [
        {
          subtitle: "Permitted Uses",
          details: [
            "Report genuine coastal hazards and ocean-related emergencies",
            "Access public dashboard and educational resources",
            "Use the platform for coastal safety and disaster preparedness",
            "Share information that helps protect coastal communities"
          ]
        },
        {
          subtitle: "Prohibited Uses",
          details: [
            "Submit false, misleading, or intentionally inaccurate reports",
            "Use the platform for commercial advertising or solicitation",
            "Attempt to hack, disrupt, or compromise platform security",
            "Violate any applicable laws or regulations",
            "Harass, threaten, or harm other users",
            "Upload malicious software or harmful content"
          ]
        },
        {
          subtitle: "User Responsibilities",
          details: [
            "Provide accurate and truthful information to the best of your knowledge",
            "Report hazards responsibly and prioritize personal safety",
            "Respect the privacy and safety of others in your reports",
            "Follow all safety guidelines when collecting hazard information",
            "Keep your account credentials secure and confidential"
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: "Safety & Disclaimers",
      content: [
        {
          subtitle: "Emergency Services",
          details: [
            "Samudra Sachet is not a replacement for official emergency services",
            "Always call 108/112 for immediate life-threatening emergencies",
            "The platform provides supplementary information to emergency responders",
            "Response times may vary based on location and circumstances"
          ]
        },
        {
          subtitle: "Information Accuracy",
          details: [
            "INCOIS strives to verify reports but cannot guarantee accuracy of all information",
            "Crowdsourced data is subject to human error and misinterpretation",
            "Users should always follow official evacuation orders and warnings",
            "Multiple sources should be considered for critical decision-making"
          ]
        },
        {
          subtitle: "Limitation of Liability",
          details: [
            "INCOIS is not liable for decisions made based on platform information",
            "Users participate at their own risk and discretion",
            "The platform is provided 'as is' without warranties of any kind",
            "Technical failures or service interruptions may occur"
          ]
        }
      ]
    },
    {
      icon: Globe,
      title: "Content & Intellectual Property",
      content: [
        {
          subtitle: "User-Generated Content",
          details: [
            "You retain ownership of photos, videos, and descriptions you submit",
            "By submitting content, you grant INCOIS rights to use it for coastal safety purposes",
            "Content may be shared with emergency responders and research institutions",
            "You warrant that you have the right to submit all content"
          ]
        },
        {
          subtitle: "Platform Content",
          details: [
            "INCOIS owns the platform software, design, and official content",
            "Educational materials and resources are for non-commercial use",
            "Third-party content is subject to their respective terms and conditions",
            "Unauthorized copying or redistribution is prohibited"
          ]
        },
        {
          subtitle: "Data Usage Rights",
          details: [
            "Aggregated, anonymized data may be used for research and public reports",
            "Individual reports may be shared with authorized emergency response agencies",
            "Historical data contributes to improving coastal hazard prediction models",
            "Commercial use of platform data requires explicit permission"
          ]
        }
      ]
    },
    {
      icon: Gavel,
      title: "Legal Compliance",
      content: [
        {
          subtitle: "Governing Law",
          details: [
            "These terms are governed by the laws of India",
            "Disputes will be resolved in the courts of Hyderabad, Telangana",
            "International users must comply with their local laws",
            "Government of India regulations take precedence where applicable"
          ]
        },
        {
          subtitle: "Regulatory Framework",
          details: [
            "Platform operates under the Disaster Management Act, 2005",
            "Data processing complies with Information Technology Act, 2000",
            "Privacy practices follow applicable data protection regulations",
            "Emergency response protocols align with national disaster management guidelines"
          ]
        },
        {
          subtitle: "Enforcement Actions",
          details: [
            "INCOIS may suspend or terminate accounts for terms violations",
            "Law enforcement will be notified of illegal activities",
            "Repeated false reporting may result in permanent access restrictions",
            "User actions may be reported to relevant authorities"
          ]
        }
      ]
    }
  ];

  const importantNotices = [
    {
      title: "Emergency Situations",
      description: "In life-threatening emergencies, call 108/112 immediately. Do not rely solely on this platform for emergency response.",
      type: "critical"
    },
    {
      title: "Data Sharing",
      description: "Your reports may be shared with emergency responders, government agencies, and research institutions for coastal safety purposes.",
      type: "info"
    },
    {
      title: "Service Availability",
      description: "The platform may experience downtime for maintenance or technical issues. Alternative reporting methods should be available.",
      type: "warning"
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
                <FileText className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fade-in">
              Terms of Service
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
              These terms govern your use of the Samudra Sachet platform. By using our services, you agree to these terms and conditions.
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
                <h2 className="text-2xl font-bold text-foreground mb-4">Agreement Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Welcome to Samudra Sachet, operated by the Indian National Centre for Ocean Information Services (INCOIS). These Terms of Service ("Terms") form a legally binding agreement between you and INCOIS regarding your use of our coastal hazard reporting platform.
                </p>
                <p className="text-muted-foreground mb-4">
                  The Samudra Sachet platform is designed to enhance coastal safety through community participation in hazard reporting and monitoring. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                </p>
                <p className="text-muted-foreground">
                  If you do not agree with any part of these Terms, you must not use the platform. We may update these Terms periodically, and continued use of the platform after changes constitutes acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Notices */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground">Important Notices</h2>
              <p className="mt-2 text-muted-foreground">Critical information all users must understand</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {importantNotices.map((notice, index) => (
                <Alert 
                  key={index} 
                  className={`animate-fade-in ${
                    notice.type === 'critical' ? 'border-red-200 bg-red-50' : 
                    notice.type === 'warning' ? 'border-yellow-200 bg-yellow-50' : 
                    'border-blue-200 bg-blue-50'
                  }`}
                >
                  <AlertTriangle className={`h-4 w-4 ${
                    notice.type === 'critical' ? 'text-red-600' : 
                    notice.type === 'warning' ? 'text-yellow-600' : 
                    'text-blue-600'
                  }`} />
                  <div>
                    <h3 className={`font-semibold mb-1 ${
                      notice.type === 'critical' ? 'text-red-800' : 
                      notice.type === 'warning' ? 'text-yellow-800' : 
                      'text-blue-800'
                    }`}>
                      {notice.title}
                    </h3>
                    <AlertDescription className={`${
                      notice.type === 'critical' ? 'text-red-700' : 
                      notice.type === 'warning' ? 'text-yellow-700' : 
                      'text-blue-700'
                    }`}>
                      {notice.description}
                    </AlertDescription>
                  </div>
                </Alert>
              ))}
            </div>
          </div>
        </section>

        {/* Main Sections */}
        <section className="py-16 bg-background">
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

        {/* Account Terms */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Account Registration & Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Account Creation</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Provide accurate and current information</li>
                      <li>• One account per person</li>
                      <li>• Verify email address when required</li>
                      <li>• Choose a secure password</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Account Security</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Keep login credentials confidential</li>
                      <li>• Notify us of unauthorized access</li>
                      <li>• Log out from shared devices</li>
                      <li>• Update password regularly</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Account Suspension</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Violation of terms may result in suspension</li>
                      <li>• False reporting leads to account review</li>
                      <li>• Illegal activities result in immediate termination</li>
                      <li>• Appeal process available for disputed actions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Account Deletion</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Request deletion through support</li>
                      <li>• Some data may be retained for legal compliance</li>
                      <li>• Emergency reports may be preserved</li>
                      <li>• Process completed within 30 days</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Availability */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Service Availability & Modifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Service Uptime</h3>
                    <p className="text-muted-foreground text-sm">
                      We strive to maintain 99.5% uptime but cannot guarantee uninterrupted service. Maintenance windows will be announced in advance when possible. Critical systems have redundancy and failover capabilities.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Platform Modifications</h3>
                    <p className="text-muted-foreground text-sm">
                      INCOIS reserves the right to modify, update, or discontinue features of the platform. Major changes affecting user experience will be communicated with reasonable notice. Emergency modifications may be implemented without prior notice.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Third-Party Services</h3>
                    <p className="text-muted-foreground text-sm">
                      The platform may integrate with third-party services (maps, weather data, social media). These services are subject to their own terms and availability. We are not responsible for third-party service disruptions.
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
              Questions About These Terms?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us for clarification or assistance with these terms of service
            </p>
            
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Legal Department</h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      Email: legal@incois.gov.in
                    </p>
                    <p className="text-muted-foreground text-sm mb-1">
                      Phone: +91-40-2389-5015
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Response time: Within 7 business days
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Postal Address</h3>
                    <p className="text-muted-foreground text-sm">
                      Legal Affairs Department<br />
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

export default TermsOfService;
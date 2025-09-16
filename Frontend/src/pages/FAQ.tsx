import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What is Samudra Sachet?",
          answer: "Samudra Sachet is a crowdsourced coastal hazard reporting platform developed by INCOIS. It enables citizens to report ocean hazards like tsunamis, storm surges, and high waves in real-time, helping emergency responders and coastal communities stay informed and prepared."
        },
        {
          question: "Who can use this platform?",
          answer: "Anyone can use Samudra Sachet - coastal residents, fishermen, tourists, emergency responders, researchers, and concerned citizens. No special training or registration is required for basic reporting, though registered users get additional features."
        },
        {
          question: "Is Samudra Sachet free to use?",
          answer: "Yes, Samudra Sachet is completely free for all users. It's a public service initiative by INCOIS to enhance coastal safety across India."
        },
        {
          question: "How is my data used?",
          answer: "Your reports are used exclusively for coastal safety and scientific research. Data is shared with emergency responders, coastal authorities, and researchers to improve early warning systems and disaster preparedness. Personal information is protected according to our privacy policy."
        }
      ]
    },
    {
      title: "Reporting & Platform",
      icon: MessageCircle,
      questions: [
        {
          question: "What types of hazards can I report?",
          answer: "You can report various ocean hazards including: high waves, storm surges, coastal flooding, unusual tides, tsunami events, coastal erosion, abnormal sea behavior, and any other maritime safety concerns you observe."
        },
        {
          question: "How quickly should I report a hazard?",
          answer: "Report hazards immediately when you observe them. For critical situations like tsunamis or severe flooding, time is crucial. The platform is designed for real-time reporting to enable rapid response."
        },
        {
          question: "Can I report anonymously?",
          answer: "Yes, you can choose to submit reports anonymously. However, providing contact information helps verification and allows authorities to reach you for additional details if needed."
        },
        {
          question: "What happens after I submit a report?",
          answer: "Your report is immediately sent to INCOIS experts and relevant emergency authorities. It's reviewed for verification, integrated with other data sources, and used to update early warning systems. You'll receive confirmation and status updates."
        },
        {
          question: "Can I use the platform offline?",
          answer: "Yes, the mobile app works offline. You can collect data and submit reports without internet connection. Reports are automatically uploaded when connectivity is restored."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Phone,
      questions: [
        {
          question: "What devices are supported?",
          answer: "Samudra Sachet works on smartphones (Android/iOS), tablets, laptops, and desktop computers. The platform is web-based and also available as mobile apps for enhanced offline functionality."
        },
        {
          question: "How accurate does my location need to be?",
          answer: "Location accuracy is important for emergency response. GPS coordinates are preferred, but you can also provide landmarks, addresses, or approximate locations. The platform includes interactive maps to help mark precise locations."
        },
        {
          question: "What file formats can I upload?",
          answer: "You can upload photos (JPEG, PNG), videos (MP4, MOV), and documents (PDF). Maximum file size is 10MB per file. Multiple files can be attached to a single report."
        },
        {
          question: "Why is my report still under review?",
          answer: "Reports go through verification to ensure accuracy and prevent false alarms. Verification time depends on hazard type and severity. Critical reports are prioritized and verified within minutes."
        },
        {
          question: "How do I update the mobile app?",
          answer: "Updates are available through your device's app store (Google Play Store for Android, App Store for iOS). Enable automatic updates to receive the latest features and improvements."
        }
      ]
    }
  ];

  const quickAnswers = [
    {
      question: "Emergency Contact",
      answer: "24/7 Coastal Emergency: 1800-425-WAVE",
      icon: Phone,
      action: "Call Now"
    },
    {
      question: "Report Critical Hazard",
      answer: "Submit immediate hazard reports",
      icon: MessageCircle,
      action: "Report Now",
      link: "/report"
    },
    {
      question: "View Live Dashboard",
      answer: "Check current coastal conditions",
      icon: HelpCircle,
      action: "View Dashboard",
      link: "/dashboard"
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
              Frequently Asked Questions
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
              Find answers to common questions about using Samudra Sachet for coastal hazard reporting and monitoring.
            </p>
          </div>
        </section>

        {/* Quick Answers */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground">Need Immediate Help?</h2>
              <p className="mt-2 text-muted-foreground">Quick access to essential services</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {quickAnswers.map((item, index) => (
                <Card key={index} className="animate-fade-in hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {item.answer}
                    </p>
                    {item.link ? (
                      <Link to={item.link}>
                        <Button size="sm" className="shadow-ocean">
                          {item.action}
                        </Button>
                      </Link>
                    ) : (
                      <Button size="sm" className="shadow-ocean">
                        {item.action}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-fade-in">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium text-foreground">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-16 gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Still Need Help?
                </CardTitle>
                <p className="text-muted-foreground">
                  Our support team is here to assist you
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Call Support</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      24/7 Technical Support
                    </p>
                    <Button size="sm" variant="outline">
                      1800-425-TECH
                    </Button>
                  </div>

                  <div className="text-center">
                    <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Response within 24 hours
                    </p>
                    <Button size="sm" variant="outline">
                      support@samudrasachet.gov.in
                    </Button>
                  </div>

                  <div className="text-center">
                    <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Contact Form</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Detailed inquiry form
                    </p>
                    <Link to="/contact">
                      <Button size="sm" variant="outline">
                        Contact Us
                      </Button>
                    </Link>
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

export default FAQ;
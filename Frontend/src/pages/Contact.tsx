import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Building2, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="gradient-deep text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight animate-fade-in">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Contact the Samudra Sachet team at INCOIS for inquiries, support, or feedback
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <Building2 className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">INCOIS Headquarters</h3>
                            <p className="text-muted-foreground mt-1">
                              "Ocean Valley", Pragathi Nagar (BO)<br />
                              Nizampet (SO), Hyderabad<br />
                              Telangana, India - 500090
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <Phone className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Emergency Hotline</h3>
                            <p className="text-muted-foreground mt-1">
                              24/7 Coastal Emergency: <span className="font-semibold text-primary">1800-123-4567</span><br />
                              General Inquiries: <span className="font-semibold text-primary">+91-40-2389-5000</span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <Mail className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Email Support</h3>
                            <p className="text-muted-foreground mt-1">
                              Technical Support: <span className="font-semibold text-primary">support@samudrasachet.gov.in</span><br />
                              General Contact: <span className="font-semibold text-primary">info@incois.gov.in</span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <Clock className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Office Hours</h3>
                            <p className="text-muted-foreground mt-1">
                              Monday - Friday: 9:00 AM - 6:00 PM (IST)<br />
                              Emergency Services: 24/7
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Department Contacts */}
                <div className="animate-fade-in">
                  <h3 className="text-xl font-bold text-foreground mb-4">Department Contacts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium">Tsunami Warning Centre</span>
                      <span className="text-primary">+91-40-2389-5006</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium">Ocean State Forecasting</span>
                      <span className="text-primary">+91-40-2389-5007</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium">Coastal Vulnerability</span>
                      <span className="text-primary">+91-40-2389-5008</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="first-name">First Name *</Label>
                          <Input id="first-name" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="last-name">Last Name *</Label>
                          <Input id="last-name" className="mt-1" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="media">Media Inquiry</SelectItem>
                            <SelectItem value="emergency">Emergency Report</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please describe your inquiry in detail..."
                          className="mt-1 min-h-[120px]"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full shadow-ocean hover:shadow-glow transition-wave"
                      >
                        Send Message
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        We typically respond within 24 hours during business days
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Visit Our Location</h2>
              <p className="mt-2 text-muted-foreground">
                INCOIS headquarters in Hyderabad, Telangana
              </p>
            </div>
            
            <Card className="animate-fade-in">
              <CardContent className="p-0">
                <div className="h-96 bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive map showing INCOIS location</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Pragathi Nagar, Nizampet, Hyderabad - 500090
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

export default Contact;
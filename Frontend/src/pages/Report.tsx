import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Camera, Upload, Smartphone, Wifi, WifiOff } from "lucide-react";
import { useState } from "react";

const Report = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [formData, setFormData] = useState({
    hazardType: "",
    location: "",
    description: "",
    severity: "",
    media: null as File | null,
  });

  const hazardTypes = [
    "High Waves",
    "Storm Surge", 
    "Flooding",
    "Unusual Tide",
    "Tsunami",
    "Coastal Erosion",
    "Other"
  ];

  const severityLevels = [
    { value: "low", label: "Low - Minor concern", color: "text-green-600" },
    { value: "moderate", label: "Moderate - Attention needed", color: "text-yellow-600" },
    { value: "high", label: "High - Immediate action required", color: "text-red-600" },
    { value: "critical", label: "Critical - Emergency response", color: "text-red-800" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Report submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="gradient-deep text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight animate-fade-in">
              Report an Ocean Hazard
            </h1>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Your observations are crucial for coastal safety. Please provide as much detail as possible.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2">
              {isOffline ? (
                <div className="flex items-center text-yellow-200">
                  <WifiOff className="h-5 w-5 mr-2" />
                  <span>Offline Mode - Data will sync when reconnected</span>
                </div>
              ) : (
                <div className="flex items-center text-green-200">
                  <Wifi className="h-5 w-5 mr-2" />
                  <span>Connected - Real-time reporting enabled</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Report Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Report Details */}
                <div className="space-y-6">
                  <Card className="animate-fade-in">
                    <CardHeader>
                      <CardTitle>Hazard Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label htmlFor="hazard-type" className="text-base font-medium">
                          Type of Hazard *
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select hazard type" />
                          </SelectTrigger>
                          <SelectContent>
                            {hazardTypes.map((type) => (
                              <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-base font-medium">Severity Level *</Label>
                        <RadioGroup className="mt-3 space-y-3">
                          {severityLevels.map((level) => (
                            <div key={level.value} className="flex items-center space-x-3">
                              <RadioGroupItem value={level.value} id={level.value} />
                              <Label 
                                htmlFor={level.value} 
                                className={`cursor-pointer ${level.color}`}
                              >
                                {level.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div>
                        <Label htmlFor="description" className="text-base font-medium">
                          Description *
                        </Label>
                        <Textarea 
                          id="description"
                          placeholder="Describe what you observed (wave height, water level, duration, etc.)"
                          className="mt-2 min-h-[120px]"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                        Location Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="location" className="text-base font-medium">
                          Location *
                        </Label>
                        <Input 
                          id="location"
                          placeholder="Enter specific location or nearest landmark"
                          className="mt-2"
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="use-gps" />
                        <Label htmlFor="use-gps" className="text-sm">
                          Use my current GPS location
                        </Label>
                      </div>

                      <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center">
                          <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">Click to mark location on map</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Media & Submission */}
                <div className="space-y-6">
                  <Card className="animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Camera className="h-5 w-5 mr-2 text-primary" />
                        Media Evidence
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="border-2 border-dashed border-border rounded-lg p-8">
                          <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground mb-2">
                            Upload photos or videos
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">
                            Drag and drop files or click to browse
                          </p>
                          <Button variant="outline" type="button">
                            Choose Files
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="take-photo" />
                        <Label htmlFor="take-photo" className="text-sm">
                          Take photo with camera
                        </Label>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Smartphone className="h-5 w-5 mr-2 text-primary" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-base font-medium">
                          Name (Optional)
                        </Label>
                        <Input 
                          id="name"
                          placeholder="Your name"
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-base font-medium">
                          Phone Number (Optional)
                        </Label>
                        <Input 
                          id="phone"
                          placeholder="For follow-up contact"
                          className="mt-2"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="anonymous" />
                        <Label htmlFor="anonymous" className="text-sm">
                          Submit anonymously
                        </Label>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="animate-fade-in border-primary/20">
                    <CardContent className="pt-6">
                      <div className="text-center space-y-4">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full shadow-ocean hover:shadow-glow transition-wave"
                        >
                          Submit Report
                        </Button>
                        
                        <p className="text-sm text-muted-foreground">
                          Your report will be reviewed by INCOIS experts and emergency responders
                        </p>
                        
                        {isOffline && (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <p className="text-sm text-yellow-800">
                              Report will be saved locally and submitted when connection is restored
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Report;
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { MapPin, Activity, TrendingUp, AlertTriangle, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const recentReports = [
    { id: 1, type: "High Waves", location: "Chennai Coast", severity: "moderate", time: "2 min ago", status: "verified" },
    { id: 2, type: "Storm Surge", location: "Mumbai Harbor", severity: "high", time: "5 min ago", status: "investigating" },
    { id: 3, type: "Unusual Tide", location: "Kochi Beach", severity: "low", time: "12 min ago", status: "verified" },
    { id: 4, type: "Flooding", location: "Visakhapatnam", severity: "high", time: "18 min ago", status: "urgent" },
  ];

  const socialMediaActivity = [
    { platform: "Twitter", mentions: 156, sentiment: "concerned", trend: "up" },
    { platform: "Facebook", mentions: 89, sentiment: "informative", trend: "stable" },
    { platform: "YouTube", mentions: 34, sentiment: "educational", trend: "up" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Dashboard Header */}
        <section className="gradient-deep text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight animate-fade-in">
              Live Coastal Monitoring Dashboard
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Real-time crowdsourced ocean hazard reports and social media analytics
            </p>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="animate-fade-in hover-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Reports</CardTitle>
                  <Activity className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">47</div>
                  <p className="text-xs text-muted-foreground">+3 from last hour</p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in hover-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">High Priority</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-destructive">8</div>
                  <p className="text-xs text-muted-foreground">Requires immediate attention</p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in hover-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Contributors</CardTitle>
                  <Users className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <p className="text-xs text-muted-foreground">Active in last 24h</p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in hover-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Social Mentions</CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">279</div>
                  <p className="text-xs text-muted-foreground">Across all platforms</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Interactive Map Section */}
              <div className="lg:col-span-2">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      Interactive Hazard Map
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Interactive map with real-time hazard reports</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Hotspots dynamically generated based on report density
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Live Activity Feed */}
              <div className="space-y-6">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      Recent Reports
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentReports.map((report) => (
                      <div key={report.id} className="border-l-4 border-primary pl-4 pb-4 animate-fade-in">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-sm">{report.type}</h4>
                          <Badge 
                            variant={report.status === 'urgent' ? 'destructive' : 
                                   report.status === 'verified' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {report.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{report.location}</p>
                        <p className="text-xs text-muted-foreground mt-1">{report.time}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                      Social Media Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {socialMediaActivity.map((activity) => (
                      <div key={activity.platform} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">{activity.platform}</p>
                          <p className="text-xs text-muted-foreground">{activity.mentions} mentions</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-xs">
                            {activity.sentiment}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {activity.trend === 'up' ? '↗️' : '→'} {activity.trend}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
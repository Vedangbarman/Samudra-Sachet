import { Button } from "@/components/ui/button";
import { MapPin, Activity, Users, AlertTriangle, Waves, Eye, Clock, TrendingUp } from "lucide-react";

const DashboardSection = () => {
  // Enhanced real-time statistics
  const liveStats = [
    { 
      icon: Activity, 
      value: "1,247", 
      label: "Active Reports", 
      sublabel: "Last 24h",
      color: "text-primary",
      bgColor: "bg-primary/10",
      trend: "+23%"
    },
    { 
      icon: Users, 
      value: "8,952", 
      label: "Active Contributors", 
      sublabel: "This week",
      color: "text-accent",
      bgColor: "bg-accent/10",
      trend: "+156"
    },
    { 
      icon: AlertTriangle, 
      value: "34", 
      label: "High Priority Alerts", 
      sublabel: "Verified",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      trend: "+12"
    },
    { 
      icon: Waves, 
      value: "7.8km", 
      label: "Avg Coverage Radius", 
      sublabel: "Per station",
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      trend: "±0.2km"
    },
    { 
      icon: Eye, 
      value: "89%", 
      label: "Detection Accuracy", 
      sublabel: "AI verified",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      trend: "+3.2%"
    },
    { 
      icon: Clock, 
      value: "4.2min", 
      label: "Avg Response Time", 
      sublabel: "From report",
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
      trend: "-1.1min"
    },
    { 
      icon: TrendingUp, 
      value: "284K", 
      label: "Social Media Mentions", 
      sublabel: "Ocean hazards",
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
      trend: "+45%"
    },
    { 
      icon: MapPin, 
      value: "15.6K", 
      label: "Geo-tagged Reports", 
      sublabel: "This month",
      color: "text-teal-600",
      bgColor: "bg-teal-500/10",
      trend: "+892"
    }
  ];

  // Mock real-time activities
  const recentActivities = [
    { time: "2 min ago", event: "High wave alert verified", location: "Visakhapatnam", severity: "high" },
    { time: "5 min ago", event: "Citizen report uploaded", location: "Kochi", severity: "medium" },
    { time: "8 min ago", event: "Storm surge detected", location: "Chennai", severity: "high" },
    { time: "12 min ago", event: "Social media trend spike", location: "Mumbai", severity: "low" },
    { time: "15 min ago", event: "Coastal erosion reported", location: "Goa", severity: "medium" }
  ];
  return (
    <section id="dashboard" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-muted/30 to-card animate-gradient"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,hsl(210_100%_50%_/_0.1),transparent)] animate-pulse-glow"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground animate-fade-in">
            Live Coastal Intelligence Hub
          </h2>
          <p className="mt-6 text-xl text-muted-foreground animate-fade-in-delay max-w-4xl mx-auto">
            Real-time visualization of crowdsourced reports, social media analytics, and AI-powered threat detection 
            across India's entire coastline. See the ocean through thousands of eyes.
          </p>
        </div>
        
        {/* Enhanced Dashboard Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-background/80 backdrop-blur-xl rounded-3xl shadow-elevated border border-border/50 overflow-hidden">
            
            {/* Dashboard Header */}
            <div className="p-8 bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 border-b border-border/50">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Samudra Intelligence Dashboard</h3>
                    <p className="text-muted-foreground">Last updated: 2 minutes ago</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="hover:bg-primary/10 transition-wave">
                    🔴 Live View
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-primary/10 transition-wave">
                    📊 Analytics
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-primary/10 transition-wave">
                    🔍 Filters
                  </Button>
                  <Button size="sm" className="gradient-ocean text-primary-foreground shadow-glow hover:shadow-elevated transition-wave">
                    🚨 Alerts (34)
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Enhanced Stats Grid */}
            <div className="p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {liveStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="group relative animate-fade-in-delay-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-75 transition-wave"></div>
                      <div className="relative bg-card/50 backdrop-blur-sm border border-border/30 p-6 rounded-xl group-hover:border-primary/30 transition-wave shadow-floating">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${stat.bgColor} mb-4 group-hover:scale-110 transition-smooth`}>
                          <IconComponent className={`h-6 w-6 ${stat.color}`} />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                            <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                              {stat.trend}
                            </div>
                          </div>
                          <div className="text-sm font-medium text-foreground">{stat.label}</div>
                          <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Enhanced Map and Activity Section */}
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Interactive Map Placeholder */}
                <div className="lg:col-span-2 relative">
                  <div className="relative bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 rounded-2xl h-[500px] border border-border/30 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient"></div>
                    
                    {/* Map Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-6">
                        <div className="relative">
                          <MapPin className="h-20 w-20 text-primary mx-auto animate-bounce" />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-destructive rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-destructive-foreground">34</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-foreground mb-3">
                            Live Coastal Monitoring Map
                          </h4>
                          <p className="text-muted-foreground max-w-md mb-6">
                            Interactive visualization of 15,647 real-time reports, social media alerts, 
                            and AI-detected patterns across 7,500km of Indian coastline.
                          </p>
                          <div className="space-y-3">
                            <div className="flex items-center justify-center space-x-4 text-sm">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                <span>High Priority (34)</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                                <span>Medium (156)</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span>Low Risk (1,057)</span>
                              </div>
                            </div>
                          </div>
                          <Button className="mt-6 gradient-ocean text-primary-foreground shadow-glow hover:shadow-elevated transition-wave transform hover:scale-105">
                            🗺️ Launch Interactive Map
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Data Points */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-destructive rounded-full animate-ping"></div>
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-warning rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-primary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-1/3 right-2/3 w-3 h-3 bg-green-500 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Data Flow Animation */}
                    <div className="absolute top-12 left-0 w-2 h-2 bg-primary rounded-full animate-data-flow"></div>
                    <div className="absolute top-24 left-0 w-1.5 h-1.5 bg-accent rounded-full animate-data-flow" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-36 left-0 w-1.5 h-1.5 bg-warning rounded-full animate-data-flow" style={{animationDelay: '4s'}}></div>
                  </div>
                </div>

                {/* Real-time Activity Feed */}
                <div className="space-y-6">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-bold text-foreground">Live Activity Feed</h4>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-background/50 hover:bg-primary/5 transition-wave animate-fade-in">
                          <div className={`w-3 h-3 rounded-full mt-1.5 ${
                            activity.severity === 'high' ? 'bg-destructive animate-pulse' :
                            activity.severity === 'medium' ? 'bg-warning' : 'bg-green-500'
                          }`}></div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-foreground">{activity.event}</div>
                            <div className="text-xs text-muted-foreground">{activity.location} • {activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-foreground mb-4">Social Media Insights</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Trending Keywords</span>
                        <span className="text-sm font-medium text-primary">284K mentions</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">#cyclone</span>
                        <span className="px-2 py-1 bg-destructive/10 text-destructive text-xs rounded-full">#flooding</span>
                        <span className="px-2 py-1 bg-warning/10 text-warning text-xs rounded-full">#highwaves</span>
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">#stormsurge</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        AI is monitoring 15.2M+ social posts for hazard indicators
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
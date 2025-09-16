import { AlertTriangle } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const StatsSection = () => {
  // Comprehensive data for multiple coastal hazards
  const displacementData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024 (Proj)', '2025 (Est)'],
    datasets: [
      {
        label: 'Cyclone Displacement (Lakhs)',
        data: [8.5, 12.3, 15.2, 22.1, 18.7, 35.2, 42.8],
        backgroundColor: 'hsl(210 100% 50% / 0.7)',
        borderColor: 'hsl(210 100% 50%)',
        borderWidth: 2,
        tension: 0.4
      },
      {
        label: 'Tsunami/Storm Surge (Lakhs)',
        data: [1.2, 2.1, 0.8, 3.4, 1.5, 8.2, 12.5],
        backgroundColor: 'hsl(0 80% 50% / 0.7)',
        borderColor: 'hsl(0 80% 50%)',
        borderWidth: 2,
        tension: 0.4
      },
      {
        label: 'Coastal Flooding (Lakhs)',
        data: [3.2, 4.8, 6.1, 8.9, 7.2, 15.4, 18.9],
        backgroundColor: 'hsl(180 60% 40% / 0.7)',
        borderColor: 'hsl(180 60% 40%)',
        borderWidth: 2,
        tension: 0.4
      }
    ]
  };

  const economicData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024 (Proj)', '2025 (Est)'],
    datasets: [
      {
        label: 'Infrastructure Damage (₹ Crores)',
        data: [45000, 68000, 90000, 75000, 120000, 185000, 225000],
        backgroundColor: 'hsl(45 90% 50% / 0.7)',
        borderColor: 'hsl(45 90% 50%)',
        borderWidth: 2
      },
      {
        label: 'Agricultural Loss (₹ Crores)',
        data: [25000, 32000, 40000, 28000, 55000, 95000, 120000],
        backgroundColor: 'hsl(120 60% 40% / 0.7)',
        borderColor: 'hsl(120 60% 40%)',
        borderWidth: 2
      },
      {
        label: 'Fisheries Impact (₹ Crores)',
        data: [8000, 12000, 15000, 18000, 22000, 35000, 45000],
        backgroundColor: 'hsl(200 80% 50% / 0.7)',
        borderColor: 'hsl(200 80% 50%)',
        borderWidth: 2
      }
    ]
  };

  const hazardFrequency = {
    labels: ['Cyclones', 'Storm Surge', 'High Waves', 'Coastal Erosion', 'Swell Surge', 'Tsunami Risk'],
    datasets: [{
      label: 'Annual Incidents',
      data: [28, 156, 342, 89, 67, 3],
      backgroundColor: [
        'hsl(210 100% 50% / 0.8)',
        'hsl(0 80% 50% / 0.8)',
        'hsl(180 60% 40% / 0.8)',
        'hsl(45 90% 50% / 0.8)',
        'hsl(260 70% 50% / 0.8)',
        'hsl(320 80% 50% / 0.8)'
      ],
      borderColor: [
        'hsl(210 100% 50%)',
        'hsl(0 80% 50%)',
        'hsl(180 60% 40%)',
        'hsl(45 90% 50%)',
        'hsl(260 70% 50%)',
        'hsl(320 80% 50%)'
      ],
      borderWidth: 2
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: { size: 12 }
        }
      },
      tooltip: {
        backgroundColor: 'hsl(210 50% 8% / 0.95)',
        titleColor: 'hsl(210 100% 70%)',
        bodyColor: 'hsl(210 20% 95%)',
        borderColor: 'hsl(210 100% 50%)',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              if (context.dataset.label.includes('Lakhs') || context.dataset.label.includes('Displacement')) {
                label += context.parsed.y + ' Lakh People';
              } else if (context.dataset.label.includes('Crores') || context.dataset.label.includes('₹')) {
                label += '₹' + new Intl.NumberFormat('en-IN').format(context.parsed.y) + ' Cr';
              } else {
                label += new Intl.NumberFormat('en-IN').format(context.parsed.y) + ' Events';
              }
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'hsl(210 30% 20% / 0.3)' },
        ticks: { color: 'hsl(215 16% 47%)' }
      },
      y: {
        beginAtZero: true,
        grid: { color: 'hsl(210 30% 20% / 0.3)' },
        ticks: {
          color: 'hsl(215 16% 47%)',
          callback: function(value: any) {
            if (value >= 100000) return (value / 100000) + 'L';
            if (value >= 1000) return (value / 1000) + 'k';
            return value;
          }
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart' as const
    }
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          padding: 15,
          usePointStyle: true,
          font: { size: 11 }
        }
      },
      tooltip: {
        backgroundColor: 'hsl(210 50% 8% / 0.95)',
        titleColor: 'hsl(210 100% 70%)',
        bodyColor: 'hsl(210 20% 95%)',
        borderColor: 'hsl(210 100% 50%)',
        borderWidth: 1,
        cornerRadius: 8
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 2000
    }
  };

  // Key statistics for quick overview
  const keyStats = [
    { label: 'Coastal States Affected', value: '13', trend: '+2 since 2020', icon: '🏖️' },
    { label: 'Early Warning Centers', value: '25', trend: '+8 this year', icon: '🚨' },
    { label: 'Active Monitoring Stations', value: '156', trend: '+34 deployed', icon: '📡' },
    { label: 'Communities Engaged', value: '2,847', trend: '+1,200 new', icon: '👥' }
  ];

  return (
    <section id="stats" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-warning/3 to-primary/5 animate-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(210_100%_50%_/_0.1),transparent)] animate-pulse-glow"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground animate-fade-in">
            The Escalating Ocean Crisis
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in-delay">
            Comprehensive data reveals alarming trends across India's 7,500km coastline. Climate change is intensifying ocean hazards, 
            making real-time monitoring and citizen participation more critical than ever before.
          </p>
        </div>

        {/* Key Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyStats.map((stat, index) => (
            <div key={index} className="relative group animate-fade-in-delay-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-wave"></div>
              <div className="relative bg-card/80 backdrop-blur-lg border border-border/50 p-6 rounded-2xl group-hover:border-primary/30 transition-wave shadow-floating">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-accent font-medium">{stat.trend}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Displacement Trends */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-2xl blur-sm group-hover:from-primary/20 group-hover:to-destructive/20 transition-wave"></div>
            <div className="relative bg-card/80 backdrop-blur-lg border border-border/50 p-8 rounded-2xl group-hover:border-primary/30 transition-wave shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <AlertTriangle className="h-7 w-7 mr-3 text-destructive animate-pulse" />
                Population Displacement Trends
              </h3>
              <div className="h-80">
                <Bar data={displacementData} options={chartOptions} />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Multi-hazard displacement data shows exponential growth in affected populations
              </p>
            </div>
          </div>

          {/* Economic Impact */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-warning/10 to-accent/10 rounded-2xl blur-sm group-hover:from-warning/20 group-hover:to-accent/20 transition-wave"></div>
            <div className="relative bg-card/80 backdrop-blur-lg border border-border/50 p-8 rounded-2xl group-hover:border-warning/30 transition-wave shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="text-2xl mr-3">💰</span>
                Sectoral Economic Losses
              </h3>
              <div className="h-80">
                <Bar data={economicData} options={chartOptions} />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Infrastructure, agriculture, and fisheries bear the heaviest economic burden
              </p>
            </div>
          </div>
        </div>

        {/* Hazard Frequency Analysis */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 to-warning/10 rounded-xl blur-sm group-hover:from-destructive/20 group-hover:to-warning/20 transition-wave"></div>
              <div className="relative bg-card/70 backdrop-blur-lg border border-destructive/20 p-8 rounded-xl group-hover:border-destructive/30 transition-wave shadow-card">
                <h3 className="font-bold text-2xl text-destructive mb-4 flex items-center">
                  <AlertTriangle className="h-8 w-8 mr-3 animate-bounce" />
                  Critical Reality Check
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    <span className="text-destructive font-bold">342</span> high wave events recorded annually
                  </p>
                  <p className="text-lg">
                    <span className="text-warning font-bold">156</span> storm surge incidents per year
                  </p>
                  <p className="text-lg">
                    <span className="text-primary font-bold">28</span> major cyclones affecting coastlines
                  </p>
                  <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <p className="text-destructive font-semibold">
                      Early citizen reports can reduce response time by up to 73% and save thousands of lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="relative bg-card/80 backdrop-blur-lg p-8 rounded-2xl shadow-elevated border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Annual Hazard Frequency Distribution
              </h3>
              <div className="h-96">
                <Doughnut data={hazardFrequency} options={pieOptions} />
              </div>
              <p className="text-sm text-center mt-4 text-destructive font-semibold">
                Data shows increasing frequency across all hazard categories. Real-time monitoring is essential.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 gradient-aurora rounded-3xl blur-lg opacity-30 animate-gradient"></div>
          <div className="relative bg-card/90 backdrop-blur-xl border-2 border-primary/30 p-10 rounded-3xl text-center shadow-elevated">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Every Report Saves Lives
            </h3>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Your observations are the missing piece in our early warning system. Join thousands of coastal sentinels 
              making India's coastline safer, one report at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-xl shadow-glow hover:shadow-elevated transition-wave transform hover:scale-105">
                Start Reporting Now
              </button>
              <button className="px-8 py-4 bg-card border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-wave transform hover:scale-105">
                View Live Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BarChart3, 
  Users, 
  Eye, 
  TrendingUp,
  Globe,
  Clock,
  ArrowUp,
  ArrowDown,
  Lock
} from "lucide-react";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simple password authentication (you can change this)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin2024") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  // Mock analytics data
  const stats = {
    totalVisitors: 12847,
    pageViews: 45623,
    avgSessionDuration: "3:24",
    bounceRate: 42.3,
    newUsers: 3421,
    returningUsers: 9426
  };

  const pageStats = [
    { page: "Home", views: 18934, change: 12.5 },
    { page: "Services", views: 12456, change: 8.2 },
    { page: "Contact", views: 8234, change: -3.1 },
    { page: "Quote", views: 4567, change: 24.8 },
    { page: "About", views: 1432, change: 5.4 }
  ];

  const trafficSources = [
    { source: "Direct", visits: 5234, percentage: 40.7 },
    { source: "Google Search", visits: 4521, percentage: 35.2 },
    { source: "Social Media", visits: 1845, percentage: 14.4 },
    { source: "Referral", visits: 1247, percentage: 9.7 }
  ];

  const recentVisitors = [
    { location: "Hyderabad", time: "2 mins ago", pages: 4 },
    { location: "Secunderabad", time: "5 mins ago", pages: 2 },
    { location: "Bangalore", time: "12 mins ago", pages: 6 },
    { location: "Mumbai", time: "18 mins ago", pages: 3 },
    { location: "Chennai", time: "25 mins ago", pages: 5 }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
              </div>
              {error && (
                <p className="text-destructive text-sm text-center">{error}</p>
              )}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="opacity-80 text-sm">Website Analytics Overview</p>
            </div>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => setIsAuthenticated(false)}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Visitors</p>
                  <h3 className="text-3xl font-bold mt-1">{stats.totalVisitors.toLocaleString()}</h3>
                  <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                    <ArrowUp className="h-4 w-4" />
                    <span>12.5% from last month</span>
                  </div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Page Views</p>
                  <h3 className="text-3xl font-bold mt-1">{stats.pageViews.toLocaleString()}</h3>
                  <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                    <ArrowUp className="h-4 w-4" />
                    <span>8.2% from last month</span>
                  </div>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Session</p>
                  <h3 className="text-3xl font-bold mt-1">{stats.avgSessionDuration}</h3>
                  <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                    <ArrowUp className="h-4 w-4" />
                    <span>15s from last month</span>
                  </div>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Bounce Rate</p>
                  <h3 className="text-3xl font-bold mt-1">{stats.bounceRate}%</h3>
                  <div className="flex items-center gap-1 mt-2 text-sm text-red-500">
                    <ArrowDown className="h-4 w-4" />
                    <span>2.1% from last month</span>
                  </div>
                </div>
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Page Views */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Top Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pageStats.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium w-8 text-muted-foreground">
                        {index + 1}.
                      </span>
                      <span className="font-medium">{page.page}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">
                        {page.views.toLocaleString()} views
                      </span>
                      <span className={`flex items-center gap-1 text-sm ${page.change >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                        {page.change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                        {Math.abs(page.change)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traffic Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Traffic Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trafficSources.map((source, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{source.source}</span>
                      <span className="text-muted-foreground">
                        {source.visits.toLocaleString()} ({source.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all" 
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Visitors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recent Visitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Location</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Time</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Pages Viewed</th>
                  </tr>
                </thead>
                <tbody>
                  {recentVisitors.map((visitor, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-3 px-4">{visitor.location}</td>
                      <td className="py-3 px-4 text-muted-foreground">{visitor.time}</td>
                      <td className="py-3 px-4">{visitor.pages} pages</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Note: This is a demo dashboard with sample data. Connect Google Analytics for real data.
        </p>
      </div>
    </div>
  );
};

export default Admin;

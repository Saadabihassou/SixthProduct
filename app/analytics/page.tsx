"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { TrendingUp, TrendingDown, Users, Eye, Clock, Globe, Smartphone, Monitor, Tablet } from "lucide-react"

// Sample data for analytics
const viewsOverTime = [
  { date: "Jan 1", views: 12000, subscribers: 850 },
  { date: "Jan 8", views: 15000, subscribers: 920 },
  { date: "Jan 15", views: 18000, subscribers: 1100 },
  { date: "Jan 22", views: 22000, subscribers: 1350 },
  { date: "Jan 29", views: 19000, subscribers: 1280 },
  { date: "Feb 5", views: 25000, subscribers: 1500 },
  { date: "Feb 12", views: 28000, subscribers: 1750 },
]

const audienceRetention = [
  { time: "0s", retention: 100 },
  { time: "30s", retention: 85 },
  { time: "1m", retention: 72 },
  { time: "2m", retention: 65 },
  { time: "3m", retention: 58 },
  { time: "4m", retention: 45 },
  { time: "5m", retention: 38 },
  { time: "6m", retention: 25 },
]

const topCountries = [
  { country: "United States", views: 45000, percentage: 35 },
  { country: "United Kingdom", views: 25000, percentage: 20 },
  { country: "Canada", views: 18000, percentage: 14 },
  { country: "Australia", views: 15000, percentage: 12 },
  { country: "Germany", views: 12000, percentage: 9 },
  { country: "Others", views: 13000, percentage: 10 },
]

const deviceData = [
  { name: "Mobile", value: 65, color: "#3b82f6" },
  { name: "Desktop", value: 25, color: "#10b981" },
  { name: "Tablet", value: 10, color: "#f59e0b" },
]

const ageGroups = [
  { age: "13-17", percentage: 8 },
  { age: "18-24", percentage: 32 },
  { age: "25-34", percentage: 28 },
  { age: "35-44", percentage: 18 },
  { age: "45-54", percentage: 10 },
  { age: "55+", percentage: 4 },
]

const trafficSources = [
  { source: "YouTube Search", views: 45000, percentage: 35 },
  { source: "Suggested Videos", views: 38000, percentage: 30 },
  { source: "External", views: 19000, percentage: 15 },
  { source: "Browse Features", views: 13000, percentage: 10 },
  { source: "Direct", views: 10000, percentage: 8 },
  { source: "Others", views: 3000, percentage: 2 },
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout currentPage="analytics">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">Deep insights into your content performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Watch Time</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">2,847h</p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +18.2% vs last month
                  </p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. View Duration</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">4:32</p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% vs last month
                  </p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <Eye className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Click-through Rate</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">8.4%</p>
                  <p className="text-xs text-red-600 dark:text-red-400 flex items-center mt-1">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -2.1% vs last month
                  </p>
                </div>
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Subscriber Rate</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">3.2%</p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5.8% vs last month
                  </p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="retention">Retention</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Views and Subscribers Over Time */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Views & Subscribers Over Time</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Track your growth over the last 7 weeks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={viewsOverTime}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis dataKey="date" className="text-gray-600 dark:text-gray-400" />
                    <YAxis yAxisId="left" className="text-gray-600 dark:text-gray-400" />
                    <YAxis yAxisId="right" orientation="right" className="text-gray-600 dark:text-gray-400" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--foreground))",
                      }}
                    />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="views"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      name="Views"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="subscribers"
                      stroke="#10b981"
                      strokeWidth={3}
                      name="Subscribers"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Countries */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Top Countries</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Where your audience is located
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCountries.map((country, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-6 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                          <Globe className="w-4 h-4 text-gray-500" />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">{country.country}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {country.views.toLocaleString()} views
                        </span>
                        <Badge variant="outline">{country.percentage}%</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audience" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Device Breakdown */}
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Device Breakdown</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    How your audience accesses content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={deviceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Mobile</span>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Monitor className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Desktop</span>
                      </div>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Tablet className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm">Tablet</span>
                      </div>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Age Groups */}
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Age Demographics</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Age distribution of your audience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={ageGroups}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                      <XAxis dataKey="age" className="text-gray-600 dark:text-gray-400" />
                      <YAxis className="text-gray-600 dark:text-gray-400" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          color: "hsl(var(--foreground))",
                        }}
                      />
                      <Bar dataKey="percentage" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="traffic" className="space-y-6">
            {/* Traffic Sources */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Traffic Sources</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  How viewers discover your content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trafficSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="font-medium text-gray-900 dark:text-white">{source.source}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {source.views.toLocaleString()} views
                        </span>
                        <Badge variant="outline">{source.percentage}%</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="retention" className="space-y-6">
            {/* Audience Retention */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Audience Retention</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  How long viewers stay engaged with your content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={audienceRetention}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis dataKey="time" className="text-gray-600 dark:text-gray-400" />
                    <YAxis className="text-gray-600 dark:text-gray-400" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--foreground))",
                      }}
                    />
                    <Area type="monotone" dataKey="retention" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Average retention:</strong> 58% • Your videos keep viewers engaged longer than 65% of
                    similar channels
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

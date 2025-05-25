"use client"

import { Suspense } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { DashboardLoadingSkeleton } from "@/components/loading-skeleton"
import { TrendingUp, Users, Eye, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

// Sample data
const weeklyViewsData = [
  { week: "Week 1", views: 12000 },
  { week: "Week 2", views: 15000 },
  { week: "Week 3", views: 18000 },
  { week: "Week 4", views: 22000 },
  { week: "Week 5", views: 19000 },
  { week: "Week 6", views: 25000 },
  { week: "Week 7", views: 28000 },
]

const platformEngagementData = [
  { platform: "YouTube", engagement: 85 },
  { platform: "Instagram", engagement: 72 },
  { platform: "TikTok", engagement: 68 },
  { platform: "Twitter", engagement: 45 },
]

const deviceBreakdownData = [
  { name: "Mobile", value: 65, color: "#3b82f6" },
  { name: "Desktop", value: 25, color: "#10b981" },
  { name: "Tablet", value: 10, color: "#f59e0b" },
]

const contentTypeData = [
  { subject: "Videos", A: 85, fullMark: 100 },
  { subject: "Shorts", A: 92, fullMark: 100 },
  { subject: "Reels", A: 78, fullMark: 100 },
  { subject: "Stories", A: 65, fullMark: 100 },
]

const recentPosts = [
  {
    id: 1,
    title: "10 Tips for Better Content Creation",
    date: "2024-01-15",
    views: "45.2K",
    likes: "2.1K",
    comments: "156",
    platform: "YouTube",
  },
  {
    id: 2,
    title: "Behind the Scenes: My Setup Tour",
    date: "2024-01-12",
    views: "32.8K",
    likes: "1.8K",
    comments: "89",
    platform: "Instagram",
  },
  {
    id: 3,
    title: "Quick Photography Tips",
    date: "2024-01-10",
    views: "28.5K",
    likes: "1.5K",
    comments: "67",
    platform: "TikTok",
  },
  {
    id: 4,
    title: "Weekly Vlog: Creative Process",
    date: "2024-01-08",
    views: "38.9K",
    likes: "2.3K",
    comments: "134",
    platform: "YouTube",
  },
]

function DashboardContent() {
  return (
    <main className="p-6">
      {/* Stats Cards */}
      <section aria-labelledby="stats-heading" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <h2 id="stats-heading" className="sr-only">
          Key Performance Metrics
        </h2>

        <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-200 border-0 shadow-sm hover:shadow-blue-500/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Views</CardTitle>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg" aria-hidden="true">
              <Eye className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">2.4M</div>
            <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" aria-hidden="true" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-200 border-0 shadow-sm hover:shadow-green-500/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">New Subscribers</CardTitle>
            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg" aria-hidden="true">
              <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">12.5K</div>
            <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" aria-hidden="true" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-200 border-0 shadow-sm hover:shadow-red-500/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Engagement Rate</CardTitle>
            <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg" aria-hidden="true">
              <Heart className="h-4 w-4 text-red-500 dark:text-red-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">7.8%</div>
            <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" aria-hidden="true" />
              +2.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-200 border-0 shadow-sm hover:shadow-yellow-500/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Estimated Revenue</CardTitle>
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg" aria-hidden="true">
              <TrendingUp className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">$8,420</div>
            <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" aria-hidden="true" />
              +15.3% from last month
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Charts Grid */}
      <section aria-labelledby="charts-heading" className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <h2 id="charts-heading" className="sr-only">
          Analytics Charts
        </h2>

        {/* Weekly Views Line Chart */}
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Weekly Video Views</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">Views over the last 7 weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <div role="img" aria-label="Line chart showing weekly video views trend">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyViewsData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="week" className="text-gray-600 dark:text-gray-400" />
                  <YAxis className="text-gray-600 dark:text-gray-400" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Platform Engagement Bar Chart */}
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Platform Engagement</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Engagement rates across platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div role="img" aria-label="Bar chart showing engagement rates across different platforms">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={platformEngagementData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="platform" className="text-gray-600 dark:text-gray-400" />
                  <YAxis className="text-gray-600 dark:text-gray-400" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                  <Bar dataKey="engagement" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Device Breakdown Pie Chart */}
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Audience Device Breakdown</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              How your audience accesses content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div role="img" aria-label="Pie chart showing device breakdown of audience">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={deviceBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {deviceBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Content Type Radar Chart */}
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Content Type Performance</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">Engagement by content type</CardDescription>
          </CardHeader>
          <CardContent>
            <div role="img" aria-label="Radar chart showing content type performance">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={contentTypeData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" className="text-gray-600 dark:text-gray-400" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-gray-600 dark:text-gray-400" />
                  <Radar
                    name="Engagement"
                    dataKey="A"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Subscriber Growth Progress */}
      <section aria-labelledby="progress-heading" className="mb-8">
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
          <CardHeader>
            <CardTitle id="progress-heading" className="text-gray-900 dark:text-white">
              Subscriber Growth Goal
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Progress toward 100K subscribers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Current: 78,500</span>
                <span className="text-gray-600 dark:text-gray-400">Goal: 100,000</span>
              </div>
              <Progress value={78.5} className="h-3" aria-label="Subscriber growth progress: 78.5% complete" />
              <p className="text-sm text-gray-600 dark:text-gray-400">21,500 subscribers to go • 78.5% complete</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Recent Posts Table */}
      <section aria-labelledby="posts-heading">
        <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
          <CardHeader>
            <CardTitle id="posts-heading" className="text-gray-900 dark:text-white">
              Recent Posts
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Your latest content performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-600 dark:text-gray-400">Title</TableHead>
                  <TableHead className="text-gray-600 dark:text-gray-400">Platform</TableHead>
                  <TableHead className="text-gray-600 dark:text-gray-400">Date</TableHead>
                  <TableHead className="text-gray-600 dark:text-gray-400">Views</TableHead>
                  <TableHead className="text-gray-600 dark:text-gray-400">Likes</TableHead>
                  <TableHead className="text-gray-600 dark:text-gray-400">Comments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPosts.map((post) => (
                  <TableRow key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <TableCell className="font-medium text-gray-900 dark:text-white">{post.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {post.platform}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">{post.date}</TableCell>
                    <TableCell className="text-gray-900 dark:text-white font-medium">{post.views}</TableCell>
                    <TableCell className="text-gray-900 dark:text-white">{post.likes}</TableCell>
                    <TableCell className="text-gray-900 dark:text-white">{post.comments}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default function DashboardPage() {
  return (
    <DashboardLayout currentPage="dashboard">
      <Suspense fallback={<DashboardLoadingSkeleton />}>
        <DashboardContent />
      </Suspense>
    </DashboardLayout>
  )
}

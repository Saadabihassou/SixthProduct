"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
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
import { DollarSign, TrendingUp, CreditCard, Users, Target, Gift } from "lucide-react"

// Sample revenue data
const monthlyRevenue = [
  { month: "Jul", adRevenue: 2400, sponsorships: 1800, merchandise: 600, memberships: 400 },
  { month: "Aug", adRevenue: 2800, sponsorships: 2200, merchandise: 750, memberships: 450 },
  { month: "Sep", adRevenue: 3200, sponsorships: 1900, merchandise: 800, memberships: 500 },
  { month: "Oct", adRevenue: 3600, sponsorships: 2500, merchandise: 900, memberships: 550 },
  { month: "Nov", adRevenue: 4100, sponsorships: 2800, merchandise: 1100, memberships: 600 },
  { month: "Dec", adRevenue: 4500, sponsorships: 3200, merchandise: 1200, memberships: 650 },
  { month: "Jan", adRevenue: 4800, sponsorships: 2900, merchandise: 1300, memberships: 700 },
]

const revenueBreakdown = [
  { name: "Ad Revenue", value: 4800, color: "#3b82f6", percentage: 58 },
  { name: "Sponsorships", value: 2900, color: "#10b981", percentage: 35 },
  { name: "Merchandise", value: 1300, color: "#f59e0b", percentage: 16 },
  { name: "Memberships", value: 700, color: "#8b5cf6", percentage: 8 },
]

const topPerformingContent = [
  { title: "10 Tips for Better Content Creation", revenue: 1250, views: 45200, rpm: 2.77 },
  { title: "Behind the Scenes: My Setup Tour", revenue: 980, views: 32800, rpm: 2.99 },
  { title: "Quick Photography Tips", revenue: 850, views: 28500, rpm: 2.98 },
  { title: "Weekly Vlog: Creative Process", revenue: 1150, views: 38900, rpm: 2.96 },
  { title: "Product Review: New Camera Gear", revenue: 1420, views: 42100, rpm: 3.37 },
]

const sponsorshipDeals = [
  { brand: "TechCorp", amount: 2500, status: "Active", endDate: "2024-03-15", type: "Product Review" },
  { brand: "CreativeTools", amount: 1800, status: "Pending", endDate: "2024-02-28", type: "Integration" },
  { brand: "GearHub", amount: 3200, status: "Completed", endDate: "2024-01-20", type: "Dedicated Video" },
  { brand: "StreamPro", amount: 1500, status: "Active", endDate: "2024-04-10", type: "Mention" },
]

export default function RevenuePage() {
  const totalRevenue = revenueBreakdown.reduce((sum, item) => sum + item.value, 0)
  const monthlyGrowth = 15.3 // percentage

  return (
    <DashboardLayout currentPage="revenue">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Revenue</h1>
          <p className="text-gray-600 dark:text-gray-400">Track your earnings and monetization performance</p>
        </div>

        {/* Revenue Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">${totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />+{monthlyGrowth}% vs last month
                  </p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">RPM (Revenue per Mille)</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$2.94</p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.2% vs last month
                  </p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Sponsorships</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 flex items-center mt-1">
                    <Gift className="h-3 w-3 mr-1" />
                    $7,800 total value
                  </p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Channel Members</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">1,247</p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% vs last month
                  </p>
                </div>
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                  <Users className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
            <TabsTrigger value="sponsorships">Sponsorships</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Monthly Revenue Trend */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Revenue Trend</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Monthly revenue breakdown by source
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis dataKey="month" className="text-gray-600 dark:text-gray-400" />
                    <YAxis className="text-gray-600 dark:text-gray-400" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--foreground))",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="adRevenue" stackId="a" fill="#3b82f6" name="Ad Revenue" />
                    <Bar dataKey="sponsorships" stackId="a" fill="#10b981" name="Sponsorships" />
                    <Bar dataKey="merchandise" stackId="a" fill="#f59e0b" name="Merchandise" />
                    <Bar dataKey="memberships" stackId="a" fill="#8b5cf6" name="Memberships" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Performing Content */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Top Performing Content</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Your highest earning videos this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformingContent.map((content, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">{content.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {content.views.toLocaleString()} views • RPM: ${content.rpm}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 dark:text-white">${content.revenue}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Revenue</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="breakdown" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Sources Pie Chart */}
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Revenue Sources</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Breakdown by revenue stream
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={revenueBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {revenueBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Revenue Breakdown Details */}
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Revenue Details</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Detailed breakdown of each revenue stream
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {revenueBreakdown.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white">
                            ${item.value.toLocaleString()}
                          </span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                        <p className="text-xs text-gray-600 dark:text-gray-400">{item.percentage}% of total revenue</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sponsorships" className="space-y-6">
            {/* Sponsorship Deals */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Sponsorship Deals</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Current and upcoming brand partnerships
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sponsorshipDeals.map((deal, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium text-gray-900 dark:text-white">{deal.brand}</h4>
                          <Badge
                            className={
                              deal.status === "Active"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                : deal.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                            }
                          >
                            {deal.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {deal.type} • Ends {new Date(deal.endDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 dark:text-white">${deal.amount.toLocaleString()}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Deal Value</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            {/* Revenue Goals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Monthly Goal</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Progress toward your monthly revenue target
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Current: ${totalRevenue.toLocaleString()}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">Goal: $12,000</span>
                    </div>
                    <Progress value={(totalRevenue / 12000) * 100} className="h-3" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ${(12000 - totalRevenue).toLocaleString()} to go • {Math.round((totalRevenue / 12000) * 100)}%
                      complete
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Annual Goal</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Progress toward your yearly revenue target
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Current: $89,500</span>
                      <span className="text-gray-600 dark:text-gray-400">Goal: $120,000</span>
                    </div>
                    <Progress value={(89500 / 120000) * 100} className="h-3" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">$30,500 to go • 75% complete</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Revenue Milestones */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Revenue Milestones</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Track your progress toward key revenue milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">$100K Annual Revenue</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">89.5% complete</p>
                      <Progress value={89.5} className="h-2 mt-2" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">$3 RPM Average</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">98% complete</p>
                      <Progress value={98} className="h-2 mt-2" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">2,000 Channel Members</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">62% complete</p>
                      <Progress value={62} className="h-2 mt-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

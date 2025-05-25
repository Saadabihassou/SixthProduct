"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { useState } from "react"
import {
  Plus,
  Search,
  MoreHorizontal,
  Eye,
  Heart,
  MessageCircle,
  Share,
  Edit,
  Trash2,
  Calendar,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const posts = [
  {
    id: 1,
    title: "10 Tips for Better Content Creation",
    platform: "YouTube",
    status: "Published",
    publishDate: "2024-01-15",
    views: 45200,
    likes: 2100,
    comments: 156,
    shares: 89,
    thumbnail: "/placeholder.svg?height=80&width=120",
    engagement: 4.8,
    trending: "up",
  },
  {
    id: 2,
    title: "Behind the Scenes: My Setup Tour",
    platform: "Instagram",
    status: "Published",
    publishDate: "2024-01-12",
    views: 32800,
    likes: 1800,
    comments: 89,
    shares: 45,
    thumbnail: "/placeholder.svg?height=80&width=120",
    engagement: 5.2,
    trending: "up",
  },
  {
    id: 3,
    title: "Quick Photography Tips",
    platform: "TikTok",
    status: "Published",
    publishDate: "2024-01-10",
    views: 28500,
    likes: 1500,
    comments: 67,
    shares: 234,
    thumbnail: "/placeholder.svg?height=80&width=120",
    engagement: 6.1,
    trending: "up",
  },
  {
    id: 4,
    title: "Weekly Vlog: Creative Process",
    platform: "YouTube",
    status: "Draft",
    publishDate: "2024-01-08",
    views: 0,
    likes: 0,
    comments: 0,
    shares: 0,
    thumbnail: "/placeholder.svg?height=80&width=120",
    engagement: 0,
    trending: "neutral",
  },
  {
    id: 5,
    title: "Product Review: New Camera Gear",
    platform: "YouTube",
    status: "Scheduled",
    publishDate: "2024-01-20",
    views: 0,
    likes: 0,
    comments: 0,
    shares: 0,
    thumbnail: "/placeholder.svg?height=80&width=120",
    engagement: 0,
    trending: "neutral",
  },
]

const formatNumber = (num: number) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"
  if (num >= 1000) return (num / 1000).toFixed(1) + "K"
  return num.toString()
}

export default function PostsClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPlatform, setFilterPlatform] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlatform = filterPlatform === "all" || post.platform.toLowerCase() === filterPlatform
    const matchesStatus = filterStatus === "all" || post.status.toLowerCase() === filterStatus
    return matchesSearch && matchesPlatform && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "published":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "draft":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
      case "scheduled":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "youtube":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      case "instagram":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400"
      case "tiktok":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
      case "twitter":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <DashboardLayout currentPage="posts">
      <main className="p-6">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Content Posts</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage and track your content across all platforms</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
            Create Post
          </Button>
        </header>

        {/* Stats Cards */}
        <section aria-labelledby="stats-heading" className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <h2 id="stats-heading" className="sr-only">
            Post Statistics
          </h2>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Posts</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">127</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg" aria-hidden="true">
                  <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Published</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">89</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg" aria-hidden="true">
                  <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Drafts</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">23</p>
                </div>
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg" aria-hidden="true">
                  <Edit className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Scheduled</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">15</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg" aria-hidden="true">
                  <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Filters and Search */}
        <section aria-labelledby="filters-heading" className="mb-6">
          <h2 id="filters-heading" className="sr-only">
            Filter and Search Posts
          </h2>
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                    aria-hidden="true"
                  />
                  <Input
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    aria-label="Search posts"
                  />
                </div>
                <Select value={filterPlatform} onValueChange={setFilterPlatform}>
                  <SelectTrigger className="w-full sm:w-[180px]" aria-label="Filter by platform">
                    <SelectValue placeholder="All Platforms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Platforms</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full sm:w-[180px]" aria-label="Filter by status">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Posts Grid */}
        <section aria-labelledby="posts-grid-heading">
          <h2 id="posts-grid-heading" className="sr-only">
            Posts Grid
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-lg transition-all duration-200 rounded-lg overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative">
                  <img
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={`Thumbnail for ${post.title}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={getPlatformColor(post.platform)}>{post.platform}</Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className={getStatusColor(post.status)}>{post.status}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Published on {new Date(post.publishDate).toLocaleDateString()}
                  </p>

                  {/* Stats */}
                  {post.status === "Published" && (
                    <div className="grid grid-cols-2 gap-4 mb-4" role="group" aria-label="Post statistics">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                        <span aria-label={`${formatNumber(post.views)} views`}>{formatNumber(post.views)}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Heart className="w-4 h-4 mr-1" aria-hidden="true" />
                        <span aria-label={`${formatNumber(post.likes)} likes`}>{formatNumber(post.likes)}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <MessageCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                        <span aria-label={`${formatNumber(post.comments)} comments`}>
                          {formatNumber(post.comments)}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Share className="w-4 h-4 mr-1" aria-hidden="true" />
                        <span aria-label={`${formatNumber(post.shares)} shares`}>{formatNumber(post.shares)}</span>
                      </div>
                    </div>
                  )}

                  {/* Engagement Rate */}
                  {post.status === "Published" && (
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Engagement</span>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white mr-1">
                          {post.engagement}%
                        </span>
                        {post.trending === "up" ? (
                          <TrendingUp className="w-4 h-4 text-green-500" aria-label="Trending up" />
                        ) : post.trending === "down" ? (
                          <TrendingDown className="w-4 h-4 text-red-500" aria-label="Trending down" />
                        ) : null}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" aria-hidden="true" />
                        Edit
                      </Button>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" aria-label="More options">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share className="w-4 h-4 mr-2" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </DashboardLayout>
  )
}

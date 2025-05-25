import type { Metadata } from "next"
import DashboardPage from "./dashboard-page"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Overview of your content creator analytics with key metrics, charts, and recent performance data.",
  openGraph: {
    title: "Dashboard | CreatorHub",
    description: "Overview of your content creator analytics with key metrics, charts, and recent performance data.",
  },
}

export default function Dashboard() {
  return <DashboardPage />
}

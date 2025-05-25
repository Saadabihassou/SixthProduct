import type { Metadata } from "next"
import PostsClientPage from "./PostsClientPage"

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Manage and track your content posts across all platforms. View performance metrics, edit content, and schedule new posts.",
  openGraph: {
    title: "Posts | CreatorHub",
    description:
      "Manage and track your content posts across all platforms. View performance metrics, edit content, and schedule new posts.",
  },
}

export default function PostsPage() {
  return <PostsClientPage />
}

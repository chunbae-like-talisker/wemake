import { PostCard } from "~/features/community/components/post-card";
import type { Route } from "./+types/profile-posts-page";

export function meta({}: Route.MetaFunction) {
  return [{ title: "Posts | wemake" }];
}

export default function ProfilePostsPage() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <PostCard
          id={`postId-${index + 1}`}
          title="What is the best productivity tool?"
          avatarSrc="https://github.com/apple.png"
          author="Nico"
          category="productivity"
          timeAgo="12 hours ago"
          expanded
        />
      ))}
    </div>
  );
}

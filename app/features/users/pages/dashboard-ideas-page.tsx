import { IdeaCard } from "~/features/ideas/components/idea-card";
import type { Route } from "./+types/dashboard-ideas-page";

export function meta({}: Route.MetaFunction) {
  return [{ title: "My Ideas | wemake" }];
}

export default function DashboardIdeasPage({}: Route.ComponentProps) {
  return (
    <div className="space-y-5 h-full">
      <h1 className="text-2xl font-semibold mb-6">Claimed Ideas</h1>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
            key={index}
            id={`ideaId-${index + 1}`}
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            viewCount={123}
            timeAgo="12 hours ago"
            likeCount={12}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

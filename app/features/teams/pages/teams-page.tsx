import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/teams-page";
import { TeamCard } from "../components/team-card";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Teams | wemake" }];
};

export default function TeamsPage() {
  return (
    <div className="space-y-20">
      <Hero title="Teams" subtitle="Find a team looking for a new member" />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <TeamCard
            id={`teamId-${index + 1}`}
            username="chunbae"
            userAvatar="https://github.com/chunbae-like-talisker.png"
            projectDescription="a new social media platform"
            requiredRoles={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
          />
        ))}
      </div>
    </div>
  );
}

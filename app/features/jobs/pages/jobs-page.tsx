import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/jobs-page";
import { JobCard } from "../components/job-card";
import { Button } from "~/common/components/ui/button";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "../constants";
import { useSearchParams } from "react-router";
import { cn } from "~/lib/utils";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Jobs | wemake" },
    { name: "description", content: "Find your dream job at wemake" },
  ];
};

export default function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const onFilterClick = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams, {
      preventScrollReset: true,
    });
  };

  return (
    <div className="space-y-20">
      <Hero title="Jobs" subtitle="Companies looking for makers" />
      <div className="grid grid-cols-6 gap-20 items-start">
        <div className="grid grid-cols-3 col-span-4 gap-5">
          {Array.from({ length: 11 }).map((_, index) => (
            <JobCard
              id={`jobId-${index + 1}`}
              companyName="Tesla Motors"
              companyLogo="https://github.com/facebook.png"
              jobTitle="Software Engineer"
              description="We are looking for a software engineer with 3 years of experience."
              timeAgo="12 hours ago"
              salary="$100,000 - $120,000"
              location="San Francisco, CA"
              badges={["Full-time", "Remote"]}
            />
          ))}
        </div>
        <div className="col-span-2 sticky top-20 flex flex-col gap-10">
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm text-muted-foreground font-bold">Type</h4>
            <div className="flex flex-wrap gap-2">
              {JOB_TYPES.map((type) => (
                <Button
                  variant="outline"
                  onClick={() => onFilterClick("type", type.value)}
                  className={cn(
                    type.value === searchParams.get("type") && "bg-accent"
                  )}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm text-muted-foreground font-bold">
              Location
            </h4>
            <div className="flex flex-wrap gap-2">
              {LOCATION_TYPES.map((location) => (
                <Button
                  variant="outline"
                  onClick={() => onFilterClick("location", location.value)}
                  className={cn(
                    location.value === searchParams.get("location") &&
                      "bg-accent"
                  )}
                >
                  {location.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm text-muted-foreground font-bold">
              Salary Range
            </h4>
            <div className="flex flex-wrap gap-2">
              {SALARY_RANGE.map((salary) => (
                <Button
                  variant="outline"
                  onClick={() => onFilterClick("salary", salary)}
                  className={cn(
                    salary === searchParams.get("salary") && "bg-accent"
                  )}
                >
                  {salary}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";

interface JobCardProps {
  id: string;
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  description: string;
  timeAgo: string;
  salary: string;
  location: string;
  badges: string[];
}

export function JobCard({
  id,
  companyName,
  companyLogo,
  jobTitle,
  description,
  timeAgo,
  salary,
  location,
  badges,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-4 mb-8">
            <img
              src={companyLogo}
              alt={`${companyName} Logo`}
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{companyName}</span>
              <span className="text-xs text-muted-foreground">{timeAgo}</span>
            </div>
          </div>
          <CardTitle>{jobTitle}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {badges.map((badge, index) => (
            <Badge key={index} variant="outline" className="mr-2">
              {badge}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salary}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {location}
            </span>
          </div>
          <Button variant="secondary" size="sm" asChild>
            <Link to={`/jobs/${id}/apply`}>
              <span>Apply now</span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

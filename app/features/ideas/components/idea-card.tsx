import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
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
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  viewCount: number;
  timeAgo: string;
  likeCount: number;
  claimed: boolean;
}

export function IdeaCard({
  id,
  title,
  viewCount,
  timeAgo,
  likeCount,
  claimed,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={`/ideas/${id}`}>
          <CardTitle className="text-xl">
            <span
              className={cn(
                claimed && "bg-muted-foreground text-muted-foreground"
              )}
            >
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center text-sm">
        <span className="flex items-center gap-2">
          <EyeIcon className="size-4" />
          <span>{viewCount}</span>
        </span>
        <DotIcon className="size-4" />
        <span>{timeAgo}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">
          <HeartIcon className="size-4" />
          <span>{likeCount}</span>
        </Button>
        {!claimed ? (
          <Button asChild>
            <Link to={`/ideas/${id}/claim`}>Claim idea now &rarr;</Link>
          </Button>
        ) : (
          <Button variant="outline" className="cursor-not-allowed">
            <LockIcon className="size-4" />
            <span>Claimed</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { ChevronUpIcon, DotIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface PostCardProps {
  id: string;
  title: string;
  avatarSrc: string;
  author: string;
  category: string;
  timeAgo: string;
  expanded?: boolean;
  votesCount?: number;
}

export function PostCard({
  id,
  title,
  avatarSrc,
  author,
  category,
  timeAgo,
  expanded = false,
  votesCount = 0,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`} className="block">
      <Card
        className={cn(
          "bg-transparent hover:bg-card/50 transition-colors",
          expanded ? "flex flex-row items-center justify-between" : ""
        )}
      >
        <CardHeader className="flex flex-row items-center gap-2 w-full">
          <Avatar className="size-14">
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2 text-sm leading-tight text-muted-foreground">
              <span>
                {author} on {category}
              </span>
              <DotIcon className="size-4" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        {expanded ? (
          <CardFooter className="flex justify-end pb-0">
            <Button variant="outline" className="flex flex-col h-14">
              <ChevronUpIcon className="size-4 shrink-0" />
              <span>{votesCount}</span>
            </Button>
          </CardFooter>
        ) : (
          <CardFooter className="flex justify-end">
            <Button variant="link">Reply &rarr;</Button>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}

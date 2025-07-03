import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { ChevronUpIcon, MessageCircleIcon, EyeIcon } from "lucide-react";
import type { ReactNode } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  commentCount: number;
  viewCount: number;
  upvoteCount: number;
}

export function ProductCard({
  id,
  title,
  description,
  commentCount,
  viewCount,
  upvoteCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="block">
      <Card className="w-full flex flex-row bg-transparent hover:bg-card/50">
        <CardHeader className="w-full">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <MessageCircleIcon className="size-4" />
              <span>{commentCount}</span>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="size-4" />
              <span>{viewCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{upvoteCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

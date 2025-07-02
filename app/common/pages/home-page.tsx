import {
  ChevronUp,
  ChevronUpIcon,
  EyeIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Link, type MetaFunction } from "react-router";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import type { index } from "@react-router/dev/routes";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { PostCard } from "~/features/community/components/post-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function HomePage({ loaderData, actionData }: any) {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" className="p-0" asChild>
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            to={`/products/productId-${index + 1}`}
            title={`Product Name ${index + 1}`}
            description={`Product Description ${index + 1}`}
            commentCount={123 + index}
            viewCount={123 + index * 2}
            upvoteCount={120 + index * 3}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Lastest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community.
          </p>
          <Button variant="link" className="p-0" asChild>
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            id={`postId-${index + 1}`}
            title="What is the best productivity tool?"
            avatarSrc="https://github.com/apple.png"
            author="Nico"
            category="productivity"
            timeAgo="12 hours ago"
          />
        ))}
      </div>
    </div>
  );
}

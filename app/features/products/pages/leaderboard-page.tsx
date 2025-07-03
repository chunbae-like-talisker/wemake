import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/product-card";
import type { Route } from "./+types/leaderboard-page";
import { Hero } from "~/common/components/hero";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Leaderboards - wemake" },
    {
      name: "description",
      content: "Top products leaderboard",
    },
  ];
};

export default function LeaderboardPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Leaderboards"
        subtitle="The most popular products on wemake"
      />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Daily Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by day.
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
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
        <Button variant="link" className="text-lg self-center p-0" asChild>
          <Link to="/products/leaderboards/daily">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Weekly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by week.
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
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
        <Button variant="link" className="text-lg self-center p-0" asChild>
          <Link to="/products/leaderboards/weekly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Monthly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by month.
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
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
        <Button variant="link" className="text-lg self-center p-0" asChild>
          <Link to="/products/leaderboards/monthly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Yearly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by year.
          </p>
        </div>
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductCard
            id={`productId-${index + 1}`}
            title={`Product Name ${index + 1}`}
            description={`Product Description ${index + 1}`}
            commentCount={123 + index}
            viewCount={123 + index * 2}
            upvoteCount={120 + index * 3}
          />
        ))}
        <Button variant="link" className="text-lg self-center p-0" asChild>
          <Link to="/products/leaderboards/yearly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
    </div>
  );
}

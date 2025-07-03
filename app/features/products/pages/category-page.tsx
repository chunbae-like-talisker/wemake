import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";
import type { Route } from "./+types/category-page";

export const meta = ({ params }: Route.MetaArgs) => {
  return [
    { title: "Developer Tools - wemake" },
    { name: "description", content: "Browse developer tools" },
  ];
};

export default function CategoryPage() {
  return (
    <div className="space-y-10">
      <Hero
        title={"Developer Tools"}
        subtitle="Tools for developers build products faster"
      />
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`productId-${index + 1}`}
            title={`Product Name ${index + 1}`}
            description={`Product Description ${index + 1}`}
            commentCount={123 + index}
            viewCount={123 + index * 2}
            upvoteCount={120 + index * 3}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}

import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/profile-products-page";

export function meta({}: Route.MetaFunction) {
  return [{ title: "Products | wemake" }];
}

export default function ProfileProductsPage() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, index) => (
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
  );
}

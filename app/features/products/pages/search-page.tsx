import { z } from "zod";
import type { Route } from "./+types/search-page";
import { data, Form } from "react-router";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Search | wemake" },
    { name: "description", content: "Search for products" },
  ];
};

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedParams } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw new Error("Invalid params");
  }
}

export function action() {
  return {};
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero
        title="Search"
        subtitle="Search for products by title or description"
      />
      <Form className="flex justify-center max-w-screen-sm items-center gap-2 mx-auto">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">Search</Button>
      </Form>
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
    </div>
  );
}

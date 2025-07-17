import { redirect } from "react-router";
import type { Route } from "./+types/product-redirection-page.tsx";

export const loader = ({ params }: Route.LoaderArgs) => {
  return redirect(`/products/${params.productId}/overview`);
};

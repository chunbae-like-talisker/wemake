import client from "~/supa-client";
import type { Route } from "./+types/product-visit-page";
import { redirect } from "react-router";
import z from "zod";

const paramsSchema = z.object({
  productId: z.coerce.number(),
});

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { error: parsedError, data: parsedData } =
    paramsSchema.safeParse(params);
  if (parsedError) {
    throw new Error("Invalid parameters");
  }

  const { error, data } = await client
    .from("products")
    .select("url")
    .eq("product_id", parsedData.productId)
    .single();

  if (data) {
    await client.rpc("track_event", {
      event_type: "product_visit",
      event_data: { product_id: params.productId },
    });
    return redirect(data.url);
  }
};

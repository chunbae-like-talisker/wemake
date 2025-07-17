import { MessageCircleIcon } from "lucide-react";
import type { Route } from "./+types/messages-page";

export function meta({}: Route.MetaFunction) {
  return [{ title: "Messages | wemake" }];
}

export default function MessagesPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <MessageCircleIcon className="size-12 text-muted-foreground" />
      <h1 className="text-2xl text-muted-foreground font-semibold">
        Click on a message in the sidebar to view it.
      </h1>
    </div>
  );
}

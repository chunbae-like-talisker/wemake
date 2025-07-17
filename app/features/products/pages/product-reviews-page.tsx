import { Button } from "~/common/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import { ReviewCard } from "~/features/products/components/review-card";
import CreateReviewDialog from "../components/create-review-dialog";

export function meta() {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "Product reviews page" },
  ];
}

export default function ProductReviewsPage() {
  return (
    <Dialog>
      <div className="space-y-10 max-w-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">10 Reviews</h2>
          <DialogTrigger>
            <Button variant={"secondary"}>Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {Array.from({ length: 10 }).map((_, index) => (
            <ReviewCard
              name="John Doe"
              username="username"
              avatarUrl="https://github.com/chunbae-like-talisker.png"
              rating={3}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              createdAt="10 days ago"
            />
          ))}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}

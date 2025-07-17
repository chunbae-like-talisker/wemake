import { Form } from "react-router";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/submit-post-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Submit Post | wemake" }];
};

export default function SubmitPostPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Create Discussion"
        subtitle="Share your ideas, ask questions, and connect with other developers"
      />
      <Form className="flex flex-col gap-10 max-w-screen-sm mx-auto">
        <InputPair
          label="Title"
          description="40 characters or less"
          name="title"
          id="title"
          required
          placeholder="i.e What is the best productivity tool?"
          maxLength={40}
        />
        <SelectPair
          label="Category"
          description="Select the category that best fits your discussion"
          name="category"
          placeholder="i.e Productivity"
          required
          options={[
            { label: "Productivity", value: "productivity" },
            { label: "Programming", value: "programming" },
            { label: "Design", value: "design" },
          ]}
        />
        <InputPair
          label="Content"
          description="1000 characters or less"
          name="content"
          id="content"
          required
          placeholder="i.e I'm looking for a tool that can help me with my productivity..."
          maxLength={1000}
          textArea
        />
        <Button type="submit" className="mx-auto">
          Create Discussion
        </Button>
      </Form>
    </div>
  );
}

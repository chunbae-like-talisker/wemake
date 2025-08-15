import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-team-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import SelectPair from "~/common/components/select-pair";
import { PRODUCT_STAGES } from "../constants";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Create Team | wemake" }];
};

export default function SubmitTeamPage() {
  return (
    <div className="space-y-20">
      <Hero title="Create Team" subtitle="Create a team to find a team mate" />
      <Form className="max-w-screen-2xl flex flex-col items-center mx-auto">
        <div className="grid grid-cols-3 gap-10 w-full">
          <InputPair
            label="What is the name of your product?"
            description="20 characters max"
            placeholder="i.e. Doggy Social"
            name="name"
            maxLength={20}
            type="text"
            id="name"
            required
          />
          <SelectPair
            label="What is the stage of your product?"
            description="Select the stage of your product"
            placeholder="Select the stage of your product"
            name="stage"
            options={PRODUCT_STAGES}
            required
          />
          <InputPair
            label="What is the size of your product?"
            description="1-100"
            name="size"
            type="number"
            id="size"
            min={1}
            max={100}
            required
          />
          <InputPair
            label="How much equity are you willing to give?"
            description="each"
            name="equity"
            type="number"
            id="equity"
            min={1}
            max={100}
            required
          />
          <InputPair
            label="What roles are you looking for?"
            placeholder="i.e. React Developer, Backend Developer, Product Manager"
            description="comma separated"
            name="roles"
            type="text"
            id="roles"
            required
          />
          <InputPair
            label="What is the description of your product?"
            description="200 characters max"
            placeholder="i.e We are building a new social media platform for dogs to connect with each other"
            name="description"
            maxLength={200}
            type="text"
            id="description"
            required
            textArea
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Create team
        </Button>
      </Form>
    </div>
  );
}

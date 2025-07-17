import { Form } from "react-router";
import type { Route } from "./+types/settings-page";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { useState } from "react";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";

export function meta({}: Route.MetaFunction) {
  return [{ title: "Settings | wemake" }];
}

export default function SettingsPage() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-20">
      <div className="grid grid-cols-6 gap-40">
        <div className="col-span-4 flex flex-col gap-10">
          <h2 className="text-2xl font-semibold">Edit profile</h2>
          <Form className="flex flex-col w-1/2 gap-5">
            <InputPair
              label="Name"
              description="Your public name"
              required
              id="name"
              name="name"
              placeholder="John Doe"
              type="text"
            />
            <SelectPair
              label="Role"
              description="What role do you do identify the most with"
              name="role"
              placeholder="Select a role"
              required
              options={[
                {
                  label: "Developer",
                  value: "developer",
                },
                {
                  label: "Designer",
                  value: "designer",
                },
                {
                  label: "Product Manager",
                  value: "product-manager",
                },
                {
                  label: "Other",
                  value: "other",
                },
              ]}
            />
            <InputPair
              label="Headline"
              description="An introduction to your profile."
              required
              id="headline"
              name="headline"
              placeholder="i.e. I'm a product designer based on the UK, I like doing product design, design systems and design tokens."
              type="text"
              textArea
            />
            <InputPair
              label="Bio"
              description="Your public bio. It will be displayed on your profile."
              required
              id="bio"
              name="bio"
              placeholder="John Doe"
              type="text"
              textArea
            />
            <Button type="submit" className="w-full">
              Update profile
            </Button>
          </Form>
        </div>
        <aside className="col-span-2 p-6 rounded-lg border shadow-md">
          <Label className="flex flex-col items-start">
            Avatar
            <small className="text-muted-foreground">
              This is your public avatar.
            </small>
          </Label>
          <div className="space-y-5">
            <div className="size-40 rounded-full shadow-xl overflow-hidden">
              {avatar && (
                <img
                  src={avatar}
                  alt="Avatar"
                  className="size-full object-cover"
                />
              )}
            </div>
            <Input
              type="file"
              className="max-w-1/2"
              onChange={onChange}
              required
              name="icon"
            />
            <div className="flex flex-col gap-1 text-xs">
              <span className="text-muted-foreground">
                Recommended size: 128x128px
              </span>
              <span className="text-muted-foreground">
                Allowed formats: PNG, JPEG
              </span>
              <span className="text-muted-foreground">Max file size: 1MB</span>
            </div>
            <Button className="w-full">Update</Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

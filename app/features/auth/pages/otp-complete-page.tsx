import InputPair from "~/common/components/input-pair";
import type { Route } from "./+types/otp-complete-page";
import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Verify OTP | wemake" }];
};

export default function OtpCompletePage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center w-full max-w-md gap-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Confirm OTP</h1>
          <p className="text-sm text-muted-foreground">
            Enter the OTP code sent to your email address.
          </p>
        </div>
        <Form className="w-full space-y-4">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            placeholder="i.e wemake@example.com"
            name="email"
            required
            type="email"
          />
          <InputPair
            id="otp"
            label="OTP"
            description="Enter the OTP code"
            placeholder="i.e 1234"
            name="otp"
            required
            type="number"
          />
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
}

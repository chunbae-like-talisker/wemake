import { Form, Link } from "react-router";
import type { Route } from "./+types/login-page";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import AuthButtons from "../components/auth-buttons";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Login | wemake" }];
};

export default function LoginPage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <Button variant="ghost" asChild className="absolute top-8 right-4">
        <Link to="/auth/join">Join</Link>
      </Button>
      <div className="flex flex-col items-center justify-center w-full max-w-md gap-10">
        <h1 className="text-2xl font-semibold">Log in to your account</h1>
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
            id="password"
            label="Password"
            description="Enter your password"
            placeholder="Enter your password"
            name="password"
            required
            type="password"
          />
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}

import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-job-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "../constants";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Post a Job | wemake" }];
};

export default function SubmitJobPage() {
  return (
    <div>
      <Hero
        title="Post a Job"
        subtitle="Reach out to the best developers in the world"
      />
      <Form className="max-w-screen-2xl flex flex-col items-center mx-auto">
        <div className="grid grid-cols-3 gap-10 w-full">
          <InputPair
            id="position"
            label="Position"
            description="40 characters max"
            name="position"
            maxLength={40}
            type="text"
            required
            placeholder="Senior React Developer"
          />
          <InputPair
            id="overview"
            label="Overview"
            description="400 characters max"
            name="overview"
            maxLength={400}
            type="text"
            required
            placeholder="i.e We are looking for a Senior React Developer"
            textArea
          />
          <InputPair
            id="responsibilities"
            label="Responsibilities"
            description="400 characters max, comma separated"
            name="responsibilities"
            maxLength={400}
            type="text"
            required
            placeholder="i.e Implement new features, Improve existing code, etc."
            textArea
          />
          <InputPair
            id="qualifications"
            label="Qualifications"
            description="400 characters max, comma separated"
            name="qualifications"
            maxLength={400}
            type="text"
            required
            placeholder="i.e Bachelor's degree in Computer Science, 3+ years of experience, etc."
            textArea
          />
          <InputPair
            id="benefits"
            label="Benefits"
            description="400 characters max, comma separated"
            name="benefits"
            maxLength={400}
            type="text"
            required
            placeholder="i.e Health insurance, 401(k) retirement plan, etc."
            textArea
          />
          <InputPair
            id="skills"
            label="Skills"
            description="400 characters max, comma separated"
            name="skills"
            maxLength={400}
            type="text"
            required
            placeholder="i.e React, Node.js, TypeScript, etc."
            textArea
          />
          <InputPair
            id="companyName"
            label="Company Name"
            description="40 characters max"
            name="companyName"
            maxLength={40}
            type="text"
            required
            placeholder="i.e wemake"
          />
          <InputPair
            id="companyLogoUrl"
            label="Company Logo URL"
            description="40 characters max"
            name="companyLogoUrl"
            maxLength={40}
            type="url"
            required
            placeholder="i.e https://wemake.com/logo.png"
          />
          <InputPair
            id="companyLocation"
            label="Company Location"
            description="40 characters max"
            name="companyLocation"
            maxLength={40}
            type="text"
            required
            placeholder="i.e San Francisco, CA, etc."
          />
          <InputPair
            id="applyUrl"
            label="Apply URL"
            description="40 characters max"
            name="applyUrl"
            maxLength={40}
            type="url"
            required
            placeholder="i.e https://wemake.com/apply"
          />
          <SelectPair
            label="Job Type"
            description="Select the type of job"
            placeholder="Select the type of job"
            name="jobType"
            required
            options={JOB_TYPES.map((type) => ({
              label: type.label,
              value: type.value,
            }))}
          />
          <SelectPair
            label="Job Location"
            description="Select the location of job"
            placeholder="Select the location of job"
            name="jobLocation"
            required
            options={LOCATION_TYPES.map((location) => ({
              label: location.label,
              value: location.value,
            }))}
          />
          <SelectPair
            label="Salary Range"
            description="Select the salary range"
            placeholder="Select the salary range"
            name="salaryRange"
            required
            options={SALARY_RANGE.map((salary) => ({
              label: salary,
              value: salary,
            }))}
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Post job for $100
        </Button>
      </Form>
    </div>
  );
}

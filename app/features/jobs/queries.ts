import type { SupabaseClient } from "@supabase/supabase-js";
import { type JobType, type LocationType, type SalaryRange } from "./constants";
import type { Database } from "~/supa-client";

export const getJobs = async (
  client: SupabaseClient<Database>,
  {
    limit,
    location,
    type,
    salary,
  }: {
    limit: number;
    location?: LocationType;
    type?: JobType;
    salary?: SalaryRange;
  }
) => {
  const baseQeury = client
    .from("jobs")
    .select(
      `
    job_id,
    position,
    overview,
    company_name,
    company_logo,
    company_location,
    job_type,
    location,
    salary_range,
    created_at
    `
    )
    .limit(limit);

  if (location) {
    baseQeury.eq("location", location);
  }

  if (type) {
    baseQeury.eq("job_type", type);
  }

  if (salary) {
    baseQeury.eq("salary_range", salary);
  }

  const { data, error } = await baseQeury;
  if (error) throw error;
  return data;
};

export const getJobById = async (
  client: SupabaseClient<Database>,
  { jobId }: { jobId: number }
) => {
  const { data, error } = await client
    .from("jobs")
    .select("*")
    .eq("job_id", jobId)
    .single();

  if (error) throw error;
  return data;
};

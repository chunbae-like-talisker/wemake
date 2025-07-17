import type { Route } from "../../../+types/users/pages/dashboard-ideas-page";

export function meta({}: Route.MetaFunction) {
  return [
    { title: "내 아이디어" },
    { name: "description", content: "내가 작성한 아이디어 목록" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function DashboardIdeasPage({}: Route.ComponentProps) {
  return (
    <div>
      <h1>내 아이디어</h1>
    </div>
  );
}

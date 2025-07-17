import type { Route } from "../../../+types/users/pages/dashboard-page";

export function meta({}: Route.MetaFunction) {
  return [
    { title: "대시보드" },
    { name: "description", content: "사용자 대시보드" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function DashboardPage({}: Route.ComponentProps) {
  return (
    <div>
      <h1>대시보드</h1>
    </div>
  );
}

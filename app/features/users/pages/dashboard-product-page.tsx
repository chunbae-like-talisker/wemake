import type { Route } from "../../../+types/users/pages/dashboard-product-page";

export function meta({}: Route.MetaFunction) {
  return [
    { title: "내 제품" },
    { name: "description", content: "내가 등록한 제품 관리" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function DashboardProductPage({}: Route.ComponentProps) {
  return (
    <div>
      <h1>내 제품</h1>
    </div>
  );
}

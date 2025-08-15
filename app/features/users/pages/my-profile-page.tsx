import { redirect } from "react-router";

export function loader() {
  // find user using the cookies
  return redirect("/users/mr.628f034b");
}

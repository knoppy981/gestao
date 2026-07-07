import { redirect } from "next/navigation";

export default function Home() {
  // No public landing page — send visitors to the login page. Authenticated
  // users are forwarded on to the dashboard by app/(auth)/layout.tsx.
  redirect("/login");
}

import { redirect } from "next/navigation";

import { getUser } from "@/lib/supabase/server";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Defense in depth: the proxy already guards /dashboard, but never trust it
  // alone — re-check server-side before rendering protected content.
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }

  return <>{children}</>;
}

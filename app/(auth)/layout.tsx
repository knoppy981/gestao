import { redirect } from "next/navigation";

import { getUser } from "@/lib/supabase/server";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Already signed in — no reason to show the login page.
  const user = await getUser();
  if (user) {
    redirect("/dashboard/tab-1");
  }

  return (
    <div className="flex flex-1 items-center justify-center p-6">{children}</div>
  );
}

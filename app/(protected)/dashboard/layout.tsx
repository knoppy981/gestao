import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

import { DashboardTabs } from "@/components/dashboard-tabs";
import { Button } from "@/components/ui/button";
import { createClient, getUser } from "@/lib/supabase/server";

async function signOut() {
  "use server";
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between gap-4 border-b px-6 py-4">
        <span className="text-lg font-semibold">Gestão</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{user?.email}</span>
          <form action={signOut}>
            <Button type="submit" variant="outline" size="sm">
              <LogOut data-icon="inline-start" />
              Sair
            </Button>
          </form>
        </div>
      </header>
      <div className="border-b px-6">
        <DashboardTabs />
      </div>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

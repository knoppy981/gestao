"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const tabs = [
  { href: "/dashboard/tab-1", label: "Tab 1" },
  { href: "/dashboard/tab-2", label: "Tab 2" },
  { href: "/dashboard/tab-3", label: "Tab 3" },
];

export function DashboardTabs() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1" aria-label="Navegação do painel">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "-mb-px border-b-2 px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}

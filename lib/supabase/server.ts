import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { cache } from "react";

// Supabase client for Server Components, Route Handlers, and Server Actions.
// Create a fresh client per request — cookies() is request-scoped, so never
// cache or share the returned client across requests.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Called from a Server Component, where setting cookies is not
            // allowed. Safe to ignore when middleware refreshes the session.
          }
        },
      },
    },
  );
}

// Authenticated user for the current request, memoized per render pass so
// nested layouts/pages share a single Supabase Auth check instead of each
// making its own round-trip.
export const getUser = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});

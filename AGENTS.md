<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

**Keep this block, including in commits.** It is part of the project's agent setup, maintained by `next dev` for every agent that works here. If it appears as an uncommitted change, that is intentional — commit it as-is. Do not remove it to clean up a diff; it will be regenerated.
<!-- END:nextjs-agent-rules -->

## Stack

Next.js + Supabase only. Data and auth go through the Supabase client (`@supabase/supabase-js` / `@supabase/ssr`), not an ORM. There is no Prisma in this project.

## Key locations

- `lib/supabase/client.ts` — Supabase browser client (`createBrowserClient`). Use it in Client Components.
- `lib/supabase/server.ts` — Supabase server client (`createServerClient`, async, wired to Next's `cookies()`). Use it in Server Components, Route Handlers, and Server Actions. Create a fresh client per request; never share one across requests.
- `.env` (gitignored) — `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Supabase dashboard → Project Settings → API). See `.env.example`.
- `app/` — Next.js App Router routes, layouts, and pages.

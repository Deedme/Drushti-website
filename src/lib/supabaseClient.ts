import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const serverClientOptions = {
  auth: { persistSession: false, autoRefreshToken: false },
} as const;

/**
 * Server-side client for waitlist writes. Prefer SUPABASE_SERVICE_ROLE_KEY in
 * env (Vercel + .env.local) so inserts are reliable and not blocked by RLS on
 * RETURNING. Never expose the service role key to the browser.
 */
export function getWaitlistSupabase(): SupabaseClient | null {
  const supabaseUrl = process.env.SUPABASE_URL?.trim();
  if (!supabaseUrl) return null;

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (serviceKey) {
    return createClient(supabaseUrl, serviceKey, serverClientOptions);
  }

  const anonKey = process.env.SUPABASE_ANON_KEY?.trim();
  if (!anonKey) return null;
  return createClient(supabaseUrl, anonKey, serverClientOptions);
}

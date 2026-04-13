-- Run in Supabase → SQL Editor (once per project).
-- Ensures the table matches the landing form and allows anon inserts from the API route.

create table if not exists public.waitlist (
  id bigint generated always as identity primary key,
  email text not null,
  name text,
  city text,
  role text,
  created_at timestamptz not null default now(),
  constraint waitlist_email_unique unique (email)
);

alter table public.waitlist add column if not exists name text;
alter table public.waitlist add column if not exists city text;
alter table public.waitlist add column if not exists role text;

alter table public.waitlist enable row level security;

drop policy if exists "waitlist_anon_insert" on public.waitlist;
create policy "waitlist_anon_insert"
  on public.waitlist
  for insert
  to anon
  with check (true);

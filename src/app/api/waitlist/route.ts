import { NextResponse } from "next/server";

import { getWaitlistSupabase } from "@/lib/supabaseClient";

type WaitlistBody = {
  email?: unknown;
  name?: unknown;
  city?: unknown;
  role?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  const supabase = getWaitlistSupabase();
  if (!supabase) {
    return NextResponse.json(
      {
        error:
          "Waitlist is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (recommended) or SUPABASE_ANON_KEY in .env.local / Vercel.",
      },
      { status: 503 },
    );
  }

  const useServiceRole = Boolean(
    process.env.SUPABASE_SERVICE_ROLE_KEY?.trim(),
  );

  let body: WaitlistBody;
  try {
    body = (await request.json()) as WaitlistBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ message: "You are on the list!" });
  }

  const email = body.email;
  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const city = typeof body.city === "string" ? body.city.trim() : "";
  const role = typeof body.role === "string" ? body.role.trim() : "";

  const row = {
    email: email.toLowerCase().trim(),
    ...(name ? { name } : {}),
    ...(city ? { city } : {}),
    ...(role ? { role } : {}),
  };

  if (useServiceRole) {
    const { data, error } = await supabase
      .from("waitlist")
      .insert([row])
      .select("id")
      .single();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist." },
          { status: 409 },
        );
      }
      console.error("waitlist insert", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true as const, id: data.id });
  }

  const { error } = await supabase.from("waitlist").insert([row]);

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "This email is already on the waitlist." },
        { status: 409 },
      );
    }
    console.error("waitlist insert", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true as const });
}

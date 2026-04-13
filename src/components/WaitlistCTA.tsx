"use client";

import { useState } from "react";

export default function WaitlistCTA() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = form.elements.namedItem("website") as HTMLInputElement | null;
    if (honeypot?.value) return;

    if (!name || !city || !email || !role) return;

    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, city, role }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (res.ok && data.ok === true) {
        setSubmitted(true);
        setName("");
        setCity("");
        setEmail("");
        setRole("");
      } else {
        setError(data.error ?? "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative overflow-hidden py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#1a1f4e] to-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,224,181,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(197,139,242,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            Limited early access
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Be the first to experience{" "}
            <span className="bg-gradient-to-r from-teal to-primary-light bg-clip-text text-transparent">
              Drushti
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Join our waitlist today. Be among the first to access the platform
            when we launch and help shape the future of career guidance in
            India.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 max-w-lg space-y-4"
            >
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white outline-none backdrop-blur-sm transition-all placeholder:text-white/40 focus:border-teal/50 focus:ring-2 focus:ring-teal/20"
              />
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Your city"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white outline-none backdrop-blur-sm transition-all placeholder:text-white/40 focus:border-teal/50 focus:ring-2 focus:ring-teal/20"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white outline-none backdrop-blur-sm transition-all placeholder:text-white/40 focus:border-teal/50 focus:ring-2 focus:ring-teal/20"
              />
              <select
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white outline-none backdrop-blur-sm transition-all focus:border-teal/50 focus:ring-2 focus:ring-teal/20 appearance-none"
              >
                <option value="" disabled className="text-dark">
                  I am a...
                </option>
                <option value="student" className="text-dark">Student</option>
                <option value="parent" className="text-dark">Parent</option>
                <option value="counselor" className="text-dark">Counselor</option>
                <option value="advisor" className="text-dark">Industry Advisor</option>
              </select>
              {error ? (
                <p className="text-center text-sm text-red-200" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-teal to-primary-light py-4 text-sm font-semibold text-dark shadow-lg shadow-teal/25 transition-all hover:shadow-xl hover:shadow-teal/30 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
              >
                {loading ? "Submitting…" : "Join the Waitlist — It's Free"}
              </button>
            </form>
          ) : (
            <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-teal/30 bg-teal/10 p-8 backdrop-blur-sm">
              <svg
                className="mx-auto h-12 w-12 text-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-white">
                You&apos;re on the list!
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Thanks for signing up. We&apos;ll send you an email as soon as
                Drushti is ready for early access.
              </p>
            </div>
          )}

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              No spam, ever
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Early access priority
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

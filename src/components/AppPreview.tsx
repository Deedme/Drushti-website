"use client";

import Image from "next/image";

export default function AppPreview() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-white via-muted-light/15 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Sneak Peek
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            A glimpse of the{" "}
            <span className="gradient-text">Drushti experience</span>
          </h2>
          <p className="mt-4 text-lg text-gray">
            From onboarding to career planning — every screen is designed with
            care to make your journey seamless.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-teal/10 via-transparent to-blue/10 rounded-3xl blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-muted-light/40 bg-white/80 p-4 shadow-2xl backdrop-blur-sm md:p-8">
            <Image
              src="/images/onboarding.png"
              alt="Drushti onboarding screens showing goal tracking, strengths discovery, parent guidance, and professional advice"
              width={1200}
              height={600}
              className="w-full rounded-2xl"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-muted-light/40 bg-white/80 p-4 shadow-lg backdrop-blur-sm">
            <Image
              src="/images/counselor-parent.png"
              alt="Counselor and parent dashboards"
              width={600}
              height={800}
              className="w-full rounded-2xl"
            />
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-muted-light/40 bg-white/80 p-4 shadow-lg backdrop-blur-sm">
            <Image
              src="/images/student-features.png"
              alt="Student features including career library, planning tools, and connections"
              width={600}
              height={800}
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

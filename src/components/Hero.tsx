"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-0">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-teal/10 to-blue/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-secondary/10 to-secondary-light/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-24 md:flex-row md:gap-8 md:pt-0 lg:min-h-screen lg:px-8">
        {/* Left content */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-muted-light bg-white px-4 py-1.5 text-xs font-medium text-gray shadow-sm">
            <span className="h-2 w-2 rounded-full gradient-bg animate-pulse" />
            Coming Soon — Join the Waitlist
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-dark sm:text-5xl lg:text-6xl">
            Every student{" "}
            <span className="gradient-text">deserves</span>
            <br />
            the right guidance
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray">
            One platform connecting students with parents, career counselors,
            and industry professionals — so every student can make informed
            career decisions.
          </p>

          <a
            href="#waitlist"
            className="mt-8 inline-flex rounded-full gradient-bg px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 whitespace-nowrap"
          >
            Join Waitlist
          </a>

          <p className="mt-4 text-xs text-muted">
            Join 2,000+ students, parents & counselors already on the waitlist
          </p>
        </div>

        {/* Right mockup */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal/20 to-blue/20 blur-2xl" />
            <Image
              src="/images/hero-mockup.png"
              alt="Drushti app screens showing role selection and registration"
              width={920}
              height={560}
              className="relative w-[460px] max-w-full rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-xs text-muted">Scroll to explore</span>
        <div className="h-8 w-5 rounded-full border-2 border-muted-light p-1">
          <div className="h-2 w-1.5 rounded-full gradient-bg mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
}

"use client";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Sign Up & Choose Your Role",
      description:
        "Create your account as a Student, Parent, Counselor, or Advisor. Each role gets a tailored experience designed just for them.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Discover Your Strengths",
      description:
        "Take guided assessments to understand your skills, interests, and personality. Our intelligent system maps these to potential career paths.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Explore & Connect",
      description:
        "Browse the career library, read success stories, connect with professionals, and build a personalized roadmap for your future.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Plan & Achieve",
      description:
        "Set goals, track your progress, and make confident career decisions backed by assessments, mentorship, and real-world insights.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Your journey starts in{" "}
            <span className="gradient-text">4 simple steps</span>
          </h2>
          <p className="mt-4 text-lg text-gray">
            From sign-up to career clarity — Drushti guides you every step of
            the way.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-teal via-blue to-secondary lg:left-1/2 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="relative lg:flex lg:items-center lg:gap-12 lg:py-8">
                {/* Step number circle - center on desktop */}
                <div className="absolute left-4 top-0 z-10 hidden lg:left-1/2 lg:-translate-x-1/2 lg:block">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-bg text-white text-lg font-bold shadow-lg shadow-primary/25">
                    {step.step}
                  </div>
                </div>

                {/* Content card - alternating sides */}
                <div
                  className={`relative rounded-3xl border border-muted-light/60 bg-white p-8 shadow-sm transition-all hover:shadow-lg lg:w-[calc(50%-3rem)] ${
                    i % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <div className="mb-4 flex items-center gap-4 lg:hidden">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-white font-bold shadow-md">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/10 to-blue/10 text-primary lg:flex">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

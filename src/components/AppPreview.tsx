"use client";

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
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal/10 via-transparent to-blue/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-muted-light/40 bg-white/85 p-6 shadow-2xl backdrop-blur-sm md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <div className="max-w-md text-left">
                <p className="text-2xl font-medium leading-relaxed text-dark md:text-3xl">
                  One platform connecting students with parents, career
                  counselor, and professionals in industry.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <video
                  src="/videos/drushti-1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full max-w-[340px] rounded-2xl"
                  aria-label="Drushti app preview video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

export default function UserTypes() {
  const userTypes = [
    {
      role: "Students",
      tagline: "Discover your path",
      description:
        "Learn about your personality, skills, and interests. Access career assessments, explore career libraries, and connect with mentors who can guide you toward the right profession.",
      features: [
        "Skill & interest assessments",
        "Personalized career recommendations",
        "Connect with industry professionals",
        "Track your career goals",
      ],
      gradient: "from-teal to-blue",
      bgGradient: "from-teal/10 to-blue/10",
    },
    {
      role: "Parents",
      tagline: "Understand & support",
      description:
        "Stay connected with your child's career exploration journey. Understand industry trends, get insights into your child's interests, and feel confident about their future decisions.",
      features: [
        "Dashboard with child's progress",
        "Industry landscape insights",
        "Communication with counselors",
        "Career trend reports",
      ],
      gradient: "from-secondary to-secondary-light",
      bgGradient: "from-secondary/10 to-secondary-light/10",
    },
    {
      role: "Counselors",
      tagline: "Empower students at scale",
      description:
        "Manage and evaluate students efficiently, share resources, schedule activities, and provide professional guidance — all from one intuitive dashboard.",
      features: [
        "Student management dashboard",
        "Schedule & plan activities",
        "Share motivational content",
        "Track student progress",
      ],
      gradient: "from-blue to-primary",
      bgGradient: "from-blue/10 to-primary/10",
    },
    {
      role: "Advisors",
      tagline: "Share your expertise",
      description:
        "Industry professionals and mentors can contribute by sharing real-world experience, conducting sessions, and helping students understand what their future careers look like.",
      features: [
        "Host mentoring sessions",
        "Share career stories",
        "Guide students directly",
        "Build your mentor profile",
      ],
      gradient: "from-teal to-primary-light",
      bgGradient: "from-teal/10 to-primary-light/10",
    },
  ];

  return (
    <section id="users" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-muted-light/20 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Who It&apos;s For
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Built for <span className="gradient-text">everyone</span> in the
            career guidance ecosystem
          </h2>
          <p className="mt-4 text-lg text-gray">
            Whether you&apos;re a student exploring options or a parent seeking clarity,
            Drushti has something for you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {userTypes.map((type, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-muted-light/60 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1 md:p-10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${type.bgGradient} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="relative">
                <div
                  className={`mb-2 inline-flex rounded-full bg-gradient-to-r ${type.gradient} px-4 py-1 text-xs font-semibold text-white`}
                >
                  {type.role}
                </div>
                <h3 className="mt-3 text-2xl font-bold text-dark">
                  {type.tagline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  {type.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {type.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-dark">
                      <svg
                        className={`h-5 w-5 shrink-0 bg-gradient-to-r ${type.gradient} rounded-full p-1 text-white`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drushti — Career Guidance for Every Student",
  description:
    "Drushti connects students with career counselors, parents, and industry professionals. Discover your skills, plan your career, and make informed decisions. Join the waitlist today.",
  keywords: [
    "career guidance",
    "student career planning",
    "career counselor",
    "skill assessment",
    "career library",
    "Drushti",
  ],
  openGraph: {
    title: "Drushti — Career Guidance for Every Student",
    description:
      "One platform connecting students with parents, career counselors, and professionals in industry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

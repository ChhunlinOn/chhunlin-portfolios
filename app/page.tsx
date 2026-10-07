import Image from "next/image";
import { IconCloud } from "@/components/ui/icon-cloud";
import { ContactSection } from "./components/contacts";
import { AboutMeSection } from "./components/AboutMeSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { GithubSection } from "./components/GithubSection";
import { SectionHeading } from "./components/SectionHeading";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "figma",
  "coolify",
  "ruby",
  "notion",
  "mongodb",
  "vite",
  "tailwindcss",
  "jenkins",
  "contabo",
  "cloudflare",
  "namecheap"
]
export default function Home() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )
  return (
    <main id="top" className="min-h-screen px-4 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-20 sm:gap-24">

        {/* Hero */}
        <section className="flex flex-col items-center text-center gap-4 pt-4">
          <Image
            src="/mypic.jpg"
            alt="ON CHHUNLIN"
            width={176}
            height={176}
            priority
            className="rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 object-cover shadow-md ring-4 ring-primary/20"
          />
          <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold">
            ON CHHUNLIN
          </h1>
          <p className="text-base sm:text-lg text-base-content/70">Full Stack Developer</p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <a href="#experiences" className="btn btn-primary rounded-full">View my work</a>
            <a href="#contact" className="btn btn-outline btn-primary rounded-full">Contact me</a>
          </div>
        </section>

        <AboutMeSection />

        {/* Tech Stack */}
        <section>
          <SectionHeading title="Tech Stack" subtitle="Tools and technologies I work with" />
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
            <IconCloud images={images} />
          </div>
        </section>

        <ExperienceSection />

        <EducationSection />

        <GithubSection />

        <ContactSection />
      </div>
    </main>
  );
}

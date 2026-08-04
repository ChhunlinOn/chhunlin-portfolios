import Image from "next/image";
import { IconCloud } from "@/components/ui/icon-cloud";
import { ContactSection } from "./components/contacts";
import { AboutMeSection } from "./components/AboutMeSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { GithubSection } from "./components/GithubSection";

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
    <div id="top" className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      {/* Content Wrapper */}
      <div className="flex flex-col items-center text-center max-w-3xl gap-6 mx-auto">

        {/* Profile Image */}
        <Image
          src="/mypic.jpg"
          alt="ON CHHUNLIN"
          width={160}
          height={160}
          className="rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 object-cover shadow-md"
        />

        {/* Name */}
        <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold">
          ON CHHUNLIN
        </h1>

        <AboutMeSection />

        {/* Cloud Icon */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
          <IconCloud images={images} />
        </div>

        <ExperienceSection />

        <EducationSection />

        <GithubSection />

        {/* Contact Section */}
        <div id="contact" className="mt-5 scroll-mt-20">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

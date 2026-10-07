import Image from "next/image";
import { IconCloud } from "@/components/ui/icon-cloud";
import { ContactSection } from "./components/contacts";
import { AboutMeSection } from "./components/AboutMeSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { GithubSection } from "./components/GithubSection";
import { SectionHeading } from "./components/SectionHeading";
import { siteUrl, siteName, siteDescription } from "@/lib/site";

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
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/mypic.jpg`,
  jobTitle: "Full Stack Developer",
  description: siteDescription,
  email: "mailto:onchhunlin@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "KH" },
  alumniOf: { "@type": "EducationalOrganization", name: "PSE Institute" },
  knowsAbout: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Ruby on Rails", "Flutter", "PostgreSQL", "Docker"],
  sameAs: [
    "https://github.com/ChhunlinOn",
    "https://t.me/chhunlinon",
    "https://facebook.com/on.chhunlin",
  ],
}

export default function Home() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )
  return (
    <main id="top" className="min-h-screen px-4 py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
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

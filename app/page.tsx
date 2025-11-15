import Image from "next/image";
import { IconCloud } from "@/components/ui/icon-cloud";
import { ContactSection } from "./components/contacts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
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

        {/* About Me Section */}
        <div className="text-base-content/80 text-sm sm:text-base leading-relaxed px-2 sm:px-4 text-center">
          <h2 className="font-bold text-primary text-lg sm:text-xl mb-2">About Me</h2>

          <p>
            I am a <span className="font-bold text-primary">Full Stack Developer</span> with a strong passion for building modern, efficient, and user-friendly software. I enjoy working across the entire development process, from designing intuitive interfaces to developing reliable backend systems. I am always eager to learn new technologies and grow in an ever-evolving industry.
          </p>

          <br />

          <p>
            In my free time, I enjoy playing music, exploring new tools and frameworks, and watching movies to refresh creativity. I am motivated by the challenge of turning ideas into real applications that solve meaningful problems. My focus is on writing clean, maintainable code and continuously improving my problem-solving skills.
          </p>

          <br />

          <p>
            I’m always open to collaboration, new opportunities, and meaningful projects.
          </p>
        </div>

        {/* Cloud Icon */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
          <IconCloud images={images} />

        </div>

        {/* Projects Section */}
        <div>
          <h2 className="font-bold text-primary text-lg sm:text-xl mb-4">Experiences</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="card bg-base-100 w-full sm:w-96 shadow-sm">
              <figure>
                <Image src="/bmb.png" alt="BookMeBus" width={300} height={200} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">BookMeBus</h2>
                <p className="text-sm text-start">BookMeBus is a bus booking application that allows users to book bus tickets online. It provides a user-friendly interface for users to search for bus tickets, view available seats, and make payments. The application also includes a feature to track the status of the bus ticket and receive notifications when the ticket is confirmed.</p>
                <div className="card-actions justify-end">
                  <Link href="/pages/experiences/1" className="btn btn-primary">Read more</Link>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-full sm:w-96 shadow-sm">
              <figure>
                <Image src="/ksh.png" alt="KSH" width={300} height={200} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">KSH</h2>
                <p className="text-sm text-start">Kampuchea Sëla Handicap Organization is a Cambodian non-profit empowering adults with intellectual disabilities from disadvantaged families. They deliver vocational training, community living programs and social-enterprise opportunities to support autonomy, integration and recognition in Cambodian society.</p>
                <div className="card-actions justify-end">
                  <Link href="/pages/experiences/2" className="btn btn-primary">Read more</Link>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-full sm:w-96 shadow-sm">
              <figure>
                <Image src="/nhch.png" alt="NHCH" width={300} height={200} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">NHCH</h2>
                <p className="text-sm text-start">New Hope for Orphans provides Christ-centered care and education for children across Cambodia. As our programs expand, we cannot sustain them alone. We are grateful for our long-term partners whose financial support and shared knowledge strengthen our mission and help us continue serving and empowering children.</p>
                <div className="card-actions justify-end">
                  <Link href="/pages/experiences/3" className="btn btn-primary">Read more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="font-bold text-primary text-lg sm:text-xl mb-4">Educations</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="card bg-base-100 w-full sm:w-96 shadow-sm">
              <figure>
                <Image src="https://res.cloudinary.com/deszfzhei/image/upload/v1763193792/yupzzeioytvjkjy678ky.jpg" alt="PSE Institute" width={300} height={200} />
              </figure>
              <div className="card-body">
                <Link href="/pages/education/1">
                  <h2 className="card-title text-primary flex items-center">PSE Institute <ArrowRight size={16} /></h2>
                </Link>
                <p className="text-sm">2023-2025 Graduate</p>
              </div>
            </div>
            <div className="card bg-base-100 w-full sm:w-96 shadow-sm">
              <figure>
                <Image src="https://res.cloudinary.com/deszfzhei/image/upload/v1763194040/ka1wvk4wcnnjbluhxpf1.jpg" alt="Grade 9" width={300} height={200} />
              </figure>
              <div className="card-body">
                <Link href="/pages/education/2">
                  <h2 className="card-title text-primary flex items-center">Grade 9 <ArrowRight size={16} /></h2>
                </Link>
                <p className="text-sm">2022 Graduate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
       <div className="mt-5">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
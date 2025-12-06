import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Imagepreview from "@/components/ui/imagepreview"
const data = [
  {
    id: "1",
    title: "BookMeBus",
    description:
      "I worked as a Software Developer at BookMeBus where I enhanced existing features and implemented new ones across the platform. My responsibilities also included debugging, improving performance, and ensuring the booking system ran smoothly for users.",
    image: "/bmb.png",
    certificate: [
      "https://res.cloudinary.com/deszfzhei/image/upload/v1762598732/xrwfmbxoxpnokxdclmst.jpg"
    ],
    album: [
        "https://res.cloudinary.com/deszfzhei/image/upload/v1764743260/d553urb4ygdljfc2drxw.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599250/xsdazjmrrjv4zuwtgprc.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599127/zsiexjgfpqf1ey6gez3y.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599158/lxxptnwq9rbhexljaqi6.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599183/vtoam9odej8bywifa1bo.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599211/gycgilrwcul54uwebeno.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599231/ldszyhcmnbemwcypv4l5.jpg"
    ],
    tech_stack: ["Ruby", "Rails"]
  },
  {
    id: "2",
    title: "KSH",
    description:
      "I served as a Full Stack Developer building a management system for Kampuchea Sëla Handicap Organization. The platform supports the administration of individuals with disabilities, helping staff manage records, programs, and community support more efficiently.",
    image: "/ksh.png",
    certificate: [],
    album: [
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605209/rrlkt0bgjehjtennzvhb.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605238/umc81xu8xwqlqujnghsy.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605264/hiiq8owakn7winwvbcng.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605289/ean7yj58vhithnfbfulp.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605312/knxhwkfvrgwiwp0samnr.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605335/a4evve3udrjoiuqr37wj.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605359/duoc7rsqdfp5lpstc6gq.jpg",
    ],
    tech_stack: ["Next.js", "PostgreSQL", "TailwindCSS", "DaisyUI","Contabo", "Namecheap", "Cloudflare", "Coolify"]
  },
  {
    id: "3",
    title: "NHCH",
    description:
      "I worked as a Full Stack Developer on a freelance team of three to build the website for New Hope for Orphans. Our goal was to present their mission, provide transparency, and improve accessibility for supporters and partners across Cambodia.",
    image: "/nhch.png",
    certificate: [],
    album: [
      "https://res.cloudinary.com/deszfzhei/image/upload/v1765036406/pcai2rhgsmkbhindzjt8.jpg",
    ],
    tech_stack: ["Next.js", "TailwindCSS", "Namecheap", "Cloudflare", "Figma", "Contabo", "Coolify"]
  },
]

const techIconMap: Record<string, string> = {
  "Ruby": "ruby",
  "Rails": "rubyonrails",
  "Next.js": "nextdotjs",
  "PostgreSQL": "postgresql",
  "TailwindCSS": "tailwindcss",
  "DaisyUI": "daisyui",
  "Contabo": "contabo",
  "Namecheap": "namecheap",
  "Cloudflare": "cloudflare",
  "Coolify": "coolify",
  "Figma": "figma"
}

export default async function ExperienceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const experience = data.find((item) => item.id === id)

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Experience not found</h2>
          <Link href="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-2xl lg:max-w-4xl px-4 py-8 md:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </Link>

        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">{experience.title}</h1>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        <div className="mb-8 md:mb-12">
            <div className="overflow-hidden rounded-lg border border-border shadow-md w-30 h-30">
                <img
                src={experience.image || "/placeholder.svg"}
                alt={experience.title}
                className="w-full h-full object-cover"
                />
            </div>
        </div>

        <div className="mb-8 md:mb-12">
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">{experience.description}</p>
        </div>

        {experience.tech_stack && experience.tech_stack.length > 0 && (
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-4">
              {experience.tech_stack.map((tech) => (
                <div key={tech} className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2">
                  <Image 
                    src={`https://cdn.simpleicons.org/${techIconMap[tech] || 'code'}/${techIconMap[tech] || 'code'}`} 
                    alt={tech} 
                    width={20} 
                    height={20}
                    unoptimized
                  />
                  <span className="text-sm font-medium text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {experience.certificate && experience.certificate.length > 0 && (
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Certificates
            </h2>

            <Imagepreview
              certificates={experience.certificate}
              title={experience.title}
            />
          </div>
        )}
        {experience.album && experience.album.length > 0 && (
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Photos Gallery
            </h2>

            <Imagepreview
              certificates={experience.album}
              title={experience.title}
            />
          </div>
        )}
      </div>
    </main>
  )
}

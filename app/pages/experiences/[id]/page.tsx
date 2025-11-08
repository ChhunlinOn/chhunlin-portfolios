import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Lens } from "@/components/ui/lens"

const data = [
  {
    id: "1",
    title: "BookMeBus",
    description:
      "I worked as a Software Developer at BookMeBus where I enhanced existing features and implemented new ones across the platform. My responsibilities also included debugging, improving performance, and ensuring the booking system ran smoothly for users.",
    image: "/bmb.png",
    certificate: "https://res.cloudinary.com/deszfzhei/image/upload/v1762598732/xrwfmbxoxpnokxdclmst.jpg",
    album: [
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599127/zsiexjgfpqf1ey6gez3y.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599158/lxxptnwq9rbhexljaqi6.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599183/vtoam9odej8bywifa1bo.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599211/gycgilrwcul54uwebeno.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599231/ldszyhcmnbemwcypv4l5.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762599250/xsdazjmrrjv4zuwtgprc.jpg"
    ],
  },
  {
    id: "2",
    title: "KSH",
    description:
      "I served as a Full Stack Developer building a management system for Kampuchea Sëla Handicap Organization. The platform supports the administration of individuals with disabilities, helping staff manage records, programs, and community support more efficiently.",
    image: "/ksh.png",
    certificate: "",
    album: [
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605209/rrlkt0bgjehjtennzvhb.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605238/umc81xu8xwqlqujnghsy.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605264/hiiq8owakn7winwvbcng.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605289/ean7yj58vhithnfbfulp.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605312/knxhwkfvrgwiwp0samnr.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605335/a4evve3udrjoiuqr37wj.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1762605359/duoc7rsqdfp5lpstc6gq.jpg",
    ],
  },
  {
    id: "3",
    title: "NHCH",
    description:
      "I worked as a Full Stack Developer on a freelance team of three to build the website for New Hope for Orphans. Our goal was to present their mission, provide transparency, and improve accessibility for supporters and partners across Cambodia.",
    image: "/nhch.png",
    certificate: "",
    album: [],
  },
]

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

        {experience.certificate && (
            <div className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Certificate</h2>
                <Lens>
                <div className="border border-border rounded-lg overflow-hidden cursor-pointer">
                    <img
                    src={experience.certificate || "/placeholder.svg"}
                    alt={`${experience.title} Certificate`}
                    className="w-full h-auto"
                    />
                </div>
                </Lens>
            </div>
        )}
        {experience.album && experience.album.length > 0 && (
        <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Photo Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {experience.album.map((img, index) => (
                <Lens key={`${img}-${index}`}>
                <div className="overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <img
                    src={img || "/placeholder.svg"}
                    alt={`${experience.title} photo ${index + 1}`}
                    className="w-full h-48 object-cover"
                    />
                </div>
                </Lens>
            ))}
            </div>
        </div>
        )}
      </div>
    </main>
  )
}

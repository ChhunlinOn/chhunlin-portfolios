import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Lens } from "@/components/ui/lens"
import Image from "next/image"

const data = [
  {
    id: "1",
    title: "PSE Institute",
    description:
      "I attended PSE Institute from 2023 to 2025, focusing on software development and related technologies. This program equipped me with foundational skills in programming, problem-solving, and collaborative development practices essential for my career in tech.",
    image: "https://res.cloudinary.com/deszfzhei/image/upload/v1763193792/yupzzeioytvjkjy678ky.jpg",
    certificate: [],
    album: []
  },
  {
    id: "2",
    title: "Grade 9",
    description:
      "I completed Grade 9 in 2022, achieving strong academic performance in subjects like mathematics, science, and languages. This educational milestone built my analytical thinking and prepared me for higher education in technology fields.",
    image: "https://res.cloudinary.com/deszfzhei/image/upload/v1763194040/ka1wvk4wcnnjbluhxpf1.jpg",
    certificate: [
        "https://res.cloudinary.com/deszfzhei/image/upload/v1763195296/vkjbronwv6gespanyvd1.png"
    ],
    album: []
  },
]

export default async function EducationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const education = data.find((item) => item.id === id)

  if (!education) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Education not found</h2>
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">{education.title}</h1>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        <div className="mb-8 md:mb-12">
            <div className="overflow-hidden rounded-lg border border-border shadow-md w-30 h-30">
                <Image
                src={education.image || "/placeholder.svg"}
                alt={education.title}
                width={300}
                height={200}
                className="w-full h-full object-cover"
                />
            </div>
        </div>

        <div className="mb-8 md:mb-12">
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">{education.description}</p>
        </div>

        {education.certificate && education.certificate.length > 0 && (
        <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Certificates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {education.certificate.map((cert, index) => (
                <Lens key={`${cert}-${index}`}>
                <div className="overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <Image
                    src={cert || "/placeholder.svg"}
                    alt={`${education.title} Certificate ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                    />
                </div>
                </Lens>
            ))}
            </div>
        </div>
        )}
        {education.album && education.album.length > 0 && (
        <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Photo Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {education.album.map((img, index) => (
                <Lens key={`${img}-${index}`}>
                <div className="overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <Image
                    src={img || "/placeholder.svg"}
                    alt={`${education.title} photo ${index + 1}`}
                    width={300}
                    height={200}
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
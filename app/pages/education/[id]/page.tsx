import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Imagepreview from "@/components/ui/imagepreview"

const data = [
  {
    id: "1",
    title: "PSE Institute",
    description:
      "I attended PSE Institute from 2023 to 2025, focusing on software development and related technologies. This program equipped me with foundational skills in programming, problem-solving, and collaborative development practices essential for my career in tech.",
    image: "https://res.cloudinary.com/deszfzhei/image/upload/v1763193792/yupzzeioytvjkjy678ky.jpg",
    certificate: [
        "https://res.cloudinary.com/deszfzhei/image/upload/v1765037194/oufeq4pjfmppu3skhaas.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1763214740/tzyijxyjefvtgogpdgjd.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1765036049/mcbgijkzgfrhijptmzeq.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1765036088/ukouysp5vtqdby3iybkg.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1765036119/i7tsuukikjfaxykwig4f.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1765036142/hb2f1rvsdp6yeqly12mk.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1765036171/m0te1de4grwvmwdl1drb.jpg"
    ],
    album: [
      "https://res.cloudinary.com/deszfzhei/image/upload/v1765036191/nzsbs0zacwojlmc31rxl.jpg",
    ]
  },
  {
    id: "2",
    title: "Grade 9",
    description:
      "I completed Grade 9 in 2022, achieving strong academic performance in subjects like mathematics, science, and languages. This educational milestone built my analytical thinking and prepared me for higher education in technology fields.",
    image: "https://res.cloudinary.com/deszfzhei/image/upload/v1763194040/ka1wvk4wcnnjbluhxpf1.jpg",
    certificate: [
        "https://res.cloudinary.com/deszfzhei/image/upload/v1763195296/vkjbronwv6gespanyvd1.png",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1765036329/oouywfsxg9yhmgim3cgg.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1765036226/n2xbl5msoevqcabn7dou.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1765036259/ppvky0u360fenc3vvtbs.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1765036280/clozze6kx3g2uyqu79hv.jpg",
        "https://res.cloudinary.com/deszfzhei/image/upload/v1765036304/tockiz9v36vmowpwytt0.jpg"
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
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Certificates
            </h2>

            <Imagepreview
              certificates={education.certificate}
              title={education.title}
            />
          </div>
        )}
        {education.album && education.album.length > 0 && (
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Photos Gallery
            </h2>

            <Imagepreview
              certificates={education.album}
              title={education.title}
            />
          </div>
        )}
      </div>
    </main>
  )
}
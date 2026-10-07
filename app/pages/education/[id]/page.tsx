import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Imagepreview from "@/components/ui/imagepreview"

import type { Metadata } from "next"
import { educations as data } from "@/lib/educations"

export function generateStaticParams() {
  return data.map((item) => ({ id: item.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const item = data.find((d) => d.id === id)
  if (!item) return {}
  return {
    title: `${item.title} Education`,
    description: item.description,
    alternates: { canonical: `/pages/education/${item.id}` },
    openGraph: { title: `${item.title} | ON CHHUNLIN`, description: item.description, url: `/pages/education/${item.id}` },
  }
}

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
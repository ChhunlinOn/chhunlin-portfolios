import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"
import { experiences } from "@/lib/experiences"
import { educations } from "@/lib/educations"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    ...experiences.map((exp) => ({
      url: `${siteUrl}/pages/experiences/${exp.id}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    ...educations.map((edu) => ({
      url: `${siteUrl}/pages/education/${edu.id}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]
}

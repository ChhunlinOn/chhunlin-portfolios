"use client"

import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"
import Image from "next/image"

export default function Imagepreview({
  certificates,
  title,
}: {
  certificates: string[]
  title: string
}) {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <PhotoView key={`${cert}-${index}`} src={cert}>
            <div className="overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img
                src={cert || "/placeholder.svg"}
                alt={`${title} photo ${index + 1}`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  )
}


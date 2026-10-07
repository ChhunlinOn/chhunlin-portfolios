import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const educations = [
  {
    id: 1,
    name: "PSE Institute",
    period: "2023-2025 Graduate",
    image: "https://res.cloudinary.com/deszfzhei/image/upload/v1763216236/bz9skyv3lg9uyz3kwyns.png",
  },
  {
    id: 2,
    name: "Grade 9",
    period: "2022 Graduate",
    image: "https://res.cloudinary.com/deszfzhei/image/upload/v1763215007/avrx47mzfrmuvkwcuw4b.png",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20">
      <SectionHeading title="Education" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {educations.map((edu) => (
          <Link
            key={edu.id}
            href={`/pages/education/${edu.id}`}
            className="card bg-base-100 shadow-sm border border-base-content/10 transition hover:shadow-lg hover:-translate-y-1 group"
          >
            <figure className="h-48 bg-base-200 p-4">
              <Image src={edu.image} alt={edu.name} width={300} height={200} className="h-full w-full object-contain" />
            </figure>
            <div className="card-body text-start">
              <h3 className="card-title text-primary">
                {edu.name}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </h3>
              <p className="text-sm text-base-content/70">{edu.period}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

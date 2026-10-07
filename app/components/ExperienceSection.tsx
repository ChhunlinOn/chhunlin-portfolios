import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";

const experiences = [
  {
    id: 1,
    name: "BookMeBus",
    image: "/bmb.png",
    description: "BookMeBus is a bus booking application that allows users to book bus tickets online. It provides a user-friendly interface for users to search for bus tickets, view available seats, and make payments. The application also includes a feature to track the status of the bus ticket and receive notifications when the ticket is confirmed.",
  },
  {
    id: 2,
    name: "KSH",
    image: "/ksh.png",
    description: "Kampuchea Sëla Handicap Organization is a Cambodian non-profit empowering adults with intellectual disabilities from disadvantaged families. They deliver vocational training, community living programs and social-enterprise opportunities to support autonomy, integration and recognition in Cambodian society.",
  },
  {
    id: 3,
    name: "NHCH",
    image: "/nhch.png",
    description: "New Hope for Orphans provides Christ-centered care and education for children across Cambodia. As our programs expand, we cannot sustain them alone. We are grateful for our long-term partners whose financial support and shared knowledge strengthen our mission and help us continue serving and empowering children.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experiences" className="scroll-mt-20">
      <SectionHeading title="Experiences" subtitle="Projects and organizations I've worked with" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="card bg-base-100 shadow-sm border border-base-content/10 transition hover:shadow-lg hover:-translate-y-1">
            <figure className="h-48 bg-base-200 p-4">
              <Image src={exp.image} alt={exp.name} width={300} height={200} className="h-full w-full object-contain" />
            </figure>
            <div className="card-body text-start">
              <h3 className="card-title text-primary">{exp.name}</h3>
              <p className="text-sm text-base-content/70 line-clamp-5">{exp.description}</p>
              <div className="card-actions justify-end mt-2">
                <Link href={`/pages/experiences/${exp.id}`} className="btn btn-primary btn-sm">Read more</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

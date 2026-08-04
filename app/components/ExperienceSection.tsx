import Image from "next/image";
import Link from "next/link";

export function ExperienceSection() {
  return (
    <div id="experiences" className="scroll-mt-20">
      <h2 className="font-bold text-primary text-lg sm:text-xl mb-4">Experiences</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="card bg-base-100 w-full sm:w-96 shadow-sm">
          <figure>
            <Image src="/bmb.png" alt="BookMeBus" width={300} height={200} className="w-full h-auto" />
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
            <Image src="/ksh.png" alt="KSH" width={300} height={200} className="w-full h-auto" />
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
            <Image src="/nhch.png" alt="NHCH" width={300} height={200} className="w-full h-auto" />
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
  );
}

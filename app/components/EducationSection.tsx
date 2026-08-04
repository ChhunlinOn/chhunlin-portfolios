import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EducationSection() {
  return (
    <div id="education" className="scroll-mt-20">
      <h2 className="font-bold text-primary text-lg sm:text-xl mb-4">Educations</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex flex-col justify-between card bg-base-100 w-full sm:w-96 shadow-sm min-h-[400px]">
          <figure>
            <Image src="https://res.cloudinary.com/deszfzhei/image/upload/v1763216236/bz9skyv3lg9uyz3kwyns.png" alt="PSE Institute" width={300} height={200} className="w-full h-auto" />
          </figure>
          <div className="card-body mt-22">
            <Link href="/pages/education/1">
              <h2 className="card-title text-primary flex items-center">PSE Institute <ArrowRight size={16} /></h2>
            </Link>
            <p className="text-sm">2023-2025 Graduate</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full sm:w-96 shadow-sm min-h-[400px]">
          <figure>
            <Image src="https://res.cloudinary.com/deszfzhei/image/upload/v1763215007/avrx47mzfrmuvkwcuw4b.png" alt="Grade 9" width={300} height={200} className="w-full h-auto" />
          </figure>
          <div className="card-body">
            <Link href="/pages/education/2">
              <h2 className="card-title text-primary flex items-center">Grade 9 <ArrowRight size={16} /></h2>
            </Link>
            <p className="text-sm">2022 Graduate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { SectionHeading } from "./SectionHeading";

export function AboutMeSection() {
  return (
    <section id="about" className="scroll-mt-20">
      <SectionHeading title="About Me" />
      <div className="max-w-2xl mx-auto space-y-4 text-base-content/80 text-sm sm:text-base leading-relaxed text-center">
        <p>
          I am a <span className="font-bold text-primary">Full Stack Developer</span> with a strong passion for building modern, efficient, and user-friendly software. I enjoy working across the entire development process, from designing intuitive interfaces to developing reliable backend systems. I am always eager to learn new technologies and grow in an ever-evolving industry.
        </p>
        <p>
          In my free time, I enjoy playing music, exploring new tools and frameworks, and watching movies to refresh creativity. I am motivated by the challenge of turning ideas into real applications that solve meaningful problems. My focus is on writing clean, maintainable code and continuously improving my problem-solving skills.
        </p>
        <p>
          I’m always open to collaboration, new opportunities, and meaningful projects.
        </p>
      </div>
    </section>
  );
}

import { SectionHeading } from "./SectionHeading";

export function GithubSection() {
  return (
    <section>
      <SectionHeading title="GitHub Contributions" />
      <a
        href="https://github.com/ChhunlinOn"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-box bg-base-100 border border-base-content/10 shadow-sm p-4 sm:p-6 overflow-x-auto"
      >
        <img src="https://ghchart.rshah.org/ChhunlinOn" alt="GitHub Contributions" className="w-full min-w-150" />
      </a>
    </section>
  );
}

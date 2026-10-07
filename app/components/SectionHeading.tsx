export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="font-bold text-primary text-2xl sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm sm:text-base text-base-content/60">{subtitle}</p>}
      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
    </div>
  );
}

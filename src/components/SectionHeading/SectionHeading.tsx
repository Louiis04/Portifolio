import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  description?: string
  align?: "left" | "center"
}

export default function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center"

  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center")}>
      <div className="flex items-center gap-3 font-mono text-xs">
        {centered && <span className="h-px w-10 bg-linear-to-l from-emerald-400/60 to-transparent" />}
        <span className="text-emerald-400">{index}</span>
        <span className="uppercase tracking-[0.25em] text-zinc-400">{label}</span>
        <span className="h-px w-10 bg-linear-to-r from-emerald-400/60 to-transparent" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-5xl">{title}</h2>
      {description && (
        <p className={cn("max-w-xl text-base leading-relaxed text-zinc-400", centered && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  )
}

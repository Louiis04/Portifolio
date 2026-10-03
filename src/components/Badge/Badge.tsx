import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "accent"
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-md px-2 py-0.5 font-mono text-[11px] font-medium transition-colors",
          variant === "default" && "bg-zinc-800 text-zinc-300 border border-zinc-700",
          variant === "secondary" && "bg-white/[0.04] text-zinc-400 border border-white/10",
          variant === "outline" && "border border-zinc-700 text-zinc-400",
          variant === "accent" && "bg-emerald-400/10 text-emerald-300 border border-emerald-400/20",
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }

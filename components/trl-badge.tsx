import { cn } from "@/lib/utils"

interface TRLBadgeProps {
  level: number
  className?: string
}

export function TRLBadge({ level, className }: TRLBadgeProps) {
  const getColor = (lvl: number) => {
    if (lvl <= 3) return "bg-amber-500/20 text-amber-400 border-amber-500/30"
    if (lvl <= 6) return "bg-primary/20 text-primary border-primary/30"
    return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
  }

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium",
      getColor(level),
      className
    )}>
      <span>TRL {level}</span>
      <div className="flex gap-0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-1.5 h-3 rounded-sm",
              i < level ? "bg-current" : "bg-current/20"
            )}
          />
        ))}
      </div>
    </div>
  )
}

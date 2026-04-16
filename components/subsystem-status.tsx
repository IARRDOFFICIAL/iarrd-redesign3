import { Check, Circle, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface SubsystemStatusProps {
  systems: {
    name: string
    status: "complete" | "in-progress" | "pending"
  }[]
}

export function SubsystemStatus({ systems }: SubsystemStatusProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <Check className="w-4 h-4 text-emerald-400" />
      case "in-progress":
        return <Clock className="w-4 h-4 text-primary" />
      default:
        return <Circle className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "bg-emerald-500/20 border-emerald-500/30"
      case "in-progress":
        return "bg-primary/20 border-primary/30"
      default:
        return "bg-muted border-border"
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {systems.map((system) => (
        <div
          key={system.name}
          className={cn(
            "p-4 rounded-lg border flex items-center gap-3",
            getStatusColor(system.status)
          )}
        >
          {getStatusIcon(system.status)}
          <span className="text-sm font-medium">{system.name}</span>
        </div>
      ))}
    </div>
  )
}

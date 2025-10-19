import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <div className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg">
      <Icon size={40} className="text-primary mb-4" />
      <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
      <p className="text-foreground/70 mb-6">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
            <span className="text-primary font-bold mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

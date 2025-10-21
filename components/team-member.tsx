import Image from "next/image"

interface TeamMemberData {
  name: string
  role: string
  bio: string
  image: string
}

interface TeamMemberProps {
  member: TeamMemberData
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="relative w-[280px] h-[280px] rounded-2xl overflow-hidden border border-border bg-muted">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
      <p className="text-primary font-medium mb-3">{member.role}</p>
      <p className="text-foreground/70 text-sm">{member.bio}</p>
    </div>
  )
}

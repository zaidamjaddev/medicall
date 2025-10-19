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
      <div className="mb-4 rounded-xl overflow-hidden h-64 bg-muted border border-border">
<div className="relative w-full h-64 rounded-2xl overflow-hidden">
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

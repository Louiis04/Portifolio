import { Github, Linkedin, Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const EMAIL = "luisemoliveira1000@email.com"

export interface Social {
  label: string
  value: string
  href: string
  Icon: LucideIcon
  external: boolean
}

export const socials: Social[] = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail, external: false },
  { label: "GitHub", value: "Louiis04", href: "https://github.com/Louiis04", Icon: Github, external: true },
  {
    label: "LinkedIn",
    value: "Luís Eduardo",
    href: "https://www.linkedin.com/in/lu%C3%ADs-eduardo-magalh%C3%A3es-oliveira-1ba715274/",
    Icon: Linkedin,
    external: true,
  },
]

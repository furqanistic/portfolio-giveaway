import {
  Briefcase01Icon,
  Folder01Icon,
  Layers01Icon,
  Mail01Icon,
  StarIcon,
  UserCircleIcon,
} from "hugeicons-react"
import type { ComponentType } from "react"

export type NavItem = {
  title: string
  url: string
  short: string
  icon: ComponentType<{ className?: string }>
}

export const navItems: NavItem[] = [
  { title: "Intro", short: "Intro", url: "#intro", icon: UserCircleIcon },
  { title: "Work", short: "Work", url: "#work", icon: Folder01Icon },
  { title: "Capabilities", short: "Skills", url: "#capabilities", icon: Layers01Icon },
  { title: "Experience", short: "Exp", url: "#experience", icon: Briefcase01Icon },
  { title: "Contact", short: "Contact", url: "#contact", icon: Mail01Icon },
  { title: "Process", short: "Process", url: "#process", icon: StarIcon },
]

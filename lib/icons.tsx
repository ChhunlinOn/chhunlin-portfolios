"use client"

import type React from "react"

import { Github, Mail, Phone, Send, Facebook } from "lucide-react"

export type IconProps = React.SVGProps<SVGSVGElement>

export const Icons = {
  gitHub: (props: IconProps) => <Github {...props} />,
  gmail: (props: IconProps) => <Mail {...props} />,
  telegram: (props: IconProps) => <Send {...props} />,
  phone: (props: IconProps) => <Phone {...props} />,
  facebook: (props: IconProps) => <Facebook {...props} />,
}

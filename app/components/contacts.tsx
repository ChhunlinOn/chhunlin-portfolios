"use client"

import type React from "react"

import { Icons } from "@/lib/icons"
import { SectionHeading } from "./SectionHeading"

interface ContactLink {
  icon: React.ReactNode
  label: string
  url: string
  color: string
}

export function ContactSection() {
  const contactLinks: ContactLink[] = [
    {
      icon: <Icons.gitHub className="size-5" />,
      label: "GitHub",
      url: "https://github.com/ChhunlinOn",
      color: "hover:bg-primary",
    },
    {
      icon: <Icons.gmail className="size-5" />,
      label: "Gmail",
      url: "mailto:onchhunlin@gmail.com",
      color: "hover:bg-primary",
    },
    {
      icon: <Icons.telegram className="size-5" />,
      label: "Telegram",
      url: "https://t.me/chhunlinon",
      color: "hover:bg-primary",
    },
    {
      icon: <Icons.phone className="size-5" />,
      label: "Phone",
      url: "tel:+855979033023",
      color: "hover:bg-primary",
    },
    {
      icon: <Icons.facebook className="size-5" />,
      label: "Facebook",
      url: "https://facebook.com/on.chhunlin",
      color: "hover:bg-primary",
    },
  ]

  return (
    <section id="contact" className="scroll-mt-20">
      <SectionHeading title="Contact Me" subtitle="I'm always open to new opportunities" />
      <div className="w-full max-w-3xl mx-auto rounded-box bg-base-100 border border-base-content/10 p-6 shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={link.label === "Phone" ? (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(link.url.slice(4));
                alert("Phone number copied to clipboard!");
              } : undefined}
              className={`flex flex-col items-center justify-center gap-2 rounded-box px-4 py-4 bg-base-200 transition-colors duration-200 ${link.color} hover:text-primary-content group`}
              aria-label={link.label}
            >
              {link.icon}
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>

        <p className="text-xs text-base-content/60 text-center mt-6">Click any link to get in touch</p>
      </div>
    </section>
  )
}

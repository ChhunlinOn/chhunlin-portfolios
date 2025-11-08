"use client"

import type React from "react"

import { Icons } from "@/lib/icons"

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
      color: "hover:bg-slate-100 dark:hover:bg-slate-800",
    },
    {
      icon: <Icons.gmail className="size-5" />,
      label: "Gmail",
      url: "mailto:onchhunlin@gmail.com",
      color: "hover:bg-red-50 dark:hover:bg-red-950",
    },
    {
      icon: <Icons.telegram className="size-5" />,
      label: "Telegram",
      url: "https://t.me/chhunlinon",
      color: "hover:bg-blue-50 dark:hover:bg-blue-950",
    },
    {
      icon: <Icons.phone className="size-5" />,
      label: "Phone",
      url: "tel:+855979033023",
      color: "hover:bg-purple-50 dark:hover:bg-purple-950",
    },
    {
      icon: <Icons.facebook className="size-5" />,
      label: "Facebook",
      url: "https://facebook.com/on.chhunlin",
      color: "hover:bg-sky-50 dark:hover:bg-sky-900",
    },
  ]

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="rounded-lg bg-card p-6 shadow-sm">
        <h2 className="font-bold text-lg sm:text-xl mb-6 text-center text-foreground text-primary">Contact Me</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center">
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
              className={`flex items-center gap-3 rounded-md px-4 py-3 transition-colors duration-200 ${link.color} border border-transparent hover:border-border group`}
              aria-label={link.label}
            >
              <div className="flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                {link.icon}
              </div>
              <span className="text-sm font-medium text-foreground flex-1">{link.label}</span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-muted-foreground">→</span>
              </div>
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">Click any link to get in touch</p>
      </div>
    </div>
  )
}

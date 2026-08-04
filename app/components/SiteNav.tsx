"use client"

import type React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
  { href: "/#about", label: "About Me" },
  { href: "/#experiences", label: "Experiences" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
]

export default function SiteNav({ children }: { children: React.ReactNode }) {
  const closeDrawer = () => {
    const drawer = document.getElementById("mobile-drawer") as HTMLInputElement | null
    if (drawer) drawer.checked = false
  }

  return (
    <div className="drawer drawer-end">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col min-h-screen">
        <div className="navbar bg-base-100/80 backdrop-blur sticky top-0 z-40 shadow-sm px-4">
          <div className="navbar-start gap-1">
            <Link href="/" className="btn btn-ghost text-lg font-bold text-primary px-2">
              ON CHHUNLIN
            </Link>
          </div>

          <div className="navbar-end gap-2">
            <ul className="menu menu-horizontal hidden lg:flex gap-1 px-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <label
              htmlFor="mobile-drawer"
              className="btn btn-ghost btn-circle lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </label>
          </div>
        </div>

        {children}
      </div>

      <div className="drawer-side z-50">
        <label
          htmlFor="mobile-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4 gap-1">
          <li className="mb-2 px-2 text-lg font-bold text-primary">Menu</li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeDrawer}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

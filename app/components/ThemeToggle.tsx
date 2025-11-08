'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const themes = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
  'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
  'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
  'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
  'night', 'coffee', 'winter', 'dim', 'nord', 'sunset'
]

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState('light')

  // Load theme from cookie/localStorage
  useEffect(() => {
    const cookieTheme = document.cookie
      .split('; ')
      .find((r) => r.startsWith('theme='))?.split('=')[1]
    const savedTheme = cookieTheme || localStorage.getItem('theme') || 'light'
    setCurrentTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const changeTheme = (theme: string) => {
    setCurrentTheme(theme)
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    document.cookie = `theme=${theme}; path=/; max-age=31536000; samesite=lax` 
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="dropdown dropdown-hover dropdown-end">
      {/* Dropdown Button */}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-primary h-11 text-xs sm:text-base rounded-full flex items-center gap-2"
      >
        <span className="text-xs capitalize">{currentTheme}</span>
        <ChevronDown size={14} className="opacity-70" />
      </div>

      {/* Dropdown Content */}
      <div
        tabIndex={0}
        className="p-2 overflow-hidden shadow-2xl w-52 z-10 dropdown-content h-80 bg-base-100 rounded-box outline outline-1 outline-base-content/10"
      >
        <ul className="h-full overflow-y-auto flex flex-col gap-2 p-1">
          {themes.map((theme) => (
            <li key={theme}>
              <button
                onClick={() => changeTheme(theme)}
                className={`btn btn-sm btn-block rounded-full justify-start capitalize transition-all duration-150 ${
                  currentTheme === theme
                    ? 'btn-primary text-primary-content'
                    : 'btn-ghost'
                }`}
              >
                {currentTheme === theme && (
                  <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                )}
                {theme}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

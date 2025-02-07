"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Dumbbell } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const isAuth = pathname === "/auth"

  if (isAuth) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex items-center h-16">
        <Link href="/" className="flex items-center space-x-2">
          <Dumbbell className="w-6 h-6" />
          <span className="font-bold">FitTrack</span>
        </Link>
        <div className="flex-1" />
        <div className="flex items-center space-x-4">
          <Link href="/auth">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}